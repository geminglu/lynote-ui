---
category: Components
title: Tabs 标签页
subtitle: Tabs 标签页
demo:
  cols: 1
group:
  title: 数据展示
  order: 8
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
import { Tabs, TabsList, TabsTrigger, TabsContent } from "lynote-ui";
```

:::

标签页组件，用于在不同内容视图之间切换。

## 代码演示

<code src="./demos/base.tsx">基本用法</code>

## API

### Tabs

标签页的根容器组件。

| 参数          | 说明             | 类型                                              | 默认值 |
| ------------- | ---------------- | ------------------------------------------------- | ------ |
| value         | 当前激活的标签值 | `string`                                          | -      |
| defaultValue  | 默认激活的标签值 | `string`                                          | -      |
| onValueChange | 值变化回调       | `(value: string) => void`                         | -      |
| className     | 自定义类名       | `string`                                          | -      |
| ...props      | 其他原生属性     | `React.ComponentProps<typeof TabsPrimitive.Root>` | -      |

### TabsList

标签页列表容器。

| 参数      | 说明         | 类型                                              | 默认值 |
| --------- | ------------ | ------------------------------------------------- | ------ |
| className | 自定义类名   | `string`                                          | -      |
| ...props  | 其他原生属性 | `React.ComponentProps<typeof TabsPrimitive.List>` | -      |

### TabsTrigger

标签页触发器。

| 参数      | 说明         | 类型                                                 | 默认值 |
| --------- | ------------ | ---------------------------------------------------- | ------ |
| value     | 标签值       | `string`                                             | -      |
| className | 自定义类名   | `string`                                             | -      |
| ...props  | 其他原生属性 | `React.ComponentProps<typeof TabsPrimitive.Trigger>` | -      |

### TabsContent

标签页内容区域。

| 参数      | 说明         | 类型                                                 | 默认值 |
| --------- | ------------ | ---------------------------------------------------- | ------ |
| value     | 标签值       | `string`                                             | -      |
| className | 自定义类名   | `string`                                             | -      |
| ...props  | 其他原生属性 | `React.ComponentProps<typeof TabsPrimitive.Content>` | -      |
