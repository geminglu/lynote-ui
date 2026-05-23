"use client";

import { flexRender, type Table as TanstackTable } from "@tanstack/react-table";
import { useVirtualizer } from "@tanstack/react-virtual";
import { ChevronDownIcon, ChevronUpIcon } from "lucide-react";
import { type ReactNode, useRef } from "react";
import { cn } from "../../../lib";
import { Skeleton } from "../../skeleton";
import type { DataTableVirtualOptions } from "../type";

const DEFAULT_ROW_HEIGHT = 36;
const DEFAULT_MAX_HEIGHT = 480;
const DEFAULT_OVERSCAN = 10;

type DataTableVirtualBodyProps<TData> = {
  table: TanstackTable<TData>;
  loading?: boolean;
  empty?: ReactNode;
  options?: DataTableVirtualOptions;
  /** 是否显示纵向边框 */
  bordered?: boolean;
  className?: string;
};

/**
 * 行虚拟滚动表格:使用 grid 布局 + `useVirtualizer` 仅渲染可视区域
 *
 * 因表格采用 grid 布局,固定列 / 多级表头暂不支持
 */
export function DataTableVirtualBody<TData>({
  table,
  loading,
  empty = "暂无数据",
  options,
  bordered = false,
  className,
}: DataTableVirtualBodyProps<TData>) {
  const estimateRowHeight = options?.estimateRowHeight ?? DEFAULT_ROW_HEIGHT;
  const maxHeight = options?.maxHeight ?? DEFAULT_MAX_HEIGHT;
  const overscan = options?.overscan ?? DEFAULT_OVERSCAN;

  const containerRef = useRef<HTMLDivElement>(null);
  const rows = table.getRowModel().rows;
  const totalWidth = table.getTotalSize();

  const virtualizer = useVirtualizer({
    count: rows.length,
    getScrollElement: () => containerRef.current,
    estimateSize: () => estimateRowHeight,
    overscan,
  });

  const virtualItems = virtualizer.getVirtualItems();
  const showEmpty = !loading && rows.length === 0;
  const skeletonRowCount = Math.max(
    1,
    Math.floor(
      (typeof maxHeight === "number" ? maxHeight : 480) / estimateRowHeight,
    ),
  );

  return (
    <div
      ref={containerRef}
      data-slot="table-container"
      className={cn(
        "bg-background relative overflow-auto rounded-md",
        bordered && "border",
        className,
      )}
      style={{
        height: typeof maxHeight === "number" ? `${maxHeight}px` : maxHeight,
      }}
    >
      <table
        data-slot="table"
        className="grid text-sm"
        style={{ width: `${totalWidth}px`, minWidth: "100%" }}
      >
        <thead
          data-slot="table-header"
          className="bg-background sticky top-0 z-10 grid border-b"
        >
          {table.getHeaderGroups().map((headerGroup) => (
            <tr key={headerGroup.id} className="flex w-full">
              {headerGroup.headers.map((header, headerIndex) => {
                const canSort = header.column.getCanSort();
                const isSorted = header.column.getIsSorted();
                const isLast = headerIndex === headerGroup.headers.length - 1;
                return (
                  <th
                    key={header.id}
                    data-slot="table-head"
                    className={cn(
                      "text-foreground flex h-10 shrink-0 items-center gap-1 px-2 text-left font-medium",
                      canSort && "cursor-pointer select-none",
                      bordered && !isLast && "border-r",
                    )}
                    style={{ width: `${header.getSize()}px` }}
                    onClick={
                      canSort
                        ? header.column.getToggleSortingHandler()
                        : undefined
                    }
                  >
                    {header.isPlaceholder
                      ? null
                      : flexRender(
                          header.column.columnDef.header,
                          header.getContext(),
                        )}
                    {canSort && (
                      <span className="ml-1 flex flex-col items-center">
                        <ChevronUpIcon
                          className={cn(
                            "text-muted-foreground -mb-1 size-3 transition",
                            isSorted === "asc" && "text-foreground",
                          )}
                        />
                        <ChevronDownIcon
                          className={cn(
                            "text-muted-foreground -mt-1 size-3 transition",
                            isSorted === "desc" && "text-foreground",
                          )}
                        />
                      </span>
                    )}
                  </th>
                );
              })}
            </tr>
          ))}
        </thead>
        <tbody
          data-slot="table-body"
          className="relative grid"
          style={{
            height: loading
              ? `${skeletonRowCount * estimateRowHeight}px`
              : `${virtualizer.getTotalSize()}px`,
          }}
        >
          {loading ? (
            Array.from({ length: skeletonRowCount }).map((_, rowIndex) => {
              const leafColumns = table.getVisibleLeafColumns();
              return (
                <tr
                  key={`loading-${rowIndex}`}
                  className="flex w-full border-b"
                  style={{ height: `${estimateRowHeight}px` }}
                >
                  {leafColumns.map((column, columnIndex) => {
                    const isLast = columnIndex === leafColumns.length - 1;
                    return (
                      <td
                        key={column.id}
                        className={cn(
                          "flex items-center px-2",
                          bordered && !isLast && "border-r",
                        )}
                        style={{ width: `${column.getSize()}px` }}
                      >
                        <Skeleton className="h-4 w-full" />
                      </td>
                    );
                  })}
                </tr>
              );
            })
          ) : showEmpty ? (
            <tr className="flex w-full">
              <td
                colSpan={table.getVisibleLeafColumns().length}
                className="text-muted-foreground flex h-24 w-full items-center justify-center"
              >
                {empty}
              </td>
            </tr>
          ) : (
            virtualItems.map((virtualRow) => {
              const row = rows[virtualRow.index];
              const cells = row.getVisibleCells();
              return (
                <tr
                  key={row.id}
                  data-index={virtualRow.index}
                  data-state={row.getIsSelected() ? "selected" : undefined}
                  ref={(node) => virtualizer.measureElement(node)}
                  className="hover:bg-muted/50 data-[state=selected]:bg-muted absolute flex w-full border-b"
                  style={{
                    transform: `translateY(${virtualRow.start}px)`,
                  }}
                >
                  {cells.map((cell, cellIndex) => {
                    const isLast = cellIndex === cells.length - 1;
                    return (
                      <td
                        key={cell.id}
                        data-slot="table-cell"
                        className={cn(
                          "text-foreground flex items-center px-2",
                          bordered && !isLast && "border-r",
                        )}
                        style={{
                          width: `${cell.column.getSize()}px`,
                          height: `${estimateRowHeight}px`,
                        }}
                      >
                        {flexRender(
                          cell.column.columnDef.cell,
                          cell.getContext(),
                        )}
                      </td>
                    );
                  })}
                </tr>
              );
            })
          )}
        </tbody>
      </table>
    </div>
  );
}
