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
  Select,
  SelectGroup,
  SelectValue,
  SelectTrigger,
  SelectContent,
  SelectLabel,
  SelectItem,
  SelectSeparator,
  SelectScrollUpButton,
  SelectScrollDownButton,
} from "lynote-ui";
```

:::

用于从预设选项中选择一个值，支持分组、禁用和弹层定位。

## 使用建议

- 该组件基于 Base UI 封装，行为、键盘交互和无障碍语义继承自 Base UI。
- 文档中的 API 以当前 `lynote-ui` 封装导出的属性为准，优先列出业务中最常用且稳定的属性。
- `className` 用于覆盖或扩展样式；复杂组合场景建议优先使用已导出的子组件组合。
- 多选时 `SelectValue` 默认使用 Badge 展示选中值；空间不足时默认显示 `+N...`，可通过 `renderOverflow` 自定义折叠内容。

## 组件结构

```tsx | pure
<Select>
  <SelectGroup />
  <SelectValue />
  <SelectTrigger />
  <SelectContent />
</Select>
```

## 代码演示

<code src="./demos/base.tsx">基本用法</code>

<code src="./demos/disabled.tsx">禁用状态</code>

<code src="./demos/group.tsx">分组</code>

<code src="./demos/size.tsx">尺寸</code>

<code src="./demos/objectValues.tsx">对象值</code>

<code src="./demos/multiple.tsx">多选</code>

## API

### Select

Select 组件。

| 参数                 | 说明                                                                                          | 类型                                                                                                  | 默认值  |
| -------------------- | --------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------- | ------- |
| value                | 当前值，受控模式使用                                                                          | `string \| string[]`                                                                                  | -       |
| defaultValue         | 默认值，非受控模式使用                                                                        | `string \| string[]`                                                                                  | -       |
| open                 | 是否打开，受控模式使用                                                                        | `boolean`                                                                                             | -       |
| defaultOpen          | 默认是否打开                                                                                  | `boolean`                                                                                             | false   |
| onOpenChange         | 打开状态变化回调                                                                              | `(open: boolean) => void`                                                                             | -       |
| onValueChange        | 值变化回调                                                                                    | `(value: string \| string[]) => void`                                                                 | -       |
| disabled             | 是否禁用                                                                                      | `boolean`                                                                                             | false   |
| className            | 自定义类名                                                                                    | `string`                                                                                              | -       |
| children             | 子组件                                                                                        | `React.ReactNode`                                                                                     | -       |
| items                | 选择弹出窗口中渲染的项的数据结构。当指定时，`<Select.Value>` 会渲染选中项的标签而不是原始值。 | `Record<string, React.ReactNode> \| { label: React.ReactNode; value: any }[] \| Group[] \| undefined` | -       |
| multiple             | 是否可以选择多个项目。                                                                        | `boolean \| undefined`                                                                                | `false` |
| onOpenChangeComplete | 当选择弹出窗口打开或关闭时，任何动画完成后都会调用事件处理程序。                              | `((open: boolean) => void) \| undefined`                                                              | -       |
| readOnly             | 用户是否应该无法从选择弹出窗口中选择其他选项。                                                | `boolean`                                                                                             | `false` |

### SelectGroup

SelectGroup 组件。

| 参数      | 说明       | 类型              | 默认值 |
| --------- | ---------- | ----------------- | ------ |
| className | 自定义类名 | `string`          | -      |
| children  | 子内容     | `React.ReactNode` | -      |
| id        | 元素 id    | `string`          | -      |

### SelectValue

SelectValue 组件。

| 参数           | 说明                                                                                                                                                          | 类型                                                                                                                        | 默认值 |
| -------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------- | ------ |
| className      | 自定义类名                                                                                                                                                    | `string`                                                                                                                    | -      |
| children       | 子内容。多选时如果传入自定义 children，将不会使用默认 Badge 多选展示                                                                                          | `React.ReactNode \| ((value: any) => React.ReactNode)`                                                                      | -      |
| placeholder    | 未选择时的占位内容                                                                                                                                            | `React.ReactNode`                                                                                                           | -      |
| renderOverflow | 多选值单行展示空间不足时的自定义折叠内容。未传入时默认使用 Badge 展示 `+N...`，传入后直接渲染返回内容。`hiddenValues` 和 `visibleValues` 为对应的完整选项数据 | `(info: { hiddenCount: number; hiddenValues: SelectLabeledItem[]; visibleValues: SelectLabeledItem[] }) => React.ReactNode` | -      |
| id             | 元素 id                                                                                                                                                       | `string`                                                                                                                    | -      |

#### 多选折叠展示

```tsx | pure
<SelectValue
  placeholder="选择多个选项"
  renderOverflow={({ hiddenCount }) => (
    <span className="text-muted-foreground text-xs">还有 {hiddenCount} 项</span>
  )}
/>
```

### SelectTrigger

SelectTrigger 组件。

| 参数      | 说明       | 类型                      | 默认值 |
| --------- | ---------- | ------------------------- | ------ |
| value     | 组件值     | `string`                  | -      |
| disabled  | 是否禁用   | `boolean`                 | false  |
| className | 自定义类名 | `string`                  | -      |
| children  | 内容       | `React.ReactNode`         | -      |
| onClick   | 点击回调   | `React.MouseEventHandler` | -      |

### SelectContent

SelectContent 组件。

| 参数        | 说明           | 类型                                                                       | 默认值 |
| ----------- | -------------- | -------------------------------------------------------------------------- | ------ |
| side        | 弹层出现方向   | `"top" \| "bottom" \| "left" \| "right" \| "inline-start" \| "inline-end"` | -      |
| align       | 弹层对齐方式   | `"start" \| "center" \| "end"`                                             | -      |
| sideOffset  | 与锚点的间距   | `number`                                                                   | -      |
| alignOffset | 对齐方向偏移量 | `number`                                                                   | -      |
| className   | 自定义类名     | `string`                                                                   | -      |
| children    | 内容           | `React.ReactNode`                                                          | -      |

### SelectLabel

SelectLabel 组件。

| 参数      | 说明       | 类型              | 默认值 |
| --------- | ---------- | ----------------- | ------ |
| className | 自定义类名 | `string`          | -      |
| children  | 子内容     | `React.ReactNode` | -      |
| id        | 元素 id    | `string`          | -      |

### SelectItem

SelectItem 组件。

| 参数      | 说明       | 类型                      | 默认值 |
| --------- | ---------- | ------------------------- | ------ |
| value     | 组件值     | `string`                  | -      |
| disabled  | 是否禁用   | `boolean`                 | false  |
| className | 自定义类名 | `string`                  | -      |
| children  | 内容       | `React.ReactNode`         | -      |
| onClick   | 点击回调   | `React.MouseEventHandler` | -      |

### SelectSeparator

SelectSeparator 组件。

| 参数        | 说明       | 类型                         | 默认值       |
| ----------- | ---------- | ---------------------------- | ------------ |
| orientation | 方向       | `"horizontal" \| "vertical"` | "horizontal" |
| className   | 自定义类名 | `string`                     | -            |

### SelectScrollUpButton

SelectScrollUpButton 组件。

| 参数      | 说明       | 类型                      | 默认值 |
| --------- | ---------- | ------------------------- | ------ |
| value     | 组件值     | `string`                  | -      |
| disabled  | 是否禁用   | `boolean`                 | false  |
| className | 自定义类名 | `string`                  | -      |
| children  | 内容       | `React.ReactNode`         | -      |
| onClick   | 点击回调   | `React.MouseEventHandler` | -      |

### SelectScrollDownButton

SelectScrollDownButton 组件。

| 参数      | 说明       | 类型                      | 默认值 |
| --------- | ---------- | ------------------------- | ------ |
| value     | 组件值     | `string`                  | -      |
| disabled  | 是否禁用   | `boolean`                 | false  |
| className | 自定义类名 | `string`                  | -      |
| children  | 内容       | `React.ReactNode`         | -      |
| onClick   | 点击回调   | `React.MouseEventHandler` | -      |

### Group

| 参数  | 说明  | 类型                  | 默认值 |
| ----- | ----- | --------------------- | ------ |
| items | style | `ReadonlyArray<Item>` | -      |
