---
category: Components
title: Tabs 标签页
subtitle: Tabs 标签页
demo:
  cols: 1
group:
  title: 导航
  order: 3
nav: 组件
toc: content
background: #111
compact: true
---

Tabs 用于在同一个区域内切换多组关联但互斥的内容，常见于设置面板、详情页的分组、统计仪表盘的视图切换等场景。

## 特性

- **两种视觉变体**：`default`（带背景的分段控件）和 `line`（底部下划线指示器）。
- **两种方向**：`horizontal` / `vertical`。
- **受控 / 非受控**：通过 `value` + `onValueChange` 或 `defaultValue`。
- **支持禁用单项**：在 `TabsTrigger` 上设置 `disabled`，键盘焦点会跳过。

## 何时使用

- 同一上下文中切换互斥的内容视图（设置分组、列表过滤、报告类型）。
- 内容数量在 2-7 个之间，且每个 tab 名称能简短表达。

## 何时不使用

- 超过 7 个分类——考虑左侧导航 / 树形导航。
- 切换需要触发深度路由跳转——使用 `NavigationMenu`，并让浏览器历史可控。
- tab 之间内容相互独立、用户需要并排比较——使用网格布局，不要使用 Tabs。

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
import { Tabs, TabsList, TabsTrigger, TabsContent } from "lynote-ui/tabs";
```

```ts [整体] | pure
import { Tabs, TabsList, TabsTrigger, TabsContent } from "lynote-ui";
```

:::

## 组件结构

```tsx | pure
<Tabs defaultValue="a">
  <TabsList>
    <TabsTrigger value="a" />
    <TabsTrigger value="b" />
  </TabsList>
  <TabsContent value="a" />
  <TabsContent value="b" />
</Tabs>
```

## 代码演示

<code src="./demos/base.tsx">基本用法</code>

<code src="./demos/controlled.tsx">受控用法</code>

<code src="./demos/vertical.tsx">垂直方向</code>

<code src="./demos/line.tsx" description="`TabsList variant='line'` 使用底部下划线作为指示器，更适合内容型页面。">下划线变体</code>

<code src="./demos/with-icons.tsx" description="在 `TabsTrigger` 内放置图标，组件会自动处理图标尺寸与对齐。">带图标</code>

<code src="./demos/disabled.tsx">禁用项</code>

<code src="./demos/with-card.tsx" description="与 Card 组合的典型业务场景：每个 tab 各自承载一组表单。">配合 Card 的业务场景</code>

## 最佳实践

- **首屏默认值要语义化**：用 `defaultValue` 指向用户最关心的视图，而不是第一个 tab。
- **每个 tab 的内容要可独立完成任务**：不要让用户在多个 tab 之间反复横跳。
- **避免在 tab 内嵌套 tab**：超过两层的 tab 嵌套几乎都是结构问题，应改用左侧导航或路由。
- **保留禁用项的解释**：用 Tooltip 或 label 说明"为什么这个 tab 不可点击"（如"升级后可用"）。
- **Tab 名称简短**：建议 2-6 个汉字 / 单词，避免折行。

## 无障碍与键盘交互

- `TabsList` 渲染为 `role="tablist"`；每个 `TabsTrigger` 自动获得 `role="tab"`、`aria-selected` 和 `tabIndex` 控制。
- `TabsContent` 渲染为 `role="tabpanel"`，并通过 `aria-labelledby` 关联到对应的 trigger。
- 禁用项不会被 Tab 键聚焦。

| 按键           | 行为                                 |
| -------------- | ------------------------------------ |
| `←` / `→`      | 在水平方向上切换到上/下一个 tab      |
| `↑` / `↓`      | 在垂直方向上切换到上/下一个 tab      |
| `Home` / `End` | 跳到第一个 / 最后一个可用 tab        |
| `Tab`          | 从 tablist 移动到当前 tab 的内容面板 |

## API

### Tabs

| 参数          | 说明                      | 类型                         | 默认值         |
| ------------- | ------------------------- | ---------------------------- | -------------- |
| value         | 当前激活 tab 值（受控）   | `string`                     | -              |
| defaultValue  | 默认激活 tab 值（非受控） | `string`                     | -              |
| onValueChange | tab 切换回调              | `(value: string) => void`    | -              |
| orientation   | 排列方向                  | `"horizontal" \| "vertical"` | `"horizontal"` |
| className     | 自定义类名                | `string`                     | -              |
| children      | 子组件                    | `React.ReactNode`            | -              |

### TabsList

| 参数        | 说明                                                    | 类型                         | 默认值         |
| ----------- | ------------------------------------------------------- | ---------------------------- | -------------- |
| variant     | 视觉变体：`default` 带背景的分段控件，`line` 底部下划线 | `"default" \| "line"`        | `"default"`    |
| orientation | 排列方向，会被父 `<Tabs>` 自动同步，通常无需手动设置    | `"horizontal" \| "vertical"` | `"horizontal"` |
| className   | 自定义类名                                              | `string`                     | -              |
| children    | `TabsTrigger` 列表                                      | `React.ReactNode`            | -              |

### TabsTrigger

| 参数      | 说明                | 类型                      | 默认值  |
| --------- | ------------------- | ------------------------- | ------- |
| value     | 与 content 匹配的值 | `string`                  | -       |
| disabled  | 是否禁用，跳过焦点  | `boolean`                 | `false` |
| className | 自定义类名          | `string`                  | -       |
| children  | tab 标签内容        | `React.ReactNode`         | -       |
| onClick   | 点击回调            | `React.MouseEventHandler` | -       |

### TabsContent

| 参数      | 说明                | 类型              | 默认值 |
| --------- | ------------------- | ----------------- | ------ |
| value     | 与 trigger 匹配的值 | `string`          | -      |
| className | 自定义类名          | `string`          | -      |
| children  | 面板内容            | `React.ReactNode` | -      |
