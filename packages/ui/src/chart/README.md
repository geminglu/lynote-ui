---
category: Components
title: Chart 图表
subtitle: Chart 图表
demo:
  cols: 1
group:
  title: 数据展示
  order: 11
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
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
  ChartLegend,
  ChartLegendContent,
} from "lynote-ui";
```

:::

图表组件，基于 Recharts 构建，用于展示数据可视化图表。

## 代码演示

<code src="./demos/base.tsx">基本用法</code>

## API

### ChartContainer

图表容器组件。

| 参数      | 说明              | 类型                          | 默认值 |
| --------- | ----------------- | ----------------------------- | ------ |
| id        | 图表 ID           | `string`                      | -      |
| config    | 图表配置          | `ChartConfig`                 | -      |
| className | 自定义类名        | `string`                      | -      |
| ...props  | 其他原生 div 属性 | `React.ComponentProps<"div">` | -      |

### ChartTooltip

图表提示框容器。

| 参数     | 说明                       | 类型                                                     | 默认值 |
| -------- | -------------------------- | -------------------------------------------------------- | ------ |
| ...props | 其他 Recharts Tooltip 属性 | `React.ComponentProps<typeof RechartsPrimitive.Tooltip>` | -      |

### ChartTooltipContent

图表提示框内容。

| 参数     | 说明         | 类型                                                     | 默认值 |
| -------- | ------------ | -------------------------------------------------------- | ------ |
| ...props | 其他原生属性 | `React.ComponentProps<typeof RechartsPrimitive.Tooltip>` | -      |

### ChartLegend

图例容器。

| 参数     | 说明                      | 类型                                                    | 默认值 |
| -------- | ------------------------- | ------------------------------------------------------- | ------ |
| ...props | 其他 Recharts Legend 属性 | `React.ComponentProps<typeof RechartsPrimitive.Legend>` | -      |

### ChartLegendContent

图例内容。

| 参数     | 说明         | 类型                                                    | 默认值 |
| -------- | ------------ | ------------------------------------------------------- | ------ |
| ...props | 其他原生属性 | `React.ComponentProps<typeof RechartsPrimitive.Legend>` | -      |
