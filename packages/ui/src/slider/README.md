---
category: Components
title: Slider 滑块
subtitle: Slider 滑块
demo:
  cols: 1
group:
  title: 表单
  order: 5
nav: 组件
toc: content
background: #111
compact: true
---

Slider 让用户通过拖拽一个滑块在连续区间内选择数值。支持单值、多值、区间(range)以及垂直方向。基于 Base UI Slider 原语,自动处理键盘导航与触摸手感。

## 特性

- **单值 / 多值 / 区间**:传入 `defaultValue={[20]}` / `[20, 80]` / `[20, 50, 80]` 即可。
- **可定制步长**:`step` 控制最小变化粒度。
- **键盘可达**:方向键 ±1,`PageUp/PageDown` ±10,`Home/End` 跳首尾。
- **垂直方向**:`orientation="vertical"`。
- **范围模式**:多个 thumb 时自动形成一条选中段(range)。

## 何时使用

- 音量、亮度、字号等连续值调节。
- 价格区间、日期区间筛选。
- 视频播放进度条。
- 视图缩放比例。

## 何时不使用

- 选择离散少量值(< 5)——使用 `RadioGroup` 或 `ToggleGroup`。
- 精确输入数值——配合 `Input type="number"` 双向同步,或单独使用 Input。
- 不连续的值跳跃——使用 `Select` 更直观。

## 导入

```ts | pure
import { Slider } from "lynote-ui/slider";
```

## 代码演示

<code src="./demos/base.tsx">基本用法</code>

<code src="./demos/controlled.tsx" description="`value` + `onValueChange` 进行受控。">受控用法</code>

<code src="./demos/range.tsx" description="区间筛选,如价格范围。">区间模式</code>

<code src="./demos/multiple.tsx">多个滑块</code>

<code src="./demos/vertical.tsx" description="垂直方向需要在父级提供高度。">垂直方向</code>

## 最佳实践

- **显示当前值**:让用户清楚拖到哪儿了,可在滑块旁实时显示数字。
- **合理的 `step`**:百分比用 1,音量用 1-5,音频时间用 0.1 秒。
- **范围模式默认值不要重叠**:两个 thumb 起始值要有合理间距。
- **垂直方向必须设置高度**:`orientation="vertical"` 时父容器需要 `h-*`。

## 无障碍与键盘交互

- 每个 thumb 自动 `role="slider"` + `aria-valuemin` / `aria-valuemax` / `aria-valuenow`。
- 当 `aria-label` 不够时可使用 `aria-labelledby` 关联可见 label。

| 按键                  | 行为                   |
| --------------------- | ---------------------- |
| `←` / `↓`             | 减小 1 个 step         |
| `→` / `↑`             | 增大 1 个 step         |
| `PageUp` / `PageDown` | 减小 / 增大 10 个 step |
| `Home` / `End`        | 跳到最小值 / 最大值    |

## API

### Slider

| 参数          | 说明           | 类型                         | 默认值         |
| ------------- | -------------- | ---------------------------- | -------------- |
| value         | 当前值(受控)   | `number[]`                   | -              |
| defaultValue  | 默认值(非受控) | `number[]`                   | `[min, max]`   |
| onValueChange | 值变化回调     | `(value: number[]) => void`  | -              |
| min           | 最小值         | `number`                     | `0`            |
| max           | 最大值         | `number`                     | `100`          |
| step          | 步长           | `number`                     | `1`            |
| orientation   | 排列方向       | `"horizontal" \| "vertical"` | `"horizontal"` |
| disabled      | 是否禁用       | `boolean`                    | `false`        |
| className     | 自定义类名     | `string`                     | -              |
