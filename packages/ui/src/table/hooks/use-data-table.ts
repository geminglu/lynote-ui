"use client";

import {
  type ColumnFiltersState,
  type ColumnOrderState,
  type ColumnPinningState,
  type ExpandedState,
  getCoreRowModel,
  getExpandedRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  type PaginationState,
  type RowSelectionState,
  type SortingState,
  type TableOptions,
  useReactTable,
  type VisibilityState,
} from "@tanstack/react-table";
import { useEffect, useState } from "react";
import type {
  DataTableColumn,
  DataTableFeatures,
  DataTableState,
  DataTableStateHandlers,
  ScrollShadowState,
} from "../type";

const DEFAULT_FEATURES: Required<DataTableFeatures> = {
  sorting: true,
  multiSort: false,
  filtering: true,
  globalFilter: false,
  pagination: true,
  rowSelection: false,
  columnVisibility: true,
  columnOrdering: false,
  columnPinning: false,
  columnResizing: false,
  rowDnd: false,
  expanding: false,
};

type UseDataTableOptions<TData, TValue> = {
  data: TData[];
  columns: DataTableColumn<TData, TValue>[];
  features?: DataTableFeatures;
  state?: DataTableState;
  initialState?: DataTableState;
  onStateChange?: DataTableStateHandlers;
  /**
   * 透传至底层 useReactTable 的额外配置,会与内部配置浅合并
   *
   * 常用于服务端模式:`manualPagination` / `pageCount` / `rowCount` /
   * `manualSorting` / `manualFiltering`,以及 `meta` 等
   */
  tableOptions?: Partial<TableOptions<TData>>;
};

type Updater<T> = T | ((prev: T) => T);

function applyUpdater<T>(updater: Updater<T>, prev: T): T {
  return typeof updater === "function"
    ? (updater as (p: T) => T)(prev)
    : updater;
}

/**
 * 选取受控值,若未传则回退到非受控
 *
 * setter 同时支持值和函数式 updater,以避免一帧内多次更新拿到旧 snapshot
 */
function useControlled<T>(
  controlled: T | undefined,
  initial: T,
  onChange?: (value: T) => void,
): [T, (updater: Updater<T>) => void] {
  const isControlled = controlled !== undefined;
  const [internal, setInternal] = useState<T>(initial);
  const value = isControlled ? (controlled as T) : internal;

  const setValue = (updater: Updater<T>) => {
    if (isControlled) {
      const next = applyUpdater(updater, controlled as T);
      onChange?.(next);
      return;
    }
    setInternal((prev) => {
      const next = applyUpdater(updater, prev);
      onChange?.(next);
      return next;
    });
  };

  return [value, setValue];
}

/**
 * 构造 TanStack 表格实例,并按需开启各项功能
 */
export function useDataTable<TData, TValue = unknown>({
  data,
  columns,
  features,
  state,
  initialState,
  onStateChange,
  tableOptions,
}: UseDataTableOptions<TData, TValue>) {
  const mergedFeatures = { ...DEFAULT_FEATURES, ...features };

  const [sorting, setSorting] = useControlled<SortingState>(
    state?.sorting,
    initialState?.sorting ?? [],
    onStateChange?.onSortingChange,
  );
  const [columnFilters, setColumnFilters] = useControlled<ColumnFiltersState>(
    state?.columnFilters,
    initialState?.columnFilters ?? [],
    onStateChange?.onColumnFiltersChange,
  );
  const [columnVisibility, setColumnVisibility] =
    useControlled<VisibilityState>(
      state?.columnVisibility,
      initialState?.columnVisibility ?? {},
      onStateChange?.onColumnVisibilityChange,
    );
  const [columnOrder, setColumnOrder] = useControlled<ColumnOrderState>(
    state?.columnOrder,
    initialState?.columnOrder ?? [],
    onStateChange?.onColumnOrderChange,
  );
  const [columnPinning, setColumnPinning] = useControlled<ColumnPinningState>(
    state?.columnPinning,
    initialState?.columnPinning ?? {},
    onStateChange?.onColumnPinningChange,
  );
  const [rowSelection, setRowSelection] = useControlled<RowSelectionState>(
    state?.rowSelection,
    initialState?.rowSelection ?? {},
    onStateChange?.onRowSelectionChange,
  );
  const [pagination, setPagination] = useControlled<PaginationState>(
    state?.pagination,
    initialState?.pagination ?? { pageIndex: 0, pageSize: 10 },
    onStateChange?.onPaginationChange,
  );
  const [globalFilter, setGlobalFilter] = useControlled<string>(
    state?.globalFilter,
    initialState?.globalFilter ?? "",
    onStateChange?.onGlobalFilterChange,
  );
  const [expanded, setExpanded] = useControlled<ExpandedState>(
    state?.expanded,
    initialState?.expanded ?? {},
    onStateChange?.onExpandedChange,
  );

  const table = useReactTable<TData>({
    data,
    columns,
    state: {
      sorting,
      columnFilters,
      columnVisibility,
      columnOrder,
      columnPinning,
      rowSelection,
      pagination,
      globalFilter,
      expanded,
    },
    enableSorting: mergedFeatures.sorting,
    enableMultiSort: mergedFeatures.multiSort,
    enableFilters: mergedFeatures.filtering,
    enableGlobalFilter: mergedFeatures.globalFilter,
    enableRowSelection: mergedFeatures.rowSelection,
    enableHiding: mergedFeatures.columnVisibility,
    enableColumnPinning: mergedFeatures.columnPinning,
    enableColumnResizing: mergedFeatures.columnResizing,
    columnResizeMode: "onChange",
    onSortingChange: setSorting,
    onColumnFiltersChange: setColumnFilters,
    onColumnVisibilityChange: setColumnVisibility,
    onColumnOrderChange: setColumnOrder,
    onColumnPinningChange: setColumnPinning,
    onRowSelectionChange: setRowSelection,
    onPaginationChange: setPagination,
    onGlobalFilterChange: setGlobalFilter,
    onExpandedChange: setExpanded,
    getCoreRowModel: getCoreRowModel(),
    getSortedRowModel: mergedFeatures.sorting ? getSortedRowModel() : undefined,
    getFilteredRowModel:
      mergedFeatures.filtering || mergedFeatures.globalFilter
        ? getFilteredRowModel()
        : undefined,
    getPaginationRowModel:
      mergedFeatures.pagination && !tableOptions?.manualPagination
        ? getPaginationRowModel()
        : undefined,
    getExpandedRowModel: mergedFeatures.expanding
      ? getExpandedRowModel()
      : undefined,
    ...tableOptions,
  });

  return { table, features: mergedFeatures };
}

/**
 * 监听容器横向滚动,返回左右阴影显示状态
 *
 * 用于固定列阴影提示
 */
export function useScrollShadow(
  wrapperRef: React.RefObject<HTMLElement | null>,
  containerSelector = '[data-slot="table-container"]',
) {
  const [scrollShadow, setScrollShadow] = useState<ScrollShadowState>({
    left: false,
    right: false,
  });

  useEffect(() => {
    const scrollContainer =
      wrapperRef.current?.querySelector<HTMLElement>(containerSelector);
    if (!scrollContainer) return;

    const update = () => {
      const scrollLeft = scrollContainer.scrollLeft;
      const maxScrollLeft = Math.max(
        0,
        scrollContainer.scrollWidth - scrollContainer.clientWidth,
      );
      const next: ScrollShadowState = {
        left: scrollLeft > 1,
        right: maxScrollLeft - scrollLeft > 1,
      };
      setScrollShadow((current) =>
        current.left === next.left && current.right === next.right
          ? current
          : next,
      );
    };

    update();
    scrollContainer.addEventListener("scroll", update, { passive: true });

    const resizeObserver = new ResizeObserver(update);
    resizeObserver.observe(scrollContainer);
    const tableElement = scrollContainer.querySelector("table");
    if (tableElement) resizeObserver.observe(tableElement);

    return () => {
      scrollContainer.removeEventListener("scroll", update);
      resizeObserver.disconnect();
    };
  }, [wrapperRef, containerSelector]);

  return scrollShadow;
}
