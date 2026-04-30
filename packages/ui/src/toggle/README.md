---
category: Components
title: Toggle 切换按钮
subtitle: Toggle 切换按钮
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
import { Toggle } from "lynote-ui";
```

:::

用于在按下和未按下状态之间切换。

## 使用建议

- 该组件基于 Base UI 封装，行为、键盘交互和无障碍语义继承自 Base UI。
- 文档中的 API 以当前 `lynote-ui` 封装导出的属性为准，优先列出业务中最常用且稳定的属性。
- `className` 用于覆盖或扩展样式；复杂组合场景建议优先使用已导出的子组件组合。

## 组件结构

```tsx | pure
<Toggle />
```

## 代码演示

<code src="./demos/base.tsx">基本用法</code>

<code src="./demos/controlled.tsx">受控用法</code>

## API

### Toggle

Toggle 组件。

| 参数            | 说明                   | 类型                         | 默认值    |
| --------------- | ---------------------- | ---------------------------- | --------- |
| pressed         | 按下状态，受控模式使用 | `boolean`                    | -         |
| defaultPressed  | 默认按下状态           | `boolean`                    | -         |
| onPressedChange | 按下状态变化回调       | `(pressed: boolean) => void` | -         |
| variant         | 视觉样式               | `"default" \| "outline"`     | "default" |
| size            | 尺寸                   | `"default" \| "sm" \| "lg"`  | "default" |
| disabled        | 是否禁用               | `boolean`                    | false     |
| className       | 自定义类名             | `string`                     | -         |
| children        | 内容                   | `React.ReactNode`            | -         |
