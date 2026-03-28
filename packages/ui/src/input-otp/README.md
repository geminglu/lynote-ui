---
category: Components
title: InputOTP 一次性密码输入
subtitle: InputOTP 一次性密码输入
demo:
  cols: 1
group:
  title: 表单
  order: 13
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
  InputOTP,
  InputOTPGroup,
  InputOTPSlot,
  InputOTPSeparator,
} from "lynote-ui";
```

:::

一次性密码输入组件，用于输入验证码等场景。

## 代码演示

<code src="./demos/base.tsx">基本用法</code>

## API

### InputOTP

一次性密码输入的根容器组件。

| 参数               | 说明         | 类型                                    | 默认值 |
| ------------------ | ------------ | --------------------------------------- | ------ |
| maxLength          | 最大长度     | `number`                                | -      |
| value              | 当前值       | `string`                                | -      |
| defaultValue       | 默认值       | `string`                                | -      |
| onValueChange      | 值变化回调   | `(value: string) => void`               | -      |
| disabled           | 是否禁用     | `boolean`                               | -      |
| className          | 自定义类名   | `string`                                | -      |
| containerClassName | 容器类名     | `string`                                | -      |
| ...props           | 其他原生属性 | `React.ComponentProps<typeof OTPInput>` | -      |

### InputOTPGroup

一次性密码输入的分组容器。

| 参数      | 说明              | 类型                          | 默认值 |
| --------- | ----------------- | ----------------------------- | ------ |
| className | 自定义类名        | `string`                      | -      |
| ...props  | 其他原生 div 属性 | `React.ComponentProps<"div">` | -      |

### InputOTPSlot

一次性密码输入的单个输入槽。

| 参数      | 说明              | 类型                          | 默认值 |
| --------- | ----------------- | ----------------------------- | ------ |
| index     | 槽的索引          | `number`                      | -      |
| className | 自定义类名        | `string`                      | -      |
| ...props  | 其他原生 div 属性 | `React.ComponentProps<"div">` | -      |

### InputOTPSeparator

一次性密码输入的分隔符。

| 参数     | 说明              | 类型                          | 默认值 |
| -------- | ----------------- | ----------------------------- | ------ |
| ...props | 其他原生 div 属性 | `React.ComponentProps<"div">` | -      |
