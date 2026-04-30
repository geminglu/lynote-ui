---
category: Components
title: ContextMenu 右键菜单
subtitle: ContextMenu 右键菜单
demo:
  cols: 1
group:
  title: 导航
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
  ContextMenu,
  ContextMenuPortal,
  ContextMenuTrigger,
  ContextMenuContent,
  ContextMenuGroup,
  ContextMenuLabel,
  ContextMenuItem,
  ContextMenuSub,
  ContextMenuSubTrigger,
  ContextMenuSubContent,
  ContextMenuCheckboxItem,
  ContextMenuRadioGroup,
  ContextMenuRadioItem,
  ContextMenuSeparator,
  ContextMenuShortcut,
} from "lynote-ui";
```

:::

在右键或长按时展示上下文操作菜单。

## 使用建议

- 该组件基于 Base UI 封装，行为、键盘交互和无障碍语义继承自 Base UI。
- 文档中的 API 以当前 `lynote-ui` 封装导出的属性为准，优先列出业务中最常用且稳定的属性。
- `className` 用于覆盖或扩展样式；复杂组合场景建议优先使用已导出的子组件组合。

## 组件结构

```tsx | pure
<ContextMenu>
  <ContextMenuPortal />
  <ContextMenuTrigger />
  <ContextMenuContent />
  <ContextMenuGroup />
</ContextMenu>
```

## 代码演示

<code src="./demos/base.tsx">基本用法</code>

## API

### ContextMenu

ContextMenu 组件。

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

### ContextMenuPortal

ContextMenuPortal 组件。

| 参数      | 说明       | 类型              | 默认值 |
| --------- | ---------- | ----------------- | ------ |
| className | 自定义类名 | `string`          | -      |
| children  | 子内容     | `React.ReactNode` | -      |
| id        | 元素 id    | `string`          | -      |

### ContextMenuTrigger

ContextMenuTrigger 组件。

| 参数      | 说明       | 类型                      | 默认值 |
| --------- | ---------- | ------------------------- | ------ |
| value     | 组件值     | `string`                  | -      |
| disabled  | 是否禁用   | `boolean`                 | false  |
| className | 自定义类名 | `string`                  | -      |
| children  | 内容       | `React.ReactNode`         | -      |
| onClick   | 点击回调   | `React.MouseEventHandler` | -      |

### ContextMenuContent

ContextMenuContent 组件。

| 参数        | 说明           | 类型                                                                       | 默认值 |
| ----------- | -------------- | -------------------------------------------------------------------------- | ------ |
| side        | 弹层出现方向   | `"top" \| "bottom" \| "left" \| "right" \| "inline-start" \| "inline-end"` | -      |
| align       | 弹层对齐方式   | `"start" \| "center" \| "end"`                                             | -      |
| sideOffset  | 与锚点的间距   | `number`                                                                   | -      |
| alignOffset | 对齐方向偏移量 | `number`                                                                   | -      |
| className   | 自定义类名     | `string`                                                                   | -      |
| children    | 内容           | `React.ReactNode`                                                          | -      |

### ContextMenuGroup

ContextMenuGroup 组件。

| 参数      | 说明       | 类型              | 默认值 |
| --------- | ---------- | ----------------- | ------ |
| className | 自定义类名 | `string`          | -      |
| children  | 子内容     | `React.ReactNode` | -      |
| id        | 元素 id    | `string`          | -      |

### ContextMenuLabel

ContextMenuLabel 组件。

| 参数      | 说明       | 类型              | 默认值 |
| --------- | ---------- | ----------------- | ------ |
| className | 自定义类名 | `string`          | -      |
| children  | 子内容     | `React.ReactNode` | -      |
| id        | 元素 id    | `string`          | -      |

### ContextMenuItem

ContextMenuItem 组件。

| 参数      | 说明       | 类型                      | 默认值 |
| --------- | ---------- | ------------------------- | ------ |
| value     | 组件值     | `string`                  | -      |
| disabled  | 是否禁用   | `boolean`                 | false  |
| className | 自定义类名 | `string`                  | -      |
| children  | 内容       | `React.ReactNode`         | -      |
| onClick   | 点击回调   | `React.MouseEventHandler` | -      |

### ContextMenuSub

ContextMenuSub 组件。

| 参数      | 说明       | 类型              | 默认值 |
| --------- | ---------- | ----------------- | ------ |
| className | 自定义类名 | `string`          | -      |
| children  | 子内容     | `React.ReactNode` | -      |
| id        | 元素 id    | `string`          | -      |

### ContextMenuSubTrigger

ContextMenuSubTrigger 组件。

| 参数      | 说明       | 类型                      | 默认值 |
| --------- | ---------- | ------------------------- | ------ |
| value     | 组件值     | `string`                  | -      |
| disabled  | 是否禁用   | `boolean`                 | false  |
| className | 自定义类名 | `string`                  | -      |
| children  | 内容       | `React.ReactNode`         | -      |
| onClick   | 点击回调   | `React.MouseEventHandler` | -      |

### ContextMenuSubContent

ContextMenuSubContent 组件。

| 参数        | 说明           | 类型                                                                       | 默认值 |
| ----------- | -------------- | -------------------------------------------------------------------------- | ------ |
| side        | 弹层出现方向   | `"top" \| "bottom" \| "left" \| "right" \| "inline-start" \| "inline-end"` | -      |
| align       | 弹层对齐方式   | `"start" \| "center" \| "end"`                                             | -      |
| sideOffset  | 与锚点的间距   | `number`                                                                   | -      |
| alignOffset | 对齐方向偏移量 | `number`                                                                   | -      |
| className   | 自定义类名     | `string`                                                                   | -      |
| children    | 内容           | `React.ReactNode`                                                          | -      |

### ContextMenuCheckboxItem

ContextMenuCheckboxItem 组件。

| 参数      | 说明       | 类型                      | 默认值 |
| --------- | ---------- | ------------------------- | ------ |
| value     | 组件值     | `string`                  | -      |
| disabled  | 是否禁用   | `boolean`                 | false  |
| className | 自定义类名 | `string`                  | -      |
| children  | 内容       | `React.ReactNode`         | -      |
| onClick   | 点击回调   | `React.MouseEventHandler` | -      |

### ContextMenuRadioGroup

ContextMenuRadioGroup 组件。

| 参数      | 说明       | 类型              | 默认值 |
| --------- | ---------- | ----------------- | ------ |
| className | 自定义类名 | `string`          | -      |
| children  | 子内容     | `React.ReactNode` | -      |
| id        | 元素 id    | `string`          | -      |

### ContextMenuRadioItem

ContextMenuRadioItem 组件。

| 参数      | 说明       | 类型                      | 默认值 |
| --------- | ---------- | ------------------------- | ------ |
| value     | 组件值     | `string`                  | -      |
| disabled  | 是否禁用   | `boolean`                 | false  |
| className | 自定义类名 | `string`                  | -      |
| children  | 内容       | `React.ReactNode`         | -      |
| onClick   | 点击回调   | `React.MouseEventHandler` | -      |

### ContextMenuSeparator

ContextMenuSeparator 组件。

| 参数        | 说明       | 类型                         | 默认值       |
| ----------- | ---------- | ---------------------------- | ------------ |
| orientation | 方向       | `"horizontal" \| "vertical"` | "horizontal" |
| className   | 自定义类名 | `string`                     | -            |

### ContextMenuShortcut

ContextMenuShortcut 组件。

| 参数      | 说明       | 类型              | 默认值 |
| --------- | ---------- | ----------------- | ------ |
| className | 自定义类名 | `string`          | -      |
| children  | 子内容     | `React.ReactNode` | -      |
| id        | 元素 id    | `string`          | -      |
