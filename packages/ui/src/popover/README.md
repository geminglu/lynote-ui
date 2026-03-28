---
category: Components
title: Popover 弹出框
subtitle: Popover 弹出框
demo:
  cols: 1
group:
  title: 反馈
  order: 8
nav: 组件
toc: content
background: #111
compact: true
---

## 安装

:::code-group

```bash [pnpm]
pnpm add lynote-ui
```

```bash [yarn]
yarn add lynote-ui
```

```bash [npm]
npm install lynote-ui
```

:::

## 导入

:::code-group

```ts [单个] | pure
import {
  Popover,
  PopoverAnchor,
  PopoverContent,
  PopoverDescription,
  PopoverHeader,
  PopoverTitle,
  PopoverTrigger,
} from "lynote-ui";
```

:::

弹出框组件，用于在触发元素附近显示浮动内容。

## 代码演示

<code src="./demos/base.tsx">基本用法</code>

<code src="./demos/align.tsx" description="Use the align prop on PopoverContent to control the horizontal alignment.">对齐方式</code>

<code src="./demos/withForm.tsx" description="A popover with form fields inside.">与表单结合使用</code>

## API

### Popover

弹出框的根容器组件。

| 参数         | 说明             | 类型                      | 默认值 |
| ------------ | ---------------- | ------------------------- | ------ |
| open         | 是否打开         | `boolean`                 | -      |
| defaultOpen  | 默认是否打开     | `boolean`                 | -      |
| onOpenChange | 打开状态变化回调 | `(open: boolean) => void` | -      |
| modal        | 禁止滚动         | `boolean`                 | -      |
| children     | 子元素           | `React.ReactNode`         | -      |

### PopoverTrigger

触发弹出框的元素。

| 参数    | 说明             | 类型      | 默认值 |
| ------- | ---------------- | --------- | ------ |
| asChild | 合并子元素的属性 | `boolean` | -      |

### PopoverContent

弹出框的内容区域。

| 参数       | 说明             | 类型                                     | 默认值     |
| ---------- | ---------------- | ---------------------------------------- | ---------- |
| align      | 对齐方式         | `"start" \| "center" \| "end"`           | `"center"` |
| side       | 位置             | `"top" \| "right" \| "bottom" \| "left"` | `"bottom"` |
| sideOffset | 与触发元素的距离 | `number`                                 | `4`        |
| portal     | 是否使用 Portal  | `boolean`                                | `true`     |
| className  | 自定义类名       | `string`                                 | -          |

### PopoverAnchor

弹出框的锚点元素。

| 参数 | 说明 | 类型 | 默认值 |
| ---- | ---- | ---- | ------ |
