---
category: Components
title: Skeleton 骨架屏
subtitle: Skeleton 骨架屏
demo:
  cols: 1
group:
  title: 反馈
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
import { Skeleton } from "lynote-ui";
```

```ts [全局] | pure
import { Skeleton } from "gml-ui";
```

:::

骨架屏组件，用于在内容加载时显示占位符。

## 代码演示

<code src="./demos/base.tsx">基本用法</code>

## API

### Skeleton

骨架屏组件。

| 参数      | 说明              | 类型                          | 默认值 |
| --------- | ----------------- | ----------------------------- | ------ |
| className | 自定义类名        | `string`                      | -      |
| ...props  | 其他原生 div 属性 | `React.ComponentProps<"div">` | -      |
