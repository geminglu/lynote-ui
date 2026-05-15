import { Select as SelectPrimitive } from "@base-ui/react/select";
import * as React from "react";

type SelectRootProps = SelectPrimitive.Root.Props<unknown, boolean | undefined>;

export type SelectItems = SelectRootProps["items"];

export type SelectLabeledItem = {
  label: React.ReactNode;
  value: unknown;
} & Record<string, unknown>;

export type SelectGroupItem = {
  items: ReadonlyArray<SelectLabeledItem>;
} & Record<string, unknown>;

export type SelectContextValue = {
  disabled?: boolean;
  isItemEqualToValue?: (itemValue: unknown, selectedValue: unknown) => boolean;
  itemToStringLabel?: (itemValue: unknown) => string;
  items?: SelectItems;
  multiple?: boolean;
  readOnly?: boolean;
  setValue: (
    value: unknown,
    eventDetails: SelectPrimitive.Root.ChangeEventDetails,
  ) => void;
};

export type SelectValueOverflowRenderInfo = {
  hiddenCount: number;
  hiddenValues: SelectLabeledItem[];
  visibleValues: SelectLabeledItem[];
};

export type SelectValueProps = SelectPrimitive.Value.Props & {
  /**
   * 多选值溢出时的自定义渲染。
   * 未传入时默认使用 Badge 展示 `+N...`。
   */
  renderOverflow?: (info: SelectValueOverflowRenderInfo) => React.ReactNode;
};
