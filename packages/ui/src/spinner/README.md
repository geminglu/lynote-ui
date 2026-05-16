---
category: Components
title: Spinner 加载器
subtitle: Spinner 加载器
demo:
  cols: 1
group:
  title: 反馈
  order: 3
nav: 组件
toc: content
background: #111
compact: true
---

旋转的加载指示器，用于表达"正在进行中"的瞬时状态。基于 `lucide-react` 的 `Loader2Icon`，自带无障碍 `role="status"` 与 `aria-label="Loading"`。

## 特性

- **CSS 动画**：使用 `animate-spin`，零 JS。
- **可访问语义**：默认 `role="status"`，读屏器会朗读"Loading"。
- **任意尺寸**：通过 `className="size-*"` 覆盖默认 `size-4`。

## 何时使用

- 按钮提交后未拿到响应的等待状态。
- 内容区域加载中（与 `Skeleton` 二选一）。
- 模态对话框 / 抽屉打开时数据未就绪。

## 何时不使用

- 加载时间可预估 / 进度可量化——使用 `Progress`。
- 整页加载——可以用骨架屏 + Spinner 组合，或更具体的 loading 页面。
- 通知 / 消息提示——使用 `Sonner`。

## 导入

```ts | pure
import { Spinner } from "lynote-ui/spinner";
```

## 代码演示

<code src="./demos/base.tsx">基本用法</code>

<code src="./demos/sizes.tsx" description="通过 Tailwind `size-*` 控制尺寸。">尺寸</code>

<code src="./demos/in-button.tsx" description="按钮内的 loading 状态，配合 `disabled` 防止重复点击。">按钮内</code>

<code src="./demos/with-text.tsx" description="搭配文字提示，让用户知道正在做什么。">配合文字提示</code>

## 最佳实践

- **超过 1 秒才出现**：极短的请求闪一下 spinner 反而让用户感到卡顿。可使用 `setTimeout` 延迟显示。
- **同时禁用触发器**：spinner 出现时务必 disable 按钮，避免重复提交。
- **不要让 spinner 持续 10 秒以上**：超过 10 秒说明可能卡死或网络出问题，应给出明确提示或重试入口。
- **用 `aria-label` 描述具体动作**：默认 "Loading" 较泛，复杂场景可覆盖为"正在保存"等。

## API

### Spinner

| 参数      | 说明                         | 类型                          | 默认值 |
| --------- | ---------------------------- | ----------------------------- | ------ |
| className | 自定义类名（控制大小、颜色） | `string`                      | -      |
| ...props  | 透传原生 `<svg>` 属性        | `React.ComponentProps<"svg">` | -      |
