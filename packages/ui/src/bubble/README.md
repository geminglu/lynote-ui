---
category: Components
title: Bubble 消息气泡
subtitle: Bubble 消息气泡
demo:
  cols: 1
group:
  title: 数据展示
  order: 8
nav: 组件
toc: content
background: #111
compact: true
---

Bubble 用于呈现会话中的文本、简短结构化内容、建议或反应。它只负责气泡表面；头像、发送者、时间和消息级操作应交给 `Message`。组件实现与用法参考 [shadcn/ui Bubble](https://ui.shadcn.com/docs/components/base/bubble)。

## 特性

- 七种视觉变体，覆盖主消息、低强调内容、无边框富文本和错误消息。
- 通过 `align` 控制会话两侧对齐。
- 使用 `BubbleGroup` 组合同一发送者的连续消息。
- `BubbleReactions` 可定位在气泡上边缘或下边缘。
- `BubbleContent` 支持通过 `render` 渲染为链接或按钮。

## 导入

```ts | pure
import {
  Bubble,
  BubbleContent,
  BubbleGroup,
  BubbleReactions,
} from "lynote-ui/bubble";
```

## 组件结构

```tsx | pure
<BubbleGroup>
  <Bubble>
    <BubbleContent />
    <BubbleReactions />
  </Bubble>
</BubbleGroup>
```

## 代码演示

<code src="./demos/base.tsx">基本用法</code>

<code src="./demos/variants.tsx" description="七种视觉变体的对比。">变体</code>

<code src="./demos/group.tsx" description="组合连续消息，并在气泡边缘显示消息反应。">分组与反应</code>

## 最佳实践

- 完整聊天界面优先在 `Message` 上设置 `align`，让头像、内容和页脚一起对齐。
- 当前用户消息可使用 `default`，普通回复通常使用 `secondary` 或 `ghost`。
- Markdown、代码块或长篇助手回复适合 `ghost`，该变体不限制为容器宽度的 80%。
- 反应会覆盖气泡边缘，相邻消息之间需要留出足够的垂直间距。
- 把 `BubbleContent` 渲染为按钮或链接时，必须提供清晰的可访问名称。

## API

### Bubble

| 参数      | 说明       | 类型                                                                                       | 默认值      |
| --------- | ---------- | ------------------------------------------------------------------------------------------ | ----------- |
| variant   | 视觉变体   | `"default" \| "secondary" \| "muted" \| "tinted" \| "outline" \| "ghost" \| "destructive"` | `"default"` |
| align     | 气泡对齐   | `"start" \| "end"`                                                                         | `"start"`   |
| className | 自定义类名 | `string`                                                                                   | -           |
| ...props  | 原生属性   | `React.ComponentProps<"div">`                                                              | -           |

### BubbleContent

气泡内容容器，默认渲染 `<div>`。支持 `render` 多态渲染，并透传目标元素属性。

### BubbleGroup

连续气泡的纵向容器，透传原生 `<div>` 属性。

### BubbleReactions

| 参数      | 说明           | 类型                          | 默认值     |
| --------- | -------------- | ----------------------------- | ---------- |
| side      | 依附的垂直边缘 | `"top" \| "bottom"`           | `"bottom"` |
| align     | 水平对齐       | `"start" \| "end"`            | `"end"`    |
| className | 自定义类名     | `string`                      | -          |
| ...props  | 原生属性       | `React.ComponentProps<"div">` | -          |
