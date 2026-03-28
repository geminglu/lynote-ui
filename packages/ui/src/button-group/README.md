---
category: Components
title: ButtonGroup 按钮组
subtitle: ButtonGroup 按钮组
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
import { ButtonGroup, ButtonGroupText, ButtonGroupSeparator } from "lynote-ui";
```

:::

按钮组组件，用于将多个按钮组合在一起。

## 代码演示

<code src="./demos/base.tsx">基本用法</code>

## API

### ButtonGroup

按钮组的根容器组件。

| 参数        | 说明              | 类型                          | 默认值         |
| ----------- | ----------------- | ----------------------------- | -------------- |
| orientation | 按钮组方向        | `"horizontal" \| "vertical"`  | `"horizontal"` |
| className   | 自定义类名        | `string`                      | -              |
| ...props    | 其他原生 div 属性 | `React.ComponentProps<"div">` | -              |

### ButtonGroupText

按钮组中的文本元素。

| 参数      | 说明               | 类型                          | 默认值  |
| --------- | ------------------ | ----------------------------- | ------- |
| asChild   | 是否作为子元素渲染 | `boolean`                     | `false` |
| className | 自定义类名         | `string`                      | -       |
| ...props  | 其他原生 div 属性  | `React.ComponentProps<"div">` | -       |

### ButtonGroupSeparator

按钮组分隔符。

| 参数        | 说明                | 类型                                     | 默认值       |
| ----------- | ------------------- | ---------------------------------------- | ------------ |
| orientation | 分隔符方向          | `"horizontal" \| "vertical"`             | `"vertical"` |
| className   | 自定义类名          | `string`                                 | -            |
| ...props    | 其他 Separator 属性 | `React.ComponentProps<typeof Separator>` | -            |
