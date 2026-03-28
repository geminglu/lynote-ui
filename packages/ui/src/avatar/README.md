---
category: Components
title: Avatar 头像
subtitle: Avatar 头像
demo:
  cols: 1
group:
  title: 数据展示
  order: 4
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
import { Avatar, AvatarImage, AvatarFallback } from "lynote-ui";
```

```ts [全局] | pure
import { Avatar, AvatarImage, AvatarFallback } from "gml-ui";
```

:::

头像组件，用于展示用户头像或图片。

## 代码演示

<code src="./demos/base.tsx">基本用法</code>

## API

### Avatar

头像的根容器组件。

| 参数      | 说明         | 类型                                                | 默认值 |
| --------- | ------------ | --------------------------------------------------- | ------ |
| className | 自定义类名   | `string`                                            | -      |
| ...props  | 其他原生属性 | `React.ComponentProps<typeof AvatarPrimitive.Root>` | -      |

### AvatarImage

头像的图片组件。

| 参数      | 说明         | 类型                                                 | 默认值 |
| --------- | ------------ | ---------------------------------------------------- | ------ |
| src       | 图片地址     | `string`                                             | -      |
| alt       | 图片描述     | `string`                                             | -      |
| className | 自定义类名   | `string`                                             | -      |
| ...props  | 其他原生属性 | `React.ComponentProps<typeof AvatarPrimitive.Image>` | -      |

### AvatarFallback

头像的备用内容，当图片加载失败时显示。

| 参数      | 说明         | 类型                                                    | 默认值 |
| --------- | ------------ | ------------------------------------------------------- | ------ |
| className | 自定义类名   | `string`                                                | -      |
| ...props  | 其他原生属性 | `React.ComponentProps<typeof AvatarPrimitive.Fallback>` | -      |
