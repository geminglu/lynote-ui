---
category: Components
title: InputOTP 一次性密码输入
subtitle: InputOTP 一次性密码输入
demo:
  cols: 1
group:
  title: 表单
  order: 7
nav: 组件
toc: content
background: #111
compact: true
---

InputOTP 用于输入一次性密码(OTP)、短信验证码、邮箱验证码等定长字符串。每个数字一个独立 slot,支持自动跳转、粘贴一次性填入、键盘可达。基于 [input-otp](https://github.com/guilhermerodz/input-otp) 实现。

## 特性

- **slot 模式**:每个字符独立显示,带高亮指示当前位置。
- **自动跳转**:输入一个字符后焦点自动跳到下一个 slot。
- **粘贴友好**:粘贴 6 位字符会一次性填入所有 slot。
- **可分组**:用 `InputOTPSeparator` 把 OTP 拆成视觉组(如 3 + 3)。

## 何时使用

- 短信 / 邮箱验证码输入。
- 2FA 一次性密码。
- 优惠码 / 邀请码(定长字符串)。

## 何时不使用

- 普通密码——使用 `Input type="password"`。
- 长字符串(> 8)——使用普通 Input,OTP 视觉拥挤。
- 不定长输入——使用普通 Input。

## 导入

```ts | pure
import {
  InputOTP,
  InputOTPGroup,
  InputOTPSeparator,
  InputOTPSlot,
} from "lynote-ui/input-otp";
```

## 代码演示

<code src="./demos/base.tsx" description="6 位定长 OTP。">基本用法</code>

<code src="./demos/with-form.tsx" description="`InputOTPSeparator` 把 OTP 拆成 3 + 3,配合 Field 提供 label 与描述。">分组 + 表单</code>

<code src="./demos/size.tsx" description="xs / sm / default / lg 四种插槽尺寸。">尺寸</code>

## 最佳实践

- **常用长度 4 / 6**:超过 8 位会让用户视觉疲劳。
- **支持自动填充**:在父表单上添加 `autoComplete="one-time-code"`,移动端会自动从短信读取。
- **配 Field 提供说明**:用 `FieldDescription` 告诉用户去哪里找验证码。
- **校验失败显示错误**:配合 `aria-invalid` 触发红色边框。

## API

### InputOTP

基于 [`input-otp`](https://input-otp.rodz.dev/) 的 `OTPInput`。

| 参数                        | 说明                                    | 类型                                                                        | 默认值             |
| --------------------------- | --------------------------------------- | --------------------------------------------------------------------------- | ------------------ |
| maxLength                   | 总长度（必填）                          | `number`                                                                    | -                  |
| value                       | 当前值（受控）                          | `string`                                                                    | -                  |
| defaultValue                | 默认值（非受控）                        | `string`                                                                    | -                  |
| onChange                    | 变化回调                                | `(value: string) => void`                                                   | -                  |
| onComplete                  | 输入完所有位时触发                      | `(value: string) => void`                                                   | -                  |
| disabled                    | 是否禁用                                | `boolean`                                                                   | `false`            |
| readOnly                    | 是否只读                                | `boolean`                                                                   | `false`            |
| autoFocus                   | 自动聚焦                                | `boolean`                                                                   | `false`            |
| pattern                     | 允许的字符正则（如 `^[0-9]+$`）         | `string`                                                                    | -                  |
| inputMode                   | 虚拟键盘类型                            | `"numeric" \| "text" \| "decimal" \| "tel" \| "search" \| "email" \| "url"` | `"numeric"`        |
| pasteTransformer            | 粘贴时对文本的预处理函数                | `(pasted: string) => string`                                                | -                  |
| textAlign                   | 输入文本对齐方式                        | `"left" \| "center" \| "right"`                                             | `"left"`           |
| pushPasswordManagerStrategy | 与密码管理器协作策略                    | `"increase-width" \| "none"`                                                | `"increase-width"` |
| size                        | 插槽尺寸                                | `"xs" \| "sm" \| "default" \| "lg"`                                         | `"default"`        |
| containerClassName          | 容器类名                                | `string`                                                                    | -                  |
| className                   | 内部 input 元素类名                     | `string`                                                                    | -                  |
| name                        | 表单字段名                              | `string`                                                                    | -                  |
| children                    | 通常是 `InputOTPGroup` + `InputOTPSlot` | `React.ReactNode`                                                           | -                  |

### InputOTPGroup

逻辑分组容器，把 N 个 slot 视觉上合并。

| 参数      | 说明                | 类型                          | 默认值 |
| --------- | ------------------- | ----------------------------- | ------ |
| className | 自定义类名          | `string`                      | -      |
| children  | `InputOTPSlot` 列表 | `React.ReactNode`             | -      |
| ...props  | 原生 `<div>` 属性   | `React.ComponentProps<"div">` | -      |

### InputOTPSlot

| 参数      | 说明              | 类型                          | 默认值 |
| --------- | ----------------- | ----------------------------- | ------ |
| index     | slot 序号（必填） | `number`                      | -      |
| className | 自定义类名        | `string`                      | -      |
| ...props  | 原生 `<div>` 属性 | `React.ComponentProps<"div">` | -      |

### InputOTPSeparator

视觉分隔符，默认渲染 `MinusIcon`。

| 参数      | 说明              | 类型                          | 默认值 |
| --------- | ----------------- | ----------------------------- | ------ |
| className | 自定义类名        | `string`                      | -      |
| children  | 自定义分隔符内容  | `React.ReactNode`             | -      |
| ...props  | 原生 `<div>` 属性 | `React.ComponentProps<"div">` | -      |
