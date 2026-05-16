---
category: Components
title: InputGroup 输入框组
subtitle: InputGroup 输入框组
demo:
  cols: 1
group:
  title: 表单
  order: 5
nav: 组件
toc: content
background: #111
compact: true
---

InputGroup 在 `Input` 两侧叠加图标、文本、按钮等装饰元素,共享一个统一的边框与焦点环。常用于搜索框、URL 输入、金额输入、密码可见性切换等场景。

## 特性

- **共享边框 / 焦点环**:子组件外观无缝拼接。
- **4 个对齐方向**:`inline-start` / `inline-end` / `block-start` / `block-end`。
- **`InputGroupButton`**:行内按钮,自动适配 InputGroup 高度。
- **`InputGroupText`**:行内文本,适合 URL / 单位前后缀。
- **`InputGroupTextarea`**:支持包裹 Textarea,自动切换 block 布局。

## 何时使用

- 搜索框 + 图标 + 快捷键。
- URL 输入(`https://` 前缀)。
- 金额输入(`¥` 前缀,`元` 后缀)。
- 密码可见性切换。
- 输入框前 / 后的清空按钮。

## 何时不使用

- 单独的 input,无需任何装饰——直接用 `Input`。
- 复杂多行表单——使用 `Field` 提供完整结构。

## 导入

```ts | pure
import {
  InputGroup,
  InputGroupAddon,
  InputGroupButton,
  InputGroupInput,
  InputGroupText,
  InputGroupTextarea,
} from "lynote-ui/input-group";
```

## 组件结构

```tsx | pure
<InputGroup>
  <InputGroupAddon align="inline-start">
    <SearchIcon />
  </InputGroupAddon>
  <InputGroupInput placeholder="..." />
  <InputGroupAddon align="inline-end">
    <InputGroupButton size="icon-sm" />
  </InputGroupAddon>
</InputGroup>
```

## 代码演示

<code src="./demos/base.tsx" description="基本搜索、金额、行内按钮组合。">基本用法</code>

## 最佳实践

- **`InputGroupInput` 替代 `Input`**:在 InputGroup 内必须使用 `InputGroupInput`,否则边框会重叠。
- **图标用 `InputGroupAddon`**:不要直接把图标塞进 Input,组件不会自动调整内边距。
- **`InputGroupButton` 而非 `Button`**:行内按钮使用 `InputGroupButton` 以适配高度;直接用 Button 会撑高。
- **对齐方向语义**:用 `align` 而不是手动写 className,组件会自动处理 padding 与圆角。

## API

### InputGroup

容器,支持原生 `<div>` 属性。

### InputGroupInput / InputGroupTextarea

去除独立边框的 Input / Textarea,继承父级 InputGroup 的样式。

### InputGroupAddon

| 参数      | 说明         | 类型                                                             | 默认值           |
| --------- | ------------ | ---------------------------------------------------------------- | ---------------- |
| align     | 装饰元素位置 | `"inline-start" \| "inline-end" \| "block-start" \| "block-end"` | `"inline-start"` |
| className | 自定义类名   | `string`                                                         | -                |

### InputGroupButton

行内按钮,继承 `Button` 大部分属性,但提供专用 size。

| 参数    | 说明     | 类型                                     | 默认值     |
| ------- | -------- | ---------------------------------------- | ---------- |
| size    | 按钮尺寸 | `"xs" \| "sm" \| "icon-xs" \| "icon-sm"` | `"xs"`     |
| variant | 视觉变体 | `Button["variant"]`                      | `"ghost"`  |
| type    | 表单类型 | `"button" \| "submit" \| "reset"`        | `"button"` |

### InputGroupText

行内文字(前后缀),自动应用 muted 颜色与字号。
