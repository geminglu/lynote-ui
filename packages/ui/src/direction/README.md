---
category: Components
title: Direction 文字方向
subtitle: Direction 文字方向
demo:
  cols: 1
group:
  title: 通用
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
import { DirectionProvider, useDirection } from "lynote-ui";
```

:::

为组件树提供 LTR/RTL 方向上下文，并读取当前方向。

## 使用建议

- 该组件基于 Base UI 封装，行为、键盘交互和无障碍语义继承自 Base UI。
- 文档中的 API 以当前 `lynote-ui` 封装导出的属性为准，优先列出业务中最常用且稳定的属性。
- `className` 用于覆盖或扩展样式；复杂组合场景建议优先使用已导出的子组件组合。

## 组件结构

```tsx | pure
<DirectionProvider dir="rtl">
  <Component />
</DirectionProvider>
```

## 代码演示

<code src="./demos/base.tsx">基本用法</code>

## API

### DirectionProvider

DirectionProvider 组件。

| 参数     | 说明   | 类型              | 默认值 |
| -------- | ------ | ----------------- | ------ |
| dir      | 方向值 | `"ltr" \| "rtl"`  | -      |
| children | 子内容 | `React.ReactNode` | -      |

### useDirection

| 参数   | 说明     | 类型             | 默认值 |
| ------ | -------- | ---------------- | ------ |
| 返回值 | 当前方向 | `"ltr" \| "rtl"` | -      |
