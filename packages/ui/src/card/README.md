---
category: Components
title: Card 卡片
subtitle: Card 卡片
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

Card 是用于聚合相关信息的容器组件。它由 `CardHeader`、`CardContent`、`CardFooter` 等子组件组合而成，覆盖从信息展示卡、数据统计卡、表单容器到登录页等多种场景。

## 特性

- **结构化语义子组件**：`CardHeader` / `CardTitle` / `CardDescription` / `CardContent` / `CardFooter` / `CardAction`。
- **两种尺寸**：`default` 与 `sm`，紧凑场景使用 `sm`。
- **自带边框与圆角**：默认带有 `ring` 边框、`rounded-xl` 与 12px 间距。
- **Footer 风格区分**：`CardFooter` 自带次级背景 + 上分隔线，与内容区视觉上区分。
- **支持顶部图片**：作为 `Card` 第一个子元素的 `<img>` 会自动消除上内边距并裁切圆角。

## 何时使用

- 聚合一组相关信息（统计指标、用户资料、商品介绍）。
- 作为表单、登录页、设置项的容器。
- 列表中每一项作为可独立操作的单元。

## 何时不使用

- 纯文本段落——使用普通 `<div>` 或排版组件即可。
- 全屏对话框 / 表单页——使用页面布局而不是 Card。
- 数据密集的表格——`Card` 不适合承载行/列结构，请使用 `Table`。

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

```ts [按需] | pure
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "lynote-ui/card";
```

```ts [整体] | pure
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "lynote-ui";
```

:::

## 组件结构

```tsx | pure
<Card>
  <CardHeader>
    <CardTitle />
    <CardDescription />
    <CardAction />
  </CardHeader>
  <CardContent />
  <CardFooter />
</Card>
```

## 代码演示

<code src="./demos/base.tsx">基本用法</code>

<code src="./demos/with-action.tsx" description="`CardAction` 放置在 `CardHeader` 内，自动定位到右上角。">带头部操作</code>

<code src="./demos/complex.tsx">数据卡片</code>

<code src="./demos/size.tsx" description="`size='sm'` 用于紧凑布局（如多列统计卡）。">尺寸</code>

<code src="./demos/stats.tsx" description="多个统计指标的并排展示，常用于 Dashboard 顶部。">统计卡片组</code>

<code src="./demos/notification.tsx" description="集成开关、列表与底部操作按钮的通知卡片。">通知卡片</code>

## 最佳实践

- **每张 Card 表达一个主题**：把语义关联性弱的信息拆到多张 Card。
- **`CardTitle` 简短**：建议 1 行，复杂副标题放到 `CardDescription`。
- **`CardFooter` 用于主操作**：放置"保存"、"购买"、"查看详情"等主按钮；次要操作放在 header 的 `CardAction` 里。
- **使用 `size="sm"` 处理列表**：当一个页面要展示 6+ 张紧凑 Card 时，请用 sm 尺寸保持视觉密度。
- **不要给 Card 嵌套 Card**：嵌套会出现两层边框，破坏视觉层次。如需分组，使用 `Separator` 或灰度背景区分。

## 无障碍

- Card 默认渲染为 `<div>`，不会自动获得任何角色。如果整张 Card 可点击，请用 `<a>` 或 `<button>` 包裹标题区域并保留焦点环。
- `CardTitle` 渲染为 `<div>`；如果需要标题语义请显式覆盖（如 `<CardTitle as="h2" />` 或外层包裹 heading）。
- 头部操作按钮务必提供 `aria-label`。

## API

### Card

| 参数      | 说明                       | 类型                          | 默认值      |
| --------- | -------------------------- | ----------------------------- | ----------- |
| size      | 卡片尺寸，影响内边距与字号 | `"default" \| "sm"`           | `"default"` |
| className | 自定义类名                 | `string`                      | -           |
| ...props  | 透传原生 `<div>` 属性      | `React.ComponentProps<"div">` | -           |

### CardHeader

包含标题区，自动识别是否存在 `CardAction` 并切换网格布局。

| 参数      | 说明       | 类型                          | 默认值 |
| --------- | ---------- | ----------------------------- | ------ |
| className | 自定义类名 | `string`                      | -      |
| ...props  | 原生 div   | `React.ComponentProps<"div">` | -      |

### CardTitle

| 参数      | 说明       | 类型                          | 默认值 |
| --------- | ---------- | ----------------------------- | ------ |
| className | 自定义类名 | `string`                      | -      |
| ...props  | 原生 div   | `React.ComponentProps<"div">` | -      |

### CardDescription

辅助说明文字，自动使用 muted 色与小字号。

| 参数      | 说明       | 类型                          | 默认值 |
| --------- | ---------- | ----------------------------- | ------ |
| className | 自定义类名 | `string`                      | -      |
| ...props  | 原生 div   | `React.ComponentProps<"div">` | -      |

### CardAction

放在 `CardHeader` 内部，自动定位到右上角。

| 参数      | 说明       | 类型                          | 默认值 |
| --------- | ---------- | ----------------------------- | ------ |
| className | 自定义类名 | `string`                      | -      |
| ...props  | 原生 div   | `React.ComponentProps<"div">` | -      |

### CardContent

| 参数      | 说明       | 类型                          | 默认值 |
| --------- | ---------- | ----------------------------- | ------ |
| className | 自定义类名 | `string`                      | -      |
| ...props  | 原生 div   | `React.ComponentProps<"div">` | -      |

### CardFooter

底部操作区，自带次级背景与上分隔线。

| 参数      | 说明       | 类型                          | 默认值 |
| --------- | ---------- | ----------------------------- | ------ |
| className | 自定义类名 | `string`                      | -      |
| ...props  | 原生 div   | `React.ComponentProps<"div">` | -      |
