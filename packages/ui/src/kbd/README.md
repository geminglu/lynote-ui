---
category: Components
title: Kbd 键盘按键
subtitle: Kbd 键盘按键
demo:
  cols: 1
group:
  title: 数据展示
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
import { Kbd, KbdGroup } from "lynote-ui";
```

```ts [全局] | pure
import { Kbd, KbdGroup } from "gml-ui";
```

:::

键盘按键组件，用于显示键盘快捷键。

## 代码演示

<code src="./demos/base.tsx">基本用法</code>

## API

### Kbd

单个键盘按键组件。

| 参数      | 说明              | 类型                          | 默认值 |
| --------- | ----------------- | ----------------------------- | ------ |
| className | 自定义类名        | `string`                      | -      |
| ...props  | 其他原生 kbd 属性 | `React.ComponentProps<"kbd">` | -      |

### KbdGroup

键盘按键组合组件。

| 参数      | 说明              | 类型                          | 默认值 |
| --------- | ----------------- | ----------------------------- | ------ |
| className | 自定义类名        | `string`                      | -      |
| ...props  | 其他原生 div 属性 | `React.ComponentProps<"div">` | -      |
