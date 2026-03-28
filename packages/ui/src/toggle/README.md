---
category: Components
title: Toggle 切换按钮
subtitle: Toggle 切换按钮
demo:
  cols: 1
group:
  title: 表单
  order: 10
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
import { Toggle } from "lynote-ui";
```

:::

切换按钮组件，用于在两种状态之间切换。

## 代码演示

<code src="./demos/base.tsx">基本用法</code>

## API

### Toggle

切换按钮组件。

| 参数            | 说明             | 类型                                                | 默认值      |
| --------------- | ---------------- | --------------------------------------------------- | ----------- |
| pressed         | 是否按下         | `boolean`                                           | -           |
| defaultPressed  | 默认是否按下     | `boolean`                                           | -           |
| onPressedChange | 按下状态变化回调 | `(pressed: boolean) => void`                        | -           |
| variant         | 按钮变体         | `"default" \| "outline"`                            | `"default"` |
| size            | 按钮尺寸         | `"default" \| "sm" \| "lg"`                         | `"default"` |
| disabled        | 是否禁用         | `boolean`                                           | -           |
| className       | 自定义类名       | `string`                                            | -           |
| ...props        | 其他原生属性     | `React.ComponentProps<typeof TogglePrimitive.Root>` | -           |
