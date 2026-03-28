---
category: Components
title: Switch 开关
subtitle: Switch 开关
demo:
  cols: 1
group:
  title: 表单
  order: 9
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
import { Switch } from "lynote-ui";
```

:::

开关组件，用于在两个状态之间切换。

## 代码演示

<code src="./demos/base.tsx">基本用法</code>

## API

### Switch

开关组件。

| 参数            | 说明             | 类型                                                | 默认值 |
| --------------- | ---------------- | --------------------------------------------------- | ------ |
| checked         | 是否选中         | `boolean`                                           | -      |
| defaultChecked  | 默认是否选中     | `boolean`                                           | -      |
| onCheckedChange | 选中状态变化回调 | `(checked: boolean) => void`                        | -      |
| disabled        | 是否禁用         | `boolean`                                           | -      |
| className       | 自定义类名       | `string`                                            | -      |
| ...props        | 其他原生属性     | `React.ComponentProps<typeof SwitchPrimitive.Root>` | -      |
