import { Select as SelectPrimitive } from "@base-ui/react/select";
import * as React from "react";

import type {
  SelectContextValue,
  SelectGroupItem,
  SelectLabeledItem,
} from "./type";

function isGroupedItems(
  items: ReadonlyArray<SelectLabeledItem | SelectGroupItem> | undefined,
): items is ReadonlyArray<SelectGroupItem> {
  return (
    items != null &&
    items.length > 0 &&
    typeof items[0] === "object" &&
    items[0] != null &&
    "items" in items[0]
  );
}

function stringifyAsLabel(
  value: unknown,
  itemToStringLabel?: (itemValue: unknown) => string,
) {
  if (itemToStringLabel && value != null) {
    return itemToStringLabel(value) ?? "";
  }

  if (value && typeof value === "object") {
    if ("label" in value && value.label != null) {
      return String(value.label);
    }

    if ("value" in value) {
      return String(value.value);
    }
  }

  return String(value ?? "");
}

function resolveSelectedLabel(
  value: unknown,
  { items, itemToStringLabel, isItemEqualToValue }: SelectContextValue,
) {
  const fallback = () => stringifyAsLabel(value, itemToStringLabel);

  if (itemToStringLabel && value != null) {
    return itemToStringLabel(value);
  }

  if (value && typeof value === "object" && "label" in value) {
    return value.label as React.ReactNode;
  }

  if (items && !Array.isArray(items)) {
    return (
      (items as Record<string, React.ReactNode>)[String(value)] ?? fallback()
    );
  }

  if (Array.isArray(items)) {
    const flatItems = isGroupedItems(items)
      ? items.flatMap((group) => group.items)
      : items;

    const match = flatItems.find((item) => {
      if (isItemEqualToValue?.(item.value, value)) {
        return true;
      }

      if (Object.is(item.value, value)) {
        return true;
      }

      return (
        value != null &&
        typeof value === "object" &&
        "value" in value &&
        Object.is(item.value, value.value)
      );
    });

    return match?.label ?? fallback();
  }

  return fallback();
}

function resolveSelectedItem(
  value: unknown,
  selectContext: SelectContextValue,
): SelectLabeledItem {
  const { items, isItemEqualToValue } = selectContext;
  const fallback = (): SelectLabeledItem => ({
    label: resolveSelectedLabel(value, selectContext),
    value,
  });

  if (items && !Array.isArray(items)) {
    return {
      label:
        (items as Record<string, React.ReactNode>)[String(value)] ??
        fallback().label,
      value,
    };
  }

  if (Array.isArray(items)) {
    const flatItems = isGroupedItems(items)
      ? items.flatMap((group) => group.items)
      : items;

    const match = flatItems.find((item) => {
      if (isItemEqualToValue?.(item.value, value)) {
        return true;
      }

      if (Object.is(item.value, value)) {
        return true;
      }

      return (
        value != null &&
        typeof value === "object" &&
        "value" in value &&
        Object.is(item.value, value.value)
      );
    });

    if (match) {
      return match;
    }
  }

  return fallback();
}

function reactNodeToString(node: React.ReactNode) {
  if (typeof node === "string" || typeof node === "number") {
    return String(node);
  }

  return "选项";
}

function createRemoveEventDetails(
  event: React.MouseEvent,
): SelectPrimitive.Root.ChangeEventDetails {
  let isCanceled = false;
  let isPropagationAllowed = false;

  return {
    reason: "item-press",
    event: event.nativeEvent,
    trigger: event.currentTarget,
    cancel: () => {
      isCanceled = true;
    },
    allowPropagation: () => {
      isPropagationAllowed = true;
    },
    get isCanceled() {
      return isCanceled;
    },
    get isPropagationAllowed() {
      return isPropagationAllowed;
    },
  };
}

export {
  createRemoveEventDetails,
  reactNodeToString,
  resolveSelectedItem,
  resolveSelectedLabel,
};
