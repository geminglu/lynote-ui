---
category: Components
title: Drawer 抽屉
subtitle: Drawer 抽屉
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

Drawer 基于 [vaul](https://vaul.emilkowal.ski/) 实现的移动端友好的底部抽屉,具有手势驱动的 momentum 与 spring 回弹,在移动端能取代传统的 Modal。桌面端表现与 Sheet 类似。

## 特性

- **手势驱动**:支持下滑关闭、阻尼回弹,移动端体验贴近原生 App。
- **4 个方向**:`direction="top" | "right" | "bottom" | "left"`。
- **底部 Drawer 自带 grabber**:顶部有一根灰色"小把手"提示用户可拖拽。
- **嵌套支持**:vaul 原生支持嵌套 Drawer(`shouldScaleBackground`)。

## 何时使用

- 移动端打开表单 / 详情 / 列表(替代 Modal)。
- 需要手势关闭的覆盖面板。
- 移动端的 Bottom Sheet 设计模式。

## 何时不使用

- 桌面端的覆盖面板——`Sheet` 更轻量。
- 必须 100% 锁定背景滚动——`Dialog` 更可靠。
- 纯通知 / 反馈——使用 `Sonner`。

## 导入

```ts | pure
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "lynote-ui/drawer";
```

## 代码演示

<code src="./demos/base.tsx">基本用法</code>

<code src="./demos/direction.tsx" description="通过 `direction` 控制抽屉从顶部、右侧、底部或左侧进入。">不同方向</code>

<code src="./demos/controlled.tsx" description="使用 `open` 和 `onOpenChange` 控制抽屉打开状态。">受控状态</code>

<code src="./demos/responsive-dialog.tsx" description="响应式对话框。">响应式对话框</code>

## 最佳实践

- **优先用于移动端**:桌面端推荐 `Sheet`,体验更轻盈;只有需要手势体验时再用 Drawer。
- **底部 Drawer 限制高度**:vaul 默认带 `max-h-[80vh]`,避免遮住整屏。
- **保留 grabber**:底部 Drawer 顶部的灰色横条是 vaul 自带的视觉提示,不要 hidden。
- **支持手势关闭**:不要禁用 `dismissible`,保留下滑关闭的可发现性。

## API

### Drawer

继承 vaul 的所有 props。常用项:

| 参数                     | 说明                                  | 类型                                            | 默认值     |
| ------------------------ | ------------------------------------- | ----------------------------------------------- | ---------- |
| open                     | 是否打开（受控）                      | `boolean`                                       | -          |
| defaultOpen              | 默认是否打开（非受控）                | `boolean`                                       | `false`    |
| onOpenChange             | 打开状态变化回调                      | `(open: boolean) => void`                       | -          |
| direction                | 方向                                  | `"top" \| "right" \| "bottom" \| "left"`        | `"bottom"` |
| dismissible              | 是否可手势关闭                        | `boolean`                                       | `true`     |
| modal                    | 是否拦截焦点与背景滚动                | `boolean`                                       | `true`     |
| shouldScaleBackground    | 嵌套时是否缩放父容器（iOS-like 效果） | `boolean`                                       | `false`    |
| snapPoints               | 抽屉的吸附点列表                      | `Array<number \| string>`                       | -          |
| activeSnapPoint          | 当前激活的吸附点（受控）              | `number \| string \| null`                      | -          |
| setActiveSnapPoint       | 设置激活吸附点                        | `(snapPoint: number \| string \| null) => void` | -          |
| fadeFromIndex            | 从哪个 snapPoint 开始让 overlay 淡入  | `number`                                        | -          |
| scrollLockTimeout        | 滚动锁定的延时（毫秒）                | `number`                                        | `100`      |
| closeThreshold           | 关闭阈值（0~1）                       | `number`                                        | `0.25`     |
| preventScrollRestoration | 关闭时是否阻止 scroll 还原            | `boolean`                                       | `false`    |
| handleOnly               | 是否仅允许拖拽 handle                 | `boolean`                                       | `false`    |
| nested                   | 是否为嵌套抽屉                        | `boolean`                                       | `false`    |
| repositionInputs         | 输入框聚焦时是否自动重新定位          | `boolean`                                       | `true`     |
| onAnimationEnd           | 动画完成回调                          | `(open: boolean) => void`                       | -          |
| container                | 自定义 Portal 容器                    | `HTMLElement \| null`                           | -          |
| children                 | 子组件                                | `React.ReactNode`                               | -          |

### DrawerTrigger

vaul 的 Slot 模式，`asChild` 把样式 / 行为合并到 children 上。

| 参数      | 说明                     | 类型                                            | 默认值  |
| --------- | ------------------------ | ----------------------------------------------- | ------- |
| asChild   | 是否将属性合并到子元素   | `boolean`                                       | `false` |
| className | 自定义类名               | `string`                                        | -       |
| children  | 触发元素内容             | `React.ReactNode`                               | -       |
| ...props  | 透传原生 `<button>` 属性 | `React.ButtonHTMLAttributes<HTMLButtonElement>` | -       |

### DrawerClose

关闭按钮，同样支持 `asChild`。

| 参数      | 说明                   | 类型              | 默认值  |
| --------- | ---------------------- | ----------------- | ------- |
| asChild   | 是否将属性合并到子元素 | `boolean`         | `false` |
| className | 自定义类名             | `string`          | -       |
| children  | 按钮内容               | `React.ReactNode` | -       |

### DrawerContent

抽屉主体。底部方向下会自动渲染 grabber（顶部的灰色横条）。

| 参数                 | 说明                                                       | 类型                             | 默认值 |
| -------------------- | ---------------------------------------------------------- | -------------------------------- | ------ |
| className            | 自定义类名                                                 | `string`                         | -      |
| children             | 抽屉内容                                                   | `React.ReactNode`                | -      |
| onPointerDownOutside | 点击外部时回调（可在此 `event.preventDefault()` 取消关闭） | `(event: PointerEvent) => void`  | -      |
| onEscapeKeyDown      | 按下 Esc 时回调                                            | `(event: KeyboardEvent) => void` | -      |
| onInteractOutside    | 任何外部交互时回调                                         | `(event: Event) => void`         | -      |

### DrawerHeader / DrawerFooter

布局容器，`<div>` 的样式包装。

| 参数      | 说明              | 类型                          | 默认值 |
| --------- | ----------------- | ----------------------------- | ------ |
| className | 自定义类名        | `string`                      | -      |
| children  | 子节点            | `React.ReactNode`             | -      |
| ...props  | 原生 `<div>` 属性 | `React.ComponentProps<"div">` | -      |

### DrawerTitle

抽屉标题，自动关联 `aria-labelledby`。

| 参数      | 说明             | 类型              | 默认值  |
| --------- | ---------------- | ----------------- | ------- |
| asChild   | 是否合并到子元素 | `boolean`         | `false` |
| className | 自定义类名       | `string`          | -       |
| children  | 标题内容         | `React.ReactNode` | -       |

### DrawerDescription

抽屉描述，自动关联 `aria-describedby`。

| 参数      | 说明             | 类型              | 默认值  |
| --------- | ---------------- | ----------------- | ------- |
| asChild   | 是否合并到子元素 | `boolean`         | `false` |
| className | 自定义类名       | `string`          | -       |
| children  | 描述内容         | `React.ReactNode` | -       |

### DrawerOverlay / DrawerPortal

`DrawerContent` 已内部组合，一般无需手动使用。`DrawerOverlay` 是遮罩层，`DrawerPortal` 用于将内容渲染到 body。
