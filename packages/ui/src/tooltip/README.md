---
category: Components
title: Tooltip 工具提示
subtitle: Tooltip 工具提示
demo:
  cols: 1
group:
  title: 反馈
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
import {
  Tooltip,
  TooltipTrigger,
  TooltipContent,
  TooltipProvider,
} from "lynote-ui";
```

:::

在悬停或聚焦时展示简短说明。

## 使用建议

- 该组件基于 Base UI 封装，行为、键盘交互和无障碍语义继承自 Base UI。
- 文档中的 API 以当前 `lynote-ui` 封装导出的属性为准，优先列出业务中最常用且稳定的属性。
- `className` 用于覆盖或扩展样式；复杂组合场景建议优先使用已导出的子组件组合。

## 组件结构

```tsx | pure
<Tooltip>
  <TooltipTrigger />
  <TooltipContent />
  <TooltipProvider />
</Tooltip>
```

## 代码演示

<code src="./demos/base.tsx">基本用法</code>

<code src="./demos/placement.tsx">弹层位置</code>

## API

### Tooltip

Tooltip 组件。

| 参数          | 说明                   | 类型                                  | 默认值 |
| ------------- | ---------------------- | ------------------------------------- | ------ |
| value         | 当前值，受控模式使用   | `string \| string[]`                  | -      |
| defaultValue  | 默认值，非受控模式使用 | `string \| string[]`                  | -      |
| open          | 是否打开，受控模式使用 | `boolean`                             | -      |
| defaultOpen   | 默认是否打开           | `boolean`                             | false  |
| onOpenChange  | 打开状态变化回调       | `(open: boolean) => void`             | -      |
| onValueChange | 值变化回调             | `(value: string \| string[]) => void` | -      |
| disabled      | 是否禁用               | `boolean`                             | false  |
| className     | 自定义类名             | `string`                              | -      |
| children      | 子组件                 | `React.ReactNode`                     | -      |

### TooltipTrigger

TooltipTrigger 组件。

| 参数      | 说明       | 类型                      | 默认值 |
| --------- | ---------- | ------------------------- | ------ |
| value     | 组件值     | `string`                  | -      |
| disabled  | 是否禁用   | `boolean`                 | false  |
| className | 自定义类名 | `string`                  | -      |
| children  | 内容       | `React.ReactNode`         | -      |
| onClick   | 点击回调   | `React.MouseEventHandler` | -      |

### TooltipContent

TooltipContent 组件。

| 参数        | 说明           | 类型                                                                       | 默认值 |
| ----------- | -------------- | -------------------------------------------------------------------------- | ------ |
| side        | 弹层出现方向   | `"top" \| "bottom" \| "left" \| "right" \| "inline-start" \| "inline-end"` | -      |
| align       | 弹层对齐方式   | `"start" \| "center" \| "end"`                                             | -      |
| sideOffset  | 与锚点的间距   | `number`                                                                   | -      |
| alignOffset | 对齐方向偏移量 | `number`                                                                   | -      |
| className   | 自定义类名     | `string`                                                                   | -      |
| children    | 内容           | `React.ReactNode`                                                          | -      |

### TooltipProvider

TooltipProvider 组件。

| 参数      | 说明       | 类型              | 默认值 |
| --------- | ---------- | ----------------- | ------ |
| className | 自定义类名 | `string`          | -      |
| children  | 子内容     | `React.ReactNode` | -      |
| id        | 元素 id    | `string`          | -      |
