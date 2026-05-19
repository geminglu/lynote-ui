---
category: Components
title: Item 列表项
subtitle: Item 列表项
demo:
  cols: 1
group:
  title: 数据展示
  order: 6
nav: 组件
toc: content
background: #111
compact: true
---

通用的列表项构件，提供 `ItemMedia`、`ItemContent`、`ItemActions`、`ItemHeader`、`ItemFooter` 等子组件以快速搭出"头像/图标 + 标题/描述 + 操作"的列表行。常用于设置项、用户列表、文件列表、通知列表等场景。

## 特性

- **三种变体**：`default`（无边框）/ `outline`（带边框）/ `muted`（次级背景）。
- **三种尺寸**：`xs` / `sm` / `default`。
- **多态渲染**：通过 `render` 可整体渲染为 `<a>` / `<button>`。
- **结构清晰**：所有子组件均通过 `data-slot` 标记，便于自定义样式。

## 何时使用

- 设置项 / 配置项的列表（图标 + 标题 + 描述 + 开关 / 按钮）。
- 用户成员管理列表。
- 通知 / 消息列表。
- 文件列表。

## 何时不使用

- 表格型数据展示——使用 `Table`。
- 大数据量长列表——使用虚拟列表库。
- 简单链接列表——直接 `<ul>` + Tailwind 即可。

## 导入

```ts | pure
import {
  Item,
  ItemActions,
  ItemContent,
  ItemDescription,
  ItemFooter,
  ItemGroup,
  ItemHeader,
  ItemMedia,
  ItemSeparator,
  ItemTitle,
} from "lynote-ui/item";
```

## 组件结构

```tsx | pure
<ItemGroup>
  <Item>
    <ItemMedia />
    <ItemContent>
      <ItemTitle />
      <ItemDescription />
    </ItemContent>
    <ItemActions />
  </Item>
  <ItemSeparator />
</ItemGroup>
```

## 代码演示

<code src="./demos/base.tsx">基本用法</code>

<code src="./demos/with-media.tsx" description="`ItemMedia variant='icon'` 渲染左侧图标；`variant='image'` 用于图片。">带图标</code>

<code src="./demos/with-action.tsx" description="右侧 `ItemActions` 放置管理按钮，搭配 `Avatar` 渲染用户列表。">用户列表（带操作）</code>

<code src="./demos/sizes.tsx" description="三种尺寸的紧凑度对比。">尺寸</code>

<code src="./demos/variant.tsx" description="三种变体的对比。">变体</code>

<code src="./demos/image.tsx" description="`ItemMedia variant='image'` 用于图片。">图片</code>

<code src="./demos/header.tsx" description="`ItemHeader` 用于图片。">图片</code>

## 最佳实践

- **`ItemDescription` 不超过 2 行**：组件默认 `line-clamp-2`，过长内容会截断。
- **多个 Item 用 `ItemGroup` 包裹**：保证间距与角色语义一致（`role="list"`）。
- **整行可点击使用 `render`**：`<Item render={<a href="..." />}>` 把整行渲染成链接。
- **危险操作不要直接放主区域**：删除等危险按钮放到 `ItemActions` 内并使用 `destructive` 变体。

## API

### Item

| 参数      | 说明                              | 类型                                | 默认值      |
| --------- | --------------------------------- | ----------------------------------- | ----------- |
| variant   | 视觉变体                          | `"default" \| "outline" \| "muted"` | `"default"` |
| size      | 尺寸                              | `"default" \| "sm" \| "xs"`         | `"default"` |
| render    | 多态渲染（如 `<a>` / `<button>`） | `React.ReactElement`                | -           |
| className | 自定义类名                        | `string`                            | -           |
| children  | 子组件                            | `React.ReactNode`                   | -           |

### ItemGroup

`role="list"` 容器，自动管理子项之间的间距。

| 参数      | 说明              | 类型                          | 默认值 |
| --------- | ----------------- | ----------------------------- | ------ |
| className | 自定义类名        | `string`                      | -      |
| children  | `Item` 列表       | `React.ReactNode`             | -      |
| ...props  | 原生 `<div>` 属性 | `React.ComponentProps<"div">` | -      |

### ItemMedia

| 参数      | 说明                             | 类型                             | 默认值      |
| --------- | -------------------------------- | -------------------------------- | ----------- |
| variant   | 媒体类型                         | `"default" \| "icon" \| "image"` | `"default"` |
| className | 自定义类名                       | `string`                         | -           |
| children  | 媒体内容（图标 / 图片 / Avatar） | `React.ReactNode`                | -           |
| ...props  | 原生 `<div>` 属性                | `React.ComponentProps<"div">`    | -           |

### ItemContent

垂直堆叠的标题+描述容器。

| 参数      | 说明              | 类型                          | 默认值 |
| --------- | ----------------- | ----------------------------- | ------ |
| className | 自定义类名        | `string`                      | -      |
| children  | 子节点            | `React.ReactNode`             | -      |
| ...props  | 原生 `<div>` 属性 | `React.ComponentProps<"div">` | -      |

### ItemTitle

单行标题，`line-clamp-1`。

| 参数      | 说明              | 类型                          | 默认值 |
| --------- | ----------------- | ----------------------------- | ------ |
| className | 自定义类名        | `string`                      | -      |
| children  | 标题内容          | `React.ReactNode`             | -      |
| ...props  | 原生 `<div>` 属性 | `React.ComponentProps<"div">` | -      |

### ItemDescription

最多两行的副本，`line-clamp-2`。

| 参数      | 说明            | 类型                        | 默认值 |
| --------- | --------------- | --------------------------- | ------ |
| className | 自定义类名      | `string`                    | -      |
| children  | 描述内容        | `React.ReactNode`           | -      |
| ...props  | 原生 `<p>` 属性 | `React.ComponentProps<"p">` | -      |

### ItemActions

右侧操作区域，自动垂直居中。

| 参数      | 说明              | 类型                          | 默认值 |
| --------- | ----------------- | ----------------------------- | ------ |
| className | 自定义类名        | `string`                      | -      |
| children  | 操作按钮          | `React.ReactNode`             | -      |
| ...props  | 原生 `<div>` 属性 | `React.ComponentProps<"div">` | -      |

### ItemHeader

跨整行的头部区域，常用于元数据 / 时间戳。

| 参数      | 说明              | 类型                          | 默认值 |
| --------- | ----------------- | ----------------------------- | ------ |
| className | 自定义类名        | `string`                      | -      |
| children  | 头部内容          | `React.ReactNode`             | -      |
| ...props  | 原生 `<div>` 属性 | `React.ComponentProps<"div">` | -      |

### ItemFooter

跨整行的底部区域。

| 参数      | 说明              | 类型                          | 默认值 |
| --------- | ----------------- | ----------------------------- | ------ |
| className | 自定义类名        | `string`                      | -      |
| children  | 底部内容          | `React.ReactNode`             | -      |
| ...props  | 原生 `<div>` 属性 | `React.ComponentProps<"div">` | -      |

### ItemSeparator

单项之间的横向分隔线，继承 `Separator` 的属性。

| 参数        | 说明                    | 类型                         | 默认值         |
| ----------- | ----------------------- | ---------------------------- | -------------- |
| orientation | 分隔方向                | `"horizontal" \| "vertical"` | `"horizontal"` |
| decorative  | 是否仅装饰（影响 ARIA） | `boolean`                    | `true`         |
| className   | 自定义类名              | `string`                     | -              |
