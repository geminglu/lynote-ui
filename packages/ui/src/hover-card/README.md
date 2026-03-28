---
category: Components
title: HoverCard 悬停卡片
subtitle: HoverCard 悬停卡片
demo:
  cols: 1
group:
  title: 反馈
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
import { HoverCard, HoverCardTrigger, HoverCardContent } from "lynote-ui";
```

:::

悬停卡片组件，用于在悬停时显示额外的信息卡片。

## 代码演示

<code src="./demos/base.tsx">基本用法</code>

## API

### HoverCard

悬停卡片的根容器组件。

| 参数       | 说明                 | 类型                                                   | 默认值 |
| ---------- | -------------------- | ------------------------------------------------------ | ------ |
| openDelay  | 打开延迟时间（毫秒） | `number`                                               | -      |
| closeDelay | 关闭延迟时间（毫秒） | `number`                                               | -      |
| ...props   | 其他原生属性         | `React.ComponentProps<typeof HoverCardPrimitive.Root>` | -      |

### HoverCardTrigger

触发悬停卡片的元素。

| 参数     | 说明         | 类型                                                      | 默认值 |
| -------- | ------------ | --------------------------------------------------------- | ------ |
| ...props | 其他原生属性 | `React.ComponentProps<typeof HoverCardPrimitive.Trigger>` | -      |

### HoverCardContent

悬停卡片的内容区域。

| 参数       | 说明             | 类型                                                      | 默认值     |
| ---------- | ---------------- | --------------------------------------------------------- | ---------- |
| align      | 对齐方式         | `"start" \| "center" \| "end"`                            | `"center"` |
| sideOffset | 与触发元素的距离 | `number`                                                  | `4`        |
| className  | 自定义类名       | `string`                                                  | -          |
| ...props   | 其他原生属性     | `React.ComponentProps<typeof HoverCardPrimitive.Content>` | -          |
