---
category: Components
title: Button 按钮
subtitle: Button 按钮
demo:
  cols: 1
group:
  title: 通用
  order: 1
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
import { Button } from "lynote-ui";
```

:::

用于触发操作或提交表单，支持多种视觉变体和尺寸。

## 使用建议

- 该组件基于 Base UI 封装，行为、键盘交互和无障碍语义继承自 Base UI。
- 文档中的 API 以当前 `lynote-ui` 封装导出的属性为准，优先列出业务中最常用且稳定的属性。
- `className` 用于覆盖或扩展样式；复杂组合场景建议优先使用已导出的子组件组合。

## 组件结构

```tsx | pure
<Button />
```

## 代码演示

<code src="./demos/base.tsx">基本用法</code>

<code src="./demos/size.tsx">尺寸</code>

<code src="./demos/variant.tsx">变体</code>

## API

### Button

Button 组件。

| 参数      | 说明       | 类型                                                                                 | 默认值    |
| --------- | ---------- | ------------------------------------------------------------------------------------ | --------- |
| variant   | 视觉样式   | `"default" \| "outline" \| "secondary" \| "ghost" \| "destructive" \| "link"`        | "default" |
| size      | 尺寸       | `"default" \| "xs" \| "sm" \| "lg" \| "icon" \| "icon-xs" \| "icon-sm" \| "icon-lg"` | "default" |
| disabled  | 是否禁用   | `boolean`                                                                            | false     |
| type      | 按钮类型   | `"button" \| "submit" \| "reset"`                                                    | button    |
| className | 自定义类名 | `string`                                                                             | -         |
| children  | 按钮内容   | `React.ReactNode`                                                                    | -         |
| onClick   | 点击回调   | `React.MouseEventHandler<HTMLButtonElement>`                                         | -         |
