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
import type { Table as TanstackTable } from "@tanstack/react-table";
import { GripVerticalIcon, Settings2Icon } from "lucide-react";
import {
  type CSSProperties,
  type MouseEvent,
  type ReactElement,
  type ReactNode,
} from "react";
import { cn } from "../../../lib";
import { Button } from "../../button";
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "../../dropdown-menu";
import type { AnyColumn } from "../type";

type DataTableViewOptionsProps<TData> = {
  table: TanstackTable<TData>;
  /** 是否允许列拖拽排序,默认 false */
  enableOrdering?: boolean;
  /** 是否允许列固定操作,默认 false */
  enablePinning?: boolean;
  /** 触发按钮自定义,默认 "视图" */
  trigger?: ReactElement;
};

/**
 * 列显隐 / 排序 / 固定 设置面板
 *
 * 通过 DropdownMenu 弹出列表,内置 DnD-Kit 排序与固定按钮
 */
export function DataTableViewOptions<TData>({
  table,
  enableOrdering = false,
  enablePinning = false,
  trigger,
}: DataTableViewOptionsProps<TData>) {
  const draggableColumns = table
    .getAllLeafColumns()
    .filter((column) => column.getCanHide());
  const draggableColumnIds = draggableColumns.map((column) => column.id);

  const sensors = useSensors(
    useSensor(PointerSensor, { activationConstraint: { distance: 5 } }),
    useSensor(KeyboardSensor, {
      coordinateGetter: sortableKeyboardCoordinates,
    }),
  );

  const handleDragEnd = ({ active, over }: DragEndEvent) => {
    if (!over || active.id === over.id) return;
    const currentOrder = table.getState().columnOrder;
    const allColumnIds = table.getAllLeafColumns().map((column) => column.id);
    const orderedColumnIds = currentOrder.length
      ? currentOrder.filter((columnId) => allColumnIds.includes(columnId))
      : allColumnIds;
    const nextOrder = [
      ...orderedColumnIds,
      ...allColumnIds.filter(
        (columnId) => !orderedColumnIds.includes(columnId),
      ),
    ];
    const oldIndex = nextOrder.indexOf(String(active.id));
    const newIndex = nextOrder.indexOf(String(over.id));
    if (oldIndex === -1 || newIndex === -1) return;
    table.setColumnOrder(arrayMove(nextOrder, oldIndex, newIndex));
  };

  const items = enableOrdering ? draggableColumnIds : [];

  return (
    <DropdownMenu>
      <DropdownMenuTrigger
        render={
          trigger ?? (
            <Button variant="outline" size="sm">
              <Settings2Icon />
              视图
            </Button>
          )
        }
      />
      <DropdownMenuContent align="end" className="min-w-56">
        <DropdownMenuGroup>
          <DropdownMenuLabel>显示的列</DropdownMenuLabel>
        </DropdownMenuGroup>
        <DropdownMenuSeparator />
        {enableOrdering ? (
          <DndContext
            sensors={sensors}
            collisionDetection={closestCenter}
            modifiers={[restrictToVerticalAxis]}
            onDragEnd={handleDragEnd}
          >
            <SortableContext
              items={items}
              strategy={verticalListSortingStrategy}
            >
              {draggableColumns.map((column) => (
                <SortableColumnItem
                  key={column.id}
                  column={column}
                  enablePinning={enablePinning}
                />
              ))}
            </SortableContext>
          </DndContext>
        ) : (
          draggableColumns.map((column) => (
            <ColumnVisibilityItem
              key={column.id}
              column={column}
              enablePinning={enablePinning}
            />
          ))
        )}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}

type ColumnItemProps<TData> = {
  column: AnyColumn<TData>;
  enablePinning?: boolean;
};

/**
 * 列设置项内部统一渲染:复选 + 列名 + 可选固定操作
 */
function ColumnItemBody<TData>({
  column,
  enablePinning,
  dragHandle,
}: ColumnItemProps<TData> & { dragHandle?: ReactNode }) {
  const pinned = column.getIsPinned();
  const canPin = enablePinning && column.getCanPin();

  const handlePinClick = (
    event: MouseEvent<HTMLButtonElement>,
    position: "left" | "right" | false,
  ) => {
    event.preventDefault();
    event.stopPropagation();
    column.pin(position);
  };

  return (
    <DropdownMenuCheckboxItem
      className="capitalize"
      checked={column.getIsVisible()}
      onCheckedChange={(value) => column.toggleVisibility(!!value)}
    >
      {dragHandle}
      <span className="min-w-20 flex-1">{column.id}</span>
      {canPin && (
        <span
          className="ml-auto mr-5 flex items-center gap-1 normal-case"
          onClick={(event) => event.stopPropagation()}
          onPointerDown={(event) => event.stopPropagation()}
        >
          <Button
            type="button"
            variant={pinned === "left" ? "default" : "ghost"}
            size="xs"
            onClick={(event) => handlePinClick(event, "left")}
          >
            左
          </Button>
          <Button
            type="button"
            variant={pinned ? "ghost" : "default"}
            size="xs"
            onClick={(event) => handlePinClick(event, false)}
          >
            无
          </Button>
          <Button
            type="button"
            variant={pinned === "right" ? "default" : "ghost"}
            size="xs"
            onClick={(event) => handlePinClick(event, "right")}
          >
            右
          </Button>
        </span>
      )}
    </DropdownMenuCheckboxItem>
  );
}

function ColumnVisibilityItem<TData>({
  column,
  enablePinning,
}: ColumnItemProps<TData>) {
  return <ColumnItemBody column={column} enablePinning={enablePinning} />;
}

function SortableColumnItem<TData>({
  column,
  enablePinning,
}: ColumnItemProps<TData>) {
  const {
    attributes,
    listeners,
    setActivatorNodeRef,
    setNodeRef,
    transform,
    transition,
    isDragging,
  } = useSortable({ id: column.id });

  const style: CSSProperties = {
    transform: CSS.Transform.toString(transform),
    transition,
  };

  return (
    <div
      ref={setNodeRef}
      style={style}
      className={cn(isDragging && "relative z-10 opacity-80")}
    >
      <ColumnItemBody
        column={column}
        enablePinning={enablePinning}
        dragHandle={
          <span
            ref={setActivatorNodeRef}
            className="cursor-grab active:cursor-grabbing"
            aria-label={`Reorder ${column.id} column`}
            onClick={(event) => event.stopPropagation()}
            {...attributes}
            {...listeners}
          >
            <GripVerticalIcon className="size-[1em]" />
          </span>
        }
      />
    </div>
  );
}
