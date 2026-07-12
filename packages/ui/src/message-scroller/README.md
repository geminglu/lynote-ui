---
category: Components
title: MessageScroller 消息滚动区
subtitle: MessageScroller 消息滚动区
demo:
  cols: 1
group:
  title: 布局
  order: 8
nav: 组件
toc: content
background: #111
compact: true
---

MessageScroller 是面向聊天记录的滚动容器，处理新会话锚点、流式回复跟随、历史消息前插位置保持、消息跳转与可见性跟踪。滚动行为由 `@shadcn/react` 提供，实现与用法参考 [shadcn/ui Message Scroller](https://ui.shadcn.com/docs/components/base/message-scroller)。

## 特性

- 新会话可以锚定在视口上方，并保留上一条消息作为上下文。
- `autoScroll` 只在读者位于实时边缘时跟随流式内容，用户主动离开后不抢夺位置。
- 前插历史消息时保留当前可见位置。
- 支持跳到开头、结尾或指定 `messageId`。
- 可按需订阅滚动边缘和消息可见性，不要求虚拟化消息列表。

## 导入

```ts | pure
import {
  MessageScroller,
  MessageScrollerButton,
  MessageScrollerContent,
  MessageScrollerItem,
  MessageScrollerProvider,
  MessageScrollerViewport,
  useMessageScroller,
  useMessageScrollerScrollable,
  useMessageScrollerVisibility,
} from "lynote-ui/message-scroller";
```

## 组件结构

```tsx | pure
<MessageScrollerProvider autoScroll>
  <MessageScroller>
    <MessageScrollerViewport>
      <MessageScrollerContent>
        <MessageScrollerItem messageId="message-1" scrollAnchor>
          <Message />
        </MessageScrollerItem>
      </MessageScrollerContent>
    </MessageScrollerViewport>
    <MessageScrollerButton />
  </MessageScroller>
</MessageScrollerProvider>
```

`MessageScroller` 会填满父容器，因此父容器必须具有明确高度或位于可收缩的 Flex/Grid 布局中。

## 代码演示

<code src="./demos/base.tsx">基本用法</code>

<code src="./demos/controls.tsx" description="在 Provider 内部使用 useMessageScroller 从滚动区外部控制位置。">滚动控制</code>

## 核心概念

### 会话锚点

为开启新一轮对话的行设置 `scrollAnchor`。常见 AI 会话通常把用户消息设为锚点，但系统事件或人工接管标记也可以成为锚点。

```tsx | pure
<MessageScrollerItem
  messageId={message.id}
  scrollAnchor={message.role === "user"}
/>
```

### 打开历史会话

`defaultScrollPosition="last-anchor"` 会优先打开最后一个有意义的会话锚点，并在下方展示回复；没有锚点或内容不足一屏时回退到结尾。

### 流式跟随

开启 `autoScroll` 后，视口仅在读者处于实时边缘时跟随增长中的回复。滚轮、触摸、键盘滚动或显式跳转都会释放自动跟随；调用 `scrollToEnd` 可以重新启用。

## 最佳实践

- `MessageScrollerContent` 的每个直接子项都用 `MessageScrollerItem` 包裹。
- 需要定位或保持位置的行提供稳定、唯一的 `messageId`，不要使用数组索引。
- 加载更早消息时在数组开头插入，并保持已有消息 id 不变。
- 流式期间可在 `MessageScrollerContent` 上设置 `aria-busy`，完成后再让辅助技术播报整条消息。
- 新消息动画只使用 `transform` 和 `opacity`；避免动画高度、外边距或内边距。

## API

### MessageScrollerProvider

| 参数                   | 说明                         | 类型                                | 默认值  |
| ---------------------- | ---------------------------- | ----------------------------------- | ------- |
| autoScroll             | 位于实时边缘时跟随内容增长   | `boolean`                           | `false` |
| defaultScrollPosition  | 首次打开位置                 | `"start" \| "end" \| "last-anchor"` | `"end"` |
| scrollEdgeThreshold    | 判断到达滚动边缘的阈值       | `number`                            | -       |
| scrollPreviousItemPeek | 锚定新会话时保留上一项的高度 | `number`                            | -       |
| scrollMargin           | 程序化滚动的默认留白         | `number`                            | -       |
| children               | 滚动区与外部控制             | `React.ReactNode`                   | -       |

### MessageScroller

样式框架与定位上下文，透传原生 `<div>` 属性并填满父容器。

### MessageScrollerViewport

可聚焦的滚动元素。默认具有 `role="region"`、`aria-label="Messages"` 和 `tabIndex={0}`。

| 参数                    | 说明                   | 类型                          | 默认值 |
| ----------------------- | ---------------------- | ----------------------------- | ------ |
| preserveScrollOnPrepend | 前插内容时保持可见位置 | `boolean`                     | `true` |
| ...props                | 原生 `<div>` 属性      | `React.ComponentProps<"div">` | -      |

### MessageScrollerContent

聊天记录容器，默认具有 `role="log"` 和 `aria-relevant="additions"`。

| 参数            | 说明              | 类型                          | 默认值 |
| --------------- | ----------------- | ----------------------------- | ------ |
| spacerClassName | 内部定位占位类名  | `string`                      | -      |
| ...props        | 原生 `<div>` 属性 | `React.ComponentProps<"div">` | -      |

### MessageScrollerItem

| 参数         | 说明                          | 类型                          | 默认值  |
| ------------ | ----------------------------- | ----------------------------- | ------- |
| messageId    | 用于定位和可见性跟踪的稳定 id | `string`                      | -       |
| scrollAnchor | 是否作为新一轮会话锚点        | `boolean`                     | `false` |
| ...props     | 原生 `<div>` 属性             | `React.ComponentProps<"div">` | -       |

### MessageScrollerButton

| 参数      | 说明            | 类型                   | 默认值        |
| --------- | --------------- | ---------------------- | ------------- |
| direction | 滚动方向        | `"start" \| "end"`     | `"end"`       |
| behavior  | 浏览器滚动行为  | `ScrollBehavior`       | -             |
| variant   | Button 视觉变体 | `Button["variant"]`    | `"secondary"` |
| size      | Button 尺寸     | `Button["size"]`       | `"sm"`        |
| render    | 自定义按钮元素  | `useRender.RenderProp` | `Button`      |

没有可滚动内容时，按钮会设置 `inert`、`tabIndex={-1}` 和 `data-active="false"`，避免产生无效焦点。

### useMessageScroller

返回 `scrollToStart(options)`、`scrollToEnd(options)` 和 `scrollToMessage(messageId, options)`。方法返回 `boolean`，表示滚动已执行或已排队。

### useMessageScrollerScrollable

返回 `{ start, end }`，表示视口是否还能向对应方向滚动。

### useMessageScrollerVisibility

返回 `{ currentAnchorId, visibleMessageIds }`。只有组件订阅该 Hook 时才启用可见性跟踪。
