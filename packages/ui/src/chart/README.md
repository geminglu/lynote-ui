---
category: Components
title: Chart 图表
subtitle: Chart 图表
demo:
  cols: 1
group:
  title: 数据展示
  order: 2
nav: 组件
toc: content
background: #111
compact: true
---

Chart 是对 [Recharts](https://recharts.org/) 的轻量包装,提供主题化的颜色变量与 Tooltip 组件,让你在保留 Recharts 完整 API 的同时,获得与设计系统一致的视觉。

## 特性

- **`ChartContainer` 包裹 Recharts**:注入 CSS 变量 `--color-<key>`,自动跟随暗色主题。
- **`ChartConfig`**:声明每个数据系列的 `label` 与 `color`,工具提示自动读取。
- **`ChartTooltipContent`**:精致的工具提示,自带颜色块、标签、数值格式化。
- **响应式**:`ChartContainer` 内部用 ResponsiveContainer,自动撑满父容器。

## 何时使用

- Dashboard / 仪表盘的趋势图、对比图。
- 报表分析(月度收入、用户增长)。
- 小型嵌入式 sparkline。

## 何时不使用

- 大数据 / 实时流图——使用 ECharts / D3 等更专业的方案。
- 仅需百分比指示器——使用 `Progress`。

## 导入

```ts | pure
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
  type ChartConfig,
} from "lynote-ui/chart";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid } from "recharts";
```

## 代码演示

<code src="./demos/base.tsx" description="柱状图,展示 ChartConfig + Tooltip 的最小用法。">柱状图</code>

<code src="./demos/line.tsx" description="折线图,展示多个数据系列共享 ChartConfig。">折线图</code>

## 最佳实践

- **`ChartConfig` 用 CSS 变量**:用 `color: "hsl(var(--chart-1))"` 来跟随暗色主题。
- **数据系列 ≤ 5**:超过会让图表读不清。
- **永远配 Tooltip**:`<ChartTooltip content={<ChartTooltipContent />} />`,Recharts 自带的 tooltip 风格与设计系统不一致。
- **响应式断点**:在 mobile 上隐藏次要 axis 或换成更简化的图。

## API

### ChartContainer

| 参数             | 说明                                                      | 类型                                | 默认值                    |
| ---------------- | --------------------------------------------------------- | ----------------------------------- | ------------------------- |
| config           | 数据系列的元信息（必填）                                  | `ChartConfig`                       | -                         |
| id               | 自定义图表 id（用于注入 CSS 变量；缺省时自动生成）        | `string`                            | -                         |
| initialDimension | `ResponsiveContainer` 初始尺寸                            | `{ width: number; height: number }` | `{ width: 0, height: 0 }` |
| className        | 自定义类名                                                | `string`                            | -                         |
| children         | 一个 Recharts 图表（作为 `ResponsiveContainer` 的子节点） | `React.ReactNode`                   | -                         |
| ...props         | 原生 `<div>` 属性                                         | `React.ComponentProps<"div">`       | -                         |

### ChartConfig

```ts | pure
type ChartConfig = Record<
  string,
  {
    label?: React.ReactNode;
    icon?: React.ComponentType;
    color?: string;
    theme?: { light: string; dark: string };
  }
>;
```

每个 key 会变成 CSS 变量 `--color-<key>`,可在子组件中以 `fill="var(--color-foo)"` 使用。

### ChartTooltip

直接复用 Recharts 的 `Tooltip` 组件，参考 [Recharts Tooltip 文档](https://recharts.org/en-US/api/Tooltip)。通过 `content` 注入自定义内容（如 `ChartTooltipContent`）。

### ChartTooltipContent

开箱即用的精致 tooltip，与 `ChartConfig` 联动渲染图例与颜色。

| 参数           | 说明                                                     | 类型                                                     | 默认值  |
| -------------- | -------------------------------------------------------- | -------------------------------------------------------- | ------- |
| indicator      | 颜色指示器样式                                           | `"line" \| "dot" \| "dashed"`                            | `"dot"` |
| hideLabel      | 是否隐藏顶部 label                                       | `boolean`                                                | `false` |
| hideIndicator  | 是否隐藏颜色指示器                                       | `boolean`                                                | `false` |
| nameKey        | 从 payload 中读取 name 字段的 key                        | `string`                                                 | -       |
| labelKey       | 从 payload 中读取 label 字段的 key                       | `string`                                                 | -       |
| labelFormatter | 自定义 label 渲染                                        | `(value: any, payload: Payload[]) => React.ReactNode`    | -       |
| labelClassName | label 的 className                                       | `string`                                                 | -       |
| formatter      | 自定义每一行的渲染                                       | `(value, name, item, index, payload) => React.ReactNode` | -       |
| color          | 强制使用的颜色（缺省取 `ChartConfig` 中对应 key 的颜色） | `string`                                                 | -       |
| className      | 自定义类名                                               | `string`                                                 | -       |
| ...props       | 透传 Recharts `DefaultTooltipContentProps`               | -                                                        | -       |

### ChartLegend

直接复用 Recharts 的 `Legend` 组件，通过 `content` 注入 `ChartLegendContent`。

### ChartLegendContent

| 参数          | 说明                                      | 类型                            | 默认值     |
| ------------- | ----------------------------------------- | ------------------------------- | ---------- |
| hideIcon      | 是否隐藏前面的颜色 / icon                 | `boolean`                       | `false`    |
| nameKey       | 从 payload 中读取 name 字段的 key         | `string`                        | -          |
| verticalAlign | 图例位置（影响上下 padding）              | `"top" \| "middle" \| "bottom"` | `"bottom"` |
| className     | 自定义类名                                | `string`                        | -          |
| ...props      | 透传 Recharts `DefaultLegendContentProps` | -                               | -          |

### ChartStyle

内部使用：注入 `--color-<key>` CSS 变量供 Recharts 子组件读取。一般无需直接使用。

### useChart

读取当前 Chart 上下文的 hook，返回 `{ config: ChartConfig }`，仅可在 `<ChartContainer>` 内部使用。
