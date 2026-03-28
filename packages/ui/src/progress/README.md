---
category: Components
title: Progress 进度条
subtitle: Progress 进度条
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
import { Progress } from "lynote-ui";
```

```ts [全局] | pure
import { Progress } from "gml-ui";
```

:::

展示操作的当前进度。

## 代码演示

<code src="./demos/base.tsx">基本用法</code>

<code src="./demos/variant.tsx">不同进度值</code>

<code src="./demos/animated.tsx">动画效果</code>

## API

### Progress

| 参数      | 说明                        | 类型                                                  | 默认值 |
| --------- | --------------------------- | ----------------------------------------------------- | ------ |
| value     | 进度值（0-100）             | `number`                                              | -      |
| max       | 最大值                      | `number`                                              | `100`  |
| className | 自定义类名                  | `string`                                              | -      |
| ...props  | 其他 Radix UI Progress 属性 | `React.ComponentProps<typeof ProgressPrimitive.Root>` | -      |
