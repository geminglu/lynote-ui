---
category: Components
title: NativeSelect 原生选择器
subtitle: NativeSelect 原生选择器
demo:
  cols: 1
group:
  title: 表单
  order: 8
nav: 组件
toc: content
background: #111
compact: true
---

NativeSelect 是原生 `<select>` 的样式化封装。比起 `Select`,它体积更小、移动端会唤起系统选择器(iOS picker / Android dropdown),在表单密度高的页面或要求触屏友好的场景更合适。

## 特性

- **完全原生**:用户体验与系统一致;移动端唤起原生 picker。
- **4 种尺寸**:`xs` / `sm` / `default` / `lg`。
- **支持 `optgroup`**:通过 `NativeSelectOptGroup` 给选项分组。
- **校验态**:`aria-invalid` 触发红色边框与焦点环。

## 何时使用

- 移动端友好的下拉选择(性别、地区、单位等)。
- 表单密度高的场景(批量编辑、表格行内编辑)。
- 选项数量 ≤ 20 且无需搜索。

## 何时不使用

- 需要分组标题悬停、自定义渲染——使用 `Select`。
- 需要异步搜索——使用 `Combobox`。
- 多选——使用 `Select multiple`。

## 导入

```ts | pure
import {
  NativeSelect,
  NativeSelectOptGroup,
  NativeSelectOption,
} from "lynote-ui/native-select";
```

## 代码演示

<code src="./demos/base.tsx">基本用法</code>

<code src="./demos/group.tsx" description="使用 `NativeSelectOptGroup` 给选项分组。">分组</code>

<code src="./demos/size.tsx">尺寸</code>

## 最佳实践

- **配合 `Label`**:务必通过 `htmlFor` 关联 label。
- **移动端优先选 NativeSelect**:体积小 + 原生 picker 优势明显。
- **选项不要过多**:超过 20 项考虑 `Combobox`。

## API

### NativeSelect

| 参数      | 说明                     | 类型                                          | 默认值      |
| --------- | ------------------------ | --------------------------------------------- | ----------- |
| size      | 控件尺寸                 | `"xs" \| "sm" \| "default" \| "lg"`           | `"default"` |
| className | 自定义类名               | `string`                                      | -           |
| ...props  | 透传原生 `<select>` 属性 | `Omit<React.ComponentProps<"select">,"size">` | -           |

### NativeSelectOption

`<option>` 包装。完整支持原生 `<option>` 属性。

| 参数     | 说明                 | 类型                                    | 默认值  |
| -------- | -------------------- | --------------------------------------- | ------- |
| value    | 选项值               | `string \| number \| readonly string[]` | -       |
| disabled | 是否禁用             | `boolean`                               | `false` |
| children | 选项文本             | `React.ReactNode`                       | -       |
| ...props | 原生 `<option>` 属性 | `React.ComponentProps<"option">`        | -       |

### NativeSelectOptGroup

`<optgroup>` 包装，需要 `label` 属性。

| 参数      | 说明                      | 类型                               | 默认值  |
| --------- | ------------------------- | ---------------------------------- | ------- |
| label     | 分组标题（必填）          | `string`                           | -       |
| disabled  | 是否整组禁用              | `boolean`                          | `false` |
| className | 自定义类名                | `string`                           | -       |
| children  | `NativeSelectOption` 列表 | `React.ReactNode`                  | -       |
| ...props  | 原生 `<optgroup>` 属性    | `React.ComponentProps<"optgroup">` | -       |
