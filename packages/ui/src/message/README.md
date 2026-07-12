---
category: Components
title: Message 消息
subtitle: Message 消息
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

Message 用于布局会话中的单条消息，负责头像、对齐、头部、内容与页脚。气泡、附件和状态标记可以按业务需要组合到消息中。组件实现与用法参考 [shadcn/ui Message](https://ui.shadcn.com/docs/components/base/message)。

## 特性

- `align="start" | "end"` 同时控制消息、头像和页脚方向。
- `MessageAvatar` 固定在消息底部，并在存在页脚时自动避让。
- `MessageHeader` 和 `MessageFooter` 可承载发送者、时间、状态与操作。
- `MessageGroup` 用于堆叠同一发送者的连续消息。
- 可与 `Bubble`、`Attachment`、`Marker` 等组件自由组合。

## 导入

```ts | pure
import {
  Message,
  MessageAvatar,
  MessageContent,
  MessageFooter,
  MessageGroup,
  MessageHeader,
} from "lynote-ui/message";
```

## 组件结构

```tsx | pure
<Message>
  <MessageAvatar />
  <MessageContent>
    <MessageHeader />
    <Bubble />
    <Attachment />
    <MessageFooter />
  </MessageContent>
</Message>
```

## 代码演示

<code src="./demos/base.tsx">基本用法</code>

<code src="./demos/header-footer.tsx" description="使用头部显示发送者和时间，使用页脚显示状态与消息级操作。">头部与页脚</code>

<code src="./demos/group.tsx" description="连续消息可保留空头像槽，让最后一条消息显示真实头像。">连续消息</code>

<code src="./demos/with-attachment.tsx" description="在 MessageContent 中组合气泡与附件。">带附件的消息</code>

## 最佳实践

- 把对齐设置在 `Message` 上，不要分别调整头像、气泡和页脚。
- 同一发送者的连续消息使用 `MessageGroup`；前面的消息可保留空 `MessageAvatar` 以维持缩进。
- 消息级纯图标操作必须提供 `aria-label`。
- Message 是展示性布局容器；发送者、时间、状态和交互的语义由内部内容提供。
- 动态进度或流式状态使用带 `role="status"` 的 `Marker`，不要让屏幕阅读器逐字朗读流式文本。

## API

### Message

| 参数      | 说明       | 类型                          | 默认值    |
| --------- | ---------- | ----------------------------- | --------- |
| align     | 消息对齐   | `"start" \| "end"`            | `"start"` |
| className | 自定义类名 | `string`                      | -         |
| ...props  | 原生属性   | `React.ComponentProps<"div">` | -         |

### MessageAvatar

头像槽，通常放置 `Avatar`。当消息包含 `MessageFooter` 时会自动上移，透传原生 `<div>` 属性。

### MessageContent

消息主体的纵向容器。会根据 Message 的 `align` 自动对齐直接子项，透传原生 `<div>` 属性。

### MessageHeader

头部元数据容器，适合发送者名称和时间，透传原生 `<div>` 属性。

### MessageFooter

页脚容器，适合状态和操作按钮；在 `align="end"` 时自动右对齐，透传原生 `<div>` 属性。

### MessageGroup

连续消息的纵向容器，透传原生 `<div>` 属性。
