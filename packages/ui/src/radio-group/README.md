---
category: Components
title: RadioGroup 单选组
subtitle: RadioGroup 单选组
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
import { RadioGroup, RadioGroupItem } from "lynote-ui";
```

:::

用于在一组选项中选择一个值。

## 使用建议

- 该组件基于 Base UI 封装，行为、键盘交互和无障碍语义继承自 Base UI。
- 文档中的 API 以当前 `lynote-ui` 封装导出的属性为准，优先列出业务中最常用且稳定的属性。
- `className` 用于覆盖或扩展样式；复杂组合场景建议优先使用已导出的子组件组合。

## 组件结构

```tsx | pure
<RadioGroup>
  <RadioGroupItem />
</RadioGroup>
```

## 代码演示

<code src="./demos/base.tsx">基本用法</code>

<code src="./demos/controlled.tsx">受控用法</code>

<code src="./demos/disabled.tsx">禁用状态</code>

## API

### RadioGroup

RadioGroup 组件。

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

### RadioGroupItem

RadioGroupItem 组件。

| 参数      | 说明       | 类型                      | 默认值 |
| --------- | ---------- | ------------------------- | ------ |
| value     | 组件值     | `string`                  | -      |
| disabled  | 是否禁用   | `boolean`                 | false  |
| className | 自定义类名 | `string`                  | -      |
| children  | 内容       | `React.ReactNode`         | -      |
| onClick   | 点击回调   | `React.MouseEventHandler` | -      |
