---
category: Components
title: Sheet 侧边栏
subtitle: Sheet 侧边栏
demo:
  cols: 1
group:
  title: 反馈
  order: 7
nav: 组件
toc: content
background: #111
compact: true
---

侧边栏组件，用于从屏幕边缘滑出的面板。

## 导入

```ts [单个] | pure
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "lynote-ui";
```

## 代码演示

<code src="./demos/base.tsx">基本用法</code>

<code src="./demos/side.tsx" description="Use the side prop on SheetContent to set the edge of the screen where the sheet appears. Values are top, right, bottom, or left.">侧边栏位置</code>

## API

### Sheet

侧边栏的根容器组件。

| 参数         | 说明             | 类型                                               | 默认值 |
| ------------ | ---------------- | -------------------------------------------------- | ------ |
| open         | 是否打开         | `boolean`                                          | -      |
| defaultOpen  | 默认是否打开     | `boolean`                                          | -      |
| onOpenChange | 打开状态变化回调 | `(open: boolean) => void`                          | -      |
| ...props     | 其他原生属性     | `React.ComponentProps<typeof SheetPrimitive.Root>` | -      |

### SheetTrigger

触发侧边栏的按钮。

| 参数     | 说明         | 类型                                                  | 默认值 |
| -------- | ------------ | ----------------------------------------------------- | ------ |
| ...props | 其他原生属性 | `React.ComponentProps<typeof SheetPrimitive.Trigger>` | -      |

### SheetContent

侧边栏的内容区域。

| 参数      | 说明         | 类型                                                  | 默认值    |
| --------- | ------------ | ----------------------------------------------------- | --------- |
| side      | 侧边栏位置   | `"top" \| "right" \| "bottom" \| "left"`              | `"right"` |
| className | 自定义类名   | `string`                                              | -         |
| ...props  | 其他原生属性 | `React.ComponentProps<typeof SheetPrimitive.Content>` | -         |

### SheetHeader

侧边栏的头部区域。

| 参数      | 说明              | 类型                          | 默认值 |
| --------- | ----------------- | ----------------------------- | ------ |
| className | 自定义类名        | `string`                      | -      |
| ...props  | 其他原生 div 属性 | `React.ComponentProps<"div">` | -      |

### SheetFooter

侧边栏的底部区域。

| 参数      | 说明              | 类型                          | 默认值 |
| --------- | ----------------- | ----------------------------- | ------ |
| className | 自定义类名        | `string`                      | -      |
| ...props  | 其他原生 div 属性 | `React.ComponentProps<"div">` | -      |

### SheetTitle

侧边栏的标题。

| 参数      | 说明         | 类型                                                | 默认值 |
| --------- | ------------ | --------------------------------------------------- | ------ |
| className | 自定义类名   | `string`                                            | -      |
| ...props  | 其他原生属性 | `React.ComponentProps<typeof SheetPrimitive.Title>` | -      |

### SheetDescription

侧边栏的描述内容。

| 参数      | 说明         | 类型                                                      | 默认值 |
| --------- | ------------ | --------------------------------------------------------- | ------ |
| className | 自定义类名   | `string`                                                  | -      |
| ...props  | 其他原生属性 | `React.ComponentProps<typeof SheetPrimitive.Description>` | -      |
