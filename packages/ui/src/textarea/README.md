---
category: Components
title: Textarea 文本域
subtitle: Textarea 文本域
demo:
  cols: 1
group:
  title: 表单
  order: 7
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
import { Textarea } from "lynote-ui";
```

```ts [全局] | pure
import { Textarea } from "gml-ui";
```

:::

文本域，用于多行文本输入。

## 代码演示

<code src="./demos/base.tsx">基本用法</code>

<code src="./demos/disabled.tsx">禁用状态</code>

<code src="./demos/resize.tsx">调整大小</code>

## API

### Textarea

| 参数        | 说明                   | 类型                               | 默认值  |
| ----------- | ---------------------- | ---------------------------------- | ------- |
| placeholder | 占位文本               | `string`                           | -       |
| disabled    | 是否禁用               | `boolean`                          | `false` |
| rows        | 行数                   | `number`                           | -       |
| cols        | 列数                   | `number`                           | -       |
| className   | 自定义类名             | `string`                           | -       |
| ...props    | 其他原生 textarea 属性 | `React.ComponentProps<"textarea">` | -       |
