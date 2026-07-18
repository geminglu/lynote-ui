---
category: Components
title: Label 标签
subtitle: Label 标签
demo:
  cols: 1
group:
  title: 表单
  order: 6
nav: 组件
toc: content
background: #111
compact: true
---

表单字段的标签，封装原生 `<label>` 元素并自动联动 `peer-disabled` / `data-disabled` 状态。如需更完整的字段布局（描述、错误、横排），推荐使用 `Field` 系列组件。

## 特性

- **原生 label**：完整保留 `<label>` 的可访问能力与点击聚焦行为。
- **状态联动**：关联控件被禁用时自动变灰；外层 `[data-disabled=true]` 的 group 也会让 Label 跟随。
- **不持有任何状态**：纯展示组件。

## 何时使用

- 单独使用一个表单控件且不需要 description / error。
- 与 Checkbox / Switch / RadioGroup 在同一行布局。
- 在 `<Field>` 内不便使用 `<FieldLabel>` 的极简场景。

## 何时不使用

- 需要描述文字、错误提示、响应式横排——使用 `Field` + `FieldLabel`。
- 纯展示的标签（非表单字段）——使用普通排版组件。

## 导入

```ts | pure
import { Label } from "lynote-ui/label";
```

## 代码演示

<code src="./demos/base.tsx">基本用法</code>

<code src="./demos/with-input.tsx">配合输入框</code>

<code src=”./demos/required.tsx” description=”通过手动追加 `*` 或 “(可选)” 标记字段的必填/可选属性。”>必填与可选</code>

<code src=”./demos/size.tsx”>尺寸</code>

## 最佳实践

- **始终使用 `htmlFor`**：与控件 id 关联，点击 label 会聚焦控件，且读屏器会朗读 label。
- **不要嵌套表单控件**：把 label 与控件分别放置，通过 `htmlFor` 关联；嵌套会导致冒泡事件难以预测。
- **必填标记保持一致**：在同一表单内统一使用 `*` 或"（可选）"标记，不要混用。

## API

### Label

| 参数      | 说明               | 类型                                | 默认值      |
| --------- | ------------------ | ----------------------------------- | ----------- |
| size      | 尺寸               | `"xs" \| "sm" \| "default" \| "lg"` | `"default"` |
| htmlFor   | 关联控件 id        | `string`                            | -           |
| className | 自定义类名         | `string`                            | -           |
| children  | 标签内容           | `React.ReactNode`                   | -           |
| ...props  | 透传原生 `<label>` | `React.ComponentProps<"label">`     | -           |
