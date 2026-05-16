---
category: Components
title: Badge 徽标
subtitle: Badge 徽标
demo:
  cols: 1
group:
  title: 数据展示
  order: 6
nav: 组件
toc: content
background: #111
compact: true
---

用于呈现状态、分类、计数或简短标签的紧凑型组件。基于 Base UI 的 `useRender`，支持多态渲染。

## 特性

- **6 种视觉变体**：`default` / `secondary` / `destructive` / `outline` / `ghost` / `link`。
- **多态渲染**：通过 `render` 可把 Badge 渲染为 `<a>` 或其它元素，自动保留外观。
- **图标槽位**：与 Button 一致，子级 svg 加 `data-icon="inline-start"` / `inline-end` 自动调整内边距。

## 何时使用

- 标记内容状态（已完成 / 失败 / 进行中）。
- 列表项的标签 / 分类。
- 通知图标右上角的计数。
- 用户身份徽标（管理员 / VIP / 新用户）。

## 何时不使用

- 可点击的次要操作——使用 `Button variant="ghost" size="xs"`。
- 多选筛选 / Tag 输入——使用 `ToggleGroup` 或 Combobox 多选。

## 导入

```ts | pure
import { Badge } from "lynote-ui/badge";
```

## 代码演示

<code src="./demos/base.tsx">基本用法</code>

<code src="./demos/variant.tsx">变体</code>

<code src="./demos/with-icon.tsx" description="状态徽标常配图标，使用 `data-icon` 槽位让组件自动调整内边距。">带图标</code>

<code src="./demos/status-dot.tsx" description="圆点状态指示器，常见于用户在线状态展示。">状态点</code>

<code src="./demos/count.tsx" description="按钮右上角的计数徽标。">计数徽标</code>

<code src="./demos/as-link.tsx" description="通过 `render={<a/>}` 把 Badge 渲染为可点击的链接。">作为链接</code>

## 最佳实践

- **变体语义化**：`destructive` 留给错误 / 失败 / 警告，`default` 用于主动状态，`outline` 用于中性。
- **保持文字简短**：1-3 个汉字或英文单词，超过会出现折行。
- **计数徽标使用绝对定位**：父元素加 `relative inline-flex`，Badge 用 `absolute -right-1.5 -top-1.5`。
- **不要在 Badge 内嵌套交互元素**：除非用 `render` 整体渲染成 `<a>` / `<button>`，否则会破坏可访问性。

## API

### Badge

| 参数      | 说明                       | 类型                                                                          | 默认值      |
| --------- | -------------------------- | ----------------------------------------------------------------------------- | ----------- |
| variant   | 视觉变体                   | `"default" \| "secondary" \| "destructive" \| "outline" \| "ghost" \| "link"` | `"default"` |
| render    | 多态渲染（如渲染为 `<a>`） | `React.ReactElement \| ((props, state) => React.ReactElement)`                | -           |
| className | 自定义类名                 | `string`                                                                      | -           |
| children  | 徽标内容                   | `React.ReactNode`                                                             | -           |
| ...props  | 透传原生 `<span>` 属性     | `React.ComponentProps<"span">`                                                | -           |

#### badgeVariants

也可单独导出 `badgeVariants` 用于把任意元素套上 Badge 外观：

```tsx | pure
import { badgeVariants } from "lynote-ui/badge";

<a className={badgeVariants({ variant: "outline" })}>tag</a>;
```
