---
category: Components
title: Empty 空状态
subtitle: Empty 空状态
demo:
  cols: 1
group:
  title: 数据展示
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
import {
  Empty,
  EmptyHeader,
  EmptyMedia,
  EmptyTitle,
  EmptyDescription,
  EmptyContent,
} from "lynote-ui";
```

:::

空状态组件，用于在无数据时显示提示信息。

## 代码演示

<code src="./demos/base.tsx">基本用法</code>

## API

### Empty

空状态的根容器组件。

| 参数      | 说明              | 类型                          | 默认值 |
| --------- | ----------------- | ----------------------------- | ------ |
| className | 自定义类名        | `string`                      | -      |
| ...props  | 其他原生 div 属性 | `React.ComponentProps<"div">` | -      |

### EmptyHeader

空状态的头部区域。

| 参数      | 说明              | 类型                          | 默认值 |
| --------- | ----------------- | ----------------------------- | ------ |
| className | 自定义类名        | `string`                      | -      |
| ...props  | 其他原生 div 属性 | `React.ComponentProps<"div">` | -      |

### EmptyMedia

空状态的媒体区域（图标或图片）。

| 参数      | 说明              | 类型                          | 默认值      |
| --------- | ----------------- | ----------------------------- | ----------- |
| variant   | 媒体变体          | `"default" \| "icon"`         | `"default"` |
| className | 自定义类名        | `string`                      | -           |
| ...props  | 其他原生 div 属性 | `React.ComponentProps<"div">` | -           |

### EmptyTitle

空状态的标题。

| 参数      | 说明              | 类型                          | 默认值 |
| --------- | ----------------- | ----------------------------- | ------ |
| className | 自定义类名        | `string`                      | -      |
| ...props  | 其他原生 div 属性 | `React.ComponentProps<"div">` | -      |

### EmptyDescription

空状态的描述内容。

| 参数      | 说明            | 类型                        | 默认值 |
| --------- | --------------- | --------------------------- | ------ |
| className | 自定义类名      | `string`                    | -      |
| ...props  | 其他原生 p 属性 | `React.ComponentProps<"p">` | -      |

### EmptyContent

空状态的内容区域。

| 参数      | 说明              | 类型                          | 默认值 |
| --------- | ----------------- | ----------------------------- | ------ |
| className | 自定义类名        | `string`                      | -      |
| ...props  | 其他原生 div 属性 | `React.ComponentProps<"div">` | -      |
