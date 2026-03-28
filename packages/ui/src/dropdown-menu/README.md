---
category: Components
title: DropdownMenu 下拉菜单
subtitle: DropdownMenu 下拉菜单
demo:
  cols: 1
group:
  title: 导航
  order: 2
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
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuCheckboxItem,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuSub,
  DropdownMenuSubTrigger,
  DropdownMenuSubContent,
  DropdownMenuShortcut,
} from "lynote-ui";
```

:::

下拉菜单组件，用于显示上下文菜单或下拉选项。

## 代码演示

<code src="./demos/base.tsx">基本用法</code>

## API

### DropdownMenu

下拉菜单的根容器组件。

| 参数         | 说明             | 类型                                                      | 默认值 |
| ------------ | ---------------- | --------------------------------------------------------- | ------ |
| open         | 是否打开         | `boolean`                                                 | -      |
| defaultOpen  | 默认是否打开     | `boolean`                                                 | -      |
| onOpenChange | 打开状态变化回调 | `(open: boolean) => void`                                 | -      |
| ...props     | 其他原生属性     | `React.ComponentProps<typeof DropdownMenuPrimitive.Root>` | -      |

### DropdownMenuTrigger

触发下拉菜单的元素。

| 参数     | 说明         | 类型                                                         | 默认值 |
| -------- | ------------ | ------------------------------------------------------------ | ------ |
| ...props | 其他原生属性 | `React.ComponentProps<typeof DropdownMenuPrimitive.Trigger>` | -      |

### DropdownMenuContent

下拉菜单的内容区域。

| 参数       | 说明             | 类型                                                         | 默认值 |
| ---------- | ---------------- | ------------------------------------------------------------ | ------ |
| sideOffset | 与触发元素的距离 | `number`                                                     | `4`    |
| portal     | 是否使用 Portal  | `boolean`                                                    | `true` |
| className  | 自定义类名       | `string`                                                     | -      |
| ...props   | 其他原生属性     | `React.ComponentProps<typeof DropdownMenuPrimitive.Content>` | -      |

### DropdownMenuItem

下拉菜单项。

| 参数      | 说明         | 类型                                                      | 默认值      |
| --------- | ------------ | --------------------------------------------------------- | ----------- |
| variant   | 菜单项变体   | `"default" \| "destructive"`                              | `"default"` |
| inset     | 是否内缩     | `boolean`                                                 | -           |
| className | 自定义类名   | `string`                                                  | -           |
| ...props  | 其他原生属性 | `React.ComponentProps<typeof DropdownMenuPrimitive.Item>` | -           |

### DropdownMenuCheckboxItem

下拉菜单复选框项。

| 参数            | 说明             | 类型                                                              | 默认值 |
| --------------- | ---------------- | ----------------------------------------------------------------- | ------ |
| checked         | 是否选中         | `boolean`                                                         | -      |
| onCheckedChange | 选中状态变化回调 | `(checked: boolean) => void`                                      | -      |
| className       | 自定义类名       | `string`                                                          | -      |
| ...props        | 其他原生属性     | `React.ComponentProps<typeof DropdownMenuPrimitive.CheckboxItem>` | -      |

### DropdownMenuRadioGroup

下拉菜单单选组。

| 参数          | 说明         | 类型                                                            | 默认值 |
| ------------- | ------------ | --------------------------------------------------------------- | ------ |
| value         | 当前值       | `string`                                                        | -      |
| onValueChange | 值变化回调   | `(value: string) => void`                                       | -      |
| ...props      | 其他原生属性 | `React.ComponentProps<typeof DropdownMenuPrimitive.RadioGroup>` | -      |

### DropdownMenuRadioItem

下拉菜单单选项。

| 参数      | 说明         | 类型                                                           | 默认值 |
| --------- | ------------ | -------------------------------------------------------------- | ------ |
| value     | 选项值       | `string`                                                       | -      |
| className | 自定义类名   | `string`                                                       | -      |
| ...props  | 其他原生属性 | `React.ComponentProps<typeof DropdownMenuPrimitive.RadioItem>` | -      |

### DropdownMenuLabel

下拉菜单标签。

| 参数      | 说明         | 类型                                                       | 默认值 |
| --------- | ------------ | ---------------------------------------------------------- | ------ |
| inset     | 是否内缩     | `boolean`                                                  | -      |
| className | 自定义类名   | `string`                                                   | -      |
| ...props  | 其他原生属性 | `React.ComponentProps<typeof DropdownMenuPrimitive.Label>` | -      |

### DropdownMenuSeparator

下拉菜单分隔符。

| 参数      | 说明         | 类型                                                           | 默认值 |
| --------- | ------------ | -------------------------------------------------------------- | ------ |
| className | 自定义类名   | `string`                                                       | -      |
| ...props  | 其他原生属性 | `React.ComponentProps<typeof DropdownMenuPrimitive.Separator>` | -      |

### DropdownMenuShortcut

下拉菜单快捷键提示。

| 参数      | 说明               | 类型                           | 默认值 |
| --------- | ------------------ | ------------------------------ | ------ |
| className | 自定义类名         | `string`                       | -      |
| ...props  | 其他原生 span 属性 | `React.ComponentProps<"span">` | -      |

### DropdownMenuSub

下拉菜单子菜单。

| 参数     | 说明         | 类型                                                     | 默认值 |
| -------- | ------------ | -------------------------------------------------------- | ------ |
| ...props | 其他原生属性 | `React.ComponentProps<typeof DropdownMenuPrimitive.Sub>` | -      |

### DropdownMenuSubTrigger

下拉菜单子菜单触发器。

| 参数      | 说明         | 类型                                                            | 默认值 |
| --------- | ------------ | --------------------------------------------------------------- | ------ |
| inset     | 是否内缩     | `boolean`                                                       | -      |
| className | 自定义类名   | `string`                                                        | -      |
| ...props  | 其他原生属性 | `React.ComponentProps<typeof DropdownMenuPrimitive.SubTrigger>` | -      |

### DropdownMenuSubContent

下拉菜单子菜单内容。

| 参数      | 说明         | 类型                                                            | 默认值 |
| --------- | ------------ | --------------------------------------------------------------- | ------ |
| className | 自定义类名   | `string`                                                        | -      |
| ...props  | 其他原生属性 | `React.ComponentProps<typeof DropdownMenuPrimitive.SubContent>` | -      |
