---
category: Components
title: Pagination 分页
subtitle: Pagination 分页
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

Pagination 用于在长列表 / 表格底部呈现分页导航。基于 `<nav>` + `<ol>` 语义结构,每一项渲染为可被键盘 Tab 到的 `<a>` 链接。

## 特性

- **语义化**:`role="navigation"` + `aria-label="pagination"`。
- **`PaginationLink isActive`**:当前页带 `aria-current="page"`,样式自动反白。
- **`PaginationPrevious` / `PaginationNext`**:上一页 / 下一页链接,自动带方向图标。
- **`PaginationEllipsis`**:省略号,适合超过 7 页时折叠中间。
- **响应式**:Prev / Next 的文字在窄屏自动隐藏,只保留箭头。

## 何时使用

- 分页表格 / 列表底部。
- 文档站、博客的章节翻页。
- 搜索结果分页。

## 何时不使用

- 无限滚动场景——使用滚动加载更多。
- 列表少于 10 项——直接全部展示。
- 复杂虚拟列表——使用虚拟滚动库。

## 导入

```ts | pure
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "lynote-ui/pagination";
```

## 组件结构

```tsx | pure
<Pagination>
  <PaginationContent>
    <PaginationItem>
      <PaginationPrevious />
    </PaginationItem>
    <PaginationItem>
      <PaginationLink isActive />
    </PaginationItem>
    <PaginationItem>
      <PaginationEllipsis />
    </PaginationItem>
    <PaginationItem>
      <PaginationNext />
    </PaginationItem>
  </PaginationContent>
</Pagination>
```

## 代码演示

<code src="./demos/base.tsx">基本用法</code>

<code src="./demos/controlled.tsx" description="受控分页 + 自动折叠中间页码。">受控分页</code>

<code src="./demos/simple.tsx" description="只有页码的简单分页">简单用法</code>

<code src="./demos/icons-only.tsx" description="仅使用上一页和下一页按钮，不显示页码。这对于具有每页行数选择器的数据表很有用。">图标分页</code>

## 最佳实践

- **超过 7 页用省略号**:保留首页、当前页 ±1、末页,其余折叠。
- **`PaginationLink` 接管路由**:通过 `<PaginationLink href="?page=2" />` 拼接路由,而不是手动 setState。
- **始终显示 Prev / Next**:即使首页禁用 Prev,也保留位置以避免布局抖动。
- **`isActive` 必须配合 `aria-current`**:组件自动处理,不要手动设置。

## API

### Pagination

`<nav>` 容器，自动带 `aria-label="pagination"` 与 `role="navigation"`。

| 参数      | 说明                | 类型                          | 默认值 |
| --------- | ------------------- | ----------------------------- | ------ |
| className | 自定义类名          | `string`                      | -      |
| children  | `PaginationContent` | `React.ReactNode`             | -      |
| ...props  | 原生 `<nav>` 属性   | `React.ComponentProps<"nav">` | -      |

### PaginationContent

`<ul>` 列表容器，管理项之间的间距。

| 参数      | 说明                  | 类型                         | 默认值 |
| --------- | --------------------- | ---------------------------- | ------ |
| className | 自定义类名            | `string`                     | -      |
| children  | `PaginationItem` 列表 | `React.ReactNode`            | -      |
| ...props  | 原生 `<ul>` 属性      | `React.ComponentProps<"ul">` | -      |

### PaginationItem

`<li>` 单项容器。

| 参数      | 说明             | 类型                         | 默认值 |
| --------- | ---------------- | ---------------------------- | ------ |
| className | 自定义类名       | `string`                     | -      |
| children  | 单项内容         | `React.ReactNode`            | -      |
| ...props  | 原生 `<li>` 属性 | `React.ComponentProps<"li">` | -      |

### PaginationLink

实际渲染为 `<a>`，内部用 `Button` 提供视觉，激活时切换 `variant`。

| 参数      | 说明            | 类型                                                                                 | 默认值   |
| --------- | --------------- | ------------------------------------------------------------------------------------ | -------- |
| href      | 链接地址        | `string`                                                                             | -        |
| isActive  | 是否为当前页    | `boolean`                                                                            | `false`  |
| size      | 按钮尺寸        | `"default" \| "xs" \| "sm" \| "lg" \| "icon" \| "icon-xs" \| "icon-sm" \| "icon-lg"` | `"icon"` |
| onClick   | 点击回调        | `React.MouseEventHandler<HTMLAnchorElement>`                                         | -        |
| className | 自定义类名      | `string`                                                                             | -        |
| children  | 链接内容        | `React.ReactNode`                                                                    | -        |
| ...props  | 原生 `<a>` 属性 | `React.ComponentProps<"a">`                                                          | -        |

### PaginationPrevious

继承 `PaginationLink` 的属性，文字在窄屏下自动隐藏。

| 参数      | 说明                  | 类型                  | 默认值       |
| --------- | --------------------- | --------------------- | ------------ |
| text      | 显示的文字            | `string`              | `"Previous"` |
| href      | 链接地址              | `string`              | -            |
| isActive  | 是否激活              | `boolean`             | `false`      |
| className | 自定义类名            | `string`              | -            |
| ...props  | 透传 `PaginationLink` | `PaginationLinkProps` | -            |

### PaginationNext

继承 `PaginationLink` 的属性。

| 参数      | 说明                  | 类型                  | 默认值   |
| --------- | --------------------- | --------------------- | -------- |
| text      | 显示的文字            | `string`              | `"Next"` |
| href      | 链接地址              | `string`              | -        |
| isActive  | 是否激活              | `boolean`             | `false`  |
| className | 自定义类名            | `string`              | -        |
| ...props  | 透传 `PaginationLink` | `PaginationLinkProps` | -        |

### PaginationEllipsis

省略号占位，自带 `aria-hidden` 与 sr-only "More pages" 文案。

| 参数      | 说明               | 类型                           | 默认值 |
| --------- | ------------------ | ------------------------------ | ------ |
| className | 自定义类名         | `string`                       | -      |
| ...props  | 原生 `<span>` 属性 | `React.ComponentProps<"span">` | -      |
