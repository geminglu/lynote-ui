import type {
  Column,
  ColumnDef,
  ColumnFiltersState,
  ColumnOrderState,
  ColumnPinningState,
  ExpandedState,
  PaginationState,
  Row,
  RowData,
  RowSelectionState,
  SortingState,
  TableOptions,
  Table as TanstackTable,
  VisibilityState,
} from "@tanstack/react-table";
import type { ReactNode } from "react";

/** 行合并回调上下文 */
export type RowSpanContext<TData> = {
  row: Row<TData>;
  rows: Row<TData>[];
  rowIndex: number;
  value: unknown;
};

/** 列合并回调上下文 */
export type ColSpanContext<TData> = {
  row: Row<TData>;
  rows: Row<TData>[];
  rowIndex: number;
  column: Column<TData, unknown>;
};

/**
 * 通过 `column.meta` 在 DataTable 中描述单元格合并行为
 *
 * - `rowSpan: true`(等同 `"auto"`):自动合并连续相同值
 * - `rowSpan: (ctx) => number`:返回 rowSpan,`0` 表示该格不渲染
 * - `rowSpanParent`:仅当父字段同时相同才允许合并(如 city 在同 region 下才合并)
 * - `colSpan: (ctx) => number`:返回 colSpan,`0` 表示该格不渲染
 */
export type CellMergeMeta<TData = RowData> = {
  rowSpan?: true | "auto" | ((ctx: RowSpanContext<TData>) => number);
  rowSpanParent?: string;
  colSpan?: (ctx: ColSpanContext<TData>) => number;
};

declare module "@tanstack/react-table" {
  // 类型增强:为 ColumnMeta 加入合并配置字段
  // eslint-disable-next-line @typescript-eslint/no-empty-object-type
  interface ColumnMeta<
    TData extends RowData,
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    TValue,
  > extends CellMergeMeta<TData> {}
}

/**
 * 表格容器横向滚动阴影状态
 */
export type ScrollShadowState = {
  left: boolean;
  right: boolean;
};

/**
 * 列配置,扩展 TanStack ColumnDef
 */
export type DataTableColumn<TData, TValue = unknown> = ColumnDef<TData, TValue>;

/**
 * 受控状态,所有字段均可选
 */
export type DataTableState = {
  sorting?: SortingState;
  columnFilters?: ColumnFiltersState;
  columnVisibility?: VisibilityState;
  columnOrder?: ColumnOrderState;
  columnPinning?: ColumnPinningState;
  rowSelection?: RowSelectionState;
  pagination?: PaginationState;
  globalFilter?: string;
  expanded?: ExpandedState;
};

/**
 * 状态变更回调集合
 */
export type DataTableStateHandlers = {
  onSortingChange?: (state: SortingState) => void;
  onColumnFiltersChange?: (state: ColumnFiltersState) => void;
  onColumnVisibilityChange?: (state: VisibilityState) => void;
  onColumnOrderChange?: (state: ColumnOrderState) => void;
  onColumnPinningChange?: (state: ColumnPinningState) => void;
  onRowSelectionChange?: (state: RowSelectionState) => void;
  onPaginationChange?: (state: PaginationState) => void;
  onGlobalFilterChange?: (state: string) => void;
  onExpandedChange?: (state: ExpandedState) => void;
};

/**
 * 各能力开关 + 初始值
 */
export type DataTableFeatures = {
  /** 是否启用排序,默认 true */
  sorting?: boolean;
  /** 是否启用多列同时排序,默认 false */
  multiSort?: boolean;
  /** 是否启用列筛选,默认 true */
  filtering?: boolean;
  /** 是否启用全局搜索,默认 false */
  globalFilter?: boolean;
  /** 是否启用分页,默认 true */
  pagination?: boolean;
  /** 是否启用行选择(多选),默认 false */
  rowSelection?: boolean;
  /** 是否启用列显隐控制,默认 true */
  columnVisibility?: boolean;
  /** 是否启用列拖拽排序,默认 false */
  columnOrdering?: boolean;
  /** 是否启用列固定(冻结),默认 false */
  columnPinning?: boolean;
  /** 是否启用列宽调整,默认 false */
  columnResizing?: boolean;
  /**
   * 是否启用行拖拽排序,默认 false
   *
   * 开启后会在最左侧自动插入一列拖拽手柄;也可手动在自己的 cell 里放 `<RowDragHandle />`。
   * 需要传 `tableOptions.getRowId` 提供稳定的行标识,并在 `onRowOrderChange` 中接住新顺序。
   * 与 `virtual` 不兼容
   */
  rowDnd?: boolean;
  /**
   * 是否启用行展开,默认 false
   *
   * 嵌套树:在 `tableOptions.getSubRows` 中返回子行,即可在 cell 里用 `<RowExpandToggle row={row} />` 展开。
   * 展开面板:传 `expandedRowRender` 在每行下方渲染自定义面板。
   * 开启 `virtual` 时会被自动忽略
   */
  expanding?: boolean;
};

/** 行拖拽完成后的回调 */
export type RowOrderChangeInfo = {
  oldIndex: number;
  newIndex: number;
  activeId: string;
  overId: string;
};

/**
 * 行虚拟滚动配置
 */
export type DataTableVirtualOptions = {
  /** 估计的行高(px),默认 36 */
  estimateRowHeight?: number;
  /** 滚动容器高度,默认 480 */
  maxHeight?: number | string;
  /** 视口外预渲染行数,默认 10 */
  overscan?: number;
};

/**
 * DataTable 顶层属性
 */
export type DataTablePropsType<TData, TValue = unknown> = {
  /** 列定义 */
  columns: DataTableColumn<TData, TValue>[];
  /** 数据源 */
  data: TData[];
  /** 加载状态,显示占位条 */
  loading?: boolean;
  /** 受控状态 */
  state?: DataTableState;
  /** 初始状态(非受控) */
  initialState?: DataTableState;
  /** 状态变更回调 */
  onStateChange?: DataTableStateHandlers;
  /** 功能开关 */
  features?: DataTableFeatures;
  /**
   * 工具栏渲染函数,接收 table 实例;不传则不渲染工具栏
   *
   * 搜索 / 视图设置等控件请在此函数中用 `DataTableToolbar` / `DataTableViewOptions` 自由组合
   */
  renderToolbar?: (table: TanstackTable<TData>) => ReactNode;
  /** 自定义分页区域 */
  renderPagination?: (table: TanstackTable<TData>) => ReactNode;
  /** 空状态文本或节点 */
  empty?: ReactNode;
  /** 每页可选数量,默认 [10, 20, 30, 50, 100] */
  pageSizeOptions?: number[];
  /** 外层 className */
  className?: string;
  /** 表格容器 className */
  tableClassName?: string;
  /** 是否显示纵向边框(单元格分隔线),默认 `false` */
  bordered?: boolean;
  /** 行点击回调 */
  onRowClick?: (row: TData) => void;
  /** 行拖拽完成后回调,接收重排后的完整数据 */
  onRowOrderChange?: (nextData: TData[], info: RowOrderChangeInfo) => void;
  /**
   * 自定义展开面板渲染;返回任意节点会在该行下方渲染一行,跨满所有列
   *
   * - 需要将 `features.expanding` 设为 true 才会生效
   * - 未自定义 `tableOptions.getRowCanExpand` 时会自动注入 `() => true`,所有行均可展开
   * - 开启 `virtual` 时会被自动忽略
   */
  expandedRowRender?: (row: Row<TData>) => ReactNode;
  /**
   * 行 DnD 拖拽手柄安放方式,默认 `"auto"` 自动在最左侧追加一列
   *
   * 设为 `"manual"` 则不追加,需要用户在自己的列里放 `<RowDragHandle />`
   */
  rowDndHandle?: "auto" | "manual";
  /** 透传至底层 useReactTable 的额外配置(服务端模式 / meta 等) */
  tableOptions?: Partial<TableOptions<TData>>;
  /**
   * 行虚拟滚动:`true` 启用默认配置;传对象自定义
   *
   * 开启后会自动关闭分页;列固定与多级表头暂不兼容
   */
  virtual?: boolean | DataTableVirtualOptions;
};

/**
 * 列固定 / 拖拽辅助类型
 */
export type AnyColumn<TData> = Column<TData, unknown>;
