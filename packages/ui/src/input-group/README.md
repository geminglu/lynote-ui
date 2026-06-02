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
    <InputGroupButton size="sm" icon />
  </InputGroupAddon>
</InputGroup>
```

## 代码演示

<code src="./demos/base.tsx" description="基本搜索、金额、行内按钮组合。">基本用法</code>

<code src="./demos/with-kbd.tsx" description="在右侧叠加快捷键提示,常用于命令面板入口。">快捷键提示</code>

<code src="./demos/textarea.tsx" description="配合 `InputGroupTextarea` 构建带顶部说明和底部操作的多行输入。">多行输入</code>

<code src="./demos/spinner.tsx">Spinner 加载器</code>

<code src="./demos/dropdown.tsx">Dropdown 下拉菜单</code>

<code src="./demos/button.tsx">Button 按钮</code>

<code src="./demos/text.tsx">Text 文本</code>

<code src="./demos/icon.tsx">Icon 图标</code>

<code src="./demos/block-end.tsx" description="使用 `align='block-end'` 将附加组件定位在输入框下方。">底部对齐</code>

<code src="./demos/block-start.tsx" description="使用 `align='block-start'` 将附加组件定位在输入框上方。">顶部对齐</code>

## 最佳实践

- **`InputGroupInput` 替代 `Input`**:在 InputGroup 内必须使用 `InputGroupInput`,否则边框会重叠。
- **图标用 `InputGroupAddon`**:不要直接把图标塞进 Input,组件不会自动调整内边距。
- **`InputGroupButton` 而非 `Button`**:行内按钮使用 `InputGroupButton` 以适配高度;直接用 Button 会撑高。
- **对齐方向语义**:用 `align` 而不是手动写 className,组件会自动处理 padding 与圆角。

## API

### InputGroup

容器,支持原生 `<div>` 属性。

### InputGroupInput

去除独立边框的 Input，继承父级 InputGroup 的样式。完整支持原生 `<input>` 属性。

| 参数         | 说明                | 类型                            | 默认值  |
| ------------ | ------------------- | ------------------------------- | ------- |
| className    | 自定义类名          | `string`                        | -       |
| disabled     | 是否禁用            | `boolean`                       | `false` |
| aria-invalid | 错误态              | `boolean`                       | -       |
| ...props     | 原生 `<input>` 属性 | `React.ComponentProps<"input">` | -       |

### InputGroupTextarea

去除独立边框的 Textarea，自动 `resize-none`。完整支持原生 `<textarea>` 属性。

| 参数         | 说明                   | 类型                               | 默认值  |
| ------------ | ---------------------- | ---------------------------------- | ------- |
| className    | 自定义类名             | `string`                           | -       |
| disabled     | 是否禁用               | `boolean`                          | `false` |
| aria-invalid | 错误态                 | `boolean`                          | -       |
| ...props     | 原生 `<textarea>` 属性 | `React.ComponentProps<"textarea">` | -       |

### InputGroupAddon

| 参数      | 说明                                                   | 类型                                                             | 默认值           |
| --------- | ------------------------------------------------------ | ---------------------------------------------------------------- | ---------------- |
| align     | 装饰元素位置                                           | `"inline-start" \| "inline-end" \| "block-start" \| "block-end"` | `"inline-start"` |
| className | 自定义类名                                             | `string`                                                         | -                |
| onClick   | 点击回调（内部默认会聚焦到关联的 input，除非点击按钮） | `React.MouseEventHandler<HTMLDivElement>`                        | -                |
| children  | 装饰内容（图标、按钮、文本等）                         | `React.ReactNode`                                                | -                |
| ...props  | 原生 `<div>` 属性                                      | `React.ComponentProps<"div">`                                    | -                |

### InputGroupButton

行内按钮，继承 `Button` 大部分属性，但提供专用 size。

| 参数      | 说明                       | 类型                                                                          | 默认值     |
| --------- | -------------------------- | ----------------------------------------------------------------------------- | ---------- |
| size      | 按钮尺寸                   | `"xs" \| "sm"`                                                                | `"xs"`     |
| icon      | 是否为纯图标按钮（正方形） | `boolean`                                                                     | `false`    |
| variant   | 视觉变体                   | `"default" \| "outline" \| "secondary" \| "ghost" \| "destructive" \| "link"` | `"ghost"`  |
| type      | 表单类型                   | `"button" \| "submit" \| "reset"`                                             | `"button"` |
| disabled  | 是否禁用                   | `boolean`                                                                     | `false`    |
| onClick   | 点击回调                   | `React.MouseEventHandler<HTMLButtonElement>`                                  | -          |
| render    | 多态渲染                   | `React.ReactElement \| ((props, state) => React.ReactNode)`                   | -          |
| className | 自定义类名                 | `string`                                                                      | -          |
| children  | 按钮内容                   | `React.ReactNode`                                                             | -          |

### InputGroupText

行内文字（前后缀），自动应用 muted 颜色与字号。

| 参数      | 说明               | 类型                           | 默认值 |
| --------- | ------------------ | ------------------------------ | ------ |
| className | 自定义类名         | `string`                       | -      |
| children  | 文本内容           | `React.ReactNode`              | -      |
| ...props  | 原生 `<span>` 属性 | `React.ComponentProps<"span">` | -      |
