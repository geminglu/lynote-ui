---
category: Components
title: ScrollArea 滚动区域
subtitle: ScrollArea 滚动区域
demo:
  cols: 1
group:
  title: 布局
  order: 2
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
import { ScrollArea, ScrollBar } from "lynote-ui";
```

:::

提供可样式化的滚动容器和滚动条。

## 使用建议

- 该组件基于 Base UI 封装，行为、键盘交互和无障碍语义继承自 Base UI。
- 文档中的 API 以当前 `lynote-ui` 封装导出的属性为准，优先列出业务中最常用且稳定的属性。
- `className` 用于覆盖或扩展样式；复杂组合场景建议优先使用已导出的子组件组合。

## 组件结构

```tsx | pure
<ScrollArea>
  <ScrollBar />
</ScrollArea>
```

## 代码演示

<code src="./demos/base.tsx">基本用法</code>

<code src="./demos/horizontal.tsx">横向滚动</code>

## API

### ScrollArea

ScrollArea 组件。

| 参数      | 说明       | 类型              | 默认值 |
| --------- | ---------- | ----------------- | ------ |
| className | 自定义类名 | `string`          | -      |
| children  | 子内容     | `React.ReactNode` | -      |
| id        | 元素 id    | `string`          | -      |

### ScrollBar

ScrollBar 组件。

| 参数        | 说明       | 类型                         | 默认值       |
| ----------- | ---------- | ---------------------------- | ------------ |
| orientation | 方向       | `"horizontal" \| "vertical"` | "horizontal" |
| className   | 自定义类名 | `string`                     | -            |
