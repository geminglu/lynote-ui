---
category: Components
title: Input 输入框
subtitle: Input 输入框
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

单行文本输入控件，基于原生 `<input>` 元素与 Base UI Input 原语封装。组合 `InputGroup` 可以在输入框两侧加入图标、按钮或前后缀文本。

## 特性

- **原生 input 透传**：除样式外没有引入任何额外约束，原生属性（如 `type`、`autoComplete`、`maxLength`、`pattern`）均可直接使用。
- **支持表单状态**：通过 `aria-invalid` 触发错误环；与 `Field` 组合可自动呈现错误信息与禁用态。
- **可与 InputGroup 组合**：用于添加图标、Loading 指示、清空/可见性切换按钮、URL 前缀等。
- **支持文件选择**：`type="file"` 已经做了原生样式适配。

## 何时使用

- 收集单行文本、邮箱、URL、数字、密码、搜索关键词等结构化输入。
- 需要在输入框上提供前缀（如 `https://`）或操作按钮（如显示密码、复制、搜索）。

## 何时不使用

- 多行文本——使用 `Textarea`。
- 选择固定选项——使用 `Select` / `Combobox`。
- 验证码 / 一次性密码——使用 `InputOTP`。
- 复杂的数字增减步进——结合 `InputGroup` + 自定义按钮。

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

```ts [按需] | pure
import { Input } from "lynote-ui/input";
```

```ts [整体] | pure
import { Input } from "lynote-ui";
```

:::

## 组件结构

```tsx | pure
<Input type="text" placeholder="..." />
```

与图标/按钮组合时：

```tsx | pure
<InputGroup>
  <InputGroupAddon>
    <SearchIcon />
  </InputGroupAddon>
  <InputGroupInput placeholder="搜索..." />
</InputGroup>
```

## 代码演示

<code src="./demos/base.tsx">基本用法</code>

<code src="./demos/type.tsx">输入类型</code>

<code src="./demos/disabled.tsx">禁用状态</code>

<code src="./demos/with-icon.tsx" description="使用 `InputGroup` + `InputGroupAddon` 在输入框两侧加入图标。">带图标</code>

<code src="./demos/with-addon.tsx" description="`InputGroupText` 适用于 URL / 单位 / 域名后缀等文本前后缀。">前后缀文本</code>

<code src="./demos/with-button.tsx" description="`InputGroupButton` 可用于密码可见性切换、清空、快捷键等行内操作。">行内按钮</code>

<code src="./demos/file.tsx" description="`type=\"file\"` 与 `Field` 组合可以提供标签与说明。">文件选择</code>

<code src="./demos/form.tsx" description="与 `Field` / `FieldLabel` / `FieldDescription` / `FieldError` 组合可获得标签、说明文字和错误提示。">表单字段</code>

<code src="./demos/size.tsx">尺寸</code>

## 最佳实践

- **始终关联 label**：通过 `<Field>` + `<FieldLabel htmlFor>` 或原生 `<label>` 与 `id` 关联，避免无障碍违规。
- **校验失败用 aria-invalid**：在错误态下设置 `aria-invalid`，组件会自动呈现红色环；同时在外层 `Field` 上设置 `data-invalid` 让 label 联动变色。
- **声明 autoComplete**：登录、注册、地址等表单务必正确声明 `autoComplete`（如 `email`、`new-password`、`current-password`），便于浏览器自动填充与密码管理器识别。
- **数字输入避免依赖默认 spinner**：`type="number"` 在不同浏览器表现不一致，复杂数字输入建议使用 `InputGroup` + 步进按钮。
- **密码输入提供可见性切换**：见 `with-button` 示例，可同时显著降低用户输错密码的概率。
- **不要把 Input 当成搜索按钮使用**：搜索动作交给 `InputGroupButton` 或键盘 `Enter`，而不是阻塞 input 自身的 onChange。

## 无障碍

- 渲染为原生 `<input>`，自动获得 `role=textbox` 与读屏器朗读支持。
- `aria-invalid` 用于显式声明错误状态；`aria-describedby` 可关联 `FieldError` 以让读屏器读出原因。
- 当输入框前后存在图标按钮时（密码可见性、清空），务必为按钮提供 `aria-label`。

## API

### Input

| 参数         | 说明                               | 类型                                         | 默认值      |
| ------------ | ---------------------------------- | -------------------------------------------- | ----------- |
| type         | 输入类型                           | `React.HTMLInputTypeAttribute`               | `"text"`    |
| value        | 输入值（受控）                     | `string \| number \| readonly string[]`      | -           |
| defaultValue | 默认输入值（非受控）               | `string \| number \| readonly string[]`      | -           |
| placeholder  | 占位文本                           | `string`                                     | -           |
| disabled     | 是否禁用                           | `boolean`                                    | `false`     |
| readOnly     | 是否只读                           | `boolean`                                    | `false`     |
| required     | 是否必填                           | `boolean`                                    | `false`     |
| aria-invalid | 是否处于错误态，触发红色环         | `boolean`                                    | -           |
| autoComplete | 浏览器自动填充类别                 | `string`                                     | -           |
| onChange     | 输入变化回调                       | `React.ChangeEventHandler<HTMLInputElement>` | -           |
| size         | 输入框尺寸                         | `"xs" \| "sm" \| "default" \| "lg"`          | `"default"` |
| className    | 自定义类名                         | `string`                                     | -           |
| ...props     | 透传原生 `<input>` 与 Base UI 属性 | `React.ComponentProps<"input">`              | -           |

### InputGroup

`InputGroup` 与子组件组合可在输入框两端添加图标、文本、按钮等装饰元素。

#### InputGroupInput

替代 `<Input>` 作为 InputGroup 内部输入项，自动去除独立边框。属性与 `Input` 一致。

#### InputGroupAddon

| 参数      | 说明                         | 类型                                                             | 默认值           |
| --------- | ---------------------------- | ---------------------------------------------------------------- | ---------------- |
| align     | 装饰元素位置：左、右、上、下 | `"inline-start" \| "inline-end" \| "block-start" \| "block-end"` | `"inline-start"` |
| className | 自定义类名                   | `string`                                                         | -                |

#### InputGroupButton

行内按钮，自动适配 InputGroup 的高度。继承 `Button` 大部分属性，额外提供 `size="xs"`/`"sm"` 及 `icon` 属性。

#### InputGroupText

行内文本（前后缀），自动应用 muted 色与字号。
