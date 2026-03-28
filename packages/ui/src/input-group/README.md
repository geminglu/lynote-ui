---
category: Components
title: InputGroup 输入框组
subtitle: InputGroup 输入框组
demo:
  cols: 1
group:
  title: 表单
  order: 12
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
  InputGroup,
  InputGroupAddon,
  InputGroupButton,
  InputGroupInput,
  InputGroupText,
  InputGroupTextarea,
} from "lynote-ui";
```

:::

输入框组组件，用于将输入框与附加元素（如按钮、图标、文本）组合在一起。

## 代码演示

<code src="./demos/base.tsx">基本用法</code>

## API

### InputGroup

输入框组的根容器组件。

| 参数      | 说明              | 类型                          | 默认值 |
| --------- | ----------------- | ----------------------------- | ------ |
| className | 自定义类名        | `string`                      | -      |
| ...props  | 其他原生 div 属性 | `React.ComponentProps<"div">` | -      |

### InputGroupAddon

输入框组的附加元素容器。

| 参数      | 说明              | 类型                                                             | 默认值           |
| --------- | ----------------- | ---------------------------------------------------------------- | ---------------- |
| align     | 对齐方式          | `"inline-start" \| "inline-end" \| "block-start" \| "block-end"` | `"inline-start"` |
| className | 自定义类名        | `string`                                                         | -                |
| ...props  | 其他原生 div 属性 | `React.ComponentProps<"div">`                                    | -                |

### InputGroupButton

输入框组中的按钮。

| 参数      | 说明             | 类型                                                                          | 默认值    |
| --------- | ---------------- | ----------------------------------------------------------------------------- | --------- |
| size      | 按钮尺寸         | `"xs" \| "sm" \| "icon-xs" \| "icon-sm"`                                      | `"xs"`    |
| variant   | 按钮变体         | `"default" \| "destructive" \| "outline" \| "secondary" \| "ghost" \| "link"` | `"ghost"` |
| className | 自定义类名       | `string`                                                                      | -         |
| ...props  | 其他 Button 属性 | `React.ComponentProps<typeof Button>`                                         | -         |

### InputGroupInput

输入框组中的输入框。

| 参数      | 说明            | 类型                                 | 默认值 |
| --------- | --------------- | ------------------------------------ | ------ |
| className | 自定义类名      | `string`                             | -      |
| ...props  | 其他 Input 属性 | `React.ComponentProps<typeof Input>` | -      |

### InputGroupText

输入框组中的文本。

| 参数      | 说明               | 类型                           | 默认值 |
| --------- | ------------------ | ------------------------------ | ------ |
| className | 自定义类名         | `string`                       | -      |
| ...props  | 其他原生 span 属性 | `React.ComponentProps<"span">` | -      |

### InputGroupTextarea

输入框组中的文本域。

| 参数      | 说明               | 类型                                    | 默认值 |
| --------- | ------------------ | --------------------------------------- | ------ |
| className | 自定义类名         | `string`                                | -      |
| ...props  | 其他 Textarea 属性 | `React.ComponentProps<typeof Textarea>` | -      |
