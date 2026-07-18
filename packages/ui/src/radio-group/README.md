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

RadioGroup 用于在一组互斥选项中选择一个。每个 `RadioGroupItem` 在视觉上是一个圆形按钮，选中后填充内点。基于 Base UI Radio / RadioGroup 原语。

## 特性

- **互斥选择**：组内同时只能选中一项。
- **键盘可达**：方向键移动且自动选中（roving focus），符合 ARIA 规范。
- **受控 / 非受控**：通过 `value` + `onValueChange` 或 `defaultValue`。
- **校验态**：`aria-invalid` 触发红色边框。

## 何时使用

- 2-7 个互斥选项，且每项都希望直接可见（不希望像 Select 那样要先点开）。
- 表单中的"性别 / 配送方式 / 订阅类型"等明确单选场景。
- 卡片式选项（套餐选择、付款方式）。

## 何时不使用

- 选项数量 > 7——使用 `Select` 节省空间。
- 单个布尔切换——使用 `Switch` 或 `Checkbox`。
- 视觉上希望像分段控件——使用 `ToggleGroup type="single"`。

## 导入

```ts | pure
import { RadioGroup, RadioGroupItem } from "lynote-ui/radio-group";
```

## 组件结构

```tsx | pure
<RadioGroup value={value} onValueChange={setValue}>
  <RadioGroupItem value="a" id="a" />
  <RadioGroupItem value="b" id="b" />
</RadioGroup>
```

## 代码演示

<code src="./demos/base.tsx">基本用法</code>

<code src="./demos/controlled.tsx">受控用法</code>

<code src="./demos/disabled.tsx">禁用状态</code>

<code src="./demos/size.tsx">尺寸</code>

<code src="./demos/card.tsx" description="卡片式可选项,适合套餐 / 付款方式 / 主题等强视觉场景。">卡片式选择</code>

<code src="./demos/form.tsx" description="与 `FieldSet` + `FieldError` 组合实现表单校验。">配合 Field 校验</code>

## 最佳实践

- **必须有 label**：用 `<Label htmlFor>` 或 `<FieldLabel htmlFor>` 关联到 `RadioGroupItem` 的 id。
- **2-7 项为佳**：超过 7 项考虑改用 `Select`。
- **默认选中合理项**：用 `defaultValue` 选中最常用的选项；如必须用户主动选择，留空并加校验提示。
- **方向键自动选中**：和 ARIA 规范一致——光标移动到下一项时自动切换 value。

## 无障碍与键盘交互

- `RadioGroup` 渲染为 `role="radiogroup"`；每个 `RadioGroupItem` 自动 `role="radio"`。
- `aria-invalid` 触发错误环；外层 `Field` 加 `data-invalid` 让 label 联动变色。

| 按键      | 行为                   |
| --------- | ---------------------- |
| `Tab`     | 进入 / 离开 RadioGroup |
| `↑` / `↓` | 选中上一项 / 下一项    |
| `←` / `→` | 选中上一项 / 下一项    |
| `Space`   | 选中当前聚焦项         |

## API

### RadioGroup

| 参数          | 说明             | 类型                      | 默认值  |
| ------------- | ---------------- | ------------------------- | ------- |
| value         | 当前值（受控）   | `string`                  | -       |
| defaultValue  | 默认值（非受控） | `string`                  | -       |
| onValueChange | 值变化回调       | `(value: string) => void` | -       |
| disabled      | 整组禁用         | `boolean`                 | `false` |
| required      | 是否必填         | `boolean`                 | `false` |
| name          | 表单字段名       | `string`                  | -       |
| className     | 自定义类名       | `string`                  | -       |

### RadioGroupItem

| 参数         | 说明             | 类型                                | 默认值      |
| ------------ | ---------------- | ----------------------------------- | ----------- |
| value        | 选项值           | `string`                            | -           |
| id           | 关联 label 的 id | `string`                            | -           |
| size         | 控件尺寸         | `"xs" \| "sm" \| "default" \| "lg"` | `"default"` |
| disabled     | 是否禁用         | `boolean`                           | `false`     |
| aria-invalid | 是否处于错误态   | `boolean`                           | -           |
| className    | 自定义类名       | `string`                            | -           |
