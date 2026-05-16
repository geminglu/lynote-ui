---
category: Components
title: Kbd 键盘按键
subtitle: Kbd 键盘按键
demo:
  cols: 1
group:
  title: 数据展示
  order: 5
nav: 组件
toc: content
background: #111
compact: true
---

呈现键盘按键的视觉样式，常用于快捷键提示、命令面板 trigger、Tooltip 内的快捷键说明。基于原生 `<kbd>` 元素，保留语义。

## 特性

- **语义化**：渲染为 `<kbd>`，对读屏与搜索引擎友好。
- **`KbdGroup` 组合**：多个按键拼成一个组合键（如 `⌘ + ⇧ + P`）。
- **自动适配上下文**：在 `Tooltip` 内会自动反色以保持对比度。

## 何时使用

- 文档中描述快捷键。
- 命令面板 / 搜索 trigger 的右侧提示（如 `⌘K`）。
- 设置面板里展示当前已绑定的快捷键。

## 何时不使用

- 真实可点击的按钮——使用 `Button`。
- 表单输入框——使用 `Input`。

## 导入

```ts | pure
import { Kbd, KbdGroup } from "lynote-ui/kbd";
```

## 代码演示

<code src="./demos/base.tsx">基本用法</code>

<code src="./demos/group.tsx" description="`KbdGroup` 把多个 `Kbd` 拼接成一个组合键。">组合键</code>

<code src="./demos/in-button.tsx" description="常见于全局搜索 / 命令面板 trigger 的右侧。">嵌入按钮</code>

## API

### Kbd

| 参数      | 说明       | 类型                          | 默认值 |
| --------- | ---------- | ----------------------------- | ------ |
| className | 自定义类名 | `string`                      | -      |
| children  | 按键文字   | `React.ReactNode`             | -      |
| ...props  | 原生 kbd   | `React.ComponentProps<"kbd">` | -      |

### KbdGroup

| 参数      | 说明       | 类型                          | 默认值 |
| --------- | ---------- | ----------------------------- | ------ |
| className | 自定义类名 | `string`                      | -      |
| children  | 一组 `Kbd` | `React.ReactNode`             | -      |
| ...props  | 原生 div   | `React.ComponentProps<"div">` | -      |
