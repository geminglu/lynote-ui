---
category: Components
title: Carousel 轮播图
subtitle: Carousel 轮播图
demo:
  cols: 1
group:
  title: 数据展示
  order: 7
nav: 组件
toc: content
background: #111
compact: true
---

Carousel 用于以可滑动的方式展示一组卡片 / 图片。基于 [embla-carousel-react](https://www.embla-carousel.com/),提供水平 / 垂直方向、惯性滚动、API 操控等能力。

## 特性

- **水平 / 垂直方向**:`orientation="horizontal" | "vertical"`。
- **Embla API**:通过 `setApi` 拿到底层 API,可监听 select、动态获取索引。
- **响应式 basis**:配合 Tailwind 的 `md:basis-1/2` 在不同断点显示多张。
- **键盘可达**:左右方向键切换页面。

## 何时使用

- 首页 hero 区的图片轮播。
- 商品 / 资源卡片列表。
- 短视频流式滚动。
- 移动端的图片 / 内容横滑。

## 何时不使用

- 重要信息——轮播会让用户错过关键内容。
- 数据密集的列表——使用 `Table` / `ScrollArea`。
- 步骤引导——使用 Stepper 或 Tabs。

## 导入

```ts | pure
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
} from "lynote-ui/carousel";
```

## 代码演示

<code src="./demos/base.tsx">基本用法</code>

<code src="./demos/vertical.tsx" description="垂直方向 + 每屏显示半张。">垂直方向</code>

<code src="./demos/with-api.tsx" description="通过 `setApi` 拿到 Embla 实例,实时显示当前页码。">读取当前索引</code>

## 最佳实践

- **响应式 basis**:`CarouselItem` 上加 `md:basis-1/2` 让宽屏一次显示多张。
- **Embla 插件**:autoplay、wheel、fade 等通过 `plugins={[Autoplay()]}` 传入。
- **避免太多张**:超过 8 张考虑分组或换成 `ScrollArea` 横向滚动 + tag 过滤。
- **首屏不要 autoplay**:用户可能正在阅读,自动滚动会让他们失焦。

## API

### Carousel

| 参数        | 说明                | 类型                         | 默认值         |
| ----------- | ------------------- | ---------------------------- | -------------- |
| orientation | 方向                | `"horizontal" \| "vertical"` | `"horizontal"` |
| opts        | Embla 配置          | `EmblaOptionsType`           | -              |
| plugins     | Embla 插件          | `EmblaPluginType[]`          | -              |
| setApi      | 接收 Embla API 实例 | `(api: CarouselApi) => void` | -              |

### CarouselContent / CarouselItem

布局容器,`CarouselItem` 支持响应式 basis。

### CarouselPrevious / CarouselNext

上下页按钮,绝对定位在 Carousel 边缘。

### CarouselApi

```ts | pure
type CarouselApi = UseEmblaCarouselType[1];
```

由 embla 提供,常用方法:

| 方法                   | 说明         |
| ---------------------- | ------------ |
| `scrollPrev()`         | 上一页       |
| `scrollNext()`         | 下一页       |
| `scrollTo(index)`      | 跳到指定索引 |
| `selectedScrollSnap()` | 当前索引     |
| `on("select", fn)`     | 监听切换事件 |
