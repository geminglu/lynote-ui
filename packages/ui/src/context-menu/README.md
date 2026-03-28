---
category: Components
title: ContextMenu 上下文菜单
subtitle: ContextMenu 上下文菜单
demo:
  cols: 1
group:
  title: 导航
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
  ContextMenu,
  ContextMenuTrigger,
  ContextMenuContent,
  ContextMenuItem,
  ContextMenuLabel,
  ContextMenuSeparator,
  ContextMenuCheckboxItem,
  ContextMenuRadioGroup,
  ContextMenuRadioItem,
  ContextMenuSub,
  ContextMenuSubTrigger,
  ContextMenuSubContent,
  ContextMenuShortcut,
} from "lynote-ui";
```

:::

上下文菜单组件，用于在右键点击时显示菜单。

## 代码演示

<code src="./demos/base.tsx">基本用法</code>

## API

### ContextMenu

上下文菜单的根容器组件。

| 参数     | 说明         | 类型                                                     | 默认值 |
| -------- | ------------ | -------------------------------------------------------- | ------ |
| ...props | 其他原生属性 | `React.ComponentProps<typeof ContextMenuPrimitive.Root>` | -      |

### ContextMenuTrigger

触发上下文菜单的元素。

| 参数     | 说明         | 类型                                                        | 默认值 |
| -------- | ------------ | ----------------------------------------------------------- | ------ |
| ...props | 其他原生属性 | `React.ComponentProps<typeof ContextMenuPrimitive.Trigger>` | -      |

### ContextMenuContent

上下文菜单的内容区域。

| 参数      | 说明         | 类型                                                        | 默认值 |
| --------- | ------------ | ----------------------------------------------------------- | ------ |
| className | 自定义类名   | `string`                                                    | -      |
| ...props  | 其他原生属性 | `React.ComponentProps<typeof ContextMenuPrimitive.Content>` | -      |

### ContextMenuItem

上下文菜单项。

| 参数      | 说明         | 类型                                                     | 默认值      |
| --------- | ------------ | -------------------------------------------------------- | ----------- |
| variant   | 菜单项变体   | `"default" \| "destructive"`                             | `"default"` |
| inset     | 是否内缩     | `boolean`                                                | -           |
| className | 自定义类名   | `string`                                                 | -           |
| ...props  | 其他原生属性 | `React.ComponentProps<typeof ContextMenuPrimitive.Item>` | -           |

### ContextMenuCheckboxItem

上下文菜单复选框项。

| 参数            | 说明             | 类型                                                             | 默认值 |
| --------------- | ---------------- | ---------------------------------------------------------------- | ------ |
| checked         | 是否选中         | `boolean`                                                        | -      |
| onCheckedChange | 选中状态变化回调 | `(checked: boolean) => void`                                     | -      |
| className       | 自定义类名       | `string`                                                         | -      |
| ...props        | 其他原生属性     | `React.ComponentProps<typeof ContextMenuPrimitive.CheckboxItem>` | -      |

### ContextMenuRadioGroup

上下文菜单单选组。

| 参数          | 说明         | 类型                                                           | 默认值 |
| ------------- | ------------ | -------------------------------------------------------------- | ------ |
| value         | 当前值       | `string`                                                       | -      |
| onValueChange | 值变化回调   | `(value: string) => void`                                      | -      |
| ...props      | 其他原生属性 | `React.ComponentProps<typeof ContextMenuPrimitive.RadioGroup>` | -      |

### ContextMenuRadioItem

上下文菜单单选项。

| 参数      | 说明         | 类型                                                          | 默认值 |
| --------- | ------------ | ------------------------------------------------------------- | ------ |
| value     | 选项值       | `string`                                                      | -      |
| className | 自定义类名   | `string`                                                      | -      |
| ...props  | 其他原生属性 | `React.ComponentProps<typeof ContextMenuPrimitive.RadioItem>` | -      |

### ContextMenuLabel

上下文菜单标签。

| 参数      | 说明         | 类型                                                      | 默认值 |
| --------- | ------------ | --------------------------------------------------------- | ------ |
| inset     | 是否内缩     | `boolean`                                                 | -      |
| className | 自定义类名   | `string`                                                  | -      |
| ...props  | 其他原生属性 | `React.ComponentProps<typeof ContextMenuPrimitive.Label>` | -      |

### ContextMenuSeparator

上下文菜单分隔符。

| 参数      | 说明         | 类型                                                          | 默认值 |
| --------- | ------------ | ------------------------------------------------------------- | ------ |
| className | 自定义类名   | `string`                                                      | -      |
| ...props  | 其他原生属性 | `React.ComponentProps<typeof ContextMenuPrimitive.Separator>` | -      |

### ContextMenuShortcut

上下文菜单快捷键提示。

| 参数      | 说明               | 类型                           | 默认值 |
| --------- | ------------------ | ------------------------------ | ------ |
| className | 自定义类名         | `string`                       | -      |
| ...props  | 其他原生 span 属性 | `React.ComponentProps<"span">` | -      |

### ContextMenuSub

上下文菜单子菜单。

| 参数     | 说明         | 类型                                                    | 默认值 |
| -------- | ------------ | ------------------------------------------------------- | ------ |
| ...props | 其他原生属性 | `React.ComponentProps<typeof ContextMenuPrimitive.Sub>` | -      |

### ContextMenuSubTrigger

上下文菜单子菜单触发器。

| 参数      | 说明         | 类型                                                           | 默认值 |
| --------- | ------------ | -------------------------------------------------------------- | ------ |
| inset     | 是否内缩     | `boolean`                                                      | -      |
| className | 自定义类名   | `string`                                                       | -      |
| ...props  | 其他原生属性 | `React.ComponentProps<typeof ContextMenuPrimitive.SubTrigger>` | -      |

### ContextMenuSubContent

上下文菜单子菜单内容。

| 参数      | 说明         | 类型                                                           | 默认值 |
| --------- | ------------ | -------------------------------------------------------------- | ------ |
| className | 自定义类名   | `string`                                                       | -      |
| ...props  | 其他原生属性 | `React.ComponentProps<typeof ContextMenuPrimitive.SubContent>` | -      |
