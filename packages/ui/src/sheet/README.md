---
category: Components
title: Sheet 抽屉
subtitle: Sheet 抽屉
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

Sheet 从屏幕边缘滑出的覆盖式面板,用于承载临时表单、详情、过滤器等内容。基于 Base UI Dialog 原语,提供 4 个方向的滑入(top / right / bottom / left)。

## 特性

- **4 方向滑入**:`side="top" | "right" | "bottom" | "left"`,默认 `right`。
- **焦点管理**:打开自动捕获焦点,关闭后回到 trigger。
- **响应式宽度**:左右 sheet 默认 75% 宽,`sm:max-w-sm`。
- **支持滚动**:超出视口时内部可滚动。

## 何时使用

- 详情面板(从右侧滑入查看一条记录的完整信息)。
- 移动端的全屏表单 / 筛选器(从底部滑入)。
- 导航菜单(从左侧滑入)。

## 何时不使用

- 简短确认——使用 `Dialog` / `AlertDialog`。
- 鼠标悬停信息——使用 `Tooltip` / `HoverCard`。
- 内嵌的折叠区——使用 `Collapsible` / `Accordion`。

## 导入

```ts | pure
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "lynote-ui/sheet";
```

## 代码演示

<code src="./demos/base.tsx">基本用法</code>

<code src="./demos/side.tsx" description="4 个方向的滑入对比。">方向</code>

## 最佳实践

- **使用 `render` 渲染 trigger**:`<SheetTrigger render={<Button />} />`,统一外观。
- **关闭按钮放在右上角**:`SheetContent` 默认右上角带关闭按钮(`showCloseButton={false}` 可关闭)。
- **底部 sheet 限制最大高度**:`className="max-h-[80vh]"` 避免超出视口。
- **不要嵌套 Sheet**:嵌套会破坏焦点环,如必要请关闭后再打开。

## API

### Sheet

继承 Base UI `Dialog.Root` 的 props。

| 参数                 | 说明                        | 类型                                                               | 默认值  |
| -------------------- | --------------------------- | ------------------------------------------------------------------ | ------- |
| open                 | 是否打开（受控）            | `boolean`                                                          | -       |
| defaultOpen          | 默认打开（非受控）          | `boolean`                                                          | `false` |
| onOpenChange         | 打开状态变化回调            | `(open: boolean, eventDetails: Dialog.ChangeEventDetails) => void` | -       |
| onOpenChangeComplete | 打开/关闭动画完成回调       | `(open: boolean) => void`                                          | -       |
| modal                | 是否拦截焦点与背景滚动      | `boolean \| "trap-focus"`                                          | `true`  |
| dismissible          | 是否允许点击外部 / Esc 关闭 | `boolean`                                                          | `true`  |
| actionsRef           | 用于命令式控制              | `RefObject<{ unmount: () => void } \| null>`                       | -       |
| children             | trigger + content           | `React.ReactNode`                                                  | -       |

### SheetContent

| 参数            | 说明                             | 类型                                                                               | 默认值    |
| --------------- | -------------------------------- | ---------------------------------------------------------------------------------- | --------- |
| side            | 滑入方向                         | `"top" \| "right" \| "bottom" \| "left"`                                           | `"right"` |
| showCloseButton | 是否显示右上角关闭按钮           | `boolean`                                                                          | `true`    |
| initialFocus    | 打开时初始聚焦的元素             | `RefObject<HTMLElement \| null> \| ((reason) => HTMLElement \| null \| undefined)` | -         |
| finalFocus      | 关闭后聚焦回的元素               | `RefObject<HTMLElement \| null> \| ((reason) => HTMLElement \| null \| undefined)` | -         |
| render          | 自定义渲染元素                   | `React.ReactElement \| ((props, state) => React.ReactNode)`                        | -         |
| className       | 自定义类名（控制宽 / 高 / 边距） | `string`                                                                           | -         |
| children        | 内容                             | `React.ReactNode`                                                                  | -         |

### SheetTrigger

可通过 `render` 渲染为任意元素（常用 Button）。

| 参数         | 说明                           | 类型                                                        | 默认值  |
| ------------ | ------------------------------ | ----------------------------------------------------------- | ------- |
| nativeButton | 是否强制以原生 `<button>` 挂载 | `boolean`                                                   | `true`  |
| disabled     | 是否禁用                       | `boolean`                                                   | `false` |
| render       | 自定义渲染元素                 | `React.ReactElement \| ((props, state) => React.ReactNode)` | -       |
| className    | 自定义类名                     | `string`                                                    | -       |
| children     | trigger 内容                   | `React.ReactNode`                                           | -       |

### SheetClose

关闭按钮，可单独使用（如自定义关闭按钮）。

| 参数         | 说明                           | 类型                                                        | 默认值  |
| ------------ | ------------------------------ | ----------------------------------------------------------- | ------- |
| nativeButton | 是否强制以原生 `<button>` 挂载 | `boolean`                                                   | `true`  |
| disabled     | 是否禁用                       | `boolean`                                                   | `false` |
| render       | 自定义渲染元素                 | `React.ReactElement \| ((props, state) => React.ReactNode)` | -       |
| className    | 自定义类名                     | `string`                                                    | -       |
| children     | 按钮内容                       | `React.ReactNode`                                           | -       |

### SheetHeader / SheetFooter

布局容器。

| 参数      | 说明              | 类型                          | 默认值 |
| --------- | ----------------- | ----------------------------- | ------ |
| className | 自定义类名        | `string`                      | -      |
| children  | 子节点            | `React.ReactNode`             | -      |
| ...props  | 原生 `<div>` 属性 | `React.ComponentProps<"div">` | -      |

### SheetTitle

标题，自动绑定 `aria-labelledby`。

| 参数      | 说明           | 类型                                                        | 默认值 |
| --------- | -------------- | ----------------------------------------------------------- | ------ |
| render    | 自定义渲染元素 | `React.ReactElement \| ((props, state) => React.ReactNode)` | -      |
| className | 自定义类名     | `string`                                                    | -      |
| children  | 标题内容       | `React.ReactNode`                                           | -      |

### SheetDescription

描述，自动绑定 `aria-describedby`。

| 参数      | 说明           | 类型                                                        | 默认值 |
| --------- | -------------- | ----------------------------------------------------------- | ------ |
| render    | 自定义渲染元素 | `React.ReactElement \| ((props, state) => React.ReactNode)` | -      |
| className | 自定义类名     | `string`                                                    | -      |
| children  | 描述内容       | `React.ReactNode`                                           | -      |
