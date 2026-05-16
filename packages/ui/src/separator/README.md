---
category: Components
title: Separator 分隔符
subtitle: Separator 分隔符
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

在内容之间提供水平或垂直方向的视觉分隔。基于 Base UI Separator 原语，自动处理语义角色（`role="separator"`）。

## 特性

- **两种方向**：`horizontal`（默认）/ `vertical`。垂直方向需要在父级提供高度。
- **可访问语义**：自动加上 `role="separator"` 与 `aria-orientation`。
- **零样式束缚**：默认是 1px 浅色线，通过 `className` 完全可覆盖。

## 何时使用

- 列表项 / 卡片块 / 表单分组之间的视觉分隔。
- 工具栏中按钮组之间的分隔。
- 把内容分块（如登录页"或"分隔登录方式）。

## 何时不使用

- 已经用 `border-t` / `border-b` 处理边线时不需要额外 separator。
- 表格行之间——使用 `Table` 自带的边线。

## 导入

```ts | pure
import { Separator } from "lynote-ui/separator";
```

## 代码演示

<code src="./demos/base.tsx">基本用法</code>

<code src="./demos/vertical.tsx" description="垂直分隔符需要在父容器上设置高度。">垂直方向</code>

<code src="./demos/with-text.tsx" description="夹文字的分隔符，常见于登录页的'或'分隔。也可以直接使用 `FieldSeparator`。">带文字</code>

## 最佳实践

- **垂直方向必须有高度**：`orientation="vertical"` 依赖父容器高度，常与 `h-4` / `h-6` 或工具栏高度配合。
- **避免重复边线**：卡片、表格、列表已经有 border 时，不要再叠加 Separator。
- **分组语义清晰**：只在内容分组边界使用，不要把它当作装饰线密集插入。
- **带文字分隔优先复用 FieldSeparator**：表单场景可直接使用 `FieldSeparator`，减少重复布局。

## API

### Separator

| 参数        | 说明       | 类型                         | 默认值         |
| ----------- | ---------- | ---------------------------- | -------------- |
| orientation | 方向       | `"horizontal" \| "vertical"` | `"horizontal"` |
| className   | 自定义类名 | `string`                     | -              |
