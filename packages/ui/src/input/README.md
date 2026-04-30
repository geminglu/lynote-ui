---
category: Components
title: Input 输入框
subtitle: Input 输入框
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
import { Input } from "lynote-ui";
```

:::

基础文本输入控件，继承 Base UI Input 的可访问能力。

## 使用建议

- 该组件基于 Base UI 封装，行为、键盘交互和无障碍语义继承自 Base UI。
- 文档中的 API 以当前 `lynote-ui` 封装导出的属性为准，优先列出业务中最常用且稳定的属性。
- `className` 用于覆盖或扩展样式；复杂组合场景建议优先使用已导出的子组件组合。

## 组件结构

```tsx | pure
<Input />
```

## 代码演示

<code src="./demos/base.tsx">基本用法</code>

<code src="./demos/disabled.tsx">禁用状态</code>

<code src="./demos/size.tsx">尺寸</code>

<code src="./demos/type.tsx">Type</code>

## API

### Input

Input 组件。

| 参数         | 说明                 | 类型                                         | 默认值 |
| ------------ | -------------------- | -------------------------------------------- | ------ |
| value        | 输入值，受控模式使用 | `string \| number \| readonly string[]`      | -      |
| defaultValue | 默认输入值           | `string \| number \| readonly string[]`      | -      |
| placeholder  | 占位文本             | `string`                                     | -      |
| type         | 输入类型             | `React.HTMLInputTypeAttribute`               | "text" |
| disabled     | 是否禁用             | `boolean`                                    | false  |
| className    | 自定义类名           | `string`                                     | -      |
| onChange     | 输入变化回调         | `React.ChangeEventHandler<HTMLInputElement>` | -      |
