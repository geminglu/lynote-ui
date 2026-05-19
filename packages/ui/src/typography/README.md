---
category: Components
title: Typography 排版
subtitle: Typography 排版
demo:
  cols: 1
group:
  title: 布局
  order: 5
nav: 组件
toc: content
background: #111
compact: true
---

Typography 是排版组件的集合，用于创建美观的文本布局。所有组件都是对应原生 HTML 元素的样式封装，完整支持原生属性。

## 导入

```ts | pure
import {
  TypographyH1,
  TypographyH2,
  TypographyH3,
  TypographyH4,
  TypographyH5,
  TypographyH6,
  TypographyP,
  TypographyLead,
  TypographyLarge,
  TypographySmall,
  TypographyMuted,
  TypographyBlockquote,
  TypographyUl,
  TypographyInlineCode,
} from "lynote-ui/typography";
```

## 代码演示

<code src="./demos/base.tsx">基本用法</code>

## API

所有组件均接受其对应原生 HTML 元素的全部属性（`className`、`children`、`id`、`style`、事件回调等），并已应用统一样式。

| 组件                 | 包装的元素     | 用途                                                       |
| -------------------- | -------------- | ---------------------------------------------------------- |
| TypographyH1         | `<h1>`         | 一级标题，`text-4xl font-extrabold`，居中且 `text-balance` |
| TypographyH2         | `<h2>`         | 二级标题，`text-3xl font-semibold`，含底部分隔线           |
| TypographyH3         | `<h3>`         | 三级标题，`text-2xl font-semibold`                         |
| TypographyH4         | `<h4>`         | 四级标题，`text-xl font-semibold`                          |
| TypographyH5         | `<h5>`         | 五级标题，`text-lg font-semibold`                          |
| TypographyH6         | `<h6>`         | 六级标题，`text-base font-semibold`                        |
| TypographyP          | `<p>`          | 正文段落，`leading-7`，非首段自动 `mt-6`                   |
| TypographyLead       | `<p>`          | 引导段落，`text-xl text-muted-foreground`                  |
| TypographyLarge      | `<div>`        | 强调文字，`text-lg font-semibold`                          |
| TypographySmall      | `<small>`      | 小号文字，`text-sm font-medium`                            |
| TypographyMuted      | `<p>`          | 弱化文字，`text-sm text-muted-foreground`                  |
| TypographyBlockquote | `<blockquote>` | 引用块，左侧带分隔线，斜体                                 |
| TypographyUl         | `<ul>`         | 无序列表，使用 disc 标记                                   |
| TypographyInlineCode | `<code>`       | 行内代码，背景色与等宽字体                                 |

### 公共参数

| 参数      | 说明                         | 类型                            | 默认值 |
| --------- | ---------------------------- | ------------------------------- | ------ |
| className | 自定义类名，与默认样式合并   | `string`                        | -      |
| children  | 内容                         | `React.ReactNode`               | -      |
| ...props  | 对应原生 HTML 元素的剩余属性 | `React.ComponentProps<element>` | -      |
