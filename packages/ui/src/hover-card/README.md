---
category: Components
title: HoverCard 悬浮卡片
subtitle: HoverCard 悬浮卡片
demo:
  cols: 1
group:
  title: 反馈
  order: 5
nav: 组件
toc: content
background: #111
compact: true
---

HoverCard 在用户悬停链接 / 头像等元素时弹出一张富内容的预览卡片，常用于"@提及"鼠标悬停显示用户信息、链接预览等场景。基于 Base UI PreviewCard 原语封装。

## 特性

- **富内容卡片**：和 Tooltip 不同，可放置图片、按钮、富文本。
- **支持键盘**：trigger 聚焦时也会展开（不仅限于鼠标 hover）。

## 何时使用

- 用户名 / 头像旁的悬停信息卡片。
- 链接预览（缩略图 + 标题 + 描述）。
- 标签 / 资源条目的快速预览。

## 何时不使用

- 移动端 / 触屏——`hover` 语义不可靠，请改用 `Popover`。
- 只展示一句简短说明——用 `Tooltip` 即可。
- 需要表单 / 强交互——用 `Popover`，可点击外部不关闭。

## 导入

```ts | pure
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "lynote-ui/hover-card";
```

## 组件结构

```tsx | pure
<HoverCard>
  <HoverCardTrigger />
  <HoverCardContent />
</HoverCard>
```

## 代码演示

<code src="./demos/base.tsx">基本用法</code>

<code src="./demos/user-card.tsx" description="@提及悬停展示用户信息卡片。">用户卡片</code>

## 最佳实践

- **延迟时间 300-500ms**：太短会误触，太长会让用户错过。
- **卡片宽度 240-320px**：超过会显得过大，太窄信息塞不下。
- **不要在 HoverCard 内放表单**：鼠标移出会关闭，无法可靠输入。复杂交互用 Popover。
- **始终关联 trigger 文本**：trigger 自身应是有意义的文本或图标，不要给空 trigger。

## API

### HoverCard

继承 Base UI `PreviewCard.Root` 的 props。

| 参数                 | 说明                        | 类型                                                                    | 默认值  |
| -------------------- | --------------------------- | ----------------------------------------------------------------------- | ------- |
| open                 | 是否打开（受控）            | `boolean`                                                               | -       |
| defaultOpen          | 默认打开（非受控）          | `boolean`                                                               | `false` |
| onOpenChange         | 打开状态变化回调            | `(open: boolean, eventDetails: PreviewCard.ChangeEventDetails) => void` | -       |
| onOpenChangeComplete | 打开/关闭动画完成回调       | `(open: boolean) => void`                                               | -       |
| openDelay            | 悬停打开的延时（毫秒）      | `number`                                                                | `600`   |
| closeDelay           | 鼠标移出关闭的延时（毫秒）  | `number`                                                                | `300`   |
| actionsRef           | 用于以命令式打开/关闭的 ref | `RefObject<{ unmount: () => void } \| null>`                            | -       |
| children             | trigger + content           | `React.ReactNode`                                                       | -       |

### HoverCardTrigger

通常是一段文本或 Avatar；可以通过 `render` 渲染为任意元素。

| 参数      | 说明           | 类型                                                        | 默认值 |
| --------- | -------------- | ----------------------------------------------------------- | ------ |
| render    | 自定义渲染元素 | `React.ReactElement \| ((props, state) => React.ReactNode)` | -      |
| className | 自定义类名     | `string`                                                    | -      |
| children  | 触发元素       | `React.ReactNode`                                           | -      |

### HoverCardContent

| 参数        | 说明           | 类型                                                                       | 默认值     |
| ----------- | -------------- | -------------------------------------------------------------------------- | ---------- |
| side        | 弹层方向       | `"top" \| "bottom" \| "left" \| "right" \| "inline-start" \| "inline-end"` | `"bottom"` |
| align       | 对齐方式       | `"start" \| "center" \| "end"`                                             | `"center"` |
| sideOffset  | 与锚点的间距   | `number`                                                                   | `4`        |
| alignOffset | 对齐偏移量     | `number`                                                                   | `4`        |
| render      | 自定义渲染元素 | `React.ReactElement \| ((props, state) => React.ReactNode)`                | -          |
| className   | 自定义类名     | `string`                                                                   | -          |
| children    | 卡片内容       | `React.ReactNode`                                                          | -          |
