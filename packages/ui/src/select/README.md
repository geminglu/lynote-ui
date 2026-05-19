---
category: Components
title: Select 选择器
subtitle: Select 选择器
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

从一组预设选项中挑选一个或多个值。Select 基于 Base UI 的 `Select` 原语封装，自带键盘导航、滚动、分组、对象 value 与多选等能力。

## 特性

- **支持对象 value**：传入 `items` 数组后，`Select.Value` 会渲染选中项的 `label` 而非原始 value。
- **分组与标签**：通过 `SelectGroup` + `SelectLabel` 对长列表分组。
- **多选模式**：`multiple` 开启后默认以 Badge 形式展示已选项，空间不足时自动 `+N` 折叠，可通过 `renderOverflow` 自定义。
- **超长滚动**：内容超过 `--available-height` 时自动滚动并显示 `SelectScrollUpButton` / `SelectScrollDownButton`。
- **完整 ARIA 支持**：键盘导航、字母搜索、单选/多选行为均符合 ARIA 1.2 规范。

## 何时使用

- 选项数量 4-30 个，且每项可被简短表达。
- 选项之间互斥（单选）或可叠加（多选）。
- 选项需要分组（如时区按大洲分组）。

## 何时不使用

- 选项 ≤ 3 个——使用 `RadioGroup` 或 `ToggleGroup` 直接可见所有选项。
- 选项需要异步搜索 / 大数据量——使用 `Combobox`。
- 状态切换（开 / 关）——使用 `Switch` 或 `Checkbox`。
- 紧凑空间内的单步切换——`NativeSelect` 在移动端会唤起系统选择器。

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
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectScrollDownButton,
  SelectScrollUpButton,
  SelectSeparator,
  SelectTrigger,
  SelectValue,
} from "lynote-ui/select";
```

```ts [整体] | pure
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "lynote-ui";
```

:::

## 组件结构

```tsx | pure
<Select>
  <SelectTrigger>
    <SelectValue />
  </SelectTrigger>
  <SelectContent>
    <SelectGroup>
      <SelectLabel />
      <SelectItem />
    </SelectGroup>
  </SelectContent>
</Select>
```

## 代码演示

<code src="./demos/base.tsx">基本用法</code>

<code src="./demos/controlled.tsx" description="使用 `value` + `onValueChange` 进行受控。">受控用法</code>

<code src="./demos/disabled.tsx">禁用状态</code>

<code src="./demos/size.tsx">尺寸</code>

<code src="./demos/group.tsx">分组</code>

<code src="./demos/scrollable.tsx" description="超过 `max-h-*` 限制后自动启用滚动按钮。">可滚动列表</code>

<code src="./demos/objectValues.tsx" description="传入 `items` 后，trigger 自动渲染选中项的 label 而不是原始 value。">对象值与 label</code>

<code src="./demos/multiple.tsx">多选与折叠展示</code>

<code src="./demos/form.tsx" description="与 `Field` 组合实现校验和错误提示。">配合 Field 校验</code>

## 最佳实践

- **始终设置 placeholder**：未选择时让用户知道这是个可点击的选择器。
- **多选超 4 项考虑 Combobox**：多选列表很长时，搜索能力比展开列表更友好。
- **保持 trigger 宽度稳定**：多选时使用 `renderOverflow` 让 trigger 宽度不会被选中项撑大。
- **分组标题简短**：`SelectLabel` 用于分组导航，不应该承载操作。
- **对象 value 必须包含稳定的 `value` 字段**：用作 React key 与回调的标识。

## 无障碍与键盘交互

- `SelectTrigger` 渲染为 `<button role="combobox">`；`SelectContent` 渲染为 `role="listbox"`。
- 输入字母可快速跳转到首字母匹配的选项（typeahead）。
- `aria-invalid` 触发红色环；外层 `Field` 上加 `data-invalid` 让 label 同步变色。

| 按键              | 行为                            |
| ----------------- | ------------------------------- |
| `Space` / `Enter` | 打开下拉、选中当前高亮项        |
| `↑` / `↓`         | 上一项 / 下一项                 |
| `Home` / `End`    | 跳到第一项 / 最后一项           |
| 字母键            | typeahead：跳到首字母匹配的选项 |
| `Esc`             | 关闭下拉                        |

## API

### Select

| 参数                 | 说明                                            | 类型                                                                                                  | 默认值  |
| -------------------- | ----------------------------------------------- | ----------------------------------------------------------------------------------------------------- | ------- |
| value                | 当前值（受控）                                  | `string \| string[]`                                                                                  | -       |
| defaultValue         | 默认值（非受控）                                | `string \| string[]`                                                                                  | -       |
| onValueChange        | 值变化回调                                      | `(value: string \| string[]) => void`                                                                 | -       |
| open                 | 下拉是否打开（受控）                            | `boolean`                                                                                             | -       |
| defaultOpen          | 下拉是否打开（非受控）                          | `boolean`                                                                                             | `false` |
| onOpenChange         | 打开状态变化回调                                | `(open: boolean) => void`                                                                             | -       |
| onOpenChangeComplete | 打开/关闭动画完成回调                           | `(open: boolean) => void`                                                                             | -       |
| items                | 选项数据，传入后 `SelectValue` 会渲染对应 label | `Record<string, React.ReactNode> \| { label: React.ReactNode; value: any }[] \| Group[] \| undefined` | -       |
| multiple             | 是否多选                                        | `boolean`                                                                                             | `false` |
| disabled             | 是否禁用                                        | `boolean`                                                                                             | `false` |
| readOnly             | 是否只读                                        | `boolean`                                                                                             | `false` |
| className            | 自定义类名                                      | `string`                                                                                              | -       |
| children             | 子组件                                          | `React.ReactNode`                                                                                     | -       |

### SelectTrigger

外观与 `Button` 一致的触发器。

| 参数      | 说明       | 类型                      | 默认值 |
| --------- | ---------- | ------------------------- | ------ |
| disabled  | 是否禁用   | `boolean`                 | -      |
| className | 自定义类名 | `string`                  | -      |
| children  | 内容       | `React.ReactNode`         | -      |
| onClick   | 点击回调   | `React.MouseEventHandler` | -      |

### SelectValue

| 参数           | 说明                                               | 类型                                                                                                                        | 默认值 |
| -------------- | -------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------- | ------ |
| placeholder    | 未选择时的占位                                     | `React.ReactNode`                                                                                                           | -      |
| children       | 自定义渲染。多选时如传入函数会接收已选值数组       | `React.ReactNode \| ((value: any) => React.ReactNode)`                                                                      | -      |
| renderOverflow | 多选折叠展示自定义。未传时默认使用 Badge 渲染 `+N` | `(info: { hiddenCount: number; hiddenValues: SelectLabeledItem[]; visibleValues: SelectLabeledItem[] }) => React.ReactNode` | -      |
| className      | 自定义类名                                         | `string`                                                                                                                    | -      |

#### 多选折叠展示

```tsx | pure
<SelectValue
  placeholder="选择多个选项"
  renderOverflow={({ hiddenCount }) => (
    <span className="text-muted-foreground text-xs">+{hiddenCount}</span>
  )}
/>
```

### SelectContent

| 参数        | 说明                       | 类型                                                                       | 默认值     |
| ----------- | -------------------------- | -------------------------------------------------------------------------- | ---------- |
| side        | 弹层方向                   | `"top" \| "bottom" \| "left" \| "right" \| "inline-start" \| "inline-end"` | `"bottom"` |
| align       | 弹层对齐                   | `"start" \| "center" \| "end"`                                             | `"start"`  |
| sideOffset  | 与锚点的间距               | `number`                                                                   | `4`        |
| alignOffset | 对齐方向偏移量             | `number`                                                                   | `0`        |
| className   | 自定义类名（控制最大高度） | `string`                                                                   | -          |
| children    | 选项列表                   | `React.ReactNode`                                                          | -          |

### SelectGroup

逻辑分组容器，可嵌套 `SelectLabel`。

| 参数      | 说明       | 类型              | 默认值 |
| --------- | ---------- | ----------------- | ------ |
| className | 自定义类名 | `string`          | -      |
| children  | 子项       | `React.ReactNode` | -      |

### SelectLabel

| 参数      | 说明       | 类型              | 默认值 |
| --------- | ---------- | ----------------- | ------ |
| className | 自定义类名 | `string`          | -      |
| children  | 标题内容   | `React.ReactNode` | -      |

### SelectItem

| 参数      | 说明       | 类型              | 默认值  |
| --------- | ---------- | ----------------- | ------- |
| value     | 选项值     | `string \| any`   | -       |
| disabled  | 是否禁用   | `boolean`         | `false` |
| className | 自定义类名 | `string`          | -       |
| children  | 选项内容   | `React.ReactNode` | -       |

### SelectSeparator

视觉分隔线。

| 参数        | 说明 | 类型                         | 默认值         |
| ----------- | ---- | ---------------------------- | -------------- |
| orientation | 方向 | `"horizontal" \| "vertical"` | `"horizontal"` |
| className   | 类名 | `string`                     | -              |

### SelectScrollUpButton / SelectScrollDownButton

超长滚动时显示的箭头按钮，需放在 `SelectContent` 内部上下两端。

| 参数      | 说明           | 类型                                                        | 默认值 |
| --------- | -------------- | ----------------------------------------------------------- | ------ |
| render    | 自定义渲染元素 | `React.ReactElement \| ((props, state) => React.ReactNode)` | -      |
| className | 自定义类名     | `string`                                                    | -      |
| children  | 自定义箭头图标 | `React.ReactNode`                                           | -      |
