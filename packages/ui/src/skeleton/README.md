---
category: Components
title: Skeleton 骨架屏
subtitle: Skeleton 骨架屏
demo:
  cols: 1
group:
  title: 反馈
  order: 2
nav: 组件
toc: content
background: #111
compact: true
---

数据加载期间的占位元素，用一个轻量的灰色矩形保留即将填入的内容轮廓，避免布局抖动。

## 特性

- **极简实现**：只是带 `animate-pulse` 的 `<div>`，没有任何 JS 状态。
- **完全靠 className 塑形**：宽高、形状、间距都通过 Tailwind 类控制。
- **可组合**：随意拼出文本行、头像、卡片、列表等占位形态。

## 何时使用

- 数据请求中且预期返回时间 > 200ms 的列表 / 卡片。
- 第一屏内容尚未就绪时的页面骨架。
- 图片懒加载时配合 `AspectRatio` 占位。

## 何时不使用

- 数据返回极快（< 200ms）——闪一下反而干扰视觉。
- 提交 / 后续操作的加载反馈——使用 `Spinner` 或 button loading 态。
- 通知 / 异步任务进度——使用 `Progress` 或 `Sonner`。

## 导入

```ts | pure
import { Skeleton } from "lynote-ui/skeleton";
```

## 代码演示

<code src="./demos/base.tsx">基本用法</code>

<code src="./demos/profile.tsx" description="头像 + 名字 + 副标题的占位形态，常用于用户卡片。">用户资料占位</code>

<code src="./demos/card.tsx" description="封面图 + 标题 + 多行正文的卡片占位。">卡片占位</code>

<code src="./demos/list.tsx" description="重复列表项的占位，建议项数与真实数据接近以减少抖动。">列表占位</code>

## 最佳实践

- **骨架结构要贴近真实数据**：宽度、高度、行数尽量与真实内容一致，否则数据到位时会出现明显抖动。
- **不要长时间显示**：超过 2 秒还没数据，请换成 `Spinner` 或加载错误提示。
- **避免堆叠太多动画**：一屏 30+ 个骨架同时 pulse 容易让用户分神，必要时关闭动画（`animate-none`）。

## API

### Skeleton

| 参数      | 说明                               | 类型                          | 默认值 |
| --------- | ---------------------------------- | ----------------------------- | ------ |
| className | 自定义类名（控制宽高、形状、间距） | `string`                      | -      |
| ...props  | 透传原生 `<div>` 属性              | `React.ComponentProps<"div">` | -      |
