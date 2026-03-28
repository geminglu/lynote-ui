---
category: Components
title: Field 字段
subtitle: Field 字段
demo:
  cols: 1
group:
  title: 表单
  order: 14
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
  Field,
  FieldSet,
  FieldLegend,
  FieldGroup,
  FieldLabel,
  FieldDescription,
  FieldError,
  FieldContent,
  FieldTitle,
  FieldSeparator,
} from "lynote-ui";
```

:::

字段组件，用于构建表单字段的布局结构。

## 代码演示

<code src="./demos/base.tsx">基本用法</code>

## API

### FieldSet

字段集合容器。

| 参数      | 说明                   | 类型                               | 默认值 |
| --------- | ---------------------- | ---------------------------------- | ------ |
| className | 自定义类名             | `string`                           | -      |
| ...props  | 其他原生 fieldset 属性 | `React.ComponentProps<"fieldset">` | -      |

### FieldLegend

字段集合标题。

| 参数      | 说明                 | 类型                             | 默认值     |
| --------- | -------------------- | -------------------------------- | ---------- |
| variant   | 标题变体             | `"legend" \| "label"`            | `"legend"` |
| className | 自定义类名           | `string`                         | -          |
| ...props  | 其他原生 legend 属性 | `React.ComponentProps<"legend">` | -          |

### FieldGroup

字段分组容器。

| 参数      | 说明              | 类型                          | 默认值 |
| --------- | ----------------- | ----------------------------- | ------ |
| className | 自定义类名        | `string`                      | -      |
| ...props  | 其他原生 div 属性 | `React.ComponentProps<"div">` | -      |

### FieldLabel

字段标签。

| 参数      | 说明            | 类型                                 | 默认值 |
| --------- | --------------- | ------------------------------------ | ------ |
| className | 自定义类名      | `string`                             | -      |
| ...props  | 其他 Label 属性 | `React.ComponentProps<typeof Label>` | -      |

### FieldDescription

字段描述。

| 参数      | 说明            | 类型                        | 默认值 |
| --------- | --------------- | --------------------------- | ------ |
| className | 自定义类名      | `string`                    | -      |
| ...props  | 其他原生 p 属性 | `React.ComponentProps<"p">` | -      |

### FieldError

字段错误信息。

| 参数      | 说明              | 类型                          | 默认值 |
| --------- | ----------------- | ----------------------------- | ------ |
| className | 自定义类名        | `string`                      | -      |
| ...props  | 其他原生 div 属性 | `React.ComponentProps<"div">` | -      |

### FieldContent

字段内容区域。

| 参数      | 说明              | 类型                          | 默认值 |
| --------- | ----------------- | ----------------------------- | ------ |
| className | 自定义类名        | `string`                      | -      |
| ...props  | 其他原生 div 属性 | `React.ComponentProps<"div">` | -      |

### FieldTitle

字段标题。

| 参数      | 说明              | 类型                          | 默认值 |
| --------- | ----------------- | ----------------------------- | ------ |
| className | 自定义类名        | `string`                      | -      |
| ...props  | 其他原生 div 属性 | `React.ComponentProps<"div">` | -      |

### FieldSeparator

字段分隔符。

| 参数      | 说明                | 类型                                     | 默认值 |
| --------- | ------------------- | ---------------------------------------- | ------ |
| className | 自定义类名          | `string`                                 | -      |
| ...props  | 其他 Separator 属性 | `React.ComponentProps<typeof Separator>` | -      |
