---
category: Components
title: Separator 分隔线
subtitle: Separator 分隔线
demo:
  cols: 1
group:
  title: 布局
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
import { Separator } from "lynote-ui";
```

```ts [全局] | pure
import { Separator } from "gml-ui";
```

:::

分隔线组件，用于在内容之间创建视觉分隔。

## 代码演示

<code src="./demos/base.tsx">基本用法</code>

## API

### Separator

分隔线组件。

| 参数        | 说明           | 类型                                                   | 默认值         |
| ----------- | -------------- | ------------------------------------------------------ | -------------- |
| orientation | 分隔线方向     | `"horizontal" \| "vertical"`                           | `"horizontal"` |
| decorative  | 是否仅用于装饰 | `boolean`                                              | `true`         |
| className   | 自定义类名     | `string`                                               | -              |
| ...props    | 其他原生属性   | `React.ComponentProps<typeof SeparatorPrimitive.Root>` | -              |
