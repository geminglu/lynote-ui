---
category: Components
title: Collapsible 可折叠
subtitle: Collapsible 可折叠
demo:
  cols: 1
group:
  title: 展示
  order: 6
nav: 组件
toc: content
background: #111
compact: true
---

Collapsible 是一个最简的单段折叠容器，用于"显示更多 / 收起"场景。和 Accordion 不同，它只控制一段内容的显示与隐藏，没有列表语义。

## 特性

- **受控 / 非受控**：通过 `open` + `onOpenChange` 或 `defaultOpen`。
- **零样式**：组件本身不带视觉，所有外观由你掌控。
- **平滑动画**：展开时基于 height auto 测量提供流畅过渡。

## 何时使用

- "查看更多详情"、"展开历史记录"等单段折叠。
- 设置面板里把次要选项折起来。
- 列表项的二级信息按需展开。

## 何时不使用

- 多段独立的可折叠内容——使用 `Accordion`。
- 弹层内容（点击外部关闭）——使用 `Popover`。
- 全屏覆盖的对话框——使用 `Dialog` / `Sheet`。

## 导入

```ts | pure
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "lynote-ui/collapsible";
```

## 组件结构

```tsx | pure
<Collapsible>
  <CollapsibleTrigger />
  <CollapsibleContent />
</Collapsible>
```

## 代码演示

<code src="./demos/base.tsx">基本用法</code>

<code src="./demos/controlled.tsx" description="`open` + `onOpenChange` 进行受控。">受控用法</code>

<code src="./demos/settings-panel.tsx">设置面板</code>

## 最佳实践

- **trigger 自带 ARIA**：`CollapsibleTrigger` 渲染为 `<button>` 并自动维护 `aria-expanded`，无需手动设置。
- **展示部分关键信息**：折叠前展示最重要的摘要 1 行，然后用 Collapsible 收起细节。
- **配合图标做指示**：trigger 内放 `ChevronsUpDownIcon` 或上下箭头让用户预期可以展开。

## API

### Collapsible

| 参数                 | 说明                   | 类型                                                                    | 默认值  |
| -------------------- | ---------------------- | ----------------------------------------------------------------------- | ------- |
| open                 | 是否展开（受控）       | `boolean`                                                               | -       |
| defaultOpen          | 默认是否展开（非受控） | `boolean`                                                               | `false` |
| onOpenChange         | 展开状态变化回调       | `(open: boolean, eventDetails: Collapsible.ChangeEventDetails) => void` | -       |
| onOpenChangeComplete | 展开/收起动画完成回调  | `(open: boolean) => void`                                               | -       |
| disabled             | 是否禁用               | `boolean`                                                               | `false` |
| render               | 自定义渲染元素         | `React.ReactElement \| ((props, state) => React.ReactNode)`             | -       |
| className            | 自定义类名             | `string`                                                                | -       |
| children             | trigger + content      | `React.ReactNode`                                                       | -       |

### CollapsibleTrigger

可点击的展开按钮，通常通过 `render` 渲染为 `<Button>`，自动维护 `aria-expanded`。

| 参数         | 说明                               | 类型                                                        | 默认值  |
| ------------ | ---------------------------------- | ----------------------------------------------------------- | ------- |
| nativeButton | 是否强制以原生 `<button>` 挂载     | `boolean`                                                   | `true`  |
| disabled     | 是否禁用，继承自所在 `Collapsible` | `boolean`                                                   | `false` |
| render       | 自定义渲染元素（如 `<Button />`）  | `React.ReactElement \| ((props, state) => React.ReactNode)` | -       |
| className    | 自定义类名                         | `string`                                                    | -       |
| children     | 触发元素内容                       | `React.ReactNode`                                           | -       |

### CollapsibleContent

折叠内容区域，展开/收起时自动应用过渡动画。

| 参数             | 说明                                                            | 类型                                                        | 默认值  |
| ---------------- | --------------------------------------------------------------- | ----------------------------------------------------------- | ------- |
| hiddenUntilFound | 允许浏览器内置查找展开折叠的内容（使用 `hidden="until-found"`） | `boolean`                                                   | `false` |
| keepMounted      | 关闭时是否保留在 DOM                                            | `boolean`                                                   | `false` |
| render           | 自定义渲染元素                                                  | `React.ReactElement \| ((props, state) => React.ReactNode)` | -       |
| className        | 自定义类名                                                      | `string`                                                    | -       |
| children         | 折叠内容                                                        | `React.ReactNode`                                           | -       |
