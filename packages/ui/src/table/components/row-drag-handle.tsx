"use client";

import type {
  DraggableAttributes,
  DraggableSyntheticListeners,
} from "@dnd-kit/core";
import { GripVerticalIcon } from "lucide-react";
import {
  createContext,
  useContext,
  type ComponentProps,
  type Ref,
} from "react";
import { cn } from "../../../lib";

/**
 * SortableRow 通过此 context 向其内部 cell 暴露 dnd-kit 的激活器/监听器
 *
 * 用 context 而非 prop 钻透,因为 cell 是用户自定义渲染函数,触不到 SortableRow 的局部变量
 */
export type RowDragHandleContextValue = {
  attributes: DraggableAttributes;
  listeners: DraggableSyntheticListeners | undefined;
  setActivatorNodeRef: Ref<HTMLElement>;
  isDragging: boolean;
} | null;

export const RowDragHandleContext =
  createContext<RowDragHandleContextValue>(null);

/** 在 cell 内任意位置放此组件即可成为行拖拽手柄 */
export function RowDragHandle({
  className,
  ...props
}: Omit<
  ComponentProps<"button">,
  "ref" | "onMouseDown" | "onKeyDown" | "onTouchStart"
>) {
  const handle = useContext(RowDragHandleContext);
  if (!handle) return null;
  return (
    <button
      type="button"
      ref={handle.setActivatorNodeRef as Ref<HTMLButtonElement>}
      aria-label="拖动排序"
      className={cn(
        "text-muted-foreground hover:text-foreground inline-flex size-6 cursor-grab items-center justify-center rounded-md focus-visible:outline-none active:cursor-grabbing",
        className,
      )}
      // eslint-disable-next-line react-hooks/refs
      {...handle.attributes}
      // eslint-disable-next-line react-hooks/refs
      {...handle.listeners}
      {...props}
    >
      <GripVerticalIcon className="size-4" />
    </button>
  );
}
