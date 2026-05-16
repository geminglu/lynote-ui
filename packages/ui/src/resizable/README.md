---
category: Components
title: Resizable 可调整大小
subtitle: Resizable 可调整大小
demo:
  cols: 1
group:
  title: 布局
  order: 3
nav: 组件
toc: content
background: #111
compact: true
---

Resizable 用于把页面拆分成多个可拖拽调整大小的面板,典型场景是 IDE / 邮件客户端的多栏布局。基于 [react-resizable-panels](https://github.com/bvaughn/react-resizable-panels) 实现。

## 特性

- **水平 / 垂直方向**:`orientation="horizontal" | "vertical"`(默认 `"horizontal"`)。
- **可嵌套**:在 Panel 内继续放 PanelGroup 实现多层网格。
- **支持最小 / 最大尺寸**:`minSize` / `maxSize` 限制拖拽范围。
- **可视化把手**:`<ResizableHandle withHandle />` 在分隔条上显示一个把手。
- **可持久化**:`autoSaveId` 把布局存到 localStorage。

## 何时使用

- IDE / 代码编辑器风格的左右分栏。
- 邮件客户端的"邮件列表 + 邮件内容"布局。
- 数据可视化工作台。

## 何时不使用

- 简单的左右布局——使用 Tailwind grid / flex 即可。
- 移动端——拖拽手势在小屏上体验差。
- 临时弹层——使用 `Sheet` / `Drawer`。

## 导入

```ts | pure
import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "lynote-ui/resizable";
```

## 代码演示

<code src="./demos/base.tsx">基本用法</code>

<code src="./demos/vertical.tsx" description="垂直方向拆分,需要父容器有高度。">垂直方向</code>

<code src="./demos/three-panels.tsx" description="嵌套 PanelGroup 实现三栏 + 内嵌行布局。">嵌套面板</code>

## 最佳实践

- **`withHandle` 提升可发现性**:默认 handle 只有 1px,加 `withHandle` 显示一个明显的把手。
- **设置 `minSize`**:防止用户拖到不可用的极小尺寸。
- **嵌套有边界**:超过 3 层嵌套面板会让用户难以理解布局。
- **持久化布局**:用 `autoSaveId` 让用户的布局选择保留到下次访问。

## API

### ResizablePanelGroup

| 参数        | 说明                        | 类型                         | 默认值         |
| ----------- | --------------------------- | ---------------------------- | -------------- |
| orientation | 排列方向                    | `"horizontal" \| "vertical"` | `"horizontal"` |
| autoSaveId  | 保存布局的 localStorage key | `string`                     | -              |
| className   | 自定义类名                  | `string`                     | -              |

### ResizablePanel

| 参数        | 说明                   | 类型     | 默认值 |
| ----------- | ---------------------- | -------- | ------ |
| defaultSize | 默认大小(0-100 百分比) | `number` | -      |
| minSize     | 最小百分比             | `number` | -      |
| maxSize     | 最大百分比             | `number` | -      |
| id          | 持久化 id              | `string` | -      |

### ResizableHandle

| 参数       | 说明         | 类型      | 默认值  |
| ---------- | ------------ | --------- | ------- |
| withHandle | 是否显示把手 | `boolean` | `false` |
| className  | 自定义类名   | `string`  | -       |
