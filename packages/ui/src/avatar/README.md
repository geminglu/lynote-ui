---
category: Components
title: Avatar 头像
subtitle: Avatar 头像
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

呈现用户或实体的头像。基于 Base UI Avatar 原语，自动处理图片加载失败时的 fallback 状态，并支持角标、堆叠分组、尺寸变体。

## 特性

- **图片加载兜底**：`AvatarImage` 加载失败时自动切到 `AvatarFallback`，无需手动判断 onError。
- **三种尺寸**：`sm` / `default` / `lg`。
- **角标 / 在线状态**：`AvatarBadge` 自动定位到右下角，尺寸随头像变化。
- **堆叠分组**：`AvatarGroup` + `AvatarGroupCount` 实现"前 N + 剩余数"。

## 何时使用

- 用户列表中表达身份。
- 团队成员预览（堆叠展示）。
- 用户菜单 trigger。
- 评论 / 消息中的发件人头像。

## 何时不使用

- 大型用户卡片中的横向用户介绍——使用 Card + 普通 `<img>`。
- 装饰性的几何图形——使用 `Skeleton` 或纯 svg。

## 导入

```ts | pure
import {
  Avatar,
  AvatarBadge,
  AvatarFallback,
  AvatarGroup,
  AvatarGroupCount,
  AvatarImage,
} from "lynote-ui/avatar";
```

## 组件结构

```tsx | pure
<Avatar>
  <AvatarImage />
  <AvatarFallback />
  <AvatarBadge />
</Avatar>

<AvatarGroup>
  <Avatar />
  <AvatarGroupCount />
</AvatarGroup>
```

## 代码演示

<code src="./demos/base.tsx">基本用法</code>

<code src="./demos/sizes.tsx">尺寸</code>

<code src="./demos/fallback.tsx" description="图片加载失败时自动切到 `AvatarFallback`，可放文字或图标。">加载失败兜底</code>

<code src="./demos/with-badge.tsx" description="`AvatarBadge` 适合表达在线状态或认证标记。">带角标</code>

<code src="./demos/group.tsx">头像组</code>

## 最佳实践

- **始终提供 `alt`**：图片头像必须设置 `alt`，纯装饰场景给空字符串而非 `null`。
- **fallback 用首字母**：取用户名首字母（中文取姓氏），保持 1-2 字符。
- **加载缓慢仍然显示 fallback**：base-ui 会在图片加载完成前就先显示 fallback，避免空白闪烁。
- **堆叠分组不超过 5 个 +N**：超过会显得拥挤，4 + N 是黄金组合。

## API

### Avatar

| 参数      | 说明       | 类型                        | 默认值      |
| --------- | ---------- | --------------------------- | ----------- |
| size      | 头像尺寸   | `"sm" \| "default" \| "lg"` | `"default"` |
| className | 自定义类名 | `string`                    | -           |
| children  | 子组件     | `React.ReactNode`           | -           |

### AvatarImage

| 参数      | 说明             | 类型     | 默认值 |
| --------- | ---------------- | -------- | ------ |
| src       | 图片地址         | `string` | -      |
| alt       | 替代文本（必填） | `string` | -      |
| className | 自定义类名       | `string` | -      |

### AvatarFallback

图片加载失败 / 未提供时的兜底内容，常为首字母或图标。

| 参数      | 说明       | 类型              | 默认值 |
| --------- | ---------- | ----------------- | ------ |
| className | 自定义类名 | `string`          | -      |
| children  | 兜底内容   | `React.ReactNode` | -      |

### AvatarBadge

角标，自动定位到右下角，尺寸随父级 Avatar 自动调整。

| 参数      | 说明                 | 类型              | 默认值 |
| --------- | -------------------- | ----------------- | ------ |
| className | 自定义类名（如颜色） | `string`          | -      |
| children  | 角标内容（小图标）   | `React.ReactNode` | -      |

### AvatarGroup

堆叠多个 Avatar 的容器，自动负 margin 重叠。

| 参数      | 说明       | 类型              | 默认值 |
| --------- | ---------- | ----------------- | ------ |
| className | 自定义类名 | `string`          | -      |
| children  | 头像列表   | `React.ReactNode` | -      |

### AvatarGroupCount

"+N" 角色的圆形计数容器，需放在 `AvatarGroup` 末尾。

| 参数      | 说明          | 类型              | 默认值 |
| --------- | ------------- | ----------------- | ------ |
| className | 自定义类名    | `string`          | -      |
| children  | 内容（如 +6） | `React.ReactNode` | -      |
