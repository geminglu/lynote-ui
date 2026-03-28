---
category: Components
title: Label 标签
subtitle: Label 标签
demo:
  cols: 1
group:
  title: 表单
  order: 6
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
import { Label } from "lynote-ui";
```

```ts [全局] | pure
import { Label } from "gml-ui";
```

:::

标签组件，用于表单字段的标签。

## 代码演示

<code src="./demos/base.tsx">基本用法</code>

<code src="./demos/with-input.tsx">配合输入框</code>

## API

### Label

| 参数      | 说明                     | 类型                                               | 默认值 |
| --------- | ------------------------ | -------------------------------------------------- | ------ |
| htmlFor   | 关联的表单元素 ID        | `string`                                           | -      |
| className | 自定义类名               | `string`                                           | -      |
| ...props  | 其他 Radix UI Label 属性 | `React.ComponentProps<typeof LabelPrimitive.Root>` | -      |
