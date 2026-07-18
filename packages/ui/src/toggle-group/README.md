---
category: Components
title: ToggleGroup 切换按钮组
subtitle: ToggleGroup 切换按钮组
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

把多个 `Toggle` 组合成一个分段控件,支持单选(`single`) 或多选(`multiple`)。常见于工具栏对齐方式、视图模式切换、富文本格式按钮组。

## 特性

- **两种模式**：`type="single"` 互斥单选；`type="multiple"` 自由组合多选。
- **两种变体**：`default`(连体分段控件) / `outline`(带边框分体)。
- **3 种尺寸**：从 `toggleVariants` 继承的 `sm` / `default` / `lg`。
- **支持垂直布局**：通过 `orientation="vertical"`。
- **`spacing` 控制间隔**：默认 0(连体),传入数字会按 `--spacing` 加间隙。

## 何时使用

- 富文本工具栏中的格式按钮组(加粗 / 斜体 / 下划线)。
- 视图切换(列表 / 网格 / 看板)。
- 对齐方式切换(左 / 中 / 右)。
- 短期过滤器开关组。

## 何时不使用

- 表单中的单选/多选——使用 `RadioGroup` / `Checkbox`(更明确的语义)。
- 视图分页切换需要触发路由——使用 `Tabs`。
- 一个独立的布尔状态——使用 `Toggle` 或 `Switch`。

## 导入

```ts | pure
import { ToggleGroup, ToggleGroupItem } from "lynote-ui/toggle-group";
```

## 组件结构

```tsx | pure
<ToggleGroup type="single">
  <ToggleGroupItem value="..." />
</ToggleGroup>
```

## 代码演示

<code src="./demos/base.tsx">基本用法</code>

<code src="./demos/multiple.tsx">多选模式</code>

<code src="./demos/with-icon.tsx" description="对齐方式 / 视图切换的典型组合。">带图标</code>

<code src="./demos/outline.tsx" description="`variant='outline'` 适合带间隙的分体按钮组。">边框变体</code>

<code src="./demos/custom.tsx">自定义样式</code>

## 最佳实践

- **明确选择 `type`**：单选用 `single`,多选用 `multiple`,不要省略。
- **每个 item 都要 `aria-label`**：尤其是仅图标的按钮。
- **同组按钮数量 2-7**：超过 7 个考虑改用 `Select` 或下拉菜单。
- **不要混用 size**：组内 item 共享尺寸；如果某项需要更大/更小,请用单独的 Toggle。

## API

### ToggleGroup

| 参数          | 说明               | 类型                         | 默认值         |
| ------------- | ------------------ | ---------------------------- | -------------- |
| multiple      | 是否多选           | `boolean`                    | `false`        |
| value         | 当前值(受控)       | `string \| string[]`         | -              |
| defaultValue  | 默认值(非受控)     | `string \| string[]`         | -              |
| onValueChange | 值变化回调         | `(value: any) => void`       | -              |
| variant       | 视觉变体           | `"default" \| "outline"`     | `"default"`    |
| size          | 尺寸               | `"default" \| "sm" \| "lg"`  | `"default"`    |
| orientation   | 排列方向           | `"horizontal" \| "vertical"` | `"horizontal"` |
| spacing       | 项间间隔(0 = 连体) | `number`                     | `0`            |
| disabled      | 整组禁用           | `boolean`                    | `false`        |
| className     | 自定义类名         | `string`                     | -              |

### ToggleGroupItem

| 参数      | 说明       | 类型              | 默认值  |
| --------- | ---------- | ----------------- | ------- |
| value     | 项的值     | `string`          | -       |
| disabled  | 是否禁用   | `boolean`         | `false` |
| className | 自定义类名 | `string`          | -       |
| children  | 项的内容   | `React.ReactNode` | -       |
