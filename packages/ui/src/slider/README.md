---
category: Components
title: Slider 滑块
subtitle: Slider 滑块
demo:
  cols: 1
group:
  title: 表单
  order: 8
nav: 组件
toc: content
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
import { Slider } from "lynote-ui/slider";
```

```ts [全局] | pure
import { Slider } from "lynote-ui";
```

:::

滑块组件，用于选择数值范围。

## 代码演示

<code src="./demos/base.tsx">基本用法</code>

<code src="./demos/range.tsx" description="用两个值的数组作为范围滑块。">分布范围</code>

<code src="./demos/multiple.tsx" description="用两个值的数组作为范围滑块。">用一个多重数值的数组来表示多个滑块。</code>

<code src="./demos/vertical.tsx" description="使用 orientation=“vertical” 作为垂直滑块。">垂直方向</code>

<code src="./demos/controlled.tsx">受控
</code>

## API

### Slider

滑块组件。

| 参数          | 说明       | 类型                                  | 默认值 |
| ------------- | ---------- | ------------------------------------- | ------ |
| value         | 当前值     | `number \| number[]`                  | -      |
| defaultValue  | 默认值     | `number \| number[]`                  | -      |
| onValueChange | 值变化回调 | `(value: number \| number[]) => void` | -      |
| min           | 最小值     | `number`                              | `0`    |
| max           | 最大值     | `number`                              | `100`  |
| step          | 步长       | `number`                              | `1`    |
| className     | 自定义类名 | `string`                              | -      |
