---
category: Components
title: Popover 弹出层
subtitle: Popover 弹出层
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

Popover 在 trigger 元素旁边弹出一个可交互的浮层,与 Tooltip 不同的是它可以承载复杂的可交互内容(按钮、表单、列表)。基于 Base UI Popover 原语,自动处理定位、键盘焦点、点击外部关闭。

## 特性

- **可交互内容**:可包含按钮、链接、输入框,焦点不会自动关闭。
- **自动 Portal**:避免被父级 `overflow:hidden` 截断。
- **完整键盘可达**:`Tab` 可进入内容,`Esc` 关闭。
- **支持锚点偏移**:`side` / `align` / `sideOffset` / `alignOffset`。
- **`PopoverHeader` / `PopoverTitle` / `PopoverDescription`**:用于结构化的弹出内容。

## 何时使用

- 提供一组临时操作或快捷设置(色板、过滤器、用户菜单)。
- 表单字段旁的辅助选项(日期选择、颜色选择)。
- 帮助 / 提示卡片(包含链接、按钮)。

## 何时不使用

- 仅展示静态说明文字——用 `Tooltip`。
- 模态对话框——用 `Dialog`。
- 鼠标悬停的预览卡片——用 `HoverCard`。
- 命令搜索 / 列表——用 `Command`。

## 导入

```ts | pure
import {
  Popover,
  PopoverContent,
  PopoverDescription,
  PopoverHeader,
  PopoverTitle,
  PopoverTrigger,
} from "lynote-ui/popover";
```

## 组件结构

```tsx | pure
<Popover>
  <PopoverTrigger />
  <PopoverContent>
    <PopoverHeader>
      <PopoverTitle />
      <PopoverDescription />
    </PopoverHeader>
    {/* 内容 */}
  </PopoverContent>
</Popover>
```

## 代码演示

<code src="./demos/base.tsx">基本用法</code>

<code src="./demos/controlled.tsx">受控用法</code>

<code src="./demos/align.tsx" description="通过 `side` / `align` 调整弹层方向与对齐。">弹层位置</code>

<code src="./demos/withForm.tsx" description="承载一段表单,适合快速调整字段、过滤参数。">表单弹层</code>

## 最佳实践

- **使用 `render={<Button />}`**:把 trigger 渲染成 Button,而不是用 div + 手动样式。
- **设置合理宽度**:`PopoverContent` 默认 `w-72`,内容多时通过 `className` 调整。
- **键盘焦点要返回**:base-ui 已经处理好关闭时焦点回到 trigger,无需自定义。
- **避免嵌套 Popover**:嵌套会破坏点击外部关闭语义。

## API

### Popover

| 参数                 | 说明                       | 类型                                                                | 默认值  |
| -------------------- | -------------------------- | ------------------------------------------------------------------- | ------- |
| open                 | 是否打开（受控）           | `boolean`                                                           | -       |
| defaultOpen          | 默认打开（非受控）         | `boolean`                                                           | `false` |
| onOpenChange         | 打开状态变化回调           | `(open: boolean, eventDetails: Popover.ChangeEventDetails) => void` | -       |
| onOpenChangeComplete | 打开/关闭动画完成回调      | `(open: boolean) => void`                                           | -       |
| modal                | 是否拦截焦点与背景滚动     | `boolean`                                                           | `false` |
| openOnHover          | 悬停打开                   | `boolean`                                                           | `false` |
| delay                | 悬停打开的延时（毫秒）     | `number`                                                            | `300`   |
| closeDelay           | 鼠标移开的关闭延时（毫秒） | `number`                                                            | `0`     |
| actionsRef           | 用于命令式控制打开/关闭    | `RefObject<{ unmount: () => void } \| null>`                        | -       |
| children             | trigger + content          | `React.ReactNode`                                                   | -       |

### PopoverTrigger

| 参数         | 说明                            | 类型                                                        | 默认值  |
| ------------ | ------------------------------- | ----------------------------------------------------------- | ------- |
| nativeButton | 是否强制以原生 `<button>` 挂载  | `boolean`                                                   | `true`  |
| disabled     | 是否禁用                        | `boolean`                                                   | `false` |
| render       | 多态渲染（常用于渲染成 Button） | `React.ReactElement \| ((props, state) => React.ReactNode)` | -       |
| className    | 自定义类名                      | `string`                                                    | -       |
| children     | trigger 内容                    | `React.ReactNode`                                           | -       |
| onClick      | 点击回调                        | `React.MouseEventHandler`                                   | -       |

### PopoverContent

| 参数         | 说明                 | 类型                                                                               | 默认值     |
| ------------ | -------------------- | ---------------------------------------------------------------------------------- | ---------- |
| side         | 弹层方向             | `"top" \| "bottom" \| "left" \| "right" \| "inline-start" \| "inline-end"`         | `"bottom"` |
| align        | 对齐方式             | `"start" \| "center" \| "end"`                                                     | `"center"` |
| sideOffset   | 与锚点的间距         | `number`                                                                           | `4`        |
| alignOffset  | 对齐偏移量           | `number`                                                                           | `0`        |
| initialFocus | 打开时初始聚焦的元素 | `RefObject<HTMLElement \| null> \| ((reason) => HTMLElement \| null \| undefined)` | -          |
| finalFocus   | 关闭后聚焦回的元素   | `RefObject<HTMLElement \| null> \| ((reason) => HTMLElement \| null \| undefined)` | -          |
| render       | 自定义渲染元素       | `React.ReactElement \| ((props, state) => React.ReactNode)`                        | -          |
| className    | 自定义类名           | `string`                                                                           | -          |
| children     | 弹层内容             | `React.ReactNode`                                                                  | -          |

### PopoverHeader

容器组件，分行布局标题与描述。

| 参数      | 说明                                  | 类型                          | 默认值 |
| --------- | ------------------------------------- | ----------------------------- | ------ |
| className | 自定义类名                            | `string`                      | -      |
| children  | `PopoverTitle` / `PopoverDescription` | `React.ReactNode`             | -      |
| ...props  | 原生 `<div>` 属性                     | `React.ComponentProps<"div">` | -      |

### PopoverTitle

自动绑定 `aria-labelledby`。

| 参数      | 说明           | 类型                                                        | 默认值 |
| --------- | -------------- | ----------------------------------------------------------- | ------ |
| render    | 自定义渲染元素 | `React.ReactElement \| ((props, state) => React.ReactNode)` | -      |
| className | 自定义类名     | `string`                                                    | -      |
| children  | 标题内容       | `React.ReactNode`                                           | -      |

### PopoverDescription

自动绑定 `aria-describedby`。

| 参数      | 说明           | 类型                                                        | 默认值 |
| --------- | -------------- | ----------------------------------------------------------- | ------ |
| render    | 自定义渲染元素 | `React.ReactElement \| ((props, state) => React.ReactNode)` | -      |
| className | 自定义类名     | `string`                                                    | -      |
| children  | 描述内容       | `React.ReactNode`                                           | -      |
