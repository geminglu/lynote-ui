---
category: Components
title: ToggleGroup 切换按钮组
subtitle: ToggleGroup 切换按钮组
demo:
  cols: 1
group:
  title: 表单
  order: 11
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
import { ToggleGroup, ToggleGroupItem } from "lynote-ui";
```

:::

切换按钮组组件，用于在多个选项之间进行单选或多选。

## 代码演示

<code src="./demos/base.tsx">基本用法</code>

## API

### ToggleGroup

切换按钮组的根容器组件。

| 参数          | 说明         | 类型                                                     | 默认值      |
| ------------- | ------------ | -------------------------------------------------------- | ----------- |
| type          | 选择类型     | `"single" \| "multiple"`                                 | -           |
| value         | 当前值       | `string \| string[]`                                     | -           |
| defaultValue  | 默认值       | `string \| string[]`                                     | -           |
| onValueChange | 值变化回调   | `(value: string \| string[]) => void`                    | -           |
| variant       | 按钮变体     | `"default" \| "outline"`                                 | `"default"` |
| size          | 按钮尺寸     | `"default" \| "sm" \| "lg"`                              | `"default"` |
| spacing       | 按钮间距     | `number`                                                 | `0`         |
| className     | 自定义类名   | `string`                                                 | -           |
| ...props      | 其他原生属性 | `React.ComponentProps<typeof ToggleGroupPrimitive.Root>` | -           |

### ToggleGroupItem

切换按钮组中的单个按钮。

| 参数      | 说明         | 类型                                                     | 默认值 |
| --------- | ------------ | -------------------------------------------------------- | ------ |
| value     | 按钮值       | `string`                                                 | -      |
| variant   | 按钮变体     | `"default" \| "outline"`                                 | -      |
| size      | 按钮尺寸     | `"default" \| "sm" \| "lg"`                              | -      |
| className | 自定义类名   | `string`                                                 | -      |
| ...props  | 其他原生属性 | `React.ComponentProps<typeof ToggleGroupPrimitive.Item>` | -      |
