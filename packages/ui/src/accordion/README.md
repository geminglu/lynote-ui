---
category: Components
title: Accordion 手风琴
subtitle: Accordion 手风琴
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

Accordion 把一组内容折叠成可展开/收起的列表，适合 FAQ、设置面板分组、长说明分段。基于 Base UI Accordion 原语，原生支持键盘导航与 ARIA 语义。

## 特性

- **单 / 多展开**：通过 value 传单字符串或字符串数组控制。
- **受控 / 非受控**：`value` + `onValueChange` 或 `defaultValue`。
- **键盘可达**：方向键移动、`Home/End` 跳首尾、`Enter/Space` 切换。
- **平滑动画**：展开/收起带有 `--accordion-panel-height` 驱动的高度动画。

## 何时使用

- 常见问题 (FAQ) 列表。
- 设置 / 个人中心的分组项（账户安全、付款方式等）。
- 一段冗长的内容希望默认折叠。

## 何时不使用

- 仅 2-3 个互斥视图——用 `Tabs` 更清晰。
- 需要选择 / 输入——用 `Select`、`RadioGroup` 等表单控件。
- 简单的"显示更多 / 收起"按钮——使用 `Collapsible`。

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

```ts | pure
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "lynote-ui/accordion";
```

## 组件结构

```tsx | pure
<Accordion>
  <AccordionItem value="...">
    <AccordionTrigger />
    <AccordionContent />
  </AccordionItem>
</Accordion>
```

## 代码演示

<code src="./demos/base.tsx">基本用法</code>

<code src="./demos/multiple.tsx" description="数组形式 value 可同时展开多项。">多值展开</code>

<code src="./demos/controlled.tsx" description="`value` + `onValueChange` 进行受控。">受控用法</code>

<code src="./demos/with-icon.tsx" description="trigger 内部可放图标 + 文本，组件会保留默认的箭头指示器。">带图标</code>

## 最佳实践

- **标题简短**：trigger 一句话能说明白，复杂内容放到 content。
- **默认展开关键项**：在重要的 FAQ 或必读条款上使用 `defaultValue`。
- **多展开慎用**：默认单展开能保持视觉聚焦；多展开适合内容彼此独立的场景。
- **不要嵌套 Accordion**：嵌套会让用户难以辨认层级，请改用 Tabs + Accordion 组合。

## 无障碍与键盘交互

- `AccordionTrigger` 渲染为 `<button>` 并自动维护 `aria-expanded` / `aria-controls`。
- `AccordionContent` 渲染为 `role="region"`，关闭时设置 `hidden`。

| 按键              | 行为              |
| ----------------- | ----------------- |
| `Enter` / `Space` | 切换当前项展开    |
| `↑` / `↓`         | 上一项 / 下一项   |
| `Home` / `End`    | 跳到第一/最后一项 |

## API

### Accordion

| 参数             | 说明                                                          | 类型                                                                 | 默认值       |
| ---------------- | ------------------------------------------------------------- | -------------------------------------------------------------------- | ------------ |
| value            | 当前展开项（受控），值为 `AccordionItem` 的 `value` 数组      | `any[]`                                                              | -            |
| defaultValue     | 默认展开项（非受控）                                          | `any[]`                                                              | -            |
| onValueChange    | 展开变化回调                                                  | `(value: any[], eventDetails: Accordion.ChangeEventDetails) => void` | -            |
| openMultiple     | 是否允许多个同时展开                                          | `boolean`                                                            | `true`       |
| disabled         | 整组禁用                                                      | `boolean`                                                            | `false`      |
| orientation      | 排列方向，会影响键盘导航                                      | `"horizontal" \| "vertical"`                                         | `"vertical"` |
| loop             | 键盘导航是否在首尾循环                                        | `boolean`                                                            | `true`       |
| hiddenUntilFound | 允许浏览器内置查找展开匹配面板（使用 `hidden="until-found"`） | `boolean`                                                            | `false`      |
| keepMounted      | 面板关闭时是否保留在 DOM                                      | `boolean`                                                            | `false`      |
| render           | 自定义渲染元素（Base UI 多态机制）                            | `React.ReactElement \| ((props, state) => React.ReactNode)`          | -            |
| className        | 自定义类名                                                    | `string`                                                             | -            |
| children         | `AccordionItem` 列表                                          | `React.ReactNode`                                                    | -            |

### AccordionItem

| 参数         | 说明                       | 类型                                                                      | 默认值  |
| ------------ | -------------------------- | ------------------------------------------------------------------------- | ------- |
| value        | 项标识，未提供时会自动生成 | `any`                                                                     | -       |
| disabled     | 是否禁用                   | `boolean`                                                                 | `false` |
| onOpenChange | 当前项展开/收起回调        | `(open: boolean, eventDetails: AccordionItem.ChangeEventDetails) => void` | -       |
| render       | 自定义渲染元素             | `React.ReactElement \| ((props, state) => React.ReactNode)`               | -       |
| className    | 自定义类名                 | `string`                                                                  | -       |
| children     | 子节点                     | `React.ReactNode`                                                         | -       |

### AccordionTrigger

可点击的标题区，内置一组上下箭头图标随展开状态切换。

| 参数         | 说明                                                           | 类型                                                        | 默认值  |
| ------------ | -------------------------------------------------------------- | ----------------------------------------------------------- | ------- |
| nativeButton | 是否强制以原生 `<button>` 挂载（与非按钮 `render` 配合时使用） | `boolean`                                                   | `true`  |
| disabled     | 是否禁用，会继承自所在的 `AccordionItem` / `Accordion`         | `boolean`                                                   | `false` |
| render       | 自定义渲染元素                                                 | `React.ReactElement \| ((props, state) => React.ReactNode)` | -       |
| className    | 自定义类名                                                     | `string`                                                    | -       |
| children     | 标题内容                                                       | `React.ReactNode`                                           | -       |

### AccordionContent

折叠 / 展开的内容区域，自动应用高度动画。

| 参数             | 说明                                              | 类型                                                        | 默认值  |
| ---------------- | ------------------------------------------------- | ----------------------------------------------------------- | ------- |
| hiddenUntilFound | 同 `Accordion.hiddenUntilFound`，单独控制当前面板 | `boolean`                                                   | `false` |
| keepMounted      | 关闭时是否保留在 DOM                              | `boolean`                                                   | `false` |
| render           | 自定义渲染元素                                    | `React.ReactElement \| ((props, state) => React.ReactNode)` | -       |
| className        | 自定义类名                                        | `string`                                                    | -       |
| children         | 面板内容                                          | `React.ReactNode`                                           | -       |
