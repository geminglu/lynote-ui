---
category: Components
title: Badge 徽标
subtitle: Badge 徽标
demo:
  cols: 1
group:
  title: 数据展示
  order: 2
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
import { Badge } from "lynote-ui";
```

```ts [全局] | pure
import { Badge } from "gml-ui";
```

:::

徽标数，一般出现在通知图标或头像右上角，用于显示需要处理的消息条数，通过醒目视觉形式吸引用户注意。

## 代码演示

<code src="./demos/base.tsx">基本用法</code>

<code src="./demos/variant.tsx">变体用法</code>

## API

### Badge

| 参数      | 说明               | 类型                                                     | 默认值      |
| --------- | ------------------ | -------------------------------------------------------- | ----------- |
| variant   | 徽标的变体样式     | `"default" \| "secondary" \| "destructive" \| "outline"` | `"default"` |
| asChild   | 是否作为子元素渲染 | `boolean`                                                | `false`     |
| className | 自定义类名         | `string`                                                 | -           |
| ...props  | 其他原生 span 属性 | `React.ComponentProps<"span">`                           | -           |
