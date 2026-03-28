---
category: Components
title: RadioGroup 单选框组
subtitle: RadioGroup 单选框组
demo:
  cols: 1
group:
  title: 表单
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
import { RadioGroup, RadioGroupItem } from "lynote-ui";
```

```ts [全局] | pure
import { RadioGroup, RadioGroupItem } from "gml-ui";
```

:::

单选框，用于在多个选项中选择一个。

## 代码演示

<code src="./demos/base.tsx">基本用法</code>

<code src="./demos/disabled.tsx">禁用状态</code>

<code src="./demos/controlled.tsx">受控模式</code>

## API

### RadioGroup

单选框组的根容器组件。

| 参数          | 说明                          | 类型                                                    | 默认值  |
| ------------- | ----------------------------- | ------------------------------------------------------- | ------- |
| value         | 当前选中的值                  | `string`                                                | -       |
| defaultValue  | 默认选中的值                  | `string`                                                | -       |
| onValueChange | 值改变时的回调                | `(value: string) => void`                               | -       |
| disabled      | 是否禁用整个组                | `boolean`                                               | `false` |
| className     | 自定义类名                    | `string`                                                | -       |
| ...props      | 其他 Radix UI RadioGroup 属性 | `React.ComponentProps<typeof RadioGroupPrimitive.Root>` | -       |

### RadioGroupItem

单选框项。

| 参数      | 说明                              | 类型                                                    | 默认值  |
| --------- | --------------------------------- | ------------------------------------------------------- | ------- |
| value     | 选项的值                          | `string`                                                | -       |
| disabled  | 是否禁用                          | `boolean`                                               | `false` |
| className | 自定义类名                        | `string`                                                | -       |
| ...props  | 其他 Radix UI RadioGroupItem 属性 | `React.ComponentProps<typeof RadioGroupPrimitive.Item>` | -       |
