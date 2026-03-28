---
category: Components
title: Alert 警告提示
subtitle: Alert 警告提示
demo:
  cols: 1
group:
  title: 反馈
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
import { Alert, AlertTitle, AlertDescription } from "lynote-ui";
```

```ts [全局] | pure
import { Alert, AlertTitle, AlertDescription } from "gml-ui";
```

:::

警告提示，展现需要关注的信息。

## 代码演示

<code src="./demos/base.tsx">基本用法</code>

<code src="./demos/variant.tsx">变体用法</code>

<code src="./demos/with-icon.tsx">带图标</code>

## API

### Alert

警告提示的容器组件。

| 参数      | 说明              | 类型                          | 默认值      |
| --------- | ----------------- | ----------------------------- | ----------- |
| variant   | 警告提示的变体    | `"default" \| "destructive"`  | `"default"` |
| className | 自定义类名        | `string`                      | -           |
| ...props  | 其他原生 div 属性 | `React.ComponentProps<"div">` | -           |

### AlertTitle

警告提示的标题。

| 参数      | 说明              | 类型                          | 默认值 |
| --------- | ----------------- | ----------------------------- | ------ |
| className | 自定义类名        | `string`                      | -      |
| ...props  | 其他原生 div 属性 | `React.ComponentProps<"div">` | -      |

### AlertDescription

警告提示的描述内容。

| 参数      | 说明              | 类型                          | 默认值 |
| --------- | ----------------- | ----------------------------- | ------ |
| className | 自定义类名        | `string`                      | -      |
| ...props  | 其他原生 div 属性 | `React.ComponentProps<"div">` | -      |
