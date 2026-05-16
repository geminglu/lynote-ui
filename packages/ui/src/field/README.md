---
category: Components
title: Field 字段
subtitle: Field 字段
demo:
  cols: 1
group:
  title: 表单
  order: 14
nav: 组件
toc: content
background: #111
compact: true
---

Field 是表单字段的布局与语义脚手架。它本身不携带表单状态，而是提供一组语义化的子组件（`FieldLabel` / `FieldDescription` / `FieldError` / `FieldGroup` / `FieldSet` / `FieldLegend` / `FieldSeparator` / `FieldContent` / `FieldTitle`），帮助你把单个字段及一组字段在视觉与无障碍语义上都组织好。

Field 与具体表单库无关：可以与 React Hook Form / Formik 配合，也可以在受控/非受控原生表单中使用。

## 特性

- **三种布局方向**：`vertical`（默认）/ `horizontal` / `responsive`（根据容器宽度自适应）。
- **错误态联动**：在 `Field` 上设置 `data-invalid`，label/标签/描述区域会自动联动配色。
- **`FieldError`**：支持传入 `errors` 数组自动渲染，或自定义 children。
- **`FieldSet` + `FieldLegend`**：作为多字段集合容器，可一键禁用整组。
- **复选框 / 单选组优化间距**：在 `FieldGroup` 上加 `data-slot="checkbox-group"` 或 `data-slot="radio-group"` 会自动收紧间距。
- **可作为可选卡片**：`FieldLabel` 内嵌 `Field` 时会带边框并响应选中态。

## 何时使用

- 任意表单字段都应外包一层 `<Field>` 提供 label / description / error 的语义。
- 一组语义相关的字段（地址、付款信息），用 `<FieldSet>` + `<FieldLegend>` 聚合。
- 卡片式可选项（订阅套餐、支付方式）—— 使用 `FieldLabel` 包裹 `Field` 形成可点击区域。

## 何时不使用

- 仅是一个独立按钮——直接使用 `Button`。
- 纯展示的标签 + 值——使用普通排版组件即可。

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
import {
  Field,
  FieldContent,
  FieldDescription,
  FieldError,
  FieldGroup,
  FieldLabel,
  FieldLegend,
  FieldSeparator,
  FieldSet,
  FieldTitle,
} from "lynote-ui/field";
```

```ts [整体] | pure
import {
  Field,
  FieldDescription,
  FieldError,
  FieldGroup,
  FieldLabel,
} from "lynote-ui";
```

:::

## 组件结构

```tsx | pure
<FieldSet>
  <FieldLegend />
  <FieldGroup>
    <Field>
      <FieldLabel />
      {/* 表单控件 */}
      <FieldDescription />
      <FieldError />
    </Field>
  </FieldGroup>
</FieldSet>
```

## 代码演示

<code src="./demos/base.tsx">基本用法</code>

<code src="./demos/layout.tsx" description="通过 `Field` 组件的 `orientation` 属性可以控制字段的布局方向，支持 `vertical`、`horizontal` 和 `responsive` 三种模式。`responsive` 模式会根据父容器宽度自动切换布局。">表单布局</code>

<code src="./demos/login.tsx" description="一个常见的登录表单示例，包含用户名、密码输入及"记住我"选项，演示如何组合 `Field` 与多种基础控件构建完整业务表单。">登录表单</code>

<code src="./demos/textarea.tsx" description="对于文本区域字段，将字段对象传递给 `<Textarea />` 组件。若要显示错误信息，请向 `<Textarea />` 组件添加 aria-invalid 属性，并向 `<Field />` 组件添加 data-invalid 属性。">文本域</code>

<code src="./demos/select.tsx" description="对于部分组件，在 `<Select />` 组件上使用 field.value 和 field.onChange。要显示错误，请在 `<SelectTrigger />` 组件中添加 aria-invalid prop，在 `<Field />` 组件中添加 data-invalid prop。">选择器</code>

<code src="./demos/checkbox.tsx" description="对于复选框数组，使用 field.value 和 field.onChange 并进行数组操作。要显示错误，请将 aria-invalid prop 添加到 `<Checkbox />` 组件，将 data-invalid prop 添加到 `<Field />` 组件中。记得在 `<FieldGroup />` 组件中添加 data-slot=\"checkbox-group\"，以便正确的样式和间距。">复选框</code>

<code src="./demos/radioGroup.tsx" description="对于单选组，在 `<RadioGroup />` 组件上使用 field.value 和 field.onChange。要显示错误，将 aria-invalid prop 添加到 `<RadioGroupItem />` 组件中，在 `<Field />` 组件中添加 data-invalid prop。">单选框</code>

<code src="./demos/switch.tsx" description="对于开关，在 `<Switch />` 组件中使用 field.value 和 field.onChange。要显示错误，请将 aria-invalid prop 添加到 `<Switch />` 组件中，在 `<Field />` 组件中添加 data-invalid prop。">开关</code>

<code src="./demos/disabled.tsx" description="使用 `<FieldSet />` 的 `disabled` 属性可以一次性禁用整组字段，包括其内部的所有表单控件。常用于只读预览或权限受限场景。">禁用表单</code>

<code src="./demos/dependent.tsx" description="字段之间存在联动关系时，可以借助 React Hook Form 的 `useWatch` 监听一个字段的值，并据此更新另一个字段的可选值或清除已选择的内容。">联动表单</code>

<code src="./demos/complexForms.tsx" description="一个更复杂的表单示例，包含多个字段和验证。">复杂表单</code>

<code src="./demos/arrayFields.tsx" description="React Hook Form 提供了一个用于管理动态数组字段的 useFieldArray 钩子。这在需要动态添加或移除字段时非常有用。">数组字段</code>

## 最佳实践

- **每个控件都包一层 `<Field>`**：即使不需要描述/错误，仍能保证将来扩展时不破坏布局。
- **`FieldLabel htmlFor` 一定要关联到控件的 `id`**：这是可访问的硬性要求，也能让点击 label 聚焦控件。
- **错误态需要双向标记**：在 `Field` 上加 `data-invalid`、在控件上加 `aria-invalid={true}`，组件库才能联动配色。
- **复选 / 单选组使用 `data-slot`**：`<FieldGroup data-slot="checkbox-group">` 或 `radio-group` 能自动收紧间距，提供视觉一致性。
- **`FieldDescription` 与 `FieldError` 不并存**：错误存在时应隐藏 `FieldDescription`，避免说明文字与错误信息同时呈现造成噪声。
- **`responsive` 布局**：在窄屏（默认 `< @md`）下垂直堆叠，宽屏下转为左右布局，常用于设置项列表。

## 无障碍

- `Field` 渲染为 `role="group"`；`FieldSet` 是原生 `<fieldset>`，自动支持组级禁用语义。
- `FieldError` 默认渲染 `role="alert"`，错误出现时读屏器会立刻朗读。
- 控件上的 `aria-invalid` 会被读屏器朗读为"输入无效"。

## API

### Field

字段容器。

| 参数          | 说明                        | 类型                                         | 默认值       |
| ------------- | --------------------------- | -------------------------------------------- | ------------ |
| orientation   | 字段布局方向                | `"vertical" \| "horizontal" \| "responsive"` | `"vertical"` |
| className     | 自定义类名                  | `string`                                     | -            |
| data-invalid  | 标记错误态，触发 label 联动 | `boolean`                                    | -            |
| data-disabled | 标记禁用态                  | `boolean`                                    | -            |
| children      | 字段内容                    | `React.ReactNode`                            | -            |
| id            | 容器 id                     | `string`                                     | -            |

### FieldSet

`<fieldset>` 包装，支持原生 `disabled` 整组禁用。

| 参数      | 说明          | 类型              | 默认值  |
| --------- | ------------- | ----------------- | ------- |
| disabled  | 是否整组禁用  | `boolean`         | `false` |
| name      | 表单字段名    | `string`          | -       |
| form      | 关联的表单 id | `string`          | -       |
| className | 自定义类名    | `string`          | -       |
| children  | 字段集合内容  | `React.ReactNode` | -       |

### FieldLegend

`<legend>` 包装，作为 `FieldSet` 的标题。

| 参数      | 说明       | 类型                  | 默认值     |
| --------- | ---------- | --------------------- | ---------- |
| variant   | 标题样式   | `"legend" \| "label"` | `"legend"` |
| className | 自定义类名 | `string`              | -          |
| children  | 标题内容   | `React.ReactNode`     | -          |

### FieldGroup

垂直堆叠的字段组容器。

| 参数      | 说明                                                          | 类型              | 默认值 |
| --------- | ------------------------------------------------------------- | ----------------- | ------ |
| data-slot | 可选值如 `"checkbox-group"` / `"radio-group"`，会自动收紧间距 | `string`          | -      |
| className | 自定义类名                                                    | `string`          | -      |
| children  | 子字段                                                        | `React.ReactNode` | -      |

### FieldLabel

`<label>` 包装。包裹 `Field` 时会自动渲染为可选卡片样式。

| 参数      | 说明                | 类型                                        | 默认值 |
| --------- | ------------------- | ------------------------------------------- | ------ |
| htmlFor   | 关联控件 id（必填） | `string`                                    | -      |
| className | 自定义类名          | `string`                                    | -      |
| children  | 标签内容            | `React.ReactNode`                           | -      |
| onClick   | 点击回调            | `React.MouseEventHandler<HTMLLabelElement>` | -      |

### FieldDescription

辅助说明文字。

| 参数      | 说明       | 类型              | 默认值 |
| --------- | ---------- | ----------------- | ------ |
| className | 自定义类名 | `string`          | -      |
| children  | 描述内容   | `React.ReactNode` | -      |

### FieldError

错误信息。支持传入 `errors` 数组自动去重渲染，或自定义 `children`。

| 参数      | 说明                                   | 类型                                       | 默认值 |
| --------- | -------------------------------------- | ------------------------------------------ | ------ |
| errors    | 错误信息数组，未传 children 时自动渲染 | `Array<{ message?: string } \| undefined>` | -      |
| className | 自定义类名                             | `string`                                   | -      |
| children  | 自定义错误内容                         | `React.ReactNode`                          | -      |

### FieldContent

字段的"内容"区域，常用于横向布局时把 label/description 与控件分两列。

### FieldTitle

字段标题（无 label 语义，仅用作视觉标题，适合卡片式 Field）。

### FieldSeparator

字段间分隔符，支持中间夹一个标签（如"或"）。

| 参数      | 说明       | 类型              | 默认值 |
| --------- | ---------- | ----------------- | ------ |
| children  | 中间内容   | `React.ReactNode` | -      |
| className | 自定义类名 | `string`          | -      |
