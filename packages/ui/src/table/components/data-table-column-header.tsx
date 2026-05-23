"use client";

import { flexRender, type Header } from "@tanstack/react-table";
import { ChevronDownIcon, ChevronUpIcon } from "lucide-react";
import { cn } from "../../../lib";
import type { ScrollShadowState } from "../type";
import { getColumnPinningClassName, getCommonPinningStyles } from "../utils";
import { TableHead } from "./base-table";

type DataTableColumnHeaderProps<TData> = {
  header: Header<TData, unknown>;
  resizable?: boolean;
  scrollShadow: ScrollShadowState;
};

/**
 * 表头单元格,封装排序、列宽拖拽、固定列阴影
 */
export function DataTableColumnHeader<TData>({
  header,
  resizable,
  scrollShadow,
}: DataTableColumnHeaderProps<TData>) {
  const canSort = header.column.getCanSort();
  const isSorted = header.column.getIsSorted();
  const canResize = resizable && header.column.getCanResize();

  return (
    <TableHead
      data-slot="data-table-column-header"
      colSpan={header.colSpan}
      style={getCommonPinningStyles(header.column)}
      className={getColumnPinningClassName(header.column, scrollShadow)}
    >
      {header.isPlaceholder ? null : (
        <div className="flex items-center gap-1">
          <div
            className={cn(
              "flex flex-1 items-center gap-1",
              canSort && "cursor-pointer select-none",
            )}
            onClick={
              canSort ? header.column.getToggleSortingHandler() : undefined
            }
          >
            {flexRender(header.column.columnDef.header, header.getContext())}
            {canSort && (
              <span className="flex flex-col items-center">
                <ChevronUpIcon
                  className={cn(
                    "text-muted-foreground -mb-1 size-[1em] transition",
                    isSorted === "asc" && "text-foreground",
                  )}
                />
                <ChevronDownIcon
                  className={cn(
                    "text-muted-foreground -mt-1 size-[1em] transition",
                    isSorted === "desc" && "text-foreground",
                  )}
                />
              </span>
            )}
          </div>
          {canResize && (
            <span
              onDoubleClick={header.column.resetSize}
              onMouseDown={header.getResizeHandler()}
              onTouchStart={header.getResizeHandler()}
              className={cn(
                "ml-auto h-[stretch] w-px cursor-col-resize touch-none select-none",
                "hover:bg-primary/40 data-[resizing=true]:bg-primary",
              )}
              data-resizing={header.column.getIsResizing() || undefined}
            />
          )}
        </div>
      )}
    </TableHead>
  );
}
