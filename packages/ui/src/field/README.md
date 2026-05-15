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

```ts [单个] | pure
import {
  Field,
  FieldSet,
  FieldLegend,
  FieldGroup,
  FieldLabel,
  FieldDescription,
  FieldError,
  FieldContent,
  FieldTitle,
  FieldSeparator,
} from "lynote-ui";
```

:::

字段组件，用于构建表单字段的布局结构。

## 代码演示

<code src="./demos/base.tsx">基本用法</code>

<code src="./demos/layout.tsx" description="通过 `Field` 组件的 `orientation` 属性可以控制字段的布局方向，支持 `vertical`、`horizontal` 和 `responsive` 三种模式。`responsive` 模式会根据父容器宽度自动切换布局。">表单布局</code>

<code src="./demos/login.tsx" description="一个常见的登录表单示例，包含用户名、密码输入及“记住我”选项，演示如何组合 `Field` 与多种基础控件构建完整业务表单。">登录表单</code>

<code src="./demos/textarea.tsx" description="对于文本区域字段，将字段对象传递给 `<Textarea />` 组件。若要显示错误信息，请向 `<Textarea />` 组件添加 aria-invalid 属性，并向 `<Field />` 组件添加 data-invalid 属性。">文本域</code>

<code src="./demos/select.tsx" description="对于部分组件，在 `<Select />` 组件上使用 field.value 和 field.onChange。
要显示错误，请在 `<SelectTrigger />` 组件中添加 aria-invalid prop，在 `<Field />` 组件中添加 data-invalid prop。">选择器</code>

<code src="./demos/checkbox.tsx" description="对于复选框数组，使用 field.value 和 field.onChange 并进行数组操作。
要显示错误，请将 aria-invalid prop 添加到 `<Checkbox />` 组件，将 data-invalid prop 添加到 `<Field />` 组件中。
记得在 `<FieldGroup />` 组件中添加 data-slot=“checkbox-group”，以便正确的样式和间距。">复选框</code>

<code src="./demos/radioGroup.tsx" description="对于无线电组，在 `<RadioGroup />` 组件上使用 field.value 和 field.onChange。
要显示错误，将 aria-invalid prop 添加到 `<RadioGroupItem />` 组件中，在 `<Fiild />` 组件中添加 data-invalid prop。">单选框</code>

<code src="./demos/switch.tsx" description="对于交换机，在 `<Switch />` 组件中使用 field.value 和 field.onChange。
要显示错误，请将 aria-invalid prop 添加到 `<Switch />` 组件中，在 `<Field />` 组件中添加 data-invalid prop。">开关</code>

<code src="./demos/disabled.tsx" description="使用 `<FieldSet />` 的 `disabled` 属性可以一次性禁用整组字段，包括其内部的所有表单控件。常用于只读预览或权限受限场景。">禁用表单</code>

<code src="./demos/dependent.tsx" description="字段之间存在联动关系时，可以借助 React Hook Form 的 `useWatch` 监听一个字段的值，并据此更新另一个字段的可选值或清除已选择的内容。">联动表单</code>

<code src="./demos/complexForms.tsx" description="这里是一个更复杂的表格示例，包含多个字段和验证。">复杂表单</code>

<code src="./demos/arrayFields.tsx" description="React Hook Form 提供了一个用于管理动态数组字段的 useFieldArray 钩子。这在需要动态添加或移除字段时非常有用。">数组字段</code>

## API

### Field

字段容器。

| 参数          | 说明               | 类型                                         | 默认值       |
| ------------- | ------------------ | -------------------------------------------- | ------------ |
| orientation   | 字段布局方向       | `"vertical" \| "horizontal" \| "responsive"` | `"vertical"` |
| className     | 自定义类名         | `string`                                     | -            |
| children      | 字段内容           | `React.ReactNode`                            | -            |
| id            | 字段容器 id        | `string`                                     | -            |
| data-invalid  | 是否标记为错误状态 | `boolean`                                    | -            |
| data-disabled | 是否标记为禁用状态 | `boolean`                                    | -            |
| onClick       | 点击回调           | `React.MouseEventHandler<HTMLDivElement>`    | -            |

### FieldSet

字段集合容器。

| 参数      | 说明                 | 类型                                          | 默认值 |
| --------- | -------------------- | --------------------------------------------- | ------ |
| className | 自定义类名           | `string`                                      | -      |
| children  | 字段集合内容         | `React.ReactNode`                             | -      |
| disabled  | 是否禁用字段集合     | `boolean`                                     | false  |
| name      | 字段集合名称         | `string`                                      | -      |
| form      | 关联的表单 id        | `string`                                      | -      |
| onChange  | 字段集合变化事件回调 | `React.FormEventHandler<HTMLFieldSetElement>` | -      |
| onInvalid | 字段集合校验失败回调 | `React.FormEventHandler<HTMLFieldSetElement>` | -      |

### FieldLegend

字段集合标题。

| 参数      | 说明       | 类型                  | 默认值     |
| --------- | ---------- | --------------------- | ---------- |
| variant   | 标题变体   | `"legend" \| "label"` | `"legend"` |
| className | 自定义类名 | `string`              | -          |
| children  | 标题内容   | `React.ReactNode`     | -          |
| id        | 标题 id    | `string`              | -          |

### FieldGroup

字段分组容器。

| 参数          | 说明               | 类型                                      | 默认值 |
| ------------- | ------------------ | ----------------------------------------- | ------ |
| className     | 自定义类名         | `string`                                  | -      |
| children      | 分组内容           | `React.ReactNode`                         | -      |
| id            | 分组容器 id        | `string`                                  | -      |
| data-slot     | 分组语义插槽       | `string`                                  | -      |
| data-disabled | 是否标记为禁用状态 | `boolean`                                 | -      |
| onClick       | 点击回调           | `React.MouseEventHandler<HTMLDivElement>` | -      |

### FieldLabel

字段标签。

| 参数      | 说明              | 类型                                        | 默认值 |
| --------- | ----------------- | ------------------------------------------- | ------ |
| className | 自定义类名        | `string`                                    | -      |
| children  | 标签内容          | `React.ReactNode`                           | -      |
| htmlFor   | 关联表单控件的 id | `string`                                    | -      |
| id        | 标签 id           | `string`                                    | -      |
| onClick   | 点击回调          | `React.MouseEventHandler<HTMLLabelElement>` | -      |

### FieldDescription

字段描述。

| 参数      | 说明       | 类型                                            | 默认值 |
| --------- | ---------- | ----------------------------------------------- | ------ |
| className | 自定义类名 | `string`                                        | -      |
| children  | 描述内容   | `React.ReactNode`                               | -      |
| id        | 描述 id    | `string`                                        | -      |
| onClick   | 点击回调   | `React.MouseEventHandler<HTMLParagraphElement>` | -      |

### FieldError

字段错误信息。

| 参数      | 说明                                   | 类型                                       | 默认值 |
| --------- | -------------------------------------- | ------------------------------------------ | ------ |
| errors    | 错误信息数组，未传 children 时自动渲染 | `Array<{ message?: string } \| undefined>` | -      |
| className | 自定义类名                             | `string`                                   | -      |
| children  | 自定义错误内容                         | `React.ReactNode`                          | -      |
| id        | 错误信息 id                            | `string`                                   | -      |
| onClick   | 点击回调                               | `React.MouseEventHandler<HTMLDivElement>`  | -      |

### FieldContent

字段内容区域。

| 参数      | 说明        | 类型                                      | 默认值 |
| --------- | ----------- | ----------------------------------------- | ------ |
| className | 自定义类名  | `string`                                  | -      |
| children  | 内容区域    | `React.ReactNode`                         | -      |
| id        | 内容区域 id | `string`                                  | -      |
| onClick   | 点击回调    | `React.MouseEventHandler<HTMLDivElement>` | -      |

### FieldTitle

字段标题。

| 参数      | 说明       | 类型                                      | 默认值 |
| --------- | ---------- | ----------------------------------------- | ------ |
| className | 自定义类名 | `string`                                  | -      |
| children  | 标题内容   | `React.ReactNode`                         | -      |
| id        | 标题 id    | `string`                                  | -      |
| onClick   | 点击回调   | `React.MouseEventHandler<HTMLDivElement>` | -      |

### FieldSeparator

字段分隔符。

| 参数      | 说明           | 类型                                      | 默认值 |
| --------- | -------------- | ----------------------------------------- | ------ |
| className | 自定义类名     | `string`                                  | -      |
| children  | 分隔符中间内容 | `React.ReactNode`                         | -      |
| id        | 分隔符 id      | `string`                                  | -      |
| onClick   | 点击回调       | `React.MouseEventHandler<HTMLDivElement>` | -      |
