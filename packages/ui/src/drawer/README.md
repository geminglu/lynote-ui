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

## 最佳实践

- **优先用于移动端**:桌面端推荐 `Sheet`,体验更轻盈;只有需要手势体验时再用 Drawer。
- **底部 Drawer 限制高度**:vaul 默认带 `max-h-[80vh]`,避免遮住整屏。
- **保留 grabber**:底部 Drawer 顶部的灰色横条是 vaul 自带的视觉提示,不要 hidden。
- **支持手势关闭**:不要禁用 `dismissible`,保留下滑关闭的可发现性。

## API

### Drawer

继承 vaul 的所有 props。常用项:

| 参数                  | 说明                                | 类型                                     | 默认值     |
| --------------------- | ----------------------------------- | ---------------------------------------- | ---------- |
| open                  | 是否打开(受控)                      | `boolean`                                | -          |
| defaultOpen           | 默认打开                            | `boolean`                                | `false`    |
| onOpenChange          | 打开状态变化回调                    | `(open: boolean) => void`                | -          |
| direction             | 方向                                | `"top" \| "right" \| "bottom" \| "left"` | `"bottom"` |
| dismissible           | 是否可手势关闭                      | `boolean`                                | `true`     |
| shouldScaleBackground | 嵌套时是否缩放父容器(iOS-like 效果) | `boolean`                                | `false`    |

### DrawerTrigger / DrawerClose

vaul 的 Slot 模式: `asChild` 把样式 / 行为合并到 children 上。

```tsx | pure
<DrawerTrigger asChild>
  <Button>打开</Button>
</DrawerTrigger>
```

### DrawerContent / DrawerHeader / DrawerFooter / DrawerTitle / DrawerDescription

结构化的容器组件,与 Sheet 用法一致。
