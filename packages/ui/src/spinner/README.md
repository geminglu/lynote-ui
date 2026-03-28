---
category: Components
title: Spinner 加载器
subtitle: Spinner 加载器
demo:
  cols: 1
group:
  title: 反馈
  order: 3
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
import { Spinner } from "lynote-ui";
```

:::

加载器组件，用于显示加载状态。

## 代码演示

<code src="./demos/base.tsx">基本用法</code>

## API

### Spinner

加载器组件。

| 参数      | 说明              | 类型                          | 默认值 |
| --------- | ----------------- | ----------------------------- | ------ |
| className | 自定义类名        | `string`                      | -      |
| ...props  | 其他原生 svg 属性 | `React.ComponentProps<"svg">` | -      |
