---
category: Components
title: Progress 进度条
subtitle: Progress 进度条
demo:
  cols: 1
group:
  title: 反馈
  order: 5
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
import {
  Progress,
  ProgressTrack,
  ProgressIndicator,
  ProgressLabel,
  ProgressValue,
} from "lynote-ui";
```

:::

展示任务完成进度或加载进度。

## 使用建议

- 该组件基于 Base UI 封装，行为、键盘交互和无障碍语义继承自 Base UI。
- 文档中的 API 以当前 `lynote-ui` 封装导出的属性为准，优先列出业务中最常用且稳定的属性。
- `className` 用于覆盖或扩展样式；复杂组合场景建议优先使用已导出的子组件组合。

## 组件结构

```tsx | pure
<Progress>
  <ProgressTrack />
  <ProgressIndicator />
  <ProgressLabel />
  <ProgressValue />
</Progress>
```

## 代码演示

<code src="./demos/animated.tsx">动画进度</code>

<code src="./demos/base.tsx">基本用法</code>

<code src="./demos/controlled.tsx">受控用法</code>

<code src="./demos/variant.tsx">变体</code>

## API

### Progress

Progress 组件。

| 参数      | 说明       | 类型              | 默认值 |
| --------- | ---------- | ----------------- | ------ |
| value     | 当前进度值 | `number \| null`  | -      |
| max       | 最大值     | `number`          | 100    |
| min       | 最小值     | `number`          | 0      |
| className | 自定义类名 | `string`          | -      |
| children  | 子内容     | `React.ReactNode` | -      |

### ProgressTrack

ProgressTrack 组件。

| 参数      | 说明       | 类型              | 默认值 |
| --------- | ---------- | ----------------- | ------ |
| className | 自定义类名 | `string`          | -      |
| children  | 子内容     | `React.ReactNode` | -      |
| id        | 元素 id    | `string`          | -      |

### ProgressIndicator

ProgressIndicator 组件。

| 参数      | 说明       | 类型              | 默认值 |
| --------- | ---------- | ----------------- | ------ |
| className | 自定义类名 | `string`          | -      |
| children  | 子内容     | `React.ReactNode` | -      |
| id        | 元素 id    | `string`          | -      |

### ProgressLabel

ProgressLabel 组件。

| 参数      | 说明       | 类型              | 默认值 |
| --------- | ---------- | ----------------- | ------ |
| className | 自定义类名 | `string`          | -      |
| children  | 子内容     | `React.ReactNode` | -      |
| id        | 元素 id    | `string`          | -      |

### ProgressValue

ProgressValue 组件。

| 参数      | 说明       | 类型              | 默认值 |
| --------- | ---------- | ----------------- | ------ |
| className | 自定义类名 | `string`          | -      |
| children  | 子内容     | `React.ReactNode` | -      |
| id        | 元素 id    | `string`          | -      |
