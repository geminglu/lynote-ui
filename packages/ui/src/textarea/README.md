---
category: Components
title: Textarea 文本域
subtitle: Textarea 文本域
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

多行文本输入控件，基于原生 `<textarea>` 元素封装。默认使用 `field-sizing-content` 让高度跟随内容自动增长，避免出现"输入很多但要在小框里上下滚动"的体验。

## 特性

- **自适应高度**：默认开启 `field-sizing-content`，根据内容自动伸缩。
- **支持 `rows`**：初始最小高度可通过 `rows` 控制。
- **错误态**：`aria-invalid` 触发红色边框 + 焦点环。
- **原生属性透传**：`maxLength`、`minLength`、`autoComplete` 等开箱即用。

## 何时使用

- 用户评论 / 反馈表单。
- 长文本字段（个人简介、地址详细信息）。
- 富信息单字段（如配置 JSON、SQL）。

## 何时不使用

- 单行文本——使用 `Input`。
- 富文本编辑（粗体 / 链接）——使用富文本编辑器。
- 一次性密码 / 验证码——使用 `InputOTP`。

## 导入

```ts | pure
import { Textarea } from "lynote-ui/textarea";
```

## 代码演示

<code src="./demos/base.tsx">基本用法</code>

<code src="./demos/disabled.tsx">禁用状态</code>

<code src="./demos/resize.tsx">尺寸控制</code>

<code src="./demos/with-counter.tsx" description="实时显示字数 / 上限并联动错误态。">字数统计</code>

<code src="./demos/form.tsx" description="与 `Field` 组合呈现 label / 描述 / 错误。">配合 Field 校验</code>

## 最佳实践

- **关联 label**：通过 `<FieldLabel htmlFor>` + textarea 的 `id` 关联。
- **`maxLength` 双重保险**：UI 显示字数 + 设置 `maxLength` 防止粘贴超长文本。
- **错误态双向**：textarea 设置 `aria-invalid`、外层 `Field` 设 `data-invalid`。
- **避免 `resize` 完全禁用**：用户可能希望手动放大；只在专门 layout 中加 `className="resize-none"`。

## API

### Textarea

| 参数         | 说明                       | 类型                                            | 默认值  |
| ------------ | -------------------------- | ----------------------------------------------- | ------- |
| value        | 输入值（受控）             | `string`                                        | -       |
| defaultValue | 默认值（非受控）           | `string`                                        | -       |
| placeholder  | 占位文本                   | `string`                                        | -       |
| rows         | 初始最小行数               | `number`                                        | -       |
| disabled     | 是否禁用                   | `boolean`                                       | `false` |
| readOnly     | 是否只读                   | `boolean`                                       | `false` |
| required     | 是否必填                   | `boolean`                                       | `false` |
| maxLength    | 最大字符数                 | `number`                                        | -       |
| aria-invalid | 是否处于错误态             | `boolean`                                       | -       |
| onChange     | 输入变化回调               | `React.ChangeEventHandler<HTMLTextAreaElement>` | -       |
| className    | 自定义类名                 | `string`                                        | -       |
| ...props     | 透传原生 `<textarea>` 属性 | `React.ComponentProps<"textarea">`              | -       |
