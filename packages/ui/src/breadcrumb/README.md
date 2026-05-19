---
category: Components
title: Breadcrumb 面包屑
subtitle: Breadcrumb 面包屑
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

呈现当前位置在站点层级中的路径。当用户深入到三级及以上页面时，面包屑可以帮助快速回溯。

## 特性

- **语义化**：`<nav aria-label="breadcrumb">` 包裹 `<ol>` 列表，自动符合 ARIA 推荐结构。
- **当前页用 `BreadcrumbPage`**：自动带 `aria-current="page"` 与不可点击语义。
- **可自定义分隔符**：默认 `›`，可替换为 `/` 或任意图标。
- **超长省略**：通过 `BreadcrumbEllipsis` + DropdownMenu 折叠中间层级。

## 何时使用

- 站点层级深（≥ 3 级）且用户可能从外部直接进入深页面。
- 后台管理 / 文档站 / 电商类目页。

## 何时不使用

- 单层级页面——不必使用面包屑。
- 移动端有限空间——使用返回按钮或顶部抽屉导航。
- 流程引导（注册 → 验证 → 完成）——使用 `Stepper`（自建）或顶部进度条。

## 导入

```ts | pure
import {
  Breadcrumb,
  BreadcrumbEllipsis,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "lynote-ui/breadcrumb";
```

## 组件结构

```tsx | pure
<Breadcrumb>
  <BreadcrumbList>
    <BreadcrumbItem>
      <BreadcrumbLink />
    </BreadcrumbItem>
    <BreadcrumbSeparator />
    <BreadcrumbItem>
      <BreadcrumbPage />
    </BreadcrumbItem>
  </BreadcrumbList>
</Breadcrumb>
```

## 代码演示

<code src="./demos/base.tsx">基本用法</code>

<code src="./demos/custom-separator.tsx" description="把 `BreadcrumbSeparator` 的 children 替换为自定义图标。">自定义分隔符</code>

<code src="./demos/with-dropdown.tsx" description="层级过深时折叠中间项，点击省略号弹出下拉菜单。">折叠中间层级</code>

## 最佳实践

- **当前页用 `BreadcrumbPage`**：让读屏器和 SEO 都明白这是当前位置，而不是普通链接。
- **使用 `render={<a/>}` 注入路由组件**：`<BreadcrumbLink render={<Link to="/" />}>` 可对接 React Router / Next Link。
- **超过 5 级折叠中间**：保留首页、上一级、当前页，其余用省略号折叠。
- **不要把面包屑做成 tabs**：面包屑表达"层级位置"，不是平级切换。

## API

### Breadcrumb

| 参数      | 说明       | 类型                          | 默认值 |
| --------- | ---------- | ----------------------------- | ------ |
| className | 自定义类名 | `string`                      | -      |
| ...props  | 原生 nav   | `React.ComponentProps<"nav">` | -      |

### BreadcrumbList

`<ol>` 列表容器。

| 参数      | 说明                  | 类型                         | 默认值 |
| --------- | --------------------- | ---------------------------- | ------ |
| className | 自定义类名            | `string`                     | -      |
| children  | `BreadcrumbItem` 列表 | `React.ReactNode`            | -      |
| ...props  | 原生 `<ol>` 属性      | `React.ComponentProps<"ol">` | -      |

### BreadcrumbItem

`<li>` 单项容器。

| 参数      | 说明             | 类型                         | 默认值 |
| --------- | ---------------- | ---------------------------- | ------ |
| className | 自定义类名       | `string`                     | -      |
| children  | 链接或当前页内容 | `React.ReactNode`            | -      |
| ...props  | 原生 `<li>` 属性 | `React.ComponentProps<"li">` | -      |

### BreadcrumbLink

| 参数      | 说明                                                 | 类型                                                        | 默认值 |
| --------- | ---------------------------------------------------- | ----------------------------------------------------------- | ------ |
| render    | 多态渲染（接入路由 Link 组件，如 `<Link to="/" />`） | `React.ReactElement \| ((props, state) => React.ReactNode)` | -      |
| href      | 链接地址                                             | `string`                                                    | -      |
| className | 自定义类名                                           | `string`                                                    | -      |
| children  | 链接文字                                             | `React.ReactNode`                                           | -      |
| ...props  | 原生 `<a>` 属性                                      | `React.ComponentProps<"a">`                                 | -      |

### BreadcrumbPage

当前页文本，不可点击，自动加 `aria-current="page"`、`role="link"`、`aria-disabled="true"`。

| 参数      | 说明               | 类型                           | 默认值 |
| --------- | ------------------ | ------------------------------ | ------ |
| className | 自定义类名         | `string`                       | -      |
| children  | 当前页文本         | `React.ReactNode`              | -      |
| ...props  | 原生 `<span>` 属性 | `React.ComponentProps<"span">` | -      |

### BreadcrumbSeparator

分隔符，默认渲染 `›` 图标，可通过 `children` 覆盖。自动加 `role="presentation"` 与 `aria-hidden`。

| 参数      | 说明                           | 类型                         | 默认值 |
| --------- | ------------------------------ | ---------------------------- | ------ |
| className | 自定义类名                     | `string`                     | -      |
| children  | 自定义分隔符内容（缺省为 `›`） | `React.ReactNode`            | -      |
| ...props  | 原生 `<li>` 属性               | `React.ComponentProps<"li">` | -      |

### BreadcrumbEllipsis

省略号，常配合 `DropdownMenu` 折叠中间层级，自动包含 `sr-only` 文案 "More"。

| 参数      | 说明               | 类型                           | 默认值 |
| --------- | ------------------ | ------------------------------ | ------ |
| className | 自定义类名         | `string`                       | -      |
| ...props  | 原生 `<span>` 属性 | `React.ComponentProps<"span">` | -      |
