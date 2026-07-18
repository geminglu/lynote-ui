---
category: Components
title: Toggle 切换按钮
subtitle: Toggle 切换按钮
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

Toggle 是一个可按下保持选中态的按钮，常用于工具栏中表达"开/关"状态（如富文本编辑器的"加粗 / 斜体"按钮）。基于 Base UI Toggle 原语，自带 `aria-pressed` 语义。

## 特性

- **4 种尺寸**：`xs` / `sm` / `default` / `lg`。
- **2 种变体**：`default`（无边框）/ `outline`（带边框）。
- **受控 / 非受控**：`pressed` + `onPressedChange` 或 `defaultPressed`。
- **可访问语义**：自动 `aria-pressed`，读屏器明确朗读状态。

## 何时使用

- 富文本工具栏：加粗、斜体、下划线、对齐等可按下保持状态的按钮。
- 偏好开关，但视觉上希望保留按钮外观（如"收藏 / 已收藏"）。
- 视图模式切换（列表 / 网格）——更常用 `ToggleGroup`。

## 何时不使用

- 选项之间互斥——使用 `ToggleGroup type="single"`。
- 表单中表达布尔字段——使用 `Switch` 或 `Checkbox`。
- 触发一次性操作——使用 `Button`。

## 导入

```ts | pure
import { Toggle } from "lynote-ui/toggle";
```

## 代码演示

<code src="./demos/base.tsx">基本用法</code>

<code src="./demos/controlled.tsx">受控用法</code>

<code src="./demos/with-icon.tsx" description="仅图标的 Toggle 必须设置 `aria-label`；与文字一起使用时图标用 `data-icon` 槽位。">带图标</code>

<code src="./demos/sizes.tsx">尺寸</code>

## 最佳实践

- **纯图标 Toggle 务必 `aria-label`**：例如"加粗"按钮要写 `aria-label="加粗"`。
- **视觉与状态一致**：按下时 `data-state="on"` 会切换背景色，自定义样式应保持视觉差异明显。
- **不要把 Toggle 当 Tabs 用**：互斥选择请改用 `ToggleGroup type="single"` 或 `Tabs`。

## API

### Toggle

| 参数            | 说明                   | 类型                                | 默认值      |
| --------------- | ---------------------- | ----------------------------------- | ----------- |
| pressed         | 按下状态（受控）       | `boolean`                           | -           |
| defaultPressed  | 默认按下状态（非受控） | `boolean`                           | `false`     |
| onPressedChange | 按下状态变化回调       | `(pressed: boolean) => void`        | -           |
| variant         | 视觉变体               | `"default" \| "outline"`            | `"default"` |
| size            | 尺寸                   | `"xs" \| "sm" \| "default" \| "lg"` | `"default"` |
| disabled        | 是否禁用               | `boolean`                           | `false`     |
| className       | 自定义类名             | `string`                            | -           |
| children        | 按钮内容               | `React.ReactNode`                   | -           |
