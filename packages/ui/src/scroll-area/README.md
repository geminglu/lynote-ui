---
category: Components
title: ScrollArea 滚动区域
subtitle: ScrollArea 滚动区域
demo:
  cols: 1
group:
  title: 布局
  order: 4
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

滚动区域组件，提供自定义样式的滚动条。

## 代码演示

<code src="./demos/base.tsx">基本用法</code>

## API

### ScrollArea

滚动区域的根容器组件。

| 参数      | 说明         | 类型                                                    | 默认值 |
| --------- | ------------ | ------------------------------------------------------- | ------ |
| className | 自定义类名   | `string`                                                | -      |
| ...props  | 其他原生属性 | `React.ComponentProps<typeof ScrollAreaPrimitive.Root>` | -      |

### ScrollBar

滚动条组件。

| 参数        | 说明         | 类型                                                                   | 默认值       |
| ----------- | ------------ | ---------------------------------------------------------------------- | ------------ |
| orientation | 滚动条方向   | `"vertical" \| "horizontal"`                                           | `"vertical"` |
| className   | 自定义类名   | `string`                                                               | -            |
| ...props    | 其他原生属性 | `React.ComponentProps<typeof ScrollAreaPrimitive.ScrollAreaScrollbar>` | -            |
