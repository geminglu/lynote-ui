---
category: Components
title: Item 列表项
subtitle: Item 列表项
demo:
  cols: 1
group:
  title: 数据展示
  order: 12
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
import { Item, ItemGroup, ItemSeparator } from "lynote-ui";
```

:::

列表项组件，用于构建列表和菜单项。

## 代码演示

<code src="./demos/base.tsx">基本用法</code>

## API

### ItemGroup

列表项分组容器。

| 参数      | 说明              | 类型                          | 默认值 |
| --------- | ----------------- | ----------------------------- | ------ |
| className | 自定义类名        | `string`                      | -      |
| ...props  | 其他原生 div 属性 | `React.ComponentProps<"div">` | -      |

### Item

列表项组件。

| 参数      | 说明               | 类型                                | 默认值      |
| --------- | ------------------ | ----------------------------------- | ----------- |
| variant   | 列表项变体         | `"default" \| "outline" \| "muted"` | `"default"` |
| size      | 列表项尺寸         | `"default" \| "sm"`                 | `"default"` |
| asChild   | 是否作为子元素渲染 | `boolean`                           | `false`     |
| className | 自定义类名         | `string`                            | -           |
| ...props  | 其他原生 div 属性  | `React.ComponentProps<"div">`       | -           |

### ItemSeparator

列表项分隔符。

| 参数      | 说明                | 类型                                     | 默认值 |
| --------- | ------------------- | ---------------------------------------- | ------ |
| className | 自定义类名          | `string`                                 | -      |
| ...props  | 其他 Separator 属性 | `React.ComponentProps<typeof Separator>` | -      |
