---
category: Components
title: Attachment 附件
subtitle: Attachment 附件
demo:
  cols: 1
group:
  title: 数据展示
  order: 8
nav: 组件
toc: content
background: #111
compact: true
---

Attachment 用于展示文件或图片附件，包含媒体预览、文件名、元数据、上传状态与操作。组件实现与用法参考 [shadcn/ui Attachment](https://ui.shadcn.com/docs/components/base/attachment)。

## 特性

- 支持 `idle`、`uploading`、`processing`、`error` 和 `done` 五种状态。
- 支持图标或图片媒体，以及水平、垂直两种布局。
- 提供 `default`、`sm`、`xs` 三种尺寸。
- `AttachmentTrigger` 可让整张附件卡可点击，同时保留操作按钮的独立交互。
- `AttachmentGroup` 提供横向滚动与吸附排列。

## 导入

```ts | pure
import {
  Attachment,
  AttachmentAction,
  AttachmentActions,
  AttachmentContent,
  AttachmentDescription,
  AttachmentGroup,
  AttachmentMedia,
  AttachmentTitle,
  AttachmentTrigger,
} from "lynote-ui/attachment";
```

## 组件结构

```tsx | pure
<Attachment>
  <AttachmentMedia />
  <AttachmentContent>
    <AttachmentTitle />
    <AttachmentDescription />
  </AttachmentContent>
  <AttachmentActions>
    <AttachmentAction />
  </AttachmentActions>
  <AttachmentTrigger />
</Attachment>
```

## 代码演示

<code src="./demos/base.tsx">基本用法</code>

<code src="./demos/states.tsx" description="通过 state 表示附件从待上传到完成或失败的生命周期。">上传状态</code>

<code src="./demos/group.tsx" description="AttachmentGroup 将多个附件放入可横向滚动的吸附列表。">附件组</code>

<code src="./demos/sizes.tsx" description="default、sm 与 xs 三种尺寸。">尺寸</code>

## 最佳实践

- `state` 应反映真实上传状态，不要仅作为颜色装饰。
- 图片附件使用 `AttachmentMedia variant="image"`，并为图片提供准确的 `alt`。
- 纯图标 `AttachmentAction` 必须提供包含操作对象的 `aria-label`。
- 使用 `AttachmentTrigger` 时，把删除、重试等操作放在 `AttachmentActions` 中，避免点击区域冲突。
- 长文件名会自动截断；完整名称可通过 `title` 或预览界面提供。

## API

### Attachment

| 参数        | 说明         | 类型                                                         | 默认值         |
| ----------- | ------------ | ------------------------------------------------------------ | -------------- |
| state       | 上传生命周期 | `"idle" \| "uploading" \| "processing" \| "error" \| "done"` | `"done"`       |
| size        | 尺寸         | `"default" \| "sm" \| "xs"`                                  | `"default"`    |
| orientation | 排列方向     | `"horizontal" \| "vertical"`                                 | `"horizontal"` |
| className   | 自定义类名   | `string`                                                     | -              |
| ...props    | 原生属性     | `React.ComponentProps<"div">`                                | -              |

### AttachmentMedia

媒体区域。`variant="image"` 会让内部图片填满区域并使用裁切布局。

| 参数      | 说明       | 类型                          | 默认值   |
| --------- | ---------- | ----------------------------- | -------- |
| variant   | 媒体类型   | `"icon" \| "image"`           | `"icon"` |
| className | 自定义类名 | `string`                      | -        |
| ...props  | 原生属性   | `React.ComponentProps<"div">` | -        |

### AttachmentContent

文件信息容器，通常包含 `AttachmentTitle` 和 `AttachmentDescription`。三者分别透传 `<div>`、`<span>`、`<span>` 的原生属性。

### AttachmentActions / AttachmentAction

`AttachmentActions` 是操作容器；`AttachmentAction` 继承 `Button` 的全部参数，默认使用 `variant="ghost"`、`size="xs"` 和图标按钮布局。

### AttachmentTrigger

覆盖附件卡的交互层，默认渲染为 `<button type="button">`。可通过 `render` 改为链接或与弹窗触发器组合。

| 参数      | 说明         | 类型                              | 默认值     |
| --------- | ------------ | --------------------------------- | ---------- |
| render    | 自定义根元素 | `useRender.RenderProp`            | -          |
| type      | 按钮类型     | `"button" \| "submit" \| "reset"` | `"button"` |
| className | 自定义类名   | `string`                          | -          |

### AttachmentGroup

横向滚动的附件列表容器，透传原生 `<div>` 属性。
