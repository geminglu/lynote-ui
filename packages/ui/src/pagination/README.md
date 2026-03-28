---
category: Components
title: Pagination 分页
subtitle: Pagination 分页
demo:
  cols: 1
group:
  title: 数据展示
  order: 9
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
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationEllipsis,
  PaginationNext,
  PaginationPrevious,
} from "lynote-ui";
```

:::

分页组件，用于在大量数据中导航。

## 代码演示

<code src="./demos/base.tsx">基本用法</code>

## API

### Pagination

分页的根容器组件。

| 参数      | 说明              | 类型                          | 默认值 |
| --------- | ----------------- | ----------------------------- | ------ |
| className | 自定义类名        | `string`                      | -      |
| ...props  | 其他原生 nav 属性 | `React.ComponentProps<"nav">` | -      |

### PaginationContent

分页内容容器。

| 参数      | 说明             | 类型                         | 默认值 |
| --------- | ---------------- | ---------------------------- | ------ |
| className | 自定义类名       | `string`                     | -      |
| ...props  | 其他原生 ul 属性 | `React.ComponentProps<"ul">` | -      |

### PaginationItem

分页单个项目。

| 参数     | 说明             | 类型                         | 默认值 |
| -------- | ---------------- | ---------------------------- | ------ |
| ...props | 其他原生 li 属性 | `React.ComponentProps<"li">` | -      |

### PaginationLink

分页链接。

| 参数      | 说明            | 类型                                  | 默认值   |
| --------- | --------------- | ------------------------------------- | -------- |
| isActive  | 是否激活        | `boolean`                             | -        |
| size      | 按钮尺寸        | `"default" \| "sm" \| "lg" \| "icon"` | `"icon"` |
| className | 自定义类名      | `string`                              | -        |
| ...props  | 其他原生 a 属性 | `React.ComponentProps<"a">`           | -        |

### PaginationEllipsis

分页省略号。

| 参数     | 说明               | 类型                           | 默认值 |
| -------- | ------------------ | ------------------------------ | ------ |
| ...props | 其他原生 span 属性 | `React.ComponentProps<"span">` | -      |

### PaginationPrevious

上一页按钮。

| 参数     | 说明                     | 类型 | 默认值 |
| -------- | ------------------------ | ---- | ------ |
| ...props | 其他 PaginationLink 属性 | -    | -      |

### PaginationNext

下一页按钮。

| 参数     | 说明                     | 类型 | 默认值 |
| -------- | ------------------------ | ---- | ------ |
| ...props | 其他 PaginationLink 属性 | -    | -      |
