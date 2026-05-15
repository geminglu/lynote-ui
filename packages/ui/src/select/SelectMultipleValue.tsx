import { XIcon } from "lucide-react";
import * as React from "react";

import { Badge } from "../badge";
import { SelectContext } from "./context";
import type { SelectValueProps } from "./type";
import {
  createRemoveEventDetails,
  reactNodeToString,
  resolveSelectedItem,
  resolveSelectedLabel,
} from "./utils";

function SelectMultipleValue({
  placeholder,
  renderOverflow,
  value,
}: {
  placeholder?: React.ReactNode;
  renderOverflow?: SelectValueProps["renderOverflow"];
  value: unknown;
}) {
  const selectContext = React.useContext(SelectContext);
  const containerRef = React.useRef<HTMLSpanElement>(null);
  const measureRef = React.useRef<HTMLSpanElement>(null);
  const values = React.useMemo(
    () => (Array.isArray(value) ? value : []),
    [value],
  );
  const [visibleCount, setVisibleCount] = React.useState(values.length);

  const updateVisibleCount = React.useCallback(() => {
    const container = containerRef.current;

    if (!container || values.length === 0) {
      setVisibleCount(values.length);
      return;
    }

    const containerWidth = container.clientWidth;
    const gap = Number.parseFloat(getComputedStyle(container).columnGap) || 0;
    const itemWidths = Array.from(
      measureRef.current?.querySelectorAll<HTMLElement>(
        "[data-select-value-measure]",
      ) ?? [],
      (element) => element.offsetWidth,
    );
    const summaryWidths = Array.from(
      measureRef.current?.querySelectorAll<HTMLElement>(
        "[data-select-summary-measure]",
      ) ?? [],
      (element) => element.offsetWidth,
    );

    let nextVisibleCount = 0;

    for (let count = values.length; count >= 0; count -= 1) {
      const hiddenCount = values.length - count;
      const selectedWidth = itemWidths
        .slice(0, count)
        .reduce((total, width) => total + width, 0);
      const summaryWidth =
        hiddenCount > 0 ? (summaryWidths[hiddenCount - 1] ?? 0) : 0;
      const itemsCount = count + (hiddenCount > 0 ? 1 : 0);
      const totalGap = Math.max(itemsCount - 1, 0) * gap;

      if (selectedWidth + summaryWidth + totalGap <= containerWidth) {
        nextVisibleCount = count;
        break;
      }
    }

    setVisibleCount(nextVisibleCount);
  }, [values]);

  React.useLayoutEffect(() => {
    updateVisibleCount();

    const container = containerRef.current;

    if (!container) {
      return;
    }

    const resizeObserver = new ResizeObserver(updateVisibleCount);
    resizeObserver.observe(container);

    return () => {
      resizeObserver.disconnect();
    };
  }, [updateVisibleCount]);

  if (!selectContext || values.length === 0) {
    return placeholder ? (
      <span className="text-muted-foreground">{placeholder}</span>
    ) : null;
  }

  const labels = values.map((itemValue) =>
    resolveSelectedLabel(itemValue, selectContext),
  );
  const selectedItems = values.map((itemValue) =>
    resolveSelectedItem(itemValue, selectContext),
  );
  const visibleItemValues = values.slice(0, visibleCount);
  const hiddenCount = values.length - visibleCount;
  const renderOverflowContent = (count: number) => {
    const hiddenItems = selectedItems.slice(values.length - count);
    const visibleItems = selectedItems.slice(0, values.length - count);

    if (renderOverflow) {
      return renderOverflow({
        hiddenCount: count,
        hiddenValues: hiddenItems,
        visibleValues: visibleItems,
      });
    }

    return (
      <Badge variant="secondary" className="shrink-0">
        +{count}...
      </Badge>
    );
  };

  const renderValueBadge = (
    itemValue: unknown,
    label: React.ReactNode,
    index: number,
    measure?: boolean,
  ) => {
    const labelText = reactNodeToString(label);

    return (
      <Badge
        key={index}
        data-select-value-measure={measure ? "" : undefined}
        variant="secondary"
        className="max-w-full shrink-0"
      >
        <span className="truncate">{label}</span>
        <span
          aria-label={`移除${labelText}`}
          data-icon="inline-end"
          role="button"
          className="hover:bg-muted-foreground/20 inline-flex size-3.5 cursor-pointer items-center justify-center rounded-full transition"
          onPointerDown={(event) => {
            event.preventDefault();
            event.stopPropagation();
          }}
          onClick={(event) => {
            event.preventDefault();
            event.stopPropagation();

            if (selectContext.disabled || selectContext.readOnly) {
              return;
            }

            const nextValue = values.filter((selectedValue) => {
              if (
                selectContext.isItemEqualToValue?.(itemValue, selectedValue)
              ) {
                return false;
              }

              return !Object.is(selectedValue, itemValue);
            });

            selectContext.setValue(nextValue, createRemoveEventDetails(event));
          }}
        >
          <XIcon className="size-3" />
        </span>
      </Badge>
    );
  };

  return (
    <span
      ref={containerRef}
      className="relative flex min-w-0 flex-1 items-center gap-1 overflow-hidden"
    >
      {visibleItemValues.map((itemValue, index) =>
        renderValueBadge(itemValue, labels[index], index),
      )}
      {hiddenCount > 0 ? renderOverflowContent(hiddenCount) : null}
      <span
        ref={measureRef}
        aria-hidden="true"
        className="pointer-events-none invisible absolute flex items-center gap-1 whitespace-nowrap"
      >
        {values.map((itemValue, index) =>
          renderValueBadge(itemValue, labels[index], index, true),
        )}
        {values.map((_, index) => (
          <span
            key={index}
            data-select-summary-measure=""
            className="inline-flex shrink-0"
          >
            {renderOverflowContent(index + 1)}
          </span>
        ))}
      </span>
    </span>
  );
}

export { SelectMultipleValue };
