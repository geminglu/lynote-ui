---
category: Components
title: Table 表格
subtitle: Table 表格
demo:
  cols: 1
group:
  title: 数据展示
  order: 7
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
  Table,
  TableHeader,
  TableBody,
  TableFooter,
  TableHead,
  TableRow,
  TableCell,
  TableCaption,
} from "lynote-ui";
```

:::

表格组件，用于展示结构化数据。

## 代码演示

<code src="./demos/base.tsx">基本用法</code>

## API

### Table

表格的根容器组件。

| 参数      | 说明                | 类型                            | 默认值 |
| --------- | ------------------- | ------------------------------- | ------ |
| className | 自定义类名          | `string`                        | -      |
| ...props  | 其他原生 table 属性 | `React.ComponentProps<"table">` | -      |

### TableHeader

表格头部区域。

| 参数      | 说明                | 类型                            | 默认值 |
| --------- | ------------------- | ------------------------------- | ------ |
| className | 自定义类名          | `string`                        | -      |
| ...props  | 其他原生 thead 属性 | `React.ComponentProps<"thead">` | -      |

### TableBody

表格主体区域。

| 参数      | 说明                | 类型                            | 默认值 |
| --------- | ------------------- | ------------------------------- | ------ |
| className | 自定义类名          | `string`                        | -      |
| ...props  | 其他原生 tbody 属性 | `React.ComponentProps<"tbody">` | -      |

### TableFooter

表格底部区域。

| 参数      | 说明                | 类型                            | 默认值 |
| --------- | ------------------- | ------------------------------- | ------ |
| className | 自定义类名          | `string`                        | -      |
| ...props  | 其他原生 tfoot 属性 | `React.ComponentProps<"tfoot">` | -      |

### TableRow

表格行。

| 参数      | 说明             | 类型                         | 默认值 |
| --------- | ---------------- | ---------------------------- | ------ |
| className | 自定义类名       | `string`                     | -      |
| ...props  | 其他原生 tr 属性 | `React.ComponentProps<"tr">` | -      |

### TableHead

表格头部单元格。

| 参数      | 说明             | 类型                         | 默认值 |
| --------- | ---------------- | ---------------------------- | ------ |
| className | 自定义类名       | `string`                     | -      |
| ...props  | 其他原生 th 属性 | `React.ComponentProps<"th">` | -      |

### TableCell

表格数据单元格。

| 参数      | 说明             | 类型                         | 默认值 |
| --------- | ---------------- | ---------------------------- | ------ |
| className | 自定义类名       | `string`                     | -      |
| ...props  | 其他原生 td 属性 | `React.ComponentProps<"td">` | -      |

### TableCaption

表格标题。

| 参数      | 说明                  | 类型                              | 默认值 |
| --------- | --------------------- | --------------------------------- | ------ |
| className | 自定义类名            | `string`                          | -      |
| ...props  | 其他原生 caption 属性 | `React.ComponentProps<"caption">` | -      |
