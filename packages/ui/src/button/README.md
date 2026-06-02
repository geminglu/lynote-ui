---
category: Components
title: Button 按钮
subtitle: Button 按钮
demo:
  cols: 1
group:
  title: 通用
  order: 1
nav: 组件
toc: content
background: #111
compact: true
---

按钮触发一个操作或事件，通常用于表单提交、对话框确认、动作执行等场景。它是产品中使用频次最高的基础控件，承担着引导用户进行下一步操作的核心职责。

## 特性

- **6 种视觉变体**：`default` / `outline` / `secondary` / `ghost` / `destructive` / `link`，覆盖常见的视觉强度需求。
- **4 种尺寸 + 图标模式**：`xs` / `sm` / `default` / `lg` 四档尺寸，配合 `icon` 属性可切换为等宽高的纯图标按钮。
- **多态渲染**：通过 `render` prop 可将按钮渲染为 `<a>` 或任意自定义元素，保留按钮的样式与交互。
- **图标槽位**：在内部 `<svg>` 上设置 `data-icon="inline-start"` 或 `data-icon="inline-end"`，组件会自动调整内边距与对齐。
- **键盘与无障碍**：基于 Base UI 的 Button 原语，自动处理焦点环、`disabled` 行为以及与 Tooltip / DropdownMenu 等控件的组合语义。

## 何时使用

- 需要触发一个明确的动作（提交表单、打开弹窗、删除资源等）。
- 需要在视觉上对动作进行轻重分级（主操作 / 次操作 / 危险操作）。
- 需要呈现一组紧密关联的动作（配合 `ButtonGroup`）。

## 何时不使用

- 仅是页面间导航——优先使用语义化的 `<a>` 链接（或本组件的 `link` 变体配合 `render={<a/>}`）。
- 需要展示双态切换状态（开/关、选中/未选中）——使用 `Toggle` 或 `Switch`。
- 一组互斥选项——使用 `ToggleGroup` 或 `RadioGroup`。

## 安装

:::code-group

```bash [npm]
npm install lynote-ui
```

```bash [yarn]
yarn add lynote-ui
```

```bash [pnpm]
pnpm add lynote-ui
```

:::

## 导入

:::code-group

```ts [按需] | pure
import { Button } from "lynote-ui/button";
```

```ts [整体] | pure
import { Button } from "lynote-ui";
```

:::

## 组件结构

```tsx | pure
<Button variant="default" size="default">
  按钮文本
</Button>
```

## 代码演示

<code src="./demos/base.tsx">基本用法</code>

<code src="./demos/variant.tsx">变体</code>

<code src="./demos/size.tsx">尺寸</code>

<code src="./demos/radius.tsx">圆角</code>

<code src="./demos/with-icon.tsx">带图标</code>

<code src="./demos/loading.tsx">加载状态</code>

<code src="./demos/disabled.tsx">禁用状态</code>

<code src="./demos/as-link.tsx">渲染为链接</code>

<code src="./demos/with-tooltip.tsx">配合 Tooltip</code>

<code src="./demos/with-group.tsx">配合 ButtonGroup</code>

<code src="./demos/login-form.tsx">业务场景：登录表单</code>

## 最佳实践

- **一屏只有一个主按钮**：同一视野中只放一个 `variant="default"` 主按钮，避免视觉重心被分散。次操作用 `outline` 或 `secondary`，第三层级用 `ghost`。
- **删除/不可逆操作用 destructive**：仅在二次确认（如对话框内的确认按钮）或显著操作（如列表行的删除按钮）使用。
- **图标按钮务必带 aria-label**：当使用 `icon` 属性时，按钮内只有图标无文本，必须显式提供 `aria-label` 描述其语义。
- **加载状态保持宽度稳定**：在 loading 时，建议同时替换图标为 `<Spinner />` 并保留文本（如 `"提交"` → `"提交中..."`），避免按钮抖动。
- **图标位置约定**：左侧图标使用 `data-icon="inline-start"`，右侧使用 `data-icon="inline-end"`，组件会自动调整 padding。
- **不要嵌套交互元素**：按钮内部不要再放置 `<a>` 或其他 `<button>`，会破坏可访问性。需要让按钮跳转链接时，请使用 `render={<a />}`。

## 无障碍与键盘交互

- 默认渲染为 `<button>`，自动获得 `role=button` 与键盘可达性。
- `disabled` 状态下，按钮不可聚焦也不可点击（基于 Base UI 处理，避免读屏器朗读为"未禁用"）。
- `aria-invalid` 状态会触发 `destructive` 风格的错误环，可用于表单字段校验失败的提交按钮。
- 通过 `render` 渲染为 `<a>` 时，会自动保留可见焦点环；建议同时提供 `href` 与必要的 `rel` 属性。

| 按键              | 行为                      |
| ----------------- | ------------------------- |
| `Enter` / `Space` | 触发按钮的 `onClick` 回调 |
| `Tab`             | 移动到下一个可聚焦元素    |
| `Shift + Tab`     | 移动到上一个可聚焦元素    |

## API

### Button

| 参数         | 说明                                                                                           | 类型                                                                          | 默认值      |
| ------------ | ---------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------- | ----------- |
| variant      | 视觉变体，决定按钮的视觉强度                                                                   | `"default" \| "outline" \| "secondary" \| "ghost" \| "destructive" \| "link"` | `"default"` |
| size         | 按钮尺寸                                                                                       | `"default" \| "xs" \| "sm" \| "lg"`                                           | `"default"` |
| icon         | 是否为纯图标按钮，设为 `true` 后按钮变为正方形（等宽等高），去掉内边距                         | `boolean`                                                                     | `false`     |
| radius       | 圆角覆盖，`none` 无圆角（直角），`full` 全圆角（胶囊形），不传则保持默认圆角                   | `"none" \| "full"`                                                            | -           |
| type         | 原生 button 类型，表单内默认会触发提交，避免误触请显式声明                                     | `"button" \| "submit" \| "reset"`                                             | `"button"`  |
| disabled     | 是否禁用                                                                                       | `boolean`                                                                     | `false`     |
| render       | 自定义渲染元素（基于 Base UI 的多态机制），用于把按钮渲染为 `<a>` 或其他组件                   | `React.ReactElement \| ((props, state) => React.ReactNode)`                   | -           |
| nativeButton | 是否强制以原生 `<button>` 元素挂载（与非按钮元素 `render` 配合时控制）                         | `boolean`                                                                     | `true`      |
| className    | 自定义类名，会与默认样式合并                                                                   | `string`                                                                      | -           |
| children     | 按钮内容，可同时包含图标与文本                                                                 | `React.ReactNode`                                                             | -           |
| onClick      | 点击回调                                                                                       | `React.MouseEventHandler<HTMLButtonElement>`                                  | -           |
| ...props     | 透传 `@base-ui/react` Button 与原生 `<button>` 的剩余属性（如 `form`、`name`、`autoFocus` 等） | `ButtonPrimitive.Props`                                                       | -           |

#### 子元素约定

| 属性                       | 位置         | 说明                                 |
| -------------------------- | ------------ | ------------------------------------ |
| `data-icon="inline-start"` | 子级 `<svg>` | 标记图标在文本前，自动调整左侧内边距 |
| `data-icon="inline-end"`   | 子级 `<svg>` | 标记图标在文本后，自动调整右侧内边距 |
| `aria-label`               | 根元素       | 纯图标按钮（`icon`）必须提供         |
| `aria-expanded`            | 根元素       | 与下拉/弹层组合时会激活高亮态        |
| `aria-invalid`             | 根元素       | 校验失败状态，触发红色环             |

#### buttonVariants

可单独导出 `buttonVariants`，方便在不直接使用 `<Button>` 时复用相同的样式（例如把 `<a>` 包装成按钮外观）：

```tsx | pure
import { buttonVariants } from "lynote-ui/button";

<a className={buttonVariants({ variant: "outline", size: "sm" })} href="/docs">
  查看文档
</a>;
```
