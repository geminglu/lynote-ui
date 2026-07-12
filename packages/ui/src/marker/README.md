---
category: Components
title: Marker 会话标记
subtitle: Marker 会话标记
demo:
  cols: 1
group:
  title: 反馈
  order: 8
nav: 组件
toc: content
background: #111
compact: true
---

Marker 用于在会话中呈现状态更新、系统说明、带边框的事件行或带标签的分隔线。组件实现与用法参考 [shadcn/ui Marker](https://ui.shadcn.com/docs/components/base/marker)。

## 特性

- `default`、`border`、`separator` 三种布局变体。
- `MarkerIcon` 是对辅助技术隐藏的装饰性图标槽。
- 根元素支持 `render`，可渲染为链接或按钮。
- 可与 `Spinner`、`shimmer` 工具类组合展示进行中状态。

## 导入

```ts | pure
import {
  Marker,
  MarkerContent,
  MarkerIcon,
  markerVariants,
} from "lynote-ui/marker";
```

## 代码演示

<code src="./demos/base.tsx">基本用法</code>

<code src="./demos/variants.tsx" description="默认、底部边框与标签分隔线。">变体</code>

<code src="./demos/status.tsx" description="使用 role='status' 让辅助技术感知进行中的状态更新。">进行中状态</code>

## 最佳实践

- “正在思考”“正在执行工具”等动态状态使用 `role="status"`。
- 带可见文字的 `separator` 不要设置 `role="separator"`，否则其文字可能被视为展示性内容。
- `MarkerIcon` 已设置 `aria-hidden="true"`；有意义的信息必须同时放进 `MarkerContent`。
- 需要点击的整行标记通过 `render={<a />}` 或 `render={<button />}` 提供正确语义。

## API

### Marker

| 参数      | 说明         | 类型                                   | 默认值      |
| --------- | ------------ | -------------------------------------- | ----------- |
| variant   | 视觉变体     | `"default" \| "border" \| "separator"` | `"default"` |
| render    | 自定义根元素 | `useRender.RenderProp`                 | -           |
| className | 自定义类名   | `string`                               | -           |
| ...props  | 根元素属性   | `useRender.ComponentProps<"div">`      | -           |

### MarkerIcon

装饰性图标容器，固定为 `aria-hidden="true"`，透传原生 `<span>` 属性。

### MarkerContent

标记文字容器；在 `separator` 变体下自动居中并保持内容宽度，透传原生 `<span>` 属性。

### markerVariants

导出的 CVA 样式函数，可在自定义元素上复用 Marker 的变体样式。
