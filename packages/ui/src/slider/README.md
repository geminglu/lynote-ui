---
category: Components
title: Slider 滑块
subtitle: Slider 滑块
demo:
  cols: 1
group:
  title: 表单
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
import { Slider } from "lynote-ui";
```

:::

用于在连续或离散范围内选择数值，支持单值和多值。

## 使用建议

- 该组件基于 Base UI 封装，行为、键盘交互和无障碍语义继承自 Base UI。
- 文档中的 API 以当前 `lynote-ui` 封装导出的属性为准，优先列出业务中最常用且稳定的属性。
- `className` 用于覆盖或扩展样式；复杂组合场景建议优先使用已导出的子组件组合。

## 组件结构

```tsx | pure
<Slider />
```

## 代码演示

<code src="./demos/base.tsx">基本用法</code>

<code src="./demos/controlled.tsx">受控用法</code>

<code src="./demos/multiple.tsx">多值选择</code>

<code src="./demos/range.tsx">范围选择</code>

<code src="./demos/vertical.tsx">垂直方向</code>

## API

### Slider

Slider 组件。

| 参数          | 说明                 | 类型                         | 默认值       |
| ------------- | -------------------- | ---------------------------- | ------------ |
| value         | 当前值，受控模式使用 | `number[]`                   | -            |
| defaultValue  | 默认值               | `number[]`                   | -            |
| min           | 最小值               | `number`                     | 0            |
| max           | 最大值               | `number`                     | 100          |
| step          | 步进值               | `number`                     | 1            |
| orientation   | 方向                 | `"horizontal" \| "vertical"` | "horizontal" |
| disabled      | 是否禁用             | `boolean`                    | false        |
| onValueChange | 值变化回调           | `(value: number[]) => void`  | -            |
| className     | 自定义类名           | `string`                     | -            |
