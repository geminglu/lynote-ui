"use client";

import type { Row } from "@tanstack/react-table";
import { ChevronRightIcon } from "lucide-react";
import type { ComponentProps } from "react";
import { cn } from "../../../lib";
import { panelIdFor } from "../utils";

type RowExpandTogglePropsType<TData> = Omit<
  ComponentProps<"button">,
  "onClick" | "children"
> & {
  /** 当前行实例 */
  row: Row<TData>;
  /**
   * 嵌套树场景下,每层缩进的像素数;设为 0 关闭自动缩进
   *
   * 默认 16,即每深一层缩进 16px
   */
  indent?: number;
  /** 当行无可展开子项时是否仍占位渲染(保持对齐),默认 true */
  placeholder?: boolean;
};

/**
 * 行展开切换按钮:基于 `row.getToggleExpandedHandler` + `row.depth` 自动缩进
 *
 * 配合 `features.expanding` 与 `tableOptions.getSubRows`(嵌套树),或 `expandedRowRender`(展开面板)使用
 */
export function RowExpandToggle<TData>({
  row,
  indent = 16,
  placeholder = true,
  className,
  ...props
}: RowExpandTogglePropsType<TData>) {
  const paddingLeft = indent > 0 ? row.depth * indent : 0;
  const canExpand = row.getCanExpand();
  const isExpanded = row.getIsExpanded();

  if (!canExpand) {
    if (!placeholder) return null;
    return (
      <span
        aria-hidden
        className="inline-flex size-6 shrink-0"
        style={paddingLeft ? { marginLeft: paddingLeft } : undefined}
      />
    );
  }

  // 嵌套树场景下,展开生成的是子行而非面板;只有"叶子但可展开"(即 expandedRowRender 场景)
  // 才有对应的面板 row,此时才有 aria-controls 目标
  const hasPanelTarget = row.subRows.length === 0;

  return (
    <button
      type="button"
      aria-label={isExpanded ? "收起" : "展开"}
      aria-expanded={isExpanded}
      aria-controls={
        isExpanded && hasPanelTarget ? panelIdFor(row.id) : undefined
      }
      onClick={row.getToggleExpandedHandler()}
      className={cn(
        "text-muted-foreground hover:text-foreground inline-flex size-6 shrink-0 cursor-pointer items-center justify-center rounded-md transition-colors focus-visible:outline-none",
        className,
      )}
      style={paddingLeft ? { marginLeft: paddingLeft } : undefined}
      {...props}
    >
      <ChevronRightIcon
        className={cn(
          "size-4 transition-transform",
          isExpanded ? "rotate-90" : "rotate-0",
        )}
      />
    </button>
  );
}
