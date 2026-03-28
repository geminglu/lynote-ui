---
category: Components
title: Carousel 轮播图
subtitle: Carousel 轮播图
demo:
  cols: 1
group:
  title: 数据展示
  order: 10
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
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
} from "lynote-ui";
```

:::

轮播图组件，用于展示可滑动的图片或内容。

## 代码演示

<code src="./demos/base.tsx">基本用法</code>

## API

### Carousel

轮播图的根容器组件。

| 参数        | 说明              | 类型                          | 默认值         |
| ----------- | ----------------- | ----------------------------- | -------------- |
| orientation | 轮播方向          | `"horizontal" \| "vertical"`  | `"horizontal"` |
| opts        | Embla 轮播选项    | `CarouselOptions`             | -              |
| plugins     | Embla 插件        | `CarouselPlugin`              | -              |
| setApi      | API 设置回调      | `(api: CarouselApi) => void`  | -              |
| className   | 自定义类名        | `string`                      | -              |
| ...props    | 其他原生 div 属性 | `React.ComponentProps<"div">` | -              |

### CarouselContent

轮播图内容容器。

| 参数      | 说明              | 类型                          | 默认值 |
| --------- | ----------------- | ----------------------------- | ------ |
| className | 自定义类名        | `string`                      | -      |
| ...props  | 其他原生 div 属性 | `React.ComponentProps<"div">` | -      |

### CarouselItem

轮播图单个项目。

| 参数      | 说明              | 类型                          | 默认值 |
| --------- | ----------------- | ----------------------------- | ------ |
| className | 自定义类名        | `string`                      | -      |
| ...props  | 其他原生 div 属性 | `React.ComponentProps<"div">` | -      |

### CarouselPrevious

轮播图上一张按钮。

| 参数      | 说明             | 类型                                  | 默认值 |
| --------- | ---------------- | ------------------------------------- | ------ |
| className | 自定义类名       | `string`                              | -      |
| ...props  | 其他 Button 属性 | `React.ComponentProps<typeof Button>` | -      |

### CarouselNext

轮播图下一张按钮。

| 参数      | 说明             | 类型                                  | 默认值 |
| --------- | ---------------- | ------------------------------------- | ------ |
| className | 自定义类名       | `string`                              | -      |
| ...props  | 其他 Button 属性 | `React.ComponentProps<typeof Button>` | -      |
