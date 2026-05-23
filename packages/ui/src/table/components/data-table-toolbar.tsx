"use client";

import type { Table as TanstackTable } from "@tanstack/react-table";
import { SearchIcon, XIcon } from "lucide-react";
import { type ReactNode } from "react";
import { cn } from "../../../lib";
import { Button } from "../../button";
import { Input } from "../../input";
import { DataTableViewOptions } from "./data-table-view-options";

type DataTableToolbarProps<TData> = {
  table: TanstackTable<TData>;
  /** 绑定搜索输入框的列 id;留空则使用全局过滤 */
  searchColumnId?: string;
  /** 输入框 placeholder */
  searchPlaceholder?: string;
  /** 是否展示视图配置(列显隐),默认 true */
  showViewOptions?: boolean;
  /** 是否启用列拖拽 */
  enableColumnOrdering?: boolean;
  /** 是否启用列固定 */
  enableColumnPinning?: boolean;
  /** 工具栏右侧追加内容 */
  extra?: ReactNode;
  className?: string;
};

/**
 * 表格工具栏:搜索 + 视图配置 + 自定义扩展
 */
export function DataTableToolbar<TData>({
  table,
  searchColumnId,
  searchPlaceholder = "搜索...",
  showViewOptions = true,
  enableColumnOrdering,
  enableColumnPinning,
  extra,
  className,
}: DataTableToolbarProps<TData>) {
  const searchColumn = searchColumnId
    ? table.getColumn(searchColumnId)
    : undefined;
  const useGlobalFilter = !searchColumn;
  const value = useGlobalFilter
    ? table.getState().globalFilter
    : (searchColumn?.getFilterValue() as string | undefined);
  const hasValue = Boolean(value);

  const handleChange = (next: string) => {
    if (useGlobalFilter) {
      table.setGlobalFilter(next);
    } else {
      searchColumn?.setFilterValue(next || undefined);
    }
  };

  return (
    <div
      data-slot="data-table-toolbar"
      className={cn("flex flex-wrap items-center gap-2 py-3", className)}
    >
      <div className="relative max-w-sm flex-1">
        <SearchIcon className="text-muted-foreground pointer-events-none absolute left-2.5 top-1/2 size-4 -translate-y-1/2" />
        <Input
          placeholder={searchPlaceholder}
          value={value ?? ""}
          onChange={(event) => handleChange(event.target.value)}
          className="pl-8 pr-8"
        />
        {hasValue && (
          <Button
            type="button"
            variant="ghost"
            size="icon-xs"
            className="absolute right-1 top-1/2 -translate-y-1/2"
            aria-label="清除搜索"
            onClick={() => handleChange("")}
          >
            <XIcon />
          </Button>
        )}
      </div>
      <div className="ml-auto flex items-center gap-2">
        {extra}
        {showViewOptions && (
          <DataTableViewOptions
            table={table}
            enableOrdering={enableColumnOrdering}
            enablePinning={enableColumnPinning}
          />
        )}
      </div>
    </div>
  );
}
