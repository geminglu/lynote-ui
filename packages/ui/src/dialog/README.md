---
category: Components
title: Dialog 对话框
subtitle: Dialog 对话框
demo:
  cols: 1
group:
  title: 反馈
  order: 5
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
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "lynote-ui";
```

```ts [全局] | pure
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "gml-ui";
```

:::

对话框组件，用于显示模态对话框。

## 代码演示

<code src="./demos/base.tsx">基本用法</code>

## API

### Dialog

对话框的根容器组件。

| 参数         | 说明             | 类型                                                | 默认值 |
| ------------ | ---------------- | --------------------------------------------------- | ------ |
| open         | 是否打开         | `boolean`                                           | -      |
| defaultOpen  | 默认是否打开     | `boolean`                                           | -      |
| onOpenChange | 打开状态变化回调 | `(open: boolean) => void`                           | -      |
| ...props     | 其他原生属性     | `React.ComponentProps<typeof DialogPrimitive.Root>` | -      |

### DialogTrigger

触发对话框的按钮。

| 参数     | 说明         | 类型                                                   | 默认值 |
| -------- | ------------ | ------------------------------------------------------ | ------ |
| ...props | 其他原生属性 | `React.ComponentProps<typeof DialogPrimitive.Trigger>` | -      |

### DialogContent

对话框的内容区域。

| 参数            | 说明             | 类型                                                   | 默认值 |
| --------------- | ---------------- | ------------------------------------------------------ | ------ |
| showCloseButton | 是否显示关闭按钮 | `boolean`                                              | `true` |
| className       | 自定义类名       | `string`                                               | -      |
| ...props        | 其他原生属性     | `React.ComponentProps<typeof DialogPrimitive.Content>` | -      |

### DialogHeader

对话框的头部区域。

| 参数      | 说明              | 类型                          | 默认值 |
| --------- | ----------------- | ----------------------------- | ------ |
| className | 自定义类名        | `string`                      | -      |
| ...props  | 其他原生 div 属性 | `React.ComponentProps<"div">` | -      |

### DialogFooter

对话框的底部区域。

| 参数      | 说明              | 类型                          | 默认值 |
| --------- | ----------------- | ----------------------------- | ------ |
| className | 自定义类名        | `string`                      | -      |
| ...props  | 其他原生 div 属性 | `React.ComponentProps<"div">` | -      |

### DialogTitle

对话框的标题。

| 参数      | 说明         | 类型                                                 | 默认值 |
| --------- | ------------ | ---------------------------------------------------- | ------ |
| className | 自定义类名   | `string`                                             | -      |
| ...props  | 其他原生属性 | `React.ComponentProps<typeof DialogPrimitive.Title>` | -      |

### DialogDescription

对话框的描述内容。

| 参数      | 说明         | 类型                                                       | 默认值 |
| --------- | ------------ | ---------------------------------------------------------- | ------ |
| className | 自定义类名   | `string`                                                   | -      |
| ...props  | 其他原生属性 | `React.ComponentProps<typeof DialogPrimitive.Description>` | -      |
