---
category: Components
title: Accordion 手风琴
subtitle: Accordion 手风琴
demo:
  cols: 1
group:
  title: 数据展示
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
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "lynote-ui";
```

```ts [全局] | pure
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "gml-ui";
```

:::

手风琴组件，用于展示可折叠的内容区域。

## 代码演示

<code src="./demos/base.tsx">基本用法</code>

## API

### Accordion

手风琴的根容器组件。

| 参数          | 说明                 | 类型                                                   | 默认值 |
| ------------- | -------------------- | ------------------------------------------------------ | ------ |
| type          | 手风琴类型           | `"single" \| "multiple"`                               | -      |
| defaultValue  | 默认展开的值         | `string \| string[]`                                   | -      |
| value         | 当前展开的值（受控） | `string \| string[]`                                   | -      |
| onValueChange | 值变化时的回调       | `(value: string \| string[]) => void`                  | -      |
| ...props      | 其他原生属性         | `React.ComponentProps<typeof AccordionPrimitive.Root>` | -      |

### AccordionItem

手风琴的单个项目。

| 参数      | 说明         | 类型                                                   | 默认值 |
| --------- | ------------ | ------------------------------------------------------ | ------ |
| value     | 项目的唯一值 | `string`                                               | -      |
| className | 自定义类名   | `string`                                               | -      |
| ...props  | 其他原生属性 | `React.ComponentProps<typeof AccordionPrimitive.Item>` | -      |

### AccordionTrigger

手风琴的触发器按钮。

| 参数      | 说明         | 类型                                                      | 默认值 |
| --------- | ------------ | --------------------------------------------------------- | ------ |
| className | 自定义类名   | `string`                                                  | -      |
| ...props  | 其他原生属性 | `React.ComponentProps<typeof AccordionPrimitive.Trigger>` | -      |

### AccordionContent

手风琴的内容区域。

| 参数      | 说明         | 类型                                                      | 默认值 |
| --------- | ------------ | --------------------------------------------------------- | ------ |
| className | 自定义类名   | `string`                                                  | -      |
| ...props  | 其他原生属性 | `React.ComponentProps<typeof AccordionPrimitive.Content>` | -      |
