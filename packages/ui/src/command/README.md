---
category: Components
title: Command 命令面板
subtitle: Command 命令面板
demo:
  cols: 1
group:
  title: 导航
  order: 3
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
  Command,
  CommandInput,
  CommandList,
  CommandEmpty,
  CommandGroup,
  CommandItem,
  CommandSeparator,
  CommandShortcut,
  CommandDialog,
} from "lynote-ui";
```

:::

命令面板组件，用于快速搜索和执行命令。

## 代码演示

<code src="./demos/base.tsx">基本用法</code>

## API

### Command

命令面板的根容器组件。

| 参数      | 说明         | 类型                                            | 默认值 |
| --------- | ------------ | ----------------------------------------------- | ------ |
| className | 自定义类名   | `string`                                        | -      |
| ...props  | 其他原生属性 | `React.ComponentProps<typeof CommandPrimitive>` | -      |

### CommandInput

命令面板输入框。

| 参数        | 说明         | 类型                                                  | 默认值 |
| ----------- | ------------ | ----------------------------------------------------- | ------ |
| placeholder | 占位符       | `string`                                              | -      |
| ...props    | 其他原生属性 | `React.ComponentProps<typeof CommandPrimitive.Input>` | -      |

### CommandList

命令面板列表容器。

| 参数     | 说明         | 类型                                                 | 默认值 |
| -------- | ------------ | ---------------------------------------------------- | ------ |
| ...props | 其他原生属性 | `React.ComponentProps<typeof CommandPrimitive.List>` | -      |

### CommandEmpty

命令面板空状态。

| 参数     | 说明         | 类型                                                  | 默认值 |
| -------- | ------------ | ----------------------------------------------------- | ------ |
| ...props | 其他原生属性 | `React.ComponentProps<typeof CommandPrimitive.Empty>` | -      |

### CommandGroup

命令面板分组。

| 参数     | 说明         | 类型                                                  | 默认值 |
| -------- | ------------ | ----------------------------------------------------- | ------ |
| heading  | 分组标题     | `string`                                              | -      |
| ...props | 其他原生属性 | `React.ComponentProps<typeof CommandPrimitive.Group>` | -      |

### CommandItem

命令面板项。

| 参数     | 说明         | 类型                                                 | 默认值 |
| -------- | ------------ | ---------------------------------------------------- | ------ |
| value    | 项的值       | `string`                                             | -      |
| ...props | 其他原生属性 | `React.ComponentProps<typeof CommandPrimitive.Item>` | -      |

### CommandSeparator

命令面板分隔符。

| 参数     | 说明         | 类型                                                      | 默认值 |
| -------- | ------------ | --------------------------------------------------------- | ------ |
| ...props | 其他原生属性 | `React.ComponentProps<typeof CommandPrimitive.Separator>` | -      |

### CommandShortcut

命令面板快捷键提示。

| 参数     | 说明         | 类型                          | 默认值 |
| -------- | ------------ | ----------------------------- | ------ |
| ...props | 其他原生属性 | `React.ComponentProps<"kbd">` | -      |

### CommandDialog

命令面板对话框。

| 参数            | 说明             | 类型                                  | 默认值                             |
| --------------- | ---------------- | ------------------------------------- | ---------------------------------- |
| title           | 对话框标题       | `string`                              | `"Command Palette"`                |
| description     | 对话框描述       | `string`                              | `"Search for a command to run..."` |
| showCloseButton | 是否显示关闭按钮 | `boolean`                             | `true`                             |
| className       | 自定义类名       | `string`                              | -                                  |
| ...props        | 其他 Dialog 属性 | `React.ComponentProps<typeof Dialog>` | -                                  |
