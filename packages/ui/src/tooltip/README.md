---
category: Components
title: Tooltip 工具提示
subtitle: Tooltip 工具提示
demo:
  cols: 1
group:
  title: 反馈
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
import {
  Tooltip,
  TooltipProvider,
  TooltipTrigger,
  TooltipContent,
} from "lynote-ui";
```

:::

工具提示组件，用于在悬停或聚焦时显示提示信息。

## 代码演示

<code src="./demos/base.tsx">基本用法</code>

## API

### Tooltip

工具提示的根容器组件（已包含 TooltipProvider）。

| 参数     | 说明         | 类型                                                 | 默认值 |
| -------- | ------------ | ---------------------------------------------------- | ------ |
| ...props | 其他原生属性 | `React.ComponentProps<typeof TooltipPrimitive.Root>` | -      |

### TooltipProvider

工具提示的提供者组件。

| 参数          | 说明                 | 类型                                                     | 默认值 |
| ------------- | -------------------- | -------------------------------------------------------- | ------ |
| delayDuration | 延迟显示时间（毫秒） | `number`                                                 | `0`    |
| ...props      | 其他原生属性         | `React.ComponentProps<typeof TooltipPrimitive.Provider>` | -      |

### TooltipTrigger

触发工具提示的元素。

| 参数     | 说明         | 类型                                                    | 默认值 |
| -------- | ------------ | ------------------------------------------------------- | ------ |
| ...props | 其他原生属性 | `React.ComponentProps<typeof TooltipPrimitive.Trigger>` | -      |

### TooltipContent

工具提示的内容区域。

| 参数       | 说明             | 类型                                                    | 默认值 |
| ---------- | ---------------- | ------------------------------------------------------- | ------ |
| sideOffset | 与触发元素的距离 | `number`                                                | `0`    |
| className  | 自定义类名       | `string`                                                | -      |
| ...props   | 其他原生属性     | `React.ComponentProps<typeof TooltipPrimitive.Content>` | -      |
