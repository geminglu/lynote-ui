---
category: Components
title: Input 输入框
subtitle: Input 输入框
demo:
  cols: 1
group:
  title: 表单
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
import { Input } from "lynote-ui";
```

```ts [全局] | pure
import { Input } from "gml-ui";
```

:::

通过鼠标或键盘输入内容，是最基础的表单域的包装。

## 代码演示

<code src="./demos/base.tsx">基本用法</code>

<code src="./demos/size.tsx">尺寸用法</code>

<code src="./demos/disabled.tsx">禁用状态</code>

<code src="./demos/type.tsx">不同类型</code>

## API

### Input

| 参数        | 说明                | 类型                            | 默认值      |
| ----------- | ------------------- | ------------------------------- | ----------- |
| size        | 输入框尺寸          | `"sm" \| "default" \| "lg"`     | `"default"` |
| type        | 输入框类型          | `string`                        | `"text"`    |
| disabled    | 是否禁用            | `boolean`                       | `false`     |
| placeholder | 输入框占位文本      | `string`                        | -           |
| className   | 自定义类名          | `string`                        | -           |
| ...props    | 其他原生 input 属性 | `React.ComponentProps<"input">` | -           |
