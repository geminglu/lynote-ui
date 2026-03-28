---
category: Components
title: Drawer 抽屉
subtitle: Drawer 抽屉
demo:
  cols: 1
group:
  title: 反馈
  order: 6
nav: 组件
toc: content
background: #111
compact: true
---

## 安装

:::code-group

```bash [npm]
npm install lynote-ui
```

```bash [yarn]
yarn add lynote-ui
```

```bash [pnpm]
pnpm add lynote-ui
```

:::

## 导入

:::code-group

```ts [单个] | pure
import {
  Drawer,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "lynote-ui";
```

```ts [全局] | pure
import {
  Drawer,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "gml-ui";
```

:::

抽屉组件，用于从屏幕边缘滑出的面板。

## 代码演示

<code src="./demos/base.tsx">基本用法</code>

## API

### Drawer

抽屉的根容器组件。

| 参数         | 说明             | 类型                                                | 默认值     |
| ------------ | ---------------- | --------------------------------------------------- | ---------- |
| open         | 是否打开         | `boolean`                                           | -          |
| defaultOpen  | 默认是否打开     | `boolean`                                           | -          |
| onOpenChange | 打开状态变化回调 | `(open: boolean) => void`                           | -          |
| direction    | 抽屉方向         | `"top" \| "bottom" \| "left" \| "right"`            | `"bottom"` |
| ...props     | 其他原生属性     | `React.ComponentProps<typeof DrawerPrimitive.Root>` | -          |

### DrawerTrigger

触发抽屉的按钮。

| 参数     | 说明         | 类型                                                   | 默认值 |
| -------- | ------------ | ------------------------------------------------------ | ------ |
| ...props | 其他原生属性 | `React.ComponentProps<typeof DrawerPrimitive.Trigger>` | -      |

### DrawerContent

抽屉的内容区域。

| 参数      | 说明         | 类型                                                   | 默认值 |
| --------- | ------------ | ------------------------------------------------------ | ------ |
| className | 自定义类名   | `string`                                               | -      |
| ...props  | 其他原生属性 | `React.ComponentProps<typeof DrawerPrimitive.Content>` | -      |

### DrawerHeader

抽屉的头部区域。

| 参数      | 说明              | 类型                          | 默认值 |
| --------- | ----------------- | ----------------------------- | ------ |
| className | 自定义类名        | `string`                      | -      |
| ...props  | 其他原生 div 属性 | `React.ComponentProps<"div">` | -      |

### DrawerFooter

抽屉的底部区域。

| 参数      | 说明              | 类型                          | 默认值 |
| --------- | ----------------- | ----------------------------- | ------ |
| className | 自定义类名        | `string`                      | -      |
| ...props  | 其他原生 div 属性 | `React.ComponentProps<"div">` | -      |

### DrawerTitle

抽屉的标题。

| 参数      | 说明         | 类型                                                 | 默认值 |
| --------- | ------------ | ---------------------------------------------------- | ------ |
| className | 自定义类名   | `string`                                             | -      |
| ...props  | 其他原生属性 | `React.ComponentProps<typeof DrawerPrimitive.Title>` | -      |

### DrawerDescription

抽屉的描述内容。

| 参数      | 说明         | 类型                                                       | 默认值 |
| --------- | ------------ | ---------------------------------------------------------- | ------ |
| className | 自定义类名   | `string`                                                   | -      |
| ...props  | 其他原生属性 | `React.ComponentProps<typeof DrawerPrimitive.Description>` | -      |
