import type { Row } from "@tanstack/react-table";
import type { CSSProperties } from "react";
import { cn } from "../../lib";
import type { AnyColumn, CellMergeMeta, ScrollShadowState } from "./type";

/**
 * 展开面板 row 的 DOM id 协议
 *
 * `DataTable` 渲染面板 row 时把这个 id 设到 `<tr id>` 上,
 * `RowExpandToggle` 把它写进按钮的 `aria-controls`,二者必须保持一致
 */
export const panelIdFor = (rowId: string) => `data-table-row-${rowId}-panel`;

/**
 * 计算固定列(sticky)需要的样式
 */
export function getCommonPinningStyles<TData>(
  column: AnyColumn<TData>,
): CSSProperties {
  const isPinned = column.getIsPinned();

  return {
    left: isPinned === "left" ? `${column.getStart("left")}px` : undefined,
    opacity: isPinned ? 0.98 : 1,
    position: isPinned ? "sticky" : "relative",
    right: isPinned === "right" ? `${column.getAfter("right")}px` : undefined,
    width: `${column.getSize()}px`,
    zIndex: isPinned ? 1 : 0,
  };
}

/**
 * 计算固定列阴影 className
 */
export function getColumnPinningClassName<TData>(
  column: AnyColumn<TData>,
  scrollShadow: ScrollShadowState,
): string {
  const isPinned = column.getIsPinned();
  const isLastLeftPinnedColumn =
    isPinned === "left" && column.getIsLastColumn("left");
  const isFirstRightPinnedColumn =
    isPinned === "right" && column.getIsFirstColumn("right");

  let styles = "bg-background after:transition-all";

  if (isLastLeftPinnedColumn) {
    styles = cn(
      styles,
      "after:absolute after:bottom-0 after:top-0 after:right-0 after:w-[30px] after:translate-x-full after:content-[''] after:shadow-[inset_15px_0_8px_-8px_#0000000d] dark:after:shadow-[inset_15px_0_8px_-8px_#ffffff0d]",
    );
  }
  if (isLastLeftPinnedColumn && !scrollShadow.left) {
    styles = cn(styles, "after:shadow-[inset_15px_0_8px_-8px_#00000000]");
  }
  if (isFirstRightPinnedColumn) {
    styles = cn(
      styles,
      "after:absolute after:bottom-0 after:top-0 after:left-0 after:w-[30px] after:-translate-x-full after:content-[''] after:shadow-[inset_-15px_0_8px_-8px_#0000000d] dark:after:shadow-[inset_-15px_0_8px_-8px_#ffffff0d]",
    );
  }
  if (isFirstRightPinnedColumn && !scrollShadow.right) {
    styles = cn(styles, "after:shadow-[inset_-15px_0_8px_-8px_#00000000]");
  }

  return styles;
}

/** 单元格合并跨度 */
export type CellSpan = { rowSpan: number; colSpan: number };

/** 内部存储:每行每列对应的跨度 */
export type CellSpanMap = Map<number, Map<string, CellSpan>>;

function ensureRow(map: CellSpanMap, rowIndex: number): Map<string, CellSpan> {
  let entry = map.get(rowIndex);
  if (!entry) {
    entry = new Map();
    map.set(rowIndex, entry);
  }
  return entry;
}

function setSpan(
  map: CellSpanMap,
  rowIndex: number,
  columnId: string,
  next: Partial<CellSpan>,
) {
  const row = ensureRow(map, rowIndex);
  const previous = row.get(columnId) ?? { rowSpan: 1, colSpan: 1 };
  row.set(columnId, { ...previous, ...next });
}

/**
 * 根据每列 `meta.rowSpan` / `meta.colSpan` 计算每行每列的合并跨度
 *
 * `0` 表示该单元格不应渲染(被合并掉了)
 */
export function computeCellSpans<TData>(
  rows: Row<TData>[],
  columns: AnyColumn<TData>[],
): CellSpanMap {
  const map: CellSpanMap = new Map();
  if (rows.length === 0) return map;

  // 第一遍:列级行合并(auto 或函数)
  columns.forEach((column) => {
    const meta = column.columnDef.meta as CellMergeMeta<TData> | undefined;
    const rowSpanCfg = meta?.rowSpan;
    if (!rowSpanCfg) return;

    if (rowSpanCfg === true || rowSpanCfg === "auto") {
      const parentKey = meta?.rowSpanParent;
      let index = 0;
      while (index < rows.length) {
        const value = rows[index].getValue(column.id);
        const parentValue = parentKey
          ? rows[index].getValue(parentKey)
          : undefined;
        let span = 1;
        while (index + span < rows.length) {
          const nextValue = rows[index + span].getValue(column.id);
          const nextParent = parentKey
            ? rows[index + span].getValue(parentKey)
            : undefined;
          if (
            Object.is(nextValue, value) &&
            (!parentKey || Object.is(nextParent, parentValue))
          ) {
            span += 1;
          } else break;
        }
        if (span > 1) {
          setSpan(map, index, column.id, { rowSpan: span });
          for (let offset = 1; offset < span; offset += 1) {
            setSpan(map, index + offset, column.id, {
              rowSpan: 0,
              colSpan: 0,
            });
          }
        }
        index += span;
      }
    } else if (typeof rowSpanCfg === "function") {
      rows.forEach((row, rowIndex) => {
        const span = rowSpanCfg({
          row,
          rows,
          rowIndex,
          value: row.getValue(column.id),
        });
        const existing = map.get(rowIndex)?.get(column.id);
        if (existing && existing.rowSpan === 0) return;
        if (span === 0) {
          setSpan(map, rowIndex, column.id, { rowSpan: 0, colSpan: 0 });
        } else if (span > 1) {
          setSpan(map, rowIndex, column.id, { rowSpan: span });
          for (let offset = 1; offset < span; offset += 1) {
            setSpan(map, rowIndex + offset, column.id, {
              rowSpan: 0,
              colSpan: 0,
            });
          }
        }
      });
    }
  });

  // 第二遍:单元格级列合并(按行扫描,跨度内的后续单元格自动跳过)
  rows.forEach((row, rowIndex) => {
    const cells = row.getVisibleCells();
    let skipUntil = -1;
    cells.forEach((cell, cellIndex) => {
      const columnId = cell.column.id;
      const rowMap = ensureRow(map, rowIndex);
      const existing = rowMap.get(columnId);

      // 已被上方行合并掉
      if (existing && existing.rowSpan === 0) return;
      // 在同一行被左侧 colSpan 跨过
      if (cellIndex <= skipUntil) {
        rowMap.set(columnId, {
          rowSpan: existing?.rowSpan ?? 1,
          colSpan: 0,
        });
        return;
      }

      const meta = cell.column.columnDef.meta as
        | CellMergeMeta<TData>
        | undefined;
      const colSpanCfg = meta?.colSpan;
      if (typeof colSpanCfg === "function") {
        const colSpan = colSpanCfg({
          row,
          rows,
          rowIndex,
          column: cell.column,
        });
        if (colSpan === 0) {
          rowMap.set(columnId, {
            rowSpan: existing?.rowSpan ?? 1,
            colSpan: 0,
          });
        } else if (colSpan > 1) {
          rowMap.set(columnId, {
            rowSpan: existing?.rowSpan ?? 1,
            colSpan,
          });
          skipUntil = cellIndex + colSpan - 1;
        }
      }
    });
  });

  return map;
}
