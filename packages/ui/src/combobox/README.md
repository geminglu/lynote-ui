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

```ts [单个] | pure
import {
  Combobox,
  ComboboxChip,
  ComboboxChips,
  ComboboxChipsInput,
  ComboboxCollection,
  ComboboxContent,
  ComboboxEmpty,
  ComboboxGroup,
  ComboboxInput,
  ComboboxItem,
  ComboboxLabel,
  ComboboxList,
  ComboboxSeparator,
  ComboboxTrigger,
  ComboboxValue,
  useComboboxAnchor,
} from "lynote-ui";
```

:::

Combobox 组合框是基于 Base UI Combobox 封装的可过滤选择器，用于在预设选项中搜索并选择一个或多个值。它适合选项较多、需要输入过滤的场景，例如框架选择、成员选择、标签选择、城市选择等。

## 使用建议

- Combobox 是可过滤的 Select：当选项来自固定集合，并且数量多到需要搜索时优先使用 Combobox。
- 不适合普通搜索框：Combobox 不用于任意自由文本搜索，如果输入内容不受选项限制，应使用 Autocomplete 或普通 Input。
- 不适合无输入框的选择器：如果不渲染输入框，应使用 Select。
- 表单控件需要可访问名称：当 `ComboboxInput` 作为表单控件时，请使用原生 `label` 关联 `id`，或在没有可见标签时提供 `aria-label`。

## 组件结构

`lynote-ui` 对 Base UI 的组合关系做了样式封装：`ComboboxContent` 内置 Portal 和 Positioner，`ComboboxItem` 内置选中指示器，`ComboboxInput` 内置输入框容器、触发按钮和可选清除按钮。

```tsx | pure
<Combobox items={items}>
  <ComboboxInput />
  <ComboboxContent>
    <ComboboxEmpty />
    <ComboboxList>
      <ComboboxItem />
      <ComboboxSeparator />
      <ComboboxGroup>
        <ComboboxLabel />
        <ComboboxCollection />
      </ComboboxGroup>
    </ComboboxList>
  </ComboboxContent>
</Combobox>
```

## TypeScript

Combobox 会从 `value` 或 `defaultValue` 推断选项类型；`items` 数组和 `ComboboxItem` 的 `value` 应保持同一种类型。对象选项建议提供 `itemToStringLabel`，用于输入框展示和内置过滤。

## 代码演示

<code src="./demos/base.tsx">基本用法</code>

<code src="./demos/controlled.tsx">受控用法</code>

<code src="./demos/clearable.tsx">可清除</code>

<code src="./demos/auto-highlight.tsx">自动高亮</code>

<code src="./demos/group.tsx">分组</code>

<code src="./demos/disabled.tsx">禁用状态</code>

<code src="./demos/placement.tsx">弹层位置</code>

<code src="./demos/multiple.tsx">多选标签</code>

<code src="./demos/custom-filter.tsx">自定义过滤</code>

<code src="./demos/async-search.tsx">异步搜索</code>

<code src="./demos/creatable.tsx">创建选项</code>

<code src="./demos/input-inside-popup.tsx">输入框在弹层内</code>

<code src="./demos/limit.tsx">限制展示数量</code>

## API

### Combobox

组合框的根组件，不渲染实际 DOM，用于管理选中值、输入值、弹层开关和键盘导航。

| 参数                 | 说明                                             | 类型                                                                    | 默认值  |
| -------------------- | ------------------------------------------------ | ----------------------------------------------------------------------- | ------- |
| items                | 用于展示和过滤的选项集合，可传扁平数组或分组数组 | `readonly Value[]`                                                      | -       |
| filteredItems        | 外部过滤后的选项集合，传入后列表使用该结果渲染   | `readonly Value[]`                                                      | -       |
| value                | 当前选中的值，受控模式使用                       | `Value \| Value[] \| null`                                              | -       |
| defaultValue         | 默认选中的值，非受控模式使用                     | `Value \| Value[] \| null`                                              | -       |
| onValueChange        | 选中值变化回调                                   | `(value: Value \| Value[] \| null, eventDetails) => void`               | -       |
| inputValue           | 当前输入框内容，受控模式使用                     | `string \| number \| readonly string[]`                                 | -       |
| defaultInputValue    | 默认输入框内容，非受控模式使用                   | `string \| number \| readonly string[]`                                 | -       |
| onInputValueChange   | 输入值变化回调                                   | `(inputValue: string, eventDetails) => void`                            | -       |
| open                 | 弹层是否打开，受控模式使用                       | `boolean`                                                               | -       |
| defaultOpen          | 弹层默认是否打开                                 | `boolean`                                                               | `false` |
| onOpenChange         | 弹层打开状态变化回调                             | `(open: boolean, eventDetails) => void`                                 | -       |
| onOpenChangeComplete | 弹层打开或关闭动画完成后的回调                   | `(open: boolean) => void`                                               | -       |
| multiple             | 是否启用多选；开启后 `value` 为数组              | `boolean`                                                               | `false` |
| disabled             | 是否禁用整个组合框                               | `boolean`                                                               | `false` |
| readOnly             | 是否只读，只读时用户不能从弹层中选择其他选项     | `boolean`                                                               | `false` |
| required             | 表单提交时是否必填                               | `boolean`                                                               | `false` |
| name                 | 表单提交字段名                                   | `string`                                                                | -       |
| id                   | 组件 id                                          | `string`                                                                | -       |
| inputRef             | 隐藏 input 的引用                                | `React.Ref<HTMLInputElement>`                                           | -       |
| autoHighlight        | 过滤时是否自动高亮第一个匹配项                   | `boolean`                                                               | `false` |
| keepHighlight        | 指针离开列表时是否保留高亮项                     | `boolean`                                                               | `false` |
| highlightItemOnHover | 鼠标悬停选项时是否高亮                           | `boolean`                                                               | `true`  |
| loopFocus            | 方向键导航到边界时是否循环焦点                   | `boolean`                                                               | `true`  |
| openOnInputClick     | 点击输入框时是否打开弹层                         | `boolean`                                                               | `true`  |
| autoComplete         | 传给浏览器的自动填充提示                         | `string`                                                                | -       |
| filter               | 自定义过滤函数，传 `null` 可关闭内置过滤         | `null \| ((itemValue: Value, query: string, itemToString?) => boolean)` | -       |
| limit                | 最多展示的选项数量，`-1` 表示不限制              | `number`                                                                | `-1`    |
| locale               | 字符串比较使用的地区设置，默认使用运行时 locale  | `Intl.LocalesArgument`                                                  | -       |
| itemToStringLabel    | 将对象选项转换为输入框展示文本                   | `(itemValue: Value) => string`                                          | -       |
| itemToStringValue    | 将对象选项转换为表单提交值                       | `(itemValue: Value) => string`                                          | -       |
| isItemEqualToValue   | 自定义选项值比较逻辑，对象值非同引用时很有用     | `(itemValue: Value, value: Value) => boolean`                           | -       |
| onItemHighlighted    | 高亮选项变化回调                                 | `(highlightedValue: Value \| undefined, eventDetails) => void`          | -       |
| modal                | 弹层打开时是否进入模态交互                       | `boolean`                                                               | `false` |
| inline               | 是否以内联列表形式渲染，不使用弹层               | `boolean`                                                               | `false` |
| grid                 | 是否以网格列表呈现选项                           | `boolean`                                                               | `false` |
| virtualized          | 是否由外部虚拟列表渲染选项                       | `boolean`                                                               | `false` |
| actionsRef           | 命令式动作引用，可用于手动卸载动画中的弹层       | `React.RefObject<{ unmount: () => void } \| null>`                      | -       |
| children             | 组合框子组件                                     | `React.ReactNode`                                                       | -       |

### ComboboxInput

组合框输入区域，默认带触发按钮，可按需显示清除按钮。

| 参数         | 说明                         | 类型                                           | 默认值  |
| ------------ | ---------------------------- | ---------------------------------------------- | ------- |
| placeholder  | 占位文本                     | `string`                                       | -       |
| value        | 输入框内容，受控模式使用     | `string \| number \| readonly string[]`        | -       |
| defaultValue | 输入框默认内容               | `string \| number \| readonly string[]`        | -       |
| disabled     | 是否禁用                     | `boolean`                                      | `false` |
| readOnly     | 是否只读                     | `boolean`                                      | `false` |
| required     | 是否必填                     | `boolean`                                      | `false` |
| name         | 输入框名称                   | `string`                                       | -       |
| id           | 输入框 id                    | `string`                                       | -       |
| autoFocus    | 是否自动聚焦                 | `boolean`                                      | `false` |
| autoComplete | 浏览器自动完成提示           | `string`                                       | -       |
| aria-label   | 无可见标签时的无障碍名称     | `string`                                       | -       |
| showTrigger  | 是否显示触发按钮             | `boolean`                                      | `true`  |
| showClear    | 是否显示清除按钮             | `boolean`                                      | `false` |
| className    | 自定义类名，作用于输入框容器 | `string`                                       | -       |
| children     | 输入框容器内的额外内容       | `React.ReactNode`                              | -       |
| onFocus      | 聚焦回调                     | `React.FocusEventHandler<HTMLInputElement>`    | -       |
| onBlur       | 失焦回调                     | `React.FocusEventHandler<HTMLInputElement>`    | -       |
| onKeyDown    | 键盘事件回调                 | `React.KeyboardEventHandler<HTMLInputElement>` | -       |

常用状态属性：`data-popup-open`、`data-popup-side`、`data-list-empty`、`data-disabled`、`data-readonly`、`data-required`、`data-valid`、`data-invalid`、`data-dirty`、`data-touched`、`data-filled`、`data-focused`。

### ComboboxContent

组合框弹层内容，内部已包含 Portal 和 Positioner。

| 参数                  | 说明                               | 类型                                                                                                                         | 默认值       |
| --------------------- | ---------------------------------- | ---------------------------------------------------------------------------------------------------------------------------- | ------------ |
| side                  | 弹层出现方向，碰撞时可能自动调整   | `"top" \| "bottom" \| "left" \| "right" \| "inline-start" \| "inline-end"`                                                   | `"bottom"`   |
| align                 | 弹层对齐方式                       | `"start" \| "center" \| "end"`                                                                                               | `"start"`    |
| sideOffset            | 与锚点的间距                       | `number \| OffsetFunction`                                                                                                   | `6`          |
| alignOffset           | 对齐方向偏移量                     | `number \| OffsetFunction`                                                                                                   | `0`          |
| anchor                | 自定义锚点引用，默认定位到触发元素 | `Element \| React.RefObject<Element \| null> \| (() => Element \| null)`                                                     | -            |
| collisionAvoidance    | 碰撞避让策略                       | `{ side?: "flip" \| "shift" \| "none"; align?: "flip" \| "shift" \| "none"; fallbackAxisSide?: "start" \| "end" \| "none" }` | -            |
| collisionBoundary     | 碰撞边界                           | `Element \| Rect \| "clipping-ancestors"`                                                                                    | -            |
| collisionPadding      | 与碰撞边界保持的间距               | `number \| Partial<Record<Side, number>>`                                                                                    | `5`          |
| sticky                | 锚点滚出视口后是否保持弹层在视口内 | `boolean`                                                                                                                    | `false`      |
| positionMethod        | 定位方式                           | `"absolute" \| "fixed"`                                                                                                      | `"absolute"` |
| disableAnchorTracking | 是否停止跟踪锚点布局变化           | `boolean`                                                                                                                    | `false`      |
| initialFocus          | 弹层打开后要聚焦的元素或策略       | `boolean \| React.RefObject<HTMLElement \| null> \| Function`                                                                | -            |
| finalFocus            | 弹层关闭后要恢复焦点的元素或策略   | `boolean \| React.RefObject<HTMLElement \| null> \| Function`                                                                | -            |
| className             | 自定义类名                         | `string`                                                                                                                     | -            |
| children              | 弹层内容                           | `React.ReactNode`                                                                                                            | -            |

常用状态属性：`data-open`、`data-closed`、`data-side`、`data-align`、`data-empty`、`data-anchor-hidden`。可用 CSS 变量：`--anchor-width`、`--anchor-height`、`--available-width`、`--available-height`、`--transform-origin`。

### ComboboxList

选项列表容器。传入函数子节点时，会自动接收过滤后的选项。

| 参数      | 说明           | 类型                                                    | 默认值 |
| --------- | -------------- | ------------------------------------------------------- | ------ |
| children  | 选项或渲染函数 | `React.ReactNode \| ((item, index) => React.ReactNode)` | -      |
| className | 自定义类名     | `string`                                                | -      |
| id        | 列表 id        | `string`                                                | -      |

状态属性：`data-empty` 会在列表为空时出现。

### ComboboxItem

组合框选项。

| 参数      | 说明                                | 类型                                      | 默认值  |
| --------- | ----------------------------------- | ----------------------------------------- | ------- |
| value     | 选项值                              | `Value`                                   | `null`  |
| disabled  | 是否禁用                            | `boolean`                                 | `false` |
| index     | 选项索引，提供后可减少 DOM 索引计算 | `number`                                  | -       |
| onClick   | 选中选项时触发                      | `React.MouseEventHandler<HTMLDivElement>` | -       |
| className | 自定义类名                          | `string`                                  | -       |
| style     | 自定义样式                          | `React.CSSProperties`                     | -       |
| children  | 选项内容                            | `React.ReactNode`                         | -       |

状态属性：`data-selected`、`data-highlighted`、`data-disabled`。

### ComboboxGroup

选项分组容器。

| 参数      | 说明               | 类型               | 默认值 |
| --------- | ------------------ | ------------------ | ------ |
| items     | 当前分组的选项集合 | `readonly Value[]` | -      |
| className | 自定义类名         | `string`           | -      |
| children  | 分组内容           | `React.ReactNode`  | -      |

`ComboboxGroup` 通常配合 `ComboboxLabel` 和 `ComboboxCollection` 使用。给分组传入 `items` 后，分组内的 `ComboboxCollection` 会渲染该分组过滤后的选项。

### ComboboxLabel

选项分组标题。

| 参数      | 说明       | 类型              | 默认值 |
| --------- | ---------- | ----------------- | ------ |
| className | 自定义类名 | `string`          | -      |
| children  | 标题内容   | `React.ReactNode` | -      |

### ComboboxCollection

在分组中渲染过滤后的选项集合，不渲染实际 DOM。

| 参数     | 说明         | 类型                               | 默认值 |
| -------- | ------------ | ---------------------------------- | ------ |
| children | 选项渲染函数 | `(item, index) => React.ReactNode` | -      |

### ComboboxEmpty

无匹配结果时的空状态。

| 参数      | 说明       | 类型              | 默认值 |
| --------- | ---------- | ----------------- | ------ |
| className | 自定义类名 | `string`          | -      |
| children  | 空状态内容 | `React.ReactNode` | -      |

### ComboboxSeparator

选项分隔符。

| 参数        | 说明       | 类型                         | 默认值         |
| ----------- | ---------- | ---------------------------- | -------------- |
| orientation | 分隔符方向 | `"horizontal" \| "vertical"` | `"horizontal"` |
| className   | 自定义类名 | `string`                     | -              |

### ComboboxChips

多选模式下的标签输入容器，可作为 `ComboboxContent` 的自定义锚点。

| 参数      | 说明                             | 类型                        | 默认值 |
| --------- | -------------------------------- | --------------------------- | ------ |
| ref       | 标签输入容器引用，可作为弹层锚点 | `React.Ref<HTMLDivElement>` | -      |
| className | 自定义类名                       | `string`                    | -      |
| style     | 自定义样式                       | `React.CSSProperties`       | -      |
| children  | 已选标签和输入框                 | `React.ReactNode`           | -      |

### ComboboxChip

多选模式下展示单个已选项的标签。

| 参数       | 说明             | 类型                  | 默认值 |
| ---------- | ---------------- | --------------------- | ------ |
| showRemove | 是否显示移除按钮 | `boolean`             | `true` |
| className  | 自定义类名       | `string`              | -      |
| style      | 自定义样式       | `React.CSSProperties` | -      |
| children   | 标签内容         | `React.ReactNode`     | -      |

键盘交互：聚焦到标签后，`Backspace` 或 `Delete` 会移除当前标签，方向键可在标签和输入框之间移动。

### ComboboxChipsInput

多选标签容器内的输入框。

| 参数        | 说明                     | 类型                                           | 默认值  |
| ----------- | ------------------------ | ---------------------------------------------- | ------- |
| placeholder | 占位文本                 | `string`                                       | -       |
| disabled    | 是否禁用                 | `boolean`                                      | `false` |
| readOnly    | 是否只读                 | `boolean`                                      | `false` |
| className   | 自定义类名               | `string`                                       | -       |
| aria-label  | 无可见标签时的无障碍名称 | `string`                                       | -       |
| onFocus     | 聚焦回调                 | `React.FocusEventHandler<HTMLInputElement>`    | -       |
| onBlur      | 失焦回调                 | `React.FocusEventHandler<HTMLInputElement>`    | -       |
| onKeyDown   | 键盘事件回调             | `React.KeyboardEventHandler<HTMLInputElement>` | -       |

### ComboboxValue

读取当前选中值的无 DOM 组件，适合自定义展示选中内容。

| 参数        | 说明             | 类型                                                      | 默认值 |
| ----------- | ---------------- | --------------------------------------------------------- | ------ |
| placeholder | 未选中时展示内容 | `React.ReactNode`                                         | -      |
| children    | 自定义渲染函数   | `React.ReactNode \| ((selectedValue) => React.ReactNode)` | -      |

### ComboboxTrigger

组合框触发按钮，`ComboboxInput` 默认会内置一个触发按钮，也可以在自定义结构中单独使用。

| 参数      | 说明       | 类型                                         | 默认值     |
| --------- | ---------- | -------------------------------------------- | ---------- |
| disabled  | 是否禁用   | `boolean`                                    | `false`    |
| className | 自定义类名 | `string`                                     | -          |
| children  | 按钮内容   | `React.ReactNode`                            | -          |
| type      | 按钮类型   | `"button" \| "submit" \| "reset"`            | `"button"` |
| onClick   | 点击回调   | `React.MouseEventHandler<HTMLButtonElement>` | -          |

常用状态属性：`data-popup-open`、`data-popup-side`、`data-list-empty`、`data-pressed`、`data-disabled`、`data-readonly`、`data-required`、`data-filled`、`data-focused`、`data-placeholder`。

### useComboboxAnchor

创建一个用于 `ComboboxContent` 的锚点 ref，常用于多选 Chips 场景。

| 返回值                                    | 说明                                                             |
| ----------------------------------------- | ---------------------------------------------------------------- |
| `React.RefObject<HTMLDivElement \| null>` | 可传给 `ComboboxChips` 的 `ref` 和 `ComboboxContent` 的 `anchor` |
