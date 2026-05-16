---
category: Components
title: Table 表格
subtitle: Table 表格
demo:
  cols: 1
group:
  title: 数据展示
  order: 1
nav: 组件
toc: content
background: #111
compact: true
---

Table 提供基础的表格样式封装,采用原生 `<table>` 元素以保留语义、可访问性与浏览器原生表格行为。组件不提供排序 / 筛选 / 分页等行为,需要时配合 `@tanstack/react-table` 等表格状态库使用。

## 特性

- **语义化原生表格**:`<table>` + `<thead>` + `<tbody>`,读屏器友好。
- **结构化子组件**:`TableHeader` / `TableBody` / `TableFooter` / `TableRow` / `TableHead` / `TableCell` / `TableCaption`。
- **自动横向滚动**:外层 `table-container` 在窄屏自动出现水平滚动条。
- **轻样式**:仅提供分隔线 + 字号,业务定制空间大。

## 何时使用

- 数据密集的列表(订单、用户列表、日志)。
- 需要对比的结构化数据(财报、对照表)。
- 需要复制行 / 列内容的场景(浏览器原生支持复制 `<table>`)。

## 何时不使用

- 卡片型数据展示——使用 `Card`。
- 简单列表——使用 `Item` + `ItemGroup`。
- 大数据量(> 100 行)——配合虚拟滚动库。

## 导入

```ts | pure
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "lynote-ui/table";
```

## 组件结构

```tsx | pure
<Table>
  <TableCaption />
  <TableHeader>
    <TableRow>
      <TableHead />
    </TableRow>
  </TableHeader>
  <TableBody>
    <TableRow>
      <TableCell />
    </TableRow>
  </TableBody>
  <TableFooter />
</Table>
```

## 代码演示

<code src="./demos/base.tsx">基本用法</code>

<code src="./demos/with-actions.tsx" description="带状态徽标 + 行操作菜单 + 标题区的完整业务表格。">业务示例</code>

<code src="./demos/data-table.tsx" description="使用 `@tanstack/react-table` 构建数据表格。">数据表格</code>

## 最佳实践

- **`TableCaption` 提供标题**:有助于读屏器与 SEO。
- **行操作放在最后一列**:列宽用 `w-12` 限制,避免操作列被撑开。
- **数字列右对齐**:`className="text-right"`,便于数据对齐扫读。
- **大数据用 React Table**:`@tanstack/react-table` 提供排序、分页、虚拟滚动等能力,Table 组件只负责 UI。

## API

所有组件都是对原生 `<table>` / `<thead>` / `<tbody>` / `<tr>` / `<th>` / `<td>` 元素的样式封装,完整支持原生属性。

| 组件         | 包装的元素  |
| ------------ | ----------- |
| Table        | `<table>`   |
| TableHeader  | `<thead>`   |
| TableBody    | `<tbody>`   |
| TableFooter  | `<tfoot>`   |
| TableRow     | `<tr>`      |
| TableHead    | `<th>`      |
| TableCell    | `<td>`      |
| TableCaption | `<caption>` |
