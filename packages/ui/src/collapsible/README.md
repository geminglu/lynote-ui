---
category: Components
title: Collapsible 可折叠
subtitle: Collapsible 可折叠
demo:
  cols: 1
group:
  title: 布局
  order: 3
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
import { Collapsible, CollapsibleTrigger, CollapsibleContent } from "lynote-ui";
```

:::

可折叠组件，用于显示和隐藏内容。

## 代码演示

<code src="./demos/base.tsx">基本用法</code>

<code src="./demos/settings-panel.tsx" description="使用可折叠组件创建一个设置面板。">设置面板</code>

## API

### Collapsible

可折叠的根容器组件。

| 参数         | 说明             | 类型                                                     | 默认值 |
| ------------ | ---------------- | -------------------------------------------------------- | ------ |
| open         | 是否打开         | `boolean`                                                | -      |
| defaultOpen  | 默认是否打开     | `boolean`                                                | -      |
| onOpenChange | 打开状态变化回调 | `(open: boolean) => void`                                | -      |
| ...props     | 其他原生属性     | `React.ComponentProps<typeof CollapsiblePrimitive.Root>` | -      |

### CollapsibleTrigger

触发折叠的元素。

| 参数     | 说明         | 类型                                                                   | 默认值 |
| -------- | ------------ | ---------------------------------------------------------------------- | ------ |
| ...props | 其他原生属性 | `React.ComponentProps<typeof CollapsiblePrimitive.CollapsibleTrigger>` | -      |

### CollapsibleContent

可折叠的内容区域。

| 参数     | 说明         | 类型                                                                   | 默认值 |
| -------- | ------------ | ---------------------------------------------------------------------- | ------ |
| ...props | 其他原生属性 | `React.ComponentProps<typeof CollapsiblePrimitive.CollapsibleContent>` | -      |
