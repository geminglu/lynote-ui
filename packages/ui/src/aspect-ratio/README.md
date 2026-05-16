---
category: Components
title: AspectRatio 宽高比
subtitle: AspectRatio 宽高比
demo:
  cols: 1
group:
  title: 布局
  order: 1
nav: 组件
toc: content
background: #111
compact: true
---

按指定宽高比固定元素的高度，常用于图片、视频、嵌入式内容的占位与防抖。

## 特性

- **基于原生 `aspect-ratio` CSS**：无 JS 计算开销。
- **任意比例**：传入小数即可，如 `16 / 9`、`4 / 3`、`1`。
- **完全透明**：内部内容铺满容器，可以是 img、video、iframe、div。

## 何时使用

- 图片 / 视频网格，避免加载时高度跳动。
- 卡片封面、视频嵌入、地图 iframe 等需要固定比例的场景。
- 加载占位（结合 `Skeleton`）。

## 何时不使用

- 内容高度由文本决定——不要强行用 AspectRatio 包住会被裁切。
- 比例随窗口变化——直接用 Tailwind 的 `aspect-*` 工具类即可。

## 导入

```ts | pure
import { AspectRatio } from "lynote-ui/aspect-ratio";
```

## 代码演示

<code src="./demos/base.tsx">基本用法</code>

<code src="./demos/image.tsx" description="包裹一张图片，使用 `object-cover` 让图片铺满容器。">图片占位</code>

<code src="./demos/ratios.tsx" description="常用比例对比。">常用比例</code>

## API

### AspectRatio

| 参数      | 说明                        | 类型                          | 默认值 |
| --------- | --------------------------- | ----------------------------- | ------ |
| ratio     | 宽高比（必填），如 `16 / 9` | `number`                      | -      |
| className | 自定义类名                  | `string`                      | -      |
| ...props  | 透传原生 `<div>` 属性       | `React.ComponentProps<"div">` | -      |
