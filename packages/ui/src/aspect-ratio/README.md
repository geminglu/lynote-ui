---
category: Components
title: AspectRatio 宽高比
subtitle: AspectRatio 宽高比
demo:
  cols: 1
group:
  title: 布局
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
import { AspectRatio } from "lynote-ui";
```

```ts [全局] | pure
import { AspectRatio } from "gml-ui";
```

:::

宽高比组件，用于保持内容的固定宽高比。

## 代码演示

<code src="./demos/base.tsx">基本用法</code>

## API

### AspectRatio

宽高比容器组件。

| 参数     | 说明         | 类型                                                     | 默认值 |
| -------- | ------------ | -------------------------------------------------------- | ------ |
| ratio    | 宽高比       | `number`                                                 | -      |
| ...props | 其他原生属性 | `React.ComponentProps<typeof AspectRatioPrimitive.Root>` | -      |
