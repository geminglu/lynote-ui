---
category: Components
title: ScrollArea 滚动区域
subtitle: ScrollArea 滚动区域
demo:
  cols: 1
group:
  title: 布局
  order: 2
nav: 组件
toc: content
background: #111
compact: true
---

ScrollArea 提供跨浏览器一致的、可定制的滚动条样式。它基于 Base UI 的 ScrollArea 原语，用 JS 计算出 thumb 的尺寸和位置，避免不同浏览器原生滚动条样式差异。

## 特性

- **样式一致性**：在 Mac / Windows / Linux 上展示统一的滚动条外观。
- **支持水平 / 垂直**：使用 `ScrollBar orientation="horizontal" | "vertical"`（默认垂直）。
- **键盘可滚动**：内部 viewport 可聚焦，支持方向键、PageUp/Down 滚动。
- **触摸友好**：在触屏设备上保留原生滑动手感。

## 何时使用

- 需要在固定高度容器内展示可滚动的内容（聊天记录、长列表、代码块）。
- 想要统一不同浏览器/操作系统的滚动条外观。
- 水平横向滚动的标签列、图片墙等。

## 何时不使用

- 整页滚动——使用浏览器原生滚动，不要包一层 ScrollArea。
- 虚拟列表——海量数据建议使用 `react-virtual` / `react-window` 等专门库。

## 导入

```ts | pure
import { ScrollArea, ScrollBar } from "lynote-ui/scroll-area";
```

## 代码演示

<code src="./demos/base.tsx">基本用法</code>

<code src="./demos/horizontal.tsx" description="水平方向的滚动需要显式 `<ScrollBar orientation=\"horizontal\" />`。">水平方向</code>

<code src="./demos/chat.tsx" description="聊天消息列表的典型用法。">聊天消息</code>

## 最佳实践

- **设置明确的高度 / 宽度**：ScrollArea 不会自动撑开，必须给一个高度（如 `h-72`、`max-h-96`）。
- **不要嵌套 ScrollArea**：嵌套会让滚动事件难以预测；多层滚动通常是布局问题。
- **配合 `Separator` 分组**：长列表里用 `Separator` 让段落感更强。
- **水平滚动注意 `whitespace-nowrap`**：内容默认会换行，水平滚动需要禁止换行。

## API

### ScrollArea

| 参数      | 说明                   | 类型              | 默认值 |
| --------- | ---------------------- | ----------------- | ------ |
| className | 自定义类名（设置宽高） | `string`          | -      |
| children  | 可滚动的内容           | `React.ReactNode` | -      |

### ScrollBar

水平 / 垂直方向的滚动条。

| 参数        | 说明       | 类型                         | 默认值       |
| ----------- | ---------- | ---------------------------- | ------------ |
| orientation | 方向       | `"horizontal" \| "vertical"` | `"vertical"` |
| className   | 自定义类名 | `string`                     | -            |
