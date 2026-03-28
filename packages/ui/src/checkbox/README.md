---
category: Components
title: Checkbox 复选框
subtitle: Checkbox 复选框
demo:
  cols: 1
group:
  title: 表单
  order: 3
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
import { Checkbox } from "lynote-ui";
```

```ts [全局] | pure
import { Checkbox } from "gml-ui";
```

:::

复选框用于在一组可选项中进行多项选择时。

## 代码演示

<code src="./demos/base.tsx">基本用法</code>

<code src="./demos/disabled.tsx">禁用状态</code>

<code src="./demos/controlled.tsx">受控模式</code>

## API

### Checkbox

| 参数            | 说明                        | 类型                                                  | 默认值  |
| --------------- | --------------------------- | ----------------------------------------------------- | ------- |
| checked         | 指定当前是否选中            | `boolean`                                             | -       |
| defaultChecked  | 初始是否选中                | `boolean`                                             | `false` |
| disabled        | 是否禁用                    | `boolean`                                             | `false` |
| onCheckedChange | 选中状态改变时的回调        | `(checked: boolean) => void`                          | -       |
| className       | 自定义类名                  | `string`                                              | -       |
| ...props        | 其他 Radix UI Checkbox 属性 | `React.ComponentProps<typeof CheckboxPrimitive.Root>` | -       |
