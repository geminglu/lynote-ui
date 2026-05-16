---
category: Components
title: Tooltip 工具提示
subtitle: Tooltip 工具提示
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

Tooltip 在用户悬停或聚焦元素时展示简短说明，常用于解释图标按钮的含义、提供快捷键提示或补充信息。

## 特性

- **基于 Base UI Tooltip 原语**：自动处理键盘焦点（聚焦时也会展开）、定位计算与多 tooltip 协作。
- **支持 6 种弹出方向**：`top` / `bottom` / `left` / `right` 以及 RTL 友好的 `inline-start` / `inline-end`。
- **可配置延迟**：通过 `TooltipProvider` 统一控制延迟时间，或在单个 `TooltipTrigger` 上覆盖。
- **自动 Portal 渲染**：避免被父级 `overflow:hidden` 截断。

## 何时使用

- 解释图标按钮（如复制、收藏、新建分支）的含义。
- 展示快捷键提示。
- 为禁用按钮提供"为什么不可点击"的额外说明。

## 何时不使用

- 移动端 / 触摸设备——hover 语义不可靠，请考虑 `Popover` 或就近显示文字。
- 关键信息——Tooltip 默认延迟出现，不能承载必读信息。
- 包含可交互内容（链接、按钮、表单）——使用 `Popover` 或 `HoverCard`。

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
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "lynote-ui/tooltip";
```

```ts [整体] | pure
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "lynote-ui";
```

:::

## 组件结构

```tsx | pure
<TooltipProvider>
  <Tooltip>
    <TooltipTrigger render={<Button />} />
    <TooltipContent>提示文字</TooltipContent>
  </Tooltip>
</TooltipProvider>
```

## 代码演示

<code src="./demos/base.tsx">基本用法</code>

<code src="./demos/placement.tsx" description="通过 `TooltipContent` 的 `side` 属性控制弹出方向。">弹出方向</code>

<code src="./demos/delay.tsx" description="通过 `TooltipProvider` 的 `delay` 统一控制延迟；单个 trigger 可使用 `delay` 覆盖。">延迟控制</code>

<code src="./demos/on-icon-button.tsx" description="图标按钮 + Tooltip 是最常见的组合。务必给按钮设置 `aria-label`。">图标按钮的 Tooltip</code>

<code src="./demos/with-kbd.tsx" description="将快捷键放进 tooltip，配合 `<Kbd>` 组件。">附带快捷键</code>

<code src="./demos/on-disabled.tsx" description="禁用元素不会触发指针事件，因此用一个聚焦/可悬停的 span 包裹后再交给 Tooltip。">禁用元素的 Tooltip</code>

## 最佳实践

- **顶层包一个 `TooltipProvider`**：建议在应用根组件挂一个 Provider 统一控制延迟，避免每个 tooltip 都自己配置。
- **延迟时间 200-500ms 最佳**：过短会误触，过长会让 tooltip 出现得突兀。设置面板等高频区可降低到 0。
- **内容简短**：tooltip 一般控制在 1 行（最多 2 行），需要长说明请改用 `Popover` 或 `HoverCard`。
- **避免在 tooltip 内放交互元素**：链接、按钮、输入框无法在 tooltip 内被可靠点击，请改用 Popover。
- **禁用按钮的 Tooltip 需要包裹层**：被 `disabled` 的元素不触发 hover/focus 事件，使用 `<span tabIndex={0}>` 包裹后再交给 trigger。

## 无障碍与键盘交互

- `TooltipTrigger` 默认会在 `focus` 时也展开 tooltip，不仅限于 hover。
- `TooltipContent` 自动获得 `role="tooltip"` 与 `id` 关联，读屏器会朗读 tooltip 内容。
- 按 `Esc` 可关闭当前 tooltip。

| 按键  | 行为                     |
| ----- | ------------------------ |
| `Tab` | 聚焦到 trigger，自动展开 |
| `Esc` | 关闭当前 tooltip         |

## API

### TooltipProvider

为子树内的所有 Tooltip 提供共享的延迟、单一开启等行为。

| 参数  | 说明                   | 类型     | 默认值 |
| ----- | ---------------------- | -------- | ------ |
| delay | 默认的展开延迟（毫秒） | `number` | `0`    |

### Tooltip

| 参数         | 说明                                | 类型                      | 默认值 |
| ------------ | ----------------------------------- | ------------------------- | ------ |
| open         | 是否展开（受控）                    | `boolean`                 | -      |
| defaultOpen  | 默认展开（非受控）                  | `boolean`                 | -      |
| onOpenChange | 展开状态变化回调                    | `(open: boolean) => void` | -      |
| children     | `TooltipTrigger` + `TooltipContent` | `React.ReactNode`         | -      |

### TooltipTrigger

| 参数         | 说明                                                | 类型                 | 默认值  |
| ------------ | --------------------------------------------------- | -------------------- | ------- |
| render       | 多态渲染，常用于把 trigger 渲染成 Button 等组件     | `React.ReactElement` | -       |
| delay        | 单个 trigger 的展开延迟（毫秒），覆盖 Provider 配置 | `number`             | -       |
| closeDelay   | 单个 trigger 的关闭延迟（毫秒）                     | `number`             | -       |
| disabled     | 禁用 tooltip 触发（不影响 trigger 本身的可点击性）  | `boolean`            | `false` |
| closeOnClick | 点击 trigger 后是否关闭 tooltip                     | `boolean`            | `true`  |
| children     | trigger 内容                                        | `React.ReactNode`    | -       |

### TooltipContent

| 参数        | 说明           | 类型                                                                       | 默认值     |
| ----------- | -------------- | -------------------------------------------------------------------------- | ---------- |
| side        | 弹出方向       | `"top" \| "bottom" \| "left" \| "right" \| "inline-start" \| "inline-end"` | `"top"`    |
| align       | 对齐方式       | `"start" \| "center" \| "end"`                                             | `"center"` |
| sideOffset  | 与锚点的间距   | `number`                                                                   | `4`        |
| alignOffset | 对齐方向偏移量 | `number`                                                                   | `0`        |
| className   | 自定义类名     | `string`                                                                   | -          |
| children    | 提示内容       | `React.ReactNode`                                                          | -          |
