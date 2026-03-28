---
category: Components
title: AlertDialog 警告对话框
subtitle: AlertDialog 警告对话框
demo:
  cols: 1
group:
  title: 反馈
  order: 4
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
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "lynote-ui";
```

```ts [全局] | pure
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "gml-ui";
```

:::

警告对话框组件，用于显示需要用户确认的重要操作。

## 代码演示

<code src="./demos/base.tsx">基本用法</code>

## API

### AlertDialog

警告对话框的根容器组件。

| 参数         | 说明             | 类型                                                     | 默认值 |
| ------------ | ---------------- | -------------------------------------------------------- | ------ |
| open         | 是否打开         | `boolean`                                                | -      |
| defaultOpen  | 默认是否打开     | `boolean`                                                | -      |
| onOpenChange | 打开状态变化回调 | `(open: boolean) => void`                                | -      |
| ...props     | 其他原生属性     | `React.ComponentProps<typeof AlertDialogPrimitive.Root>` | -      |

### AlertDialogTrigger

触发警告对话框的按钮。

| 参数     | 说明         | 类型                                                        | 默认值 |
| -------- | ------------ | ----------------------------------------------------------- | ------ |
| ...props | 其他原生属性 | `React.ComponentProps<typeof AlertDialogPrimitive.Trigger>` | -      |

### AlertDialogContent

警告对话框的内容区域。

| 参数      | 说明         | 类型                                                        | 默认值 |
| --------- | ------------ | ----------------------------------------------------------- | ------ |
| className | 自定义类名   | `string`                                                    | -      |
| ...props  | 其他原生属性 | `React.ComponentProps<typeof AlertDialogPrimitive.Content>` | -      |

### AlertDialogHeader

警告对话框的头部区域。

| 参数      | 说明              | 类型                          | 默认值 |
| --------- | ----------------- | ----------------------------- | ------ |
| className | 自定义类名        | `string`                      | -      |
| ...props  | 其他原生 div 属性 | `React.ComponentProps<"div">` | -      |

### AlertDialogFooter

警告对话框的底部区域。

| 参数      | 说明              | 类型                          | 默认值 |
| --------- | ----------------- | ----------------------------- | ------ |
| className | 自定义类名        | `string`                      | -      |
| ...props  | 其他原生 div 属性 | `React.ComponentProps<"div">` | -      |

### AlertDialogTitle

警告对话框的标题。

| 参数      | 说明         | 类型                                                      | 默认值 |
| --------- | ------------ | --------------------------------------------------------- | ------ |
| className | 自定义类名   | `string`                                                  | -      |
| ...props  | 其他原生属性 | `React.ComponentProps<typeof AlertDialogPrimitive.Title>` | -      |

### AlertDialogDescription

警告对话框的描述内容。

| 参数      | 说明         | 类型                                                            | 默认值 |
| --------- | ------------ | --------------------------------------------------------------- | ------ |
| className | 自定义类名   | `string`                                                        | -      |
| ...props  | 其他原生属性 | `React.ComponentProps<typeof AlertDialogPrimitive.Description>` | -      |

### AlertDialogAction

警告对话框的确认按钮。

| 参数      | 说明         | 类型                                                       | 默认值 |
| --------- | ------------ | ---------------------------------------------------------- | ------ |
| className | 自定义类名   | `string`                                                   | -      |
| ...props  | 其他原生属性 | `React.ComponentProps<typeof AlertDialogPrimitive.Action>` | -      |

### AlertDialogCancel

警告对话框的取消按钮。

| 参数      | 说明         | 类型                                                       | 默认值 |
| --------- | ------------ | ---------------------------------------------------------- | ------ |
| className | 自定义类名   | `string`                                                   | -      |
| ...props  | 其他原生属性 | `React.ComponentProps<typeof AlertDialogPrimitive.Cancel>` | -      |
