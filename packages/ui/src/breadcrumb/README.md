---
category: Components
title: Breadcrumb 面包屑
subtitle: Breadcrumb 面包屑
demo:
  cols: 1
group:
  title: 导航
  order: 1
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
  Breadcrumb,
  BreadcrumbList,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbPage,
  BreadcrumbSeparator,
  BreadcrumbEllipsis,
} from "lynote-ui";
```

:::

面包屑组件，用于显示当前页面在导航层级中的位置。

## 代码演示

<code src="./demos/base.tsx">基本用法</code>

## API

### Breadcrumb

面包屑的根容器组件。

| 参数     | 说明              | 类型                          | 默认值 |
| -------- | ----------------- | ----------------------------- | ------ |
| ...props | 其他原生 nav 属性 | `React.ComponentProps<"nav">` | -      |

### BreadcrumbList

面包屑列表容器。

| 参数      | 说明             | 类型                         | 默认值 |
| --------- | ---------------- | ---------------------------- | ------ |
| className | 自定义类名       | `string`                     | -      |
| ...props  | 其他原生 ol 属性 | `React.ComponentProps<"ol">` | -      |

### BreadcrumbItem

面包屑单个项目。

| 参数      | 说明             | 类型                         | 默认值 |
| --------- | ---------------- | ---------------------------- | ------ |
| className | 自定义类名       | `string`                     | -      |
| ...props  | 其他原生 li 属性 | `React.ComponentProps<"li">` | -      |

### BreadcrumbLink

面包屑链接。

| 参数      | 说明               | 类型                        | 默认值  |
| --------- | ------------------ | --------------------------- | ------- |
| asChild   | 是否作为子元素渲染 | `boolean`                   | `false` |
| className | 自定义类名         | `string`                    | -       |
| ...props  | 其他原生 a 属性    | `React.ComponentProps<"a">` | -       |

### BreadcrumbPage

面包屑当前页面。

| 参数      | 说明               | 类型                           | 默认值 |
| --------- | ------------------ | ------------------------------ | ------ |
| className | 自定义类名         | `string`                       | -      |
| ...props  | 其他原生 span 属性 | `React.ComponentProps<"span">` | -      |

### BreadcrumbSeparator

面包屑分隔符。

| 参数      | 说明             | 类型                         | 默认值 |
| --------- | ---------------- | ---------------------------- | ------ |
| className | 自定义类名       | `string`                     | -      |
| children  | 自定义分隔符内容 | `React.ReactNode`            | -      |
| ...props  | 其他原生 li 属性 | `React.ComponentProps<"li">` | -      |

### BreadcrumbEllipsis

面包屑省略号。

| 参数      | 说明               | 类型                           | 默认值 |
| --------- | ------------------ | ------------------------------ | ------ |
| className | 自定义类名         | `string`                       | -      |
| ...props  | 其他原生 span 属性 | `React.ComponentProps<"span">` | -      |
