---
category: Components
title: Combobox 组合框
subtitle: Combobox 组合框
demo:
  cols: 1
group:
  title: 表单
  order: 4
nav: 组件
toc: content
background: #111
compact: true
---

Combobox 把 Select 的下拉与 Input 的搜索能力结合,支持过滤、分组、多选、可创建条目、异步加载等。基于 Base UI Combobox 原语。

## 特性

- **内置搜索过滤**:输入即过滤候选项。
- **多选 / 单选**:`multiple` 切换。
- **可清空**:`ComboboxClear` 提供一键清空。
- **异步加载**:配合 swr / react-query,显示 loading 与空状态。
- **可创建条目**:用户输入不存在的值时可创建新项。
- **支持限制最大选中数**:多选 + `limit` 控制最多选择数量。
- **完整键盘可达**:方向键、`Enter` 选中、`Esc` 关闭。

## 何时使用

- 大量选项 / 需要搜索的场景。
- 异步加载选项(如远程搜索用户、标签)。
- 创建型字段(输入不存在的标签自动创建)。
- 多选 + 搜索(过滤 + 已选项徽标展示)。

## 何时不使用

- 选项 ≤ 30 且无需搜索——使用 `Select`。
- 简单的命令面板——使用 `Command`。
- 表单中的多个标签输入——可以用,但请优化提交格式。

## 导入

```ts | pure
import {
  Combobox,
  ComboboxClear,
  ComboboxContent,
  ComboboxEmpty,
  ComboboxGroup,
  ComboboxInput,
  ComboboxItem,
  ComboboxList,
  ComboboxTrigger,
  ComboboxValue,
} from "lynote-ui/combobox";
```

## 代码演示

<code src="./demos/base.tsx">基本用法</code>

<code src="./demos/controlled.tsx">受控用法</code>

<code src="./demos/disabled.tsx">禁用状态</code>

<code src="./demos/clearable.tsx" description="`ComboboxClear` 提供一键清空入口。">可清空</code>

<code src="./demos/group.tsx">分组</code>

<code src="./demos/multiple.tsx">多选模式</code>

<code src="./demos/limit.tsx" description="限制多选最多可选择数量。">限制选择数量</code>

<code src="./demos/placement.tsx">弹层位置</code>

<code src="./demos/custom-filter.tsx" description="覆盖默认的 fuzzy 匹配逻辑。">自定义过滤</code>

<code src="./demos/auto-highlight.tsx" description="自动高亮第一项,回车直接选中。">自动高亮</code>

<code src="./demos/input-inside-popup.tsx" description="把输入框放进弹层内部,实现命令面板形态。">输入框放在弹层内</code>

<code src="./demos/creatable.tsx" description="输入不存在的值后可创建新条目。">可创建条目</code>

<code src="./demos/async-search.tsx" description="远程搜索 + loading + 空状态的完整异步示例。">异步搜索</code>

## 最佳实践

- **设置 placeholder**:`ComboboxValue` 的 placeholder 在未选时给出提示。
- **异步加载显示 loading**:在 `ComboboxList` 内根据 isLoading 渲染 `Spinner`。
- **空结果用 `ComboboxEmpty`**:始终提供"未找到结果"或"创建新项"的兜底视图。
- **多选 + 标签限制宽度**:trigger 容易被多个 badge 撑高,使用 `flex-wrap` 或限制行数。

## API

### Combobox

继承 Base UI Combobox.Root 的所有 props:

| 参数               | 说明                                               | 类型                                                                 | 默认值     |
| ------------------ | -------------------------------------------------- | -------------------------------------------------------------------- | ---------- |
| value              | 当前值（受控）                                     | `any \| any[]`                                                       | -          |
| defaultValue       | 默认值（非受控）                                   | `any \| any[]`                                                       | -          |
| onValueChange      | 值变化回调                                         | `(value: any, eventDetails: Combobox.ChangeEventDetails) => void`    | -          |
| inputValue         | 输入框文本（受控）                                 | `string`                                                             | -          |
| defaultInputValue  | 输入框默认文本（非受控）                           | `string`                                                             | -          |
| onInputValueChange | 输入框文本变化回调                                 | `(inputValue: string, eventDetails) => void`                         | -          |
| open               | 弹层是否展开（受控）                               | `boolean`                                                            | -          |
| defaultOpen        | 弹层默认展开（非受控）                             | `boolean`                                                            | `false`    |
| onOpenChange       | 弹层展开状态变化回调                               | `(open: boolean, eventDetails: Combobox.ChangeEventDetails) => void` | -          |
| items              | 选项数据；当传入对象时使用 `{ value, label }` 结构 | `any[] \| Array<{ items: any[]; label?: ReactNode }>`                | -          |
| itemToStringValue  | 将对象选项映射为字符串（受控筛选用）               | `(item: any) => string`                                              | -          |
| itemToStringLabel  | 将对象选项映射为标签                               | `(item: any) => string`                                              | -          |
| multiple           | 是否多选                                           | `boolean`                                                            | `false`    |
| limit              | 多选时最多可选数量（`-1` 不限）                    | `number`                                                             | `-1`       |
| filter             | 自定义过滤函数                                     | `((item, query, itemToStringLabel) => boolean) \| null`              | -          |
| autoHighlight      | 自动高亮第一项                                     | `boolean`                                                            | `false`    |
| openOnInputClick   | 点击输入框时展开                                   | `boolean`                                                            | `true`     |
| selectionMode      | 多选模式下点击空白处的行为                         | `"single" \| "none"`                                                 | `"single"` |
| disabled           | 是否禁用                                           | `boolean`                                                            | `false`    |
| readOnly           | 是否只读                                           | `boolean`                                                            | `false`    |
| required           | 是否必填                                           | `boolean`                                                            | `false`    |
| name               | 表单字段名                                         | `string`                                                             | -          |
| id                 | 节点 id                                            | `string`                                                             | -          |
| modal              | 是否拦截焦点（Modal 模式）                         | `boolean`                                                            | `false`    |
| actionsRef         | 用于以命令式打开/关闭的 ref                        | `RefObject<{ unmount: () => void } \| null>`                         | -          |

### ComboboxTrigger

下拉触发按钮，内部已渲染 `ChevronDown` 图标。

| 参数         | 说明                           | 类型                                                        | 默认值  |
| ------------ | ------------------------------ | ----------------------------------------------------------- | ------- |
| nativeButton | 是否强制以原生 `<button>` 挂载 | `boolean`                                                   | `true`  |
| disabled     | 是否禁用                       | `boolean`                                                   | `false` |
| render       | 自定义渲染元素                 | `React.ReactElement \| ((props, state) => React.ReactNode)` | -       |
| className    | 自定义类名                     | `string`                                                    | -       |
| children     | 额外内容                       | `React.ReactNode`                                           | -       |

### ComboboxValue

显示已选值的占位组件。

| 参数        | 说明                                                | 类型                                                   | 默认值 |
| ----------- | --------------------------------------------------- | ------------------------------------------------------ | ------ |
| placeholder | 未选时显示的占位文本                                | `React.ReactNode`                                      | -      |
| children    | 自定义渲染函数 `(value) => ReactNode`，覆盖默认显示 | `((value: any) => React.ReactNode) \| React.ReactNode` | -      |

### ComboboxClear

清空按钮，已内置 `<X />` 图标与 `<Button variant="ghost" size="icon-xs" />` 渲染。

| 参数      | 说明           | 类型                                                        | 默认值  |
| --------- | -------------- | ----------------------------------------------------------- | ------- |
| disabled  | 是否禁用       | `boolean`                                                   | `false` |
| render    | 自定义渲染元素 | `React.ReactElement \| ((props, state) => React.ReactNode)` | -       |
| className | 自定义类名     | `string`                                                    | -       |

### ComboboxInput

搜索输入框，组件内已经包裹了 `<InputGroup>`，可通过 `showTrigger` / `showClear` 控制 addon。

| 参数        | 说明                           | 类型                                                        | 默认值  |
| ----------- | ------------------------------ | ----------------------------------------------------------- | ------- |
| showTrigger | 是否显示下拉触发按钮           | `boolean`                                                   | `true`  |
| showClear   | 是否显示清空按钮               | `boolean`                                                   | `false` |
| disabled    | 是否禁用                       | `boolean`                                                   | `false` |
| render      | 自定义渲染元素                 | `React.ReactElement \| ((props, state) => React.ReactNode)` | -       |
| className   | 自定义类名                     | `string`                                                    | -       |
| children    | 额外节点（如 ComboboxContent） | `React.ReactNode`                                           | -       |
| ...props    | 透传原生 `<input>` 属性        | `React.InputHTMLAttributes<HTMLInputElement>`               | -       |

### ComboboxContent

弹出层容器，包裹 `Portal + Positioner + Popup`。

| 参数                  | 说明                         | 类型                                                                            | 默认值                 |
| --------------------- | ---------------------------- | ------------------------------------------------------------------------------- | ---------------------- |
| side                  | 弹层显示方向                 | `"top" \| "bottom" \| "left" \| "right" \| "inline-start" \| "inline-end"`      | `"bottom"`             |
| sideOffset            | 距 trigger 的间距            | `number`                                                                        | `6`                    |
| align                 | 沿 trigger 的对齐方式        | `"start" \| "center" \| "end"`                                                  | `"start"`              |
| alignOffset           | 对齐方向偏移                 | `number`                                                                        | `0`                    |
| anchor                | 自定义锚点                   | `Element \| RefObject<Element \| null> \| VirtualElement \| (() => ...)`        | -                      |
| collisionAvoidance    | 边界碰撞策略                 | `{ side?: "none" \| "flip"; align?: "none" \| "flip"; fallbackAxisSide?: ... }` | -                      |
| collisionBoundary     | 碰撞检测边界                 | `Boundary`                                                                      | `"clipping-ancestors"` |
| collisionPadding      | 碰撞内边距                   | `number \| Rect`                                                                | `5`                    |
| sticky                | 是否在锚点离开视口时保持可见 | `boolean`                                                                       | `false`                |
| positionMethod        | 定位方式                     | `"absolute" \| "fixed"`                                                         | `"absolute"`           |
| disableAnchorTracking | 禁用锚点位置跟踪             | `boolean`                                                                       | `false`                |
| className             | 自定义类名                   | `string`                                                                        | -                      |
| children              | 弹层内容（List / Empty 等）  | `React.ReactNode`                                                               | -                      |

### ComboboxList

候选项滚动容器（`role=listbox`）。

| 参数      | 说明                                                      | 类型                                                        | 默认值 |
| --------- | --------------------------------------------------------- | ----------------------------------------------------------- | ------ |
| render    | 自定义渲染元素                                            | `React.ReactElement \| ((props, state) => React.ReactNode)` | -      |
| className | 自定义类名                                                | `string`                                                    | -      |
| children  | 通常是 `ComboboxItem` / `ComboboxGroup` / `ComboboxEmpty` | `React.ReactNode`                                           | -      |

### ComboboxItem

单个候选项，自动包含 `CheckIcon` 选中指示器。

| 参数      | 说明           | 类型                                                        | 默认值  |
| --------- | -------------- | ----------------------------------------------------------- | ------- |
| value     | 选项值         | `any`                                                       | -       |
| disabled  | 是否禁用       | `boolean`                                                   | `false` |
| render    | 自定义渲染元素 | `React.ReactElement \| ((props, state) => React.ReactNode)` | -       |
| className | 自定义类名     | `string`                                                    | -       |
| children  | 选项内容       | `React.ReactNode`                                           | -       |

### ComboboxGroup

分组容器，需要配合 `ComboboxLabel` 使用。

| 参数      | 说明       | 类型              | 默认值 |
| --------- | ---------- | ----------------- | ------ |
| className | 自定义类名 | `string`          | -      |
| children  | 子项       | `React.ReactNode` | -      |

### ComboboxLabel

分组标签，渲染为 `text-xs` 的辅助标题。

| 参数      | 说明       | 类型              | 默认值 |
| --------- | ---------- | ----------------- | ------ |
| className | 自定义类名 | `string`          | -      |
| children  | 标题内容   | `React.ReactNode` | -      |

### ComboboxCollection

用 `items` 配合渲染候选项的集合组件。

| 参数     | 说明                                                               | 类型                                            | 默认值 |
| -------- | ------------------------------------------------------------------ | ----------------------------------------------- | ------ |
| children | `(item, index) => ReactNode` 的渲染函数，常返回 `<ComboboxItem />` | `(item: any, index: number) => React.ReactNode` | -      |

### ComboboxEmpty

无结果兜底视图，自动在筛选结果为空时显示。

| 参数      | 说明       | 类型              | 默认值 |
| --------- | ---------- | ----------------- | ------ |
| className | 自定义类名 | `string`          | -      |
| children  | 提示文案   | `React.ReactNode` | -      |

### ComboboxSeparator

候选项之间的分隔线。

| 参数      | 说明       | 类型     | 默认值 |
| --------- | ---------- | -------- | ------ |
| className | 自定义类名 | `string` | -      |

### ComboboxChips

多选模式下展示已选 chip 的容器（仅当使用 chips 模式时）。

| 参数      | 说明                                  | 类型              | 默认值 |
| --------- | ------------------------------------- | ----------------- | ------ |
| className | 自定义类名                            | `string`          | -      |
| children  | `ComboboxChip` / `ComboboxChipsInput` | `React.ReactNode` | -      |

### ComboboxChip

单个已选 chip，自带删除按钮，可通过 `showRemove={false}` 隐藏。

| 参数       | 说明             | 类型              | 默认值 |
| ---------- | ---------------- | ----------------- | ------ |
| showRemove | 是否显示删除按钮 | `boolean`         | `true` |
| className  | 自定义类名       | `string`          | -      |
| children   | chip 内容        | `React.ReactNode` | -      |

### ComboboxChipsInput

放在 `ComboboxChips` 内的输入框。继承原生 `<input>` 属性。

### useComboboxAnchor

用于把 `Combobox` 锚定到非 trigger 元素的 ref 钩子，返回 `React.RefObject<HTMLDivElement>`。
