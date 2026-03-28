---
category: Components
title: Menubar 菜单栏
subtitle: Menubar 菜单栏
demo:
  cols: 1
group:
  title: 导航
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
  Menubar,
  MenubarMenu,
  MenubarTrigger,
  MenubarContent,
  MenubarItem,
  MenubarLabel,
  MenubarSeparator,
  MenubarCheckboxItem,
  MenubarRadioGroup,
  MenubarRadioItem,
  MenubarSub,
  MenubarSubTrigger,
  MenubarSubContent,
  MenubarShortcut,
} from "lynote-ui";
```

:::

菜单栏组件，用于创建应用程序的顶部菜单栏。

## 代码演示

<code src="./demos/base.tsx">基本用法</code>

## API

### Menubar

菜单栏的根容器组件。

| 参数      | 说明         | 类型                                                 | 默认值 |
| --------- | ------------ | ---------------------------------------------------- | ------ |
| className | 自定义类名   | `string`                                             | -      |
| ...props  | 其他原生属性 | `React.ComponentProps<typeof MenubarPrimitive.Root>` | -      |

### MenubarMenu

菜单栏中的单个菜单。

| 参数     | 说明         | 类型                                                 | 默认值 |
| -------- | ------------ | ---------------------------------------------------- | ------ |
| ...props | 其他原生属性 | `React.ComponentProps<typeof MenubarPrimitive.Menu>` | -      |

### MenubarTrigger

菜单触发器。

| 参数      | 说明         | 类型                                                    | 默认值 |
| --------- | ------------ | ------------------------------------------------------- | ------ |
| className | 自定义类名   | `string`                                                | -      |
| ...props  | 其他原生属性 | `React.ComponentProps<typeof MenubarPrimitive.Trigger>` | -      |

### MenubarContent

菜单内容区域。

| 参数      | 说明         | 类型                                                    | 默认值 |
| --------- | ------------ | ------------------------------------------------------- | ------ |
| className | 自定义类名   | `string`                                                | -      |
| ...props  | 其他原生属性 | `React.ComponentProps<typeof MenubarPrimitive.Content>` | -      |

### MenubarItem

菜单项。

| 参数      | 说明         | 类型                                                 | 默认值      |
| --------- | ------------ | ---------------------------------------------------- | ----------- |
| variant   | 菜单项变体   | `"default" \| "destructive"`                         | `"default"` |
| inset     | 是否内缩     | `boolean`                                            | -           |
| className | 自定义类名   | `string`                                             | -           |
| ...props  | 其他原生属性 | `React.ComponentProps<typeof MenubarPrimitive.Item>` | -           |

### MenubarCheckboxItem

菜单复选框项。

| 参数            | 说明             | 类型                                                         | 默认值 |
| --------------- | ---------------- | ------------------------------------------------------------ | ------ |
| checked         | 是否选中         | `boolean`                                                    | -      |
| onCheckedChange | 选中状态变化回调 | `(checked: boolean) => void`                                 | -      |
| className       | 自定义类名       | `string`                                                     | -      |
| ...props        | 其他原生属性     | `React.ComponentProps<typeof MenubarPrimitive.CheckboxItem>` | -      |

### MenubarRadioGroup

菜单单选组。

| 参数          | 说明         | 类型                                                       | 默认值 |
| ------------- | ------------ | ---------------------------------------------------------- | ------ |
| value         | 当前值       | `string`                                                   | -      |
| onValueChange | 值变化回调   | `(value: string) => void`                                  | -      |
| ...props      | 其他原生属性 | `React.ComponentProps<typeof MenubarPrimitive.RadioGroup>` | -      |

### MenubarRadioItem

菜单单选项。

| 参数      | 说明         | 类型                                                      | 默认值 |
| --------- | ------------ | --------------------------------------------------------- | ------ |
| value     | 选项值       | `string`                                                  | -      |
| className | 自定义类名   | `string`                                                  | -      |
| ...props  | 其他原生属性 | `React.ComponentProps<typeof MenubarPrimitive.RadioItem>` | -      |

### MenubarLabel

菜单标签。

| 参数      | 说明         | 类型                                                  | 默认值 |
| --------- | ------------ | ----------------------------------------------------- | ------ |
| inset     | 是否内缩     | `boolean`                                             | -      |
| className | 自定义类名   | `string`                                              | -      |
| ...props  | 其他原生属性 | `React.ComponentProps<typeof MenubarPrimitive.Label>` | -      |

### MenubarSeparator

菜单分隔符。

| 参数      | 说明         | 类型                                                      | 默认值 |
| --------- | ------------ | --------------------------------------------------------- | ------ |
| className | 自定义类名   | `string`                                                  | -      |
| ...props  | 其他原生属性 | `React.ComponentProps<typeof MenubarPrimitive.Separator>` | -      |

### MenubarShortcut

菜单快捷键提示。

| 参数      | 说明               | 类型                           | 默认值 |
| --------- | ------------------ | ------------------------------ | ------ |
| className | 自定义类名         | `string`                       | -      |
| ...props  | 其他原生 span 属性 | `React.ComponentProps<"span">` | -      |

### MenubarSub

菜单子菜单。

| 参数     | 说明         | 类型                                                | 默认值 |
| -------- | ------------ | --------------------------------------------------- | ------ |
| ...props | 其他原生属性 | `React.ComponentProps<typeof MenubarPrimitive.Sub>` | -      |

### MenubarSubTrigger

菜单子菜单触发器。

| 参数      | 说明         | 类型                                                       | 默认值 |
| --------- | ------------ | ---------------------------------------------------------- | ------ |
| inset     | 是否内缩     | `boolean`                                                  | -      |
| className | 自定义类名   | `string`                                                   | -      |
| ...props  | 其他原生属性 | `React.ComponentProps<typeof MenubarPrimitive.SubTrigger>` | -      |

### MenubarSubContent

菜单子菜单内容。

| 参数      | 说明         | 类型                                                       | 默认值 |
| --------- | ------------ | ---------------------------------------------------------- | ------ |
| className | 自定义类名   | `string`                                                   | -      |
| ...props  | 其他原生属性 | `React.ComponentProps<typeof MenubarPrimitive.SubContent>` | -      |
