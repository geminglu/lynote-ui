---
category: Components
title: Select 选择器
subtitle: Select 选择器
demo:
  cols: 1
group:
  title: 表单
  order: 4
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
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "lynote-ui";
```

```ts [全局] | pure
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "gml-ui";
```

:::

下拉选择器。

## 代码演示

<code src="./demos/base.tsx">基本用法</code>

<code src="./demos/size.tsx">尺寸用法</code>

<code src="./demos/disabled.tsx">禁用状态</code>

<code src="./demos/group.tsx">分组</code>

## API

### Select

下拉选择器的根组件。

| 参数          | 说明                      | 类型                                                | 默认值  |
| ------------- | ------------------------- | --------------------------------------------------- | ------- |
| value         | 当前选中的值              | `string`                                            | -       |
| defaultValue  | 默认选中的值              | `string`                                            | -       |
| onValueChange | 值改变时的回调            | `(value: string) => void`                           | -       |
| disabled      | 是否禁用                  | `boolean`                                           | `false` |
| ...props      | 其他 Radix UI Select 属性 | `React.ComponentProps<typeof SelectPrimitive.Root>` | -       |

### SelectTrigger

下拉选择器的触发器。

| 参数      | 说明                             | 类型                                                   | 默认值      |
| --------- | -------------------------------- | ------------------------------------------------------ | ----------- |
| size      | 触发器尺寸                       | `"sm" \| "default"`                                    | `"default"` |
| className | 自定义类名                       | `string`                                               | -           |
| ...props  | 其他 Radix UI SelectTrigger 属性 | `React.ComponentProps<typeof SelectPrimitive.Trigger>` | -           |

### SelectValue

显示当前选中的值。

| 参数        | 说明                           | 类型                                                 | 默认值 |
| ----------- | ------------------------------ | ---------------------------------------------------- | ------ |
| placeholder | 占位文本                       | `string`                                             | -      |
| ...props    | 其他 Radix UI SelectValue 属性 | `React.ComponentProps<typeof SelectPrimitive.Value>` | -      |

### SelectContent

下拉选择器的内容容器。

| 参数      | 说明                             | 类型                                                   | 默认值     |
| --------- | -------------------------------- | ------------------------------------------------------ | ---------- |
| position  | 定位方式                         | `"popper" \| "item-aligned"`                           | `"popper"` |
| align     | 对齐方式                         | `"start" \| "center" \| "end"`                         | `"center"` |
| className | 自定义类名                       | `string`                                               | -          |
| ...props  | 其他 Radix UI SelectContent 属性 | `React.ComponentProps<typeof SelectPrimitive.Content>` | -          |

### SelectItem

下拉选择器的选项。

| 参数      | 说明                          | 类型                                                | 默认值  |
| --------- | ----------------------------- | --------------------------------------------------- | ------- |
| value     | 选项的值                      | `string`                                            | -       |
| disabled  | 是否禁用                      | `boolean`                                           | `false` |
| className | 自定义类名                    | `string`                                            | -       |
| ...props  | 其他 Radix UI SelectItem 属性 | `React.ComponentProps<typeof SelectPrimitive.Item>` | -       |

### SelectGroup

下拉选择器的分组容器。

### SelectLabel

下拉选择器的标签。

### SelectSeparator

下拉选择器的分隔符。
