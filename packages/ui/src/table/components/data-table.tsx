"use client";

import {
  closestCenter,
  DndContext,
  type DragEndEvent,
  KeyboardSensor,
  PointerSensor,
  useSensor,
  useSensors,
} from "@dnd-kit/core";
import { restrictToVerticalAxis } from "@dnd-kit/modifiers";
import {
  arrayMove,
  SortableContext,
  sortableKeyboardCoordinates,
  useSortable,
  verticalListSortingStrategy,
} from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";
import {
  type ColumnDef,
  flexRender,
  type Row,
  type Table as TanstackTable,
} from "@tanstack/react-table";
import {
  type CSSProperties,
  forwardRef,
  Fragment,
  type ReactElement,
  type ReactNode,
  type Ref,
  type RefAttributes,
  useEffect,
  useImperativeHandle,
  useMemo,
  useRef,
} from "react";
import { cn } from "../../../lib";
import { Skeleton } from "../../skeleton";
import { useDataTable, useScrollShadow } from "../hooks/use-data-table";
import type { DataTablePropsType, DataTableVirtualOptions } from "../type";
import {
  computeCellSpans,
  getColumnPinningClassName,
  getCommonPinningStyles,
  panelIdFor,
} from "../utils";
import {
  Table,
  TableBody,
  TableCell,
  TableHeader,
  TableRow,
} from "./base-table";
import { DataTableColumnHeader } from "./data-table-column-header";
import { DataTablePagination } from "./data-table-pagination";
import { DataTableVirtualBody } from "./data-table-virtual-body";
import { RowDragHandle, RowDragHandleContext } from "./row-drag-handle";

const ROW_DND_HANDLE_COLUMN_ID = "__row_dnd_handle__";
const DEFAULT_SKELETON_ROWS = 8;

/** ReactNode 但语义上等同于"不渲染"的值(null / undefined / boolean) */
function isRenderablePanel(value: unknown): value is ReactNode {
  return value !== null && value !== undefined && typeof value !== "boolean";
}

/**
 * 渲染一行 cells —— 处理列合并 / 跨列 / 固定列样式
 *
 * 抽成共享函数,sortable 与非 sortable 两条路径都用同一份单元格生成逻辑
 */
function renderRowCells<TData>(
  row: Row<TData>,
  rowIndex: number,
  cellSpans: ReturnType<typeof computeCellSpans>,
  scrollShadow: ReturnType<typeof useScrollShadow>,
) {
  return row.getVisibleCells().map((cell) => {
    const span = cellSpans.get(rowIndex)?.get(cell.column.id);
    const rowSpan = span?.rowSpan ?? 1;
    const colSpan = span?.colSpan ?? 1;
    if (rowSpan === 0 || colSpan === 0) return null;
    return (
      <TableCell
        key={cell.id}
        rowSpan={rowSpan > 1 ? rowSpan : undefined}
        colSpan={colSpan > 1 ? colSpan : undefined}
        style={getCommonPinningStyles(cell.column)}
        className={getColumnPinningClassName(cell.column, scrollShadow)}
      >
        {flexRender(cell.column.columnDef.cell, cell.getContext())}
      </TableCell>
    );
  });
}

/** 渲染展开面板 row —— 跨满全列的单格 TableRow */
function renderExpandedPanel({
  rowId,
  panel,
  visibleColumnCount,
  isSelected,
  style,
  isDragging,
}: {
  rowId: string;
  panel: ReactNode;
  visibleColumnCount: number;
  isSelected: boolean;
  style?: CSSProperties;
  isDragging?: boolean;
}) {
  return (
    <TableRow
      id={panelIdFor(rowId)}
      data-slot="data-table-expanded-row"
      data-state={isSelected ? "selected" : undefined}
      style={style}
      className={cn("bg-muted/30 hover:bg-muted/30", isDragging && "shadow-md")}
    >
      <TableCell colSpan={visibleColumnCount} className="p-4">
        {panel}
      </TableCell>
    </TableRow>
  );
}

function buildRowDndColumn<TData>(): ColumnDef<TData> {
  return {
    id: ROW_DND_HANDLE_COLUMN_ID,
    size: 36,
    enableSorting: false,
    enableHiding: false,
    enableResizing: false,
    enableColumnFilter: false,
    enablePinning: false,
    header: "",
    cell: () => <RowDragHandle />,
  };
}

/** 单行 sortable 包装,把 dnd-kit 属性透传到 TableRow + Context */
function SortableTableRow<TData>({
  row,
  rowIndex,
  cellSpans,
  scrollShadow,
  onRowClick,
  expandedPanel,
  visibleColumnCount,
}: {
  row: Row<TData>;
  rowIndex: number;
  cellSpans: ReturnType<typeof computeCellSpans>;
  scrollShadow: ReturnType<typeof useScrollShadow>;
  onRowClick?: (row: TData) => void;
  expandedPanel?: ReactNode;
  visibleColumnCount: number;
}) {
  const {
    attributes,
    listeners,
    setNodeRef,
    setActivatorNodeRef,
    transform,
    transition,
    isDragging,
  } = useSortable({ id: row.id });

  const style: CSSProperties = {
    transform: CSS.Transform.toString(transform),
    transition,
    position: isDragging ? "relative" : undefined,
    zIndex: isDragging ? 1 : undefined,
  };
  const isSelected = row.getIsSelected();
  const showPanel = expandedPanel !== undefined;

  return (
    <RowDragHandleContext.Provider
      value={{ attributes, listeners, setActivatorNodeRef, isDragging }}
    >
      <TableRow
        ref={setNodeRef}
        style={style}
        data-state={isSelected ? "selected" : undefined}
        className={cn(
          isDragging && "bg-muted/70 shadow-md",
          onRowClick && "cursor-pointer",
        )}
        onClick={onRowClick ? () => onRowClick(row.original) : undefined}
      >
        {renderRowCells(row, rowIndex, cellSpans, scrollShadow)}
      </TableRow>
      {showPanel
        ? renderExpandedPanel({
            rowId: row.id,
            panel: expandedPanel,
            visibleColumnCount,
            isSelected,
            style,
            isDragging,
          })
        : null}
    </RowDragHandleContext.Provider>
  );
}

/**
 * DataTable 暴露给 ref 的命令式 handle —— 就是底层 TanStack table 实例
 *
 * 通过 `ref` 即可拿到完整的 TanStack `table` API:`setPageIndex`、`getSelectedRowModel`、
 * `resetSorting`、`getState` 等。配合受控状态使用更顺手
 */
export type DataTableHandle<TData> = TanstackTable<TData>;

/**
 * 全功能数据表格
 *
 * 在 `Table` 基础组件之上,基于 `@tanstack/react-table`
 * 提供排序、筛选、分页、行选择、列显隐 / 拖拽 / 固定 / 调宽、行虚拟滚动、行拖拽排序等能力
 *
 * 可通过 `ref` 拿到底层 TanStack `table` 实例 ([[DataTableHandle]]) 进行命令式操作
 */
function DataTableInner<TData, TValue = unknown>(
  {
    columns,
    data,
    loading,
    state,
    initialState,
    onStateChange,
    features,
    renderToolbar,
    renderPagination,
    empty = "暂无数据",
    pageSizeOptions,
    className,
    tableClassName,
    onRowClick,
    onRowOrderChange,
    rowDndHandle = "auto",
    tableOptions,
    virtual = false,
    bordered = false,
    expandedRowRender,
  }: DataTablePropsType<TData, TValue>,
  ref: Ref<DataTableHandle<TData>>,
) {
  const virtualEnabled = Boolean(virtual);
  const virtualOptions: DataTableVirtualOptions | undefined =
    virtual && typeof virtual === "object" ? virtual : undefined;

  const rowDndEnabled = !virtualEnabled && Boolean(features?.rowDnd);
  const autoHandle = rowDndEnabled && rowDndHandle === "auto";
  const expandedRowRenderEffective = virtualEnabled
    ? undefined
    : expandedRowRender;

  const virtualConflicts =
    virtualEnabled &&
    Boolean(features?.rowDnd || features?.expanding || expandedRowRender);
  const rowDndMissingGetRowId = rowDndEnabled && !tableOptions?.getRowId;
  useEffect(() => {
    if (virtualConflicts) {
      console.warn(
        "[DataTable] virtual 模式与 rowDnd / expanding / expandedRowRender 不兼容,已自动忽略相关功能",
      );
    }
    if (rowDndMissingGetRowId) {
      console.warn(
        "[DataTable] 启用 features.rowDnd 时,请通过 tableOptions.getRowId 提供稳定的行 id,否则拖拽顺序会错乱",
      );
    }
  }, [virtualConflicts, rowDndMissingGetRowId]);

  const effectiveFeatures = virtualEnabled
    ? { ...features, pagination: false, rowDnd: false, expanding: false }
    : features;

  // 仅当 rowDnd 启用 且 手柄模式为 auto 时,自动在最左侧追加一列拖拽手柄
  const effectiveColumns = useMemo(
    () =>
      autoHandle && !columns.some((c) => c.id === ROW_DND_HANDLE_COLUMN_ID)
        ? [buildRowDndColumn<TData>(), ...columns]
        : columns,
    [columns, autoHandle],
  );

  // 传了 expandedRowRender 但用户没自定义 getRowCanExpand 时,默认所有行都可展开
  const effectiveTableOptions = useMemo(() => {
    if (!expandedRowRenderEffective) return tableOptions;
    if (tableOptions?.getRowCanExpand) return tableOptions;
    return { ...tableOptions, getRowCanExpand: () => true };
  }, [tableOptions, expandedRowRenderEffective]);

  const { table, features: mergedFeatures } = useDataTable<TData, TValue>({
    data,
    columns: effectiveColumns,
    features: effectiveFeatures,
    state,
    initialState,
    onStateChange,
    tableOptions: effectiveTableOptions,
  });

  // 把 TanStack table 实例直接作为命令式 handle 暴露给外部 ref
  useImperativeHandle(ref, () => table, [table]);

  const wrapperRef = useRef<HTMLDivElement>(null);
  const scrollShadow = useScrollShadow(wrapperRef);

  const visibleLeafColumns = table.getVisibleLeafColumns();
  const visibleColumnCount = visibleLeafColumns.length;
  const rows = table.getRowModel().rows;
  // 显式重算:TanStack 每次 getRowModel/getVisibleLeafColumns 都返回新引用,
  // useMemo 的依赖永远变;改让 React Compiler 自行决定是否缓存
  const cellSpans = computeCellSpans(rows, visibleLeafColumns);

  // 行拖拽 sortable id 列表(行 id 由 tableOptions.getRowId 决定,缺省时为索引)
  const rowIds = rows.map((row) => row.id);
  const sensors = useSensors(
    useSensor(PointerSensor, { activationConstraint: { distance: 5 } }),
    useSensor(KeyboardSensor, {
      coordinateGetter: sortableKeyboardCoordinates,
    }),
  );

  const handleDragEnd = (event: DragEndEvent) => {
    const { active, over } = event;
    if (!over || active.id === over.id) return;
    const oldIndex = rows.findIndex((row) => row.id === String(active.id));
    const newIndex = rows.findIndex((row) => row.id === String(over.id));
    if (oldIndex === -1 || newIndex === -1) return;
    const nextData = arrayMove(data, oldIndex, newIndex);
    onRowOrderChange?.(nextData, {
      oldIndex,
      newIndex,
      activeId: String(active.id),
      overId: String(over.id),
    });
  };

  const toolbarNode = renderToolbar?.(table);

  const skeletonRowCount = mergedFeatures.pagination
    ? table.getState().pagination.pageSize
    : DEFAULT_SKELETON_ROWS;

  const bodyContent = loading ? (
    Array.from({ length: skeletonRowCount }).map((_, rowIndex) => (
      <TableRow key={`loading-${rowIndex}`}>
        {table.getVisibleLeafColumns().map((column) => (
          <TableCell
            key={column.id}
            style={getCommonPinningStyles(column)}
            className={getColumnPinningClassName(column, scrollShadow)}
          >
            <Skeleton className="h-4 w-full" />
          </TableCell>
        ))}
      </TableRow>
    ))
  ) : rows.length ? (
    rows.map((row, rowIndex) => {
      const rawPanel =
        expandedRowRenderEffective && row.getIsExpanded()
          ? expandedRowRenderEffective(row)
          : undefined;
      const expandedPanel = isRenderablePanel(rawPanel) ? rawPanel : undefined;
      const isSelected = row.getIsSelected();

      if (rowDndEnabled) {
        return (
          <SortableTableRow
            key={row.id}
            row={row}
            rowIndex={rowIndex}
            cellSpans={cellSpans}
            scrollShadow={scrollShadow}
            onRowClick={onRowClick}
            expandedPanel={expandedPanel}
            visibleColumnCount={visibleColumnCount}
          />
        );
      }

      // 无展开面板:直接返回带 key 的 TableRow,避免无意义的 Fragment 包裹
      if (expandedPanel === undefined) {
        return (
          <TableRow
            key={row.id}
            data-state={isSelected ? "selected" : undefined}
            className={onRowClick ? "cursor-pointer" : undefined}
            onClick={onRowClick ? () => onRowClick(row.original) : undefined}
          >
            {renderRowCells(row, rowIndex, cellSpans, scrollShadow)}
          </TableRow>
        );
      }

      // 有展开面板:主行 + 面板 row 作为兄弟节点共用一个 Fragment key
      return (
        <Fragment key={row.id}>
          <TableRow
            data-state={isSelected ? "selected" : undefined}
            className={onRowClick ? "cursor-pointer" : undefined}
            onClick={onRowClick ? () => onRowClick(row.original) : undefined}
          >
            {renderRowCells(row, rowIndex, cellSpans, scrollShadow)}
          </TableRow>
          {renderExpandedPanel({
            rowId: row.id,
            panel: expandedPanel,
            visibleColumnCount,
            isSelected,
          })}
        </Fragment>
      );
    })
  ) : (
    <TableRow>
      <TableCell
        colSpan={visibleColumnCount}
        className="text-muted-foreground h-24 text-center"
      >
        {empty}
      </TableCell>
    </TableRow>
  );

  const standardBody = (
    <div
      ref={wrapperRef}
      className={cn(
        "rounded-md",
        bordered &&
          "border [&_td]:border-r [&_th]:border-r [&_tr>*:last-child]:border-r-0",
        tableClassName,
      )}
    >
      <Table
        className="min-w-max"
        style={
          mergedFeatures.columnResizing
            ? { width: table.getTotalSize() }
            : undefined
        }
      >
        <TableHeader>
          {table.getHeaderGroups().map((headerGroup) => (
            <TableRow key={headerGroup.id}>
              {headerGroup.headers.map((header) => (
                <DataTableColumnHeader
                  key={header.id}
                  header={header}
                  resizable={mergedFeatures.columnResizing}
                  scrollShadow={scrollShadow}
                />
              ))}
            </TableRow>
          ))}
        </TableHeader>
        <TableBody>
          {rowDndEnabled ? (
            <SortableContext
              items={rowIds}
              strategy={verticalListSortingStrategy}
            >
              {bodyContent}
            </SortableContext>
          ) : (
            bodyContent
          )}
        </TableBody>
      </Table>
    </div>
  );

  const bodyNode = virtualEnabled ? (
    <DataTableVirtualBody
      table={table}
      loading={loading}
      empty={empty}
      options={virtualOptions}
      bordered={bordered}
      className={tableClassName}
    />
  ) : rowDndEnabled ? (
    <DndContext
      sensors={sensors}
      collisionDetection={closestCenter}
      modifiers={[restrictToVerticalAxis]}
      onDragEnd={handleDragEnd}
    >
      {standardBody}
    </DndContext>
  ) : (
    standardBody
  );

  return (
    <div data-slot="data-table" className={cn("flex flex-col", className)}>
      {toolbarNode}
      {bodyNode}
      {mergedFeatures.pagination &&
        (renderPagination !== undefined ? (
          renderPagination(table)
        ) : (
          <DataTablePagination
            table={table}
            pageSizeOptions={pageSizeOptions}
          />
        ))}
    </div>
  );
}

/**
 * forwardRef 包装,泛型用 cast 保留 —— 否则会被 forwardRef 的签名擦除成 unknown
 */
const DataTable = forwardRef(DataTableInner) as <TData, TValue = unknown>(
  props: DataTablePropsType<TData, TValue> &
    RefAttributes<DataTableHandle<TData>>,
) => ReactElement | null;

export { DataTable };
