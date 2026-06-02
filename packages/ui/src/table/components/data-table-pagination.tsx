"use client";

import type { Table as TanstackTable } from "@tanstack/react-table";
import {
  ChevronLeftIcon,
  ChevronRightIcon,
  ChevronsLeftIcon,
  ChevronsRightIcon,
} from "lucide-react";
import { Button } from "../../button";
import { NativeSelect, NativeSelectOption } from "../../native-select";

const DEFAULT_PAGE_SIZE_OPTIONS = [10, 20, 30, 50, 100];

type DataTablePaginationProps<TData> = {
  table: TanstackTable<TData>;
  pageSizeOptions?: number[];
  /** 是否显示已选择行数,默认 true */
  showSelectionCount?: boolean;
};

/**
 * 表格分页栏:总行数 / 每页数量 / 页码跳转
 */
export function DataTablePagination<TData>({
  table,
  pageSizeOptions = DEFAULT_PAGE_SIZE_OPTIONS,
  showSelectionCount = true,
}: DataTablePaginationProps<TData>) {
  const pagination = table.getState().pagination;
  const selectedCount = Object.keys(table.getState().rowSelection).length;
  const totalRows = table.getRowCount();
  const pageCount = table.getPageCount();

  return (
    <div className="text-muted-foreground flex flex-wrap items-center justify-between gap-2 py-2 text-sm">
      <div className="flex-1">
        {showSelectionCount && selectedCount > 0
          ? `已选择 ${selectedCount} / ${totalRows} 条`
          : `共 ${totalRows} 条`}
      </div>
      <div className="flex items-center gap-2">
        <span>每页</span>
        <NativeSelect
          size="sm"
          value={pagination.pageSize}
          onChange={(event) => table.setPageSize(Number(event.target.value))}
        >
          {pageSizeOptions.map((size) => (
            <NativeSelectOption key={size} value={size}>
              {size}
            </NativeSelectOption>
          ))}
        </NativeSelect>
      </div>
      <div className="flex items-center gap-1">
        <span className="px-2">
          第 {pagination.pageIndex + 1} / {Math.max(pageCount, 1)} 页
        </span>
        <Button
          variant="outline"
          size="sm"
          icon
          aria-label="第一页"
          onClick={() => table.setPageIndex(0)}
          disabled={!table.getCanPreviousPage()}
        >
          <ChevronsLeftIcon />
        </Button>
        <Button
          variant="outline"
          size="sm"
          icon
          aria-label="上一页"
          onClick={() => table.previousPage()}
          disabled={!table.getCanPreviousPage()}
        >
          <ChevronLeftIcon />
        </Button>
        <Button
          variant="outline"
          size="sm"
          icon
          aria-label="下一页"
          onClick={() => table.nextPage()}
          disabled={!table.getCanNextPage()}
        >
          <ChevronRightIcon />
        </Button>
        <Button
          variant="outline"
          size="sm"
          icon
          aria-label="最后一页"
          onClick={() => table.setPageIndex(pageCount - 1)}
          disabled={!table.getCanNextPage()}
        >
          <ChevronsRightIcon />
        </Button>
      </div>
    </div>
  );
}
