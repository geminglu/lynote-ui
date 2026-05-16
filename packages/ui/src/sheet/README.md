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

| 参数         | 说明             | 类型                      | 默认值  |
| ------------ | ---------------- | ------------------------- | ------- |
| open         | 是否打开(受控)   | `boolean`                 | -       |
| defaultOpen  | 默认打开(非受控) | `boolean`                 | `false` |
| onOpenChange | 打开状态变化回调 | `(open: boolean) => void` | -       |
| modal        | 是否锁定背景滚动 | `boolean`                 | `true`  |

### SheetContent

| 参数            | 说明                           | 类型                                     | 默认值    |
| --------------- | ------------------------------ | ---------------------------------------- | --------- |
| side            | 滑入方向                       | `"top" \| "right" \| "bottom" \| "left"` | `"right"` |
| showCloseButton | 是否显示右上角关闭按钮         | `boolean`                                | `true`    |
| className       | 自定义类名(控制宽 / 高 / 边距) | `string`                                 | -         |
| children        | 内容                           | `React.ReactNode`                        | -         |

### SheetTrigger / SheetClose

可通过 `render` 渲染为任意元素(常用 Button)。

### SheetHeader / SheetFooter / SheetTitle / SheetDescription

结构化的标题区与底部操作区,标题与描述会自动注册到 ARIA。
