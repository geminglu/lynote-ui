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

| 参数          | 说明                      | 类型                                      | 默认值  |
| ------------- | ------------------------- | ----------------------------------------- | ------- |
| value         | 当前值(受控)              | `any \| any[]`                            | -       |
| defaultValue  | 默认值(非受控)            | `any \| any[]`                            | -       |
| onValueChange | 值变化回调                | `(value: any) => void`                    | -       |
| items         | 选项列表(对象 value 模式) | `Array<{ label: ReactNode; value: any }>` | -       |
| multiple      | 是否多选                  | `boolean`                                 | `false` |
| limit         | 多选最多可选数量          | `number`                                  | -       |
| filter        | 自定义过滤函数            | `(item, searchValue) => boolean`          | -       |
| disabled      | 是否禁用                  | `boolean`                                 | `false` |

### 子组件

- `ComboboxTrigger`:触发器
- `ComboboxValue`:已选值显示区
- `ComboboxClear`:清空按钮
- `ComboboxContent`:弹出层
- `ComboboxInput`:搜索输入框
- `ComboboxList`:候选列表
- `ComboboxGroup` / `ComboboxItem`:分组与候选项
- `ComboboxEmpty`:无结果兜底
