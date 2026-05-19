---
category: Components
title: Empty 空状态
subtitle: Empty 空状态
demo:
  cols: 1
group:
  title: 反馈
  order: 6
nav: 组件
toc: content
background: #111
compact: true
---

Empty 用于在列表、卡片、视图无数据时呈现一个"空状态"。它包含 `EmptyMedia`(图标/插画)、`EmptyTitle`、`EmptyDescription`、`EmptyContent`(操作按钮区) 等结构化子组件。

## 特性

- **结构化子组件**:`EmptyHeader` / `EmptyMedia` / `EmptyTitle` / `EmptyDescription` / `EmptyContent`。
- **2 种 Media 变体**:`default` / `icon`(带 muted 背景的小图标块)。
- **零数据兜底**:虚线边框 + 居中布局,与正常内容区做出视觉区分。

## 何时使用

- 列表 / 表格 / 卡片视图无数据。
- 搜索结果为空。
- 用户首次访问某个空白区域。

## 何时不使用

- 数据正在加载中——使用 `Skeleton` 或 `Spinner`。
- 错误状态——使用 `Alert` 或专门的错误页。
- 暂时性的无操作——使用 toast 或就近的提示。

## 导入

```ts | pure
import {
  Empty,
  EmptyContent,
  EmptyDescription,
  EmptyHeader,
  EmptyMedia,
  EmptyTitle,
} from "lynote-ui/empty";
```

## 代码演示

<code src="./demos/base.tsx">基本用法</code>

<code src="./demos/with-action.tsx" description="带主操作按钮,引导用户从空白开始创建。">引导创建</code>

## 最佳实践

- **标题简短**:"还没有任何项目" 比 "没有数据" 更有上下文。
- **描述告诉用户怎么办**:解释该状态的原因 + 下一步操作。
- **提供一个明确的 CTA**:让用户看到空状态后知道做什么。
- **不要堆砌插画**:简约 icon 比花哨插画更适合 dashboard 场景。

## API

### Empty

外层容器，包含整个空状态布局。

| 参数      | 说明                       | 类型                          | 默认值 |
| --------- | -------------------------- | ----------------------------- | ------ |
| className | 自定义类名                 | `string`                      | -      |
| children  | 子节点（Header / Content） | `React.ReactNode`             | -      |
| ...props  | 原生 `<div>` 属性          | `React.ComponentProps<"div">` | -      |

### EmptyHeader

头部区域，居中布局 `EmptyMedia` / `EmptyTitle` / `EmptyDescription`。

| 参数      | 说明              | 类型                          | 默认值 |
| --------- | ----------------- | ----------------------------- | ------ |
| className | 自定义类名        | `string`                      | -      |
| children  | 子节点            | `React.ReactNode`             | -      |
| ...props  | 原生 `<div>` 属性 | `React.ComponentProps<"div">` | -      |

### EmptyMedia

承载图标 / 插画的容器。

| 参数      | 说明                            | 类型                          | 默认值      |
| --------- | ------------------------------- | ----------------------------- | ----------- |
| variant   | 视觉变体（`icon` 会带圆角灰底） | `"default" \| "icon"`         | `"default"` |
| className | 自定义类名                      | `string`                      | -           |
| children  | 图标 / 图片                     | `React.ReactNode`             | -           |
| ...props  | 原生 `<div>` 属性               | `React.ComponentProps<"div">` | -           |

### EmptyTitle

空状态标题。

| 参数      | 说明              | 类型                          | 默认值 |
| --------- | ----------------- | ----------------------------- | ------ |
| className | 自定义类名        | `string`                      | -      |
| children  | 标题文案          | `React.ReactNode`             | -      |
| ...props  | 原生 `<div>` 属性 | `React.ComponentProps<"div">` | -      |

### EmptyDescription

空状态描述，自动美化内部 `<a>` 链接的下划线样式。

| 参数      | 说明            | 类型                        | 默认值 |
| --------- | --------------- | --------------------------- | ------ |
| className | 自定义类名      | `string`                    | -      |
| children  | 描述文案        | `React.ReactNode`           | -      |
| ...props  | 原生 `<p>` 属性 | `React.ComponentProps<"p">` | -      |

### EmptyContent

CTA 区域，例如放置操作按钮、链接。

| 参数      | 说明              | 类型                          | 默认值 |
| --------- | ----------------- | ----------------------------- | ------ |
| className | 自定义类名        | `string`                      | -      |
| children  | CTA 元素          | `React.ReactNode`             | -      |
| ...props  | 原生 `<div>` 属性 | `React.ComponentProps<"div">` | -      |
