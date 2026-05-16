---
category: Components
title: DatePicker 日期选择器
subtitle: DatePicker 日期选择器
demo:
  cols: 1
group:
  title: 数据录入
  order: 5
nav: 组件
toc: content
background: #111
compact: true
---

DatePicker 将 `Calendar` 与 `Popover` / `Input` 结合,提供紧凑型的日期选择体验。支持单日、区间、自然语言输入、时间选择等多种模式。

## 特性

- **多种模式**:单日 / 区间 / 自然语言输入 / 时间选择。
- **Popover + Calendar**:trigger 是按钮 / 输入框,展开后是日历视图。
- **输入式日期**:`input-date` 模式允许用户键盘输入 YYYY-MM-DD。
- **自然语言识别**:支持"明天 / 下周一"等表述自动解析。

## 何时使用

- 表单中的生日 / 入职日期等单日选择。
- 酒店预订 / 报表查询的日期区间。
- 任务截止时间(日期 + 时间)。

## 何时不使用

- 用户希望看到整月日历——使用独立的 `Calendar`。
- 仅选月份 / 年份——使用 `Select` 或专门的月份选择器。

## 导入

```ts | pure
import { Calendar } from "lynote-ui/calendar";
import { Popover, PopoverContent, PopoverTrigger } from "lynote-ui/popover";
```

DatePicker 在本库中是一个**复合模式**,通过 `Calendar` + `Popover` + `Input` 组合而成,没有单独的 `<DatePicker />` 组件。请参考下方 demo 中的写法。

## 代码演示

<code src="./demos/base.tsx" description="Popover 触发的日历选择器,最常用形态。">基本用法</code>

<code src="./demos/selection-date.tsx" description="单日选择 + 触发按钮显示当前选中日期。">日期选择</code>

<code src="./demos/range-picker.tsx" description="区间日期选择,常用于酒店预订 / 报表筛选。">区间选择</code>

<code src="./demos/input-date.tsx" description="输入框模式,可键盘输入 YYYY-MM-DD,也可点开日历。">输入框模式</code>

<code src="./demos/time-picker.tsx" description="日期 + 时间组合,适合任务截止时间。">日期 + 时间</code>

<code src="./demos/natural-language-picker.tsx" description="支持'明天 / 下周一'等自然语言输入。">自然语言输入</code>

## 最佳实践

- **trigger 显示已选日期**:不要让 trigger 只显示 "选择日期",用户看到选中后应立刻知道是哪天。
- **格式化使用 date-fns**:`format(date, "yyyy-MM-dd")` 配合 locale 进行本地化。
- **区间选择给合理默认**:不要让用户从空白拖拽,设置一个 7 天 / 30 天的默认范围。
- **输入式日期校验**:接收用户输入后立刻校验格式,无效时显示错误。

## API

参考 `Calendar` 与 `Popover` 的各自 API。本组件没有单独的 props,完全由两者组合而成。
