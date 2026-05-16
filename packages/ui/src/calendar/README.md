---
category: Components
title: Calendar 日历
subtitle: Calendar 日历
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

Calendar 是基于 [react-day-picker](https://daypicker.dev/) 的日历组件,支持单选 / 多选 / 区间选择 / 多月并排显示。常作为 `DatePicker` 的底层视图,也可独立用作日历视图。

## 特性

- **3 种选择模式**:`mode="single" | "multiple" | "range"`。
- **多月并排**:`numberOfMonths={2}` 展示左右两个月,适合区间选择。
- **标题模式**:`captionLayout="label" | "dropdown"` 等。
- **国际化**:通过 `locale` 设置语言。
- **键盘可达**:方向键导航日期,`Enter` 选中。

## 何时使用

- 表单中独立的日历视图(无需弹出)。
- 入住 / 退房日期、起止日期等区间选择。
- 多日期选择(如休假日)。

## 何时不使用

- 紧凑空间——使用 `DatePicker`(Popover + Calendar)。
- 输入式日期——使用 `DatePicker` 的 input 模式。

## 导入

```ts | pure
import { Calendar } from "lynote-ui/calendar";
```

## 代码演示

<code src="./demos/base.tsx" description="单选模式,带年月下拉。">基本用法</code>

<code src="./demos/multiple.tsx" description="多日期选择,适合休假 / 排班场景。">多选模式</code>

<code src="./demos/range.tsx" description="区间选择 + 多月并排,常用于酒店预订。">区间选择</code>

## 最佳实践

- **始终设置 `locale`**:在中文环境使用 `import { zhCN } from "date-fns/locale"` 并传入。
- **范围模式给合理默认值**:`from` / `to` 同时设置,避免用户从空开始拖。
- **`captionLayout="dropdown"`**:让用户能快速跳到指定年月,避免逐月翻页。

## API

继承 [react-day-picker](https://daypicker.dev/api/interfaces/DayPickerBase) 的所有 props。常用:

| 参数            | 说明                          | 类型                                                             | 默认值     |
| --------------- | ----------------------------- | ---------------------------------------------------------------- | ---------- |
| mode            | 选择模式                      | `"single" \| "multiple" \| "range"`                              | `"single"` |
| selected        | 当前选中(类型随 mode 变化)    | `Date \| Date[] \| DateRange`                                    | -          |
| onSelect        | 选择变化回调                  | 同 selected 类型                                                 | -          |
| numberOfMonths  | 同时显示几个月                | `number`                                                         | `1`        |
| captionLayout   | 标题样式                      | `"label" \| "dropdown" \| "dropdown-months" \| "dropdown-years"` | `"label"`  |
| locale          | 国际化语言                    | `Locale`                                                         | -          |
| buttonVariant   | 控制内部按钮的 Button variant | `Button["variant"]`                                              | `"ghost"`  |
| showOutsideDays | 是否显示前后月日期            | `boolean`                                                        | `true`     |
