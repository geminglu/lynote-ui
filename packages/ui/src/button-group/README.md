---
category: Components
title: ButtonGroup 按钮组
subtitle: ButtonGroup 按钮组
demo:
  cols: 1
group:
  title: 通用
  order: 2
nav: 组件
toc: content
background: #111
compact: true
---

ButtonGroup 把多个 Button 拼接成一个连体的工具栏 / 分段控件。组合 `Button` 与 `Select` 都可以,自动处理共享边框、圆角与焦点状态。

## 特性

- **横向 / 纵向**:`orientation="horizontal" | "vertical"`。
- **自动合并边框**:相邻按钮之间只保留一道边线。
- **支持 Select / Input / DropdownMenu 组合**:与表单控件混合使用。
- **`ButtonGroupSeparator` / `ButtonGroupText`**:在按钮间插入分隔线或固定文本。

## 何时使用

- 工具栏按钮组(撤销 / 重做、对齐、列表 / 网格切换)。
- 邮件列表头的批量操作。
- 拆分按钮(主操作 + 下拉菜单)。
- 分页 / 翻页 ButtonBar。

## 何时不使用

- 互斥选项——使用 `ToggleGroup type="single"`。
- 表单内提交 / 取消按钮——使用普通布局,不要连体。

## 导入

```ts | pure
import {
  ButtonGroup,
  ButtonGroupSeparator,
  ButtonGroupText,
} from "lynote-ui/button-group";
```

## 代码演示

<code src="./demos/base.tsx" description="组合 Button + DropdownMenu 构建邮件列表的工具栏。">基本用法</code>

## 最佳实践

- **同组按钮同尺寸**:不要在同组内混用 `default` 和 `sm`。
- **配合 Tooltip**:每个图标按钮务必配 Tooltip + `aria-label`,工具栏按钮内容浓缩,用户难以猜测含义。
- **嵌套使用**:多个 ButtonGroup 嵌套时,外层会自动以更大间距分组。
- **分隔线用 `ButtonGroupSeparator`**:语义化分隔不同动作的子集。

## API

### ButtonGroup

| 参数        | 说明       | 类型                         | 默认值         |
| ----------- | ---------- | ---------------------------- | -------------- |
| orientation | 排列方向   | `"horizontal" \| "vertical"` | `"horizontal"` |
| className   | 自定义类名 | `string`                     | -              |
| children    | 子组件     | `React.ReactNode`            | -              |

### ButtonGroupSeparator

按钮之间的分隔线,自动适配方向。

| 参数        | 说明 | 类型                         | 默认值       |
| ----------- | ---- | ---------------------------- | ------------ |
| orientation | 方向 | `"horizontal" \| "vertical"` | `"vertical"` |

### ButtonGroupText

按钮组内的固定文本(如"已选择 3 项"),自动应用 muted 背景。
