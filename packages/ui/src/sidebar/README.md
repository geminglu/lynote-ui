---
category: Components
title: Sidebar 侧边栏
subtitle: Sidebar 侧边栏
demo:
  cols: 1
group:
  title: 布局
  order: 6
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
  Sidebar,
  SidebarProvider,
  SidebarTrigger,
  SidebarContent,
  SidebarHeader,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupLabel,
  SidebarGroupContent,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
  SidebarMenuSub,
  SidebarMenuSubButton,
  SidebarMenuSubItem,
  useSidebar,
} from "lynote-ui";
```

:::

侧边栏组件，用于创建可折叠的侧边导航栏。

## 代码演示

<code src="./demos/base.tsx">基本用法</code>

## API

### SidebarProvider

侧边栏提供者组件，用于管理侧边栏状态。

| 参数         | 说明             | 类型                          | 默认值 |
| ------------ | ---------------- | ----------------------------- | ------ |
| defaultOpen  | 默认是否打开     | `boolean`                     | -      |
| open         | 是否打开（受控） | `boolean`                     | -      |
| onOpenChange | 打开状态变化回调 | `(open: boolean) => void`     | -      |
| ...props     | 其他原生属性     | `React.ComponentProps<"div">` | -      |

### Sidebar

侧边栏的根容器组件。

| 参数        | 说明         | 类型                                                     | 默认值      |
| ----------- | ------------ | -------------------------------------------------------- | ----------- |
| variant     | 侧边栏变体   | `"sidebar" \| "inset" \| "floating" \| "floating-inset"` | `"sidebar"` |
| collapsible | 是否可折叠   | `"offcanvas" \| "icon" \| false`                         | -           |
| className   | 自定义类名   | `string`                                                 | -           |
| ...props    | 其他原生属性 | `React.ComponentProps<"aside">`                          | -           |

### SidebarTrigger

侧边栏触发器按钮。

| 参数     | 说明             | 类型                                  | 默认值 |
| -------- | ---------------- | ------------------------------------- | ------ |
| ...props | 其他 Button 属性 | `React.ComponentProps<typeof Button>` | -      |

### SidebarContent

侧边栏内容区域。

| 参数      | 说明         | 类型                          | 默认值 |
| --------- | ------------ | ----------------------------- | ------ |
| className | 自定义类名   | `string`                      | -      |
| ...props  | 其他原生属性 | `React.ComponentProps<"div">` | -      |

### SidebarHeader

侧边栏头部区域。

| 参数      | 说明         | 类型                          | 默认值 |
| --------- | ------------ | ----------------------------- | ------ |
| className | 自定义类名   | `string`                      | -      |
| ...props  | 其他原生属性 | `React.ComponentProps<"div">` | -      |

### SidebarFooter

侧边栏底部区域。

| 参数      | 说明         | 类型                          | 默认值 |
| --------- | ------------ | ----------------------------- | ------ |
| className | 自定义类名   | `string`                      | -      |
| ...props  | 其他原生属性 | `React.ComponentProps<"div">` | -      |

### SidebarGroup

侧边栏分组容器。

| 参数      | 说明         | 类型                          | 默认值 |
| --------- | ------------ | ----------------------------- | ------ |
| className | 自定义类名   | `string`                      | -      |
| ...props  | 其他原生属性 | `React.ComponentProps<"div">` | -      |

### SidebarGroupLabel

侧边栏分组标签。

| 参数      | 说明         | 类型                          | 默认值 |
| --------- | ------------ | ----------------------------- | ------ |
| className | 自定义类名   | `string`                      | -      |
| ...props  | 其他原生属性 | `React.ComponentProps<"div">` | -      |

### SidebarGroupContent

侧边栏分组内容。

| 参数      | 说明         | 类型                          | 默认值 |
| --------- | ------------ | ----------------------------- | ------ |
| className | 自定义类名   | `string`                      | -      |
| ...props  | 其他原生属性 | `React.ComponentProps<"div">` | -      |

### SidebarMenu

侧边栏菜单容器。

| 参数      | 说明         | 类型                         | 默认值 |
| --------- | ------------ | ---------------------------- | ------ |
| className | 自定义类名   | `string`                     | -      |
| ...props  | 其他原生属性 | `React.ComponentProps<"ul">` | -      |

### SidebarMenuItem

侧边栏菜单项。

| 参数      | 说明         | 类型                         | 默认值 |
| --------- | ------------ | ---------------------------- | ------ |
| className | 自定义类名   | `string`                     | -      |
| ...props  | 其他原生属性 | `React.ComponentProps<"li">` | -      |

### SidebarMenuButton

侧边栏菜单按钮。

| 参数      | 说明         | 类型                             | 默认值 |
| --------- | ------------ | -------------------------------- | ------ |
| isActive  | 是否激活     | `boolean`                        | -      |
| tooltip   | 工具提示内容 | `string \| React.ReactNode`      | -      |
| className | 自定义类名   | `string`                         | -      |
| ...props  | 其他原生属性 | `React.ComponentProps<"button">` | -      |

### SidebarMenuSub

侧边栏子菜单。

| 参数     | 说明         | 类型                         | 默认值 |
| -------- | ------------ | ---------------------------- | ------ |
| ...props | 其他原生属性 | `React.ComponentProps<"ul">` | -      |

### SidebarMenuSubButton

侧边栏子菜单按钮。

| 参数     | 说明         | 类型                             | 默认值 |
| -------- | ------------ | -------------------------------- | ------ |
| ...props | 其他原生属性 | `React.ComponentProps<"button">` | -      |

### SidebarMenuSubItem

侧边栏子菜单项。

| 参数     | 说明         | 类型                         | 默认值 |
| -------- | ------------ | ---------------------------- | ------ |
| ...props | 其他原生属性 | `React.ComponentProps<"li">` | -      |

### useSidebar

侧边栏 Hook，用于访问侧边栏状态和方法。

返回值：

| 属性          | 说明               | 类型                        |
| ------------- | ------------------ | --------------------------- |
| state         | 侧边栏状态         | `"expanded" \| "collapsed"` |
| open          | 是否打开           | `boolean`                   |
| setOpen       | 设置打开状态       | `(open: boolean) => void`   |
| openMobile    | 移动端是否打开     | `boolean`                   |
| setOpenMobile | 设置移动端打开状态 | `(open: boolean) => void`   |
| isMobile      | 是否为移动端       | `boolean`                   |
| toggleSidebar | 切换侧边栏         | `() => void`                |
