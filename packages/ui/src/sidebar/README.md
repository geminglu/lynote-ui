---
category: Components
title: Sidebar 侧边栏
subtitle: Sidebar 侧边栏
demo:
  cols: 1
group:
  title: 导航
  order: 1
nav: 组件
toc: content
background: #111
compact: true
---

Sidebar 是后台管理界面的左侧 / 右侧导航栏。它由一组结构化子组件组成,支持折叠 / 展开、子菜单、移动端自适应。需要在外层挂 `SidebarProvider` 提供上下文。

## 特性

- **可折叠 / 展开**:配合 `SidebarTrigger` 切换全宽与图标模式。
- **响应式**:窄屏自动切换为抽屉模式。
- **结构化子组件**:`Sidebar` / `SidebarHeader` / `SidebarContent` / `SidebarFooter` / `SidebarGroup` / `SidebarMenu` / `SidebarMenuItem` / `SidebarMenuButton`。
- **子菜单**:支持嵌套的二级菜单。
- **持久化**:状态可通过 SidebarProvider 选项持久化到 cookie / localStorage。

## 何时使用

- 后台管理 / 控制台的主导航。
- 文档站的侧边目录。
- 多模块应用的功能切换。

## 何时不使用

- 简单单页应用——使用顶部 `NavigationMenu`。
- 移动端为主——使用 `Sheet` 抽屉式导航。
- 二级页内的局部导航——使用 `Tabs` 或子路由。

## 导入

```ts | pure
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarInset,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarMenuSub,
  SidebarMenuSubButton,
  SidebarMenuSubItem,
  SidebarProvider,
  SidebarRail,
  SidebarSeparator,
  SidebarTrigger,
} from "lynote-ui/sidebar";
```

## 组件结构

```tsx | pure
<SidebarProvider>
  <Sidebar>
    <SidebarHeader />
    <SidebarContent>
      <SidebarGroup>
        <SidebarGroupLabel />
        <SidebarGroupContent>
          <SidebarMenu>
            <SidebarMenuItem>
              <SidebarMenuButton />
            </SidebarMenuItem>
          </SidebarMenu>
        </SidebarGroupContent>
      </SidebarGroup>
    </SidebarContent>
    <SidebarFooter />
  </Sidebar>
  <SidebarInset>
    <SidebarTrigger />
    {/* 主内容 */}
  </SidebarInset>
</SidebarProvider>
```

## 代码演示

<code src="./demos/base.tsx" description="完整的侧边栏 + 主内容区布局。">基本用法</code>

<code src="./demos/icon-collapsible.tsx" description="使用 `collapsible=\"icon\"` 和 `tooltip` 构建可折叠图标侧栏。">图标折叠</code>

<code src="./demos/with-footer.tsx" description="组合二级菜单、分隔线和页脚账号区。">带页脚与子菜单</code>

## 最佳实践

- **`SidebarProvider` 包根节点**:所有 Sidebar 相关组件必须放在 Provider 内部。
- **`SidebarMenuButton` 是焦点单元**:按钮上加 `aria-current` / `isActive` 让当前路由高亮。
- **图标 + 文字**:每个 MenuItem 配一个 `lucide-react` 图标,折叠状态下只显示图标。
- **`SidebarTrigger` 放在 SidebarInset 头部**:让用户随时能折叠侧栏。
- **持久化选择**:用 `defaultOpen` + cookie 把用户的折叠偏好保存下来。

## API

### SidebarProvider

侧边栏上下文 Provider，所有 Sidebar 相关组件都必须放在它内部。会自动监听 `Ctrl/Cmd + B` 切换折叠，并将状态写入 cookie。

| 参数         | 说明                                   | 类型                          | 默认值 |
| ------------ | -------------------------------------- | ----------------------------- | ------ |
| defaultOpen  | 默认展开 / 折叠                        | `boolean`                     | `true` |
| open         | 受控展开状态                           | `boolean`                     | -      |
| onOpenChange | 状态变化回调                           | `(open: boolean) => void`     | -      |
| className    | 包装容器类名                           | `string`                      | -      |
| style        | 用于覆盖 `--sidebar-width` 等 CSS 变量 | `React.CSSProperties`         | -      |
| children     | 子节点                                 | `React.ReactNode`             | -      |
| ...props     | 原生 `<div>` 属性                      | `React.ComponentProps<"div">` | -      |

### Sidebar

| 参数        | 说明              | 类型                                 | 默认值        |
| ----------- | ----------------- | ------------------------------------ | ------------- |
| side        | 显示在左 / 右     | `"left" \| "right"`                  | `"left"`      |
| variant     | 视觉变体          | `"sidebar" \| "floating" \| "inset"` | `"sidebar"`   |
| collapsible | 折叠方式          | `"offcanvas" \| "icon" \| "none"`    | `"offcanvas"` |
| className   | 自定义类名        | `string`                             | -             |
| children    | Sidebar 内容      | `React.ReactNode`                    | -             |
| ...props    | 原生 `<div>` 属性 | `React.ComponentProps<"div">`        | -             |

### SidebarTrigger

折叠 / 展开按钮，渲染为 `<Button variant="ghost" />`，自带菜单图标。

| 参数      | 说明                             | 类型                                         | 默认值 |
| --------- | -------------------------------- | -------------------------------------------- | ------ |
| onClick   | 点击回调（会先调用，再触发折叠） | `React.MouseEventHandler<HTMLButtonElement>` | -      |
| className | 自定义类名                       | `string`                                     | -      |
| ...props  | 透传 `Button` 属性               | `React.ComponentProps<typeof Button>`        | -      |

### SidebarRail

折叠后的轨道区域，悬停时可作为展开热区。

| 参数      | 说明                 | 类型                             | 默认值 |
| --------- | -------------------- | -------------------------------- | ------ |
| className | 自定义类名           | `string`                         | -      |
| ...props  | 原生 `<button>` 属性 | `React.ComponentProps<"button">` | -      |

### SidebarInset

主内容区域，自动让出侧栏宽度，并适配 `variant="inset"` 的圆角与阴影。

| 参数      | 说明               | 类型                           | 默认值 |
| --------- | ------------------ | ------------------------------ | ------ |
| className | 自定义类名         | `string`                       | -      |
| children  | 主内容             | `React.ReactNode`              | -      |
| ...props  | 原生 `<main>` 属性 | `React.ComponentProps<"main">` | -      |

### SidebarInput

侧栏内的搜索输入框（基于 `Input` 包装，去除阴影）。

| 参数      | 说明              | 类型                                 | 默认值 |
| --------- | ----------------- | ------------------------------------ | ------ |
| className | 自定义类名        | `string`                             | -      |
| ...props  | 透传 `Input` 属性 | `React.ComponentProps<typeof Input>` | -      |

### SidebarHeader / SidebarContent / SidebarFooter

整体结构区域。

| 参数      | 说明              | 类型                          | 默认值 |
| --------- | ----------------- | ----------------------------- | ------ |
| className | 自定义类名        | `string`                      | -      |
| children  | 子节点            | `React.ReactNode`             | -      |
| ...props  | 原生 `<div>` 属性 | `React.ComponentProps<"div">` | -      |

### SidebarSeparator

分隔线，继承 `Separator` 属性。

### SidebarGroup / SidebarGroupContent

分组容器。

| 参数      | 说明              | 类型                          | 默认值 |
| --------- | ----------------- | ----------------------------- | ------ |
| className | 自定义类名        | `string`                      | -      |
| children  | 子节点            | `React.ReactNode`             | -      |
| ...props  | 原生 `<div>` 属性 | `React.ComponentProps<"div">` | -      |

### SidebarGroupLabel

分组标题，可通过 `render` 渲染为按钮等元素。

| 参数      | 说明           | 类型                                                        | 默认值 |
| --------- | -------------- | ----------------------------------------------------------- | ------ |
| render    | 自定义渲染元素 | `React.ReactElement \| ((props, state) => React.ReactNode)` | -      |
| className | 自定义类名     | `string`                                                    | -      |
| children  | 标题内容       | `React.ReactNode`                                           | -      |

### SidebarGroupAction

分组右上角的操作按钮。

| 参数      | 说明                 | 类型                                                        | 默认值 |
| --------- | -------------------- | ----------------------------------------------------------- | ------ |
| render    | 自定义渲染元素       | `React.ReactElement \| ((props, state) => React.ReactNode)` | -      |
| className | 自定义类名           | `string`                                                    | -      |
| ...props  | 原生 `<button>` 属性 | `React.ComponentProps<"button">`                            | -      |

### SidebarMenu / SidebarMenuItem

菜单列表与单项。

| 参数      | 说明       | 类型              | 默认值 |
| --------- | ---------- | ----------------- | ------ |
| className | 自定义类名 | `string`          | -      |
| children  | 子节点     | `React.ReactNode` | -      |

### SidebarMenuButton

菜单按钮，是侧栏的焦点单元。

| 参数      | 说明                                                 | 类型                                                        | 默认值      |
| --------- | ---------------------------------------------------- | ----------------------------------------------------------- | ----------- |
| isActive  | 是否为当前激活项（自动设置 `data-active`）           | `boolean`                                                   | `false`     |
| variant   | 视觉变体                                             | `"default" \| "outline"`                                    | `"default"` |
| size      | 按钮尺寸                                             | `"default" \| "sm" \| "lg"`                                 | `"default"` |
| tooltip   | 折叠态下显示的 tooltip 文本或 `TooltipContent` props | `string \| React.ComponentProps<typeof TooltipContent>`     | -           |
| render    | 多态渲染（如渲染为路由 `<Link />`）                  | `React.ReactElement \| ((props, state) => React.ReactNode)` | -           |
| className | 自定义类名                                           | `string`                                                    | -           |
| ...props  | 原生 `<button>` 属性                                 | `React.ComponentProps<"button">`                            | -           |

### SidebarMenuAction

菜单项右侧的次级操作按钮。

| 参数        | 说明                    | 类型                                                        | 默认值  |
| ----------- | ----------------------- | ----------------------------------------------------------- | ------- |
| showOnHover | 仅在 hover/focus 时显示 | `boolean`                                                   | `false` |
| render      | 自定义渲染元素          | `React.ReactElement \| ((props, state) => React.ReactNode)` | -       |
| className   | 自定义类名              | `string`                                                    | -       |
| ...props    | 原生 `<button>` 属性    | `React.ComponentProps<"button">`                            | -       |

### SidebarMenuBadge

菜单项右侧的徽标（如未读数）。

| 参数      | 说明              | 类型                          | 默认值 |
| --------- | ----------------- | ----------------------------- | ------ |
| className | 自定义类名        | `string`                      | -      |
| children  | 徽标内容          | `React.ReactNode`             | -      |
| ...props  | 原生 `<div>` 属性 | `React.ComponentProps<"div">` | -      |

### SidebarMenuSkeleton

加载占位行，自带随机宽度的 `<Skeleton />`。

| 参数      | 说明                   | 类型      | 默认值  |
| --------- | ---------------------- | --------- | ------- |
| showIcon  | 是否在左侧渲染图标占位 | `boolean` | `false` |
| className | 自定义类名             | `string`  | -       |

### SidebarMenuSub / SidebarMenuSubItem / SidebarMenuSubButton

二级子菜单：列表 / 单项 / 按钮。

| 参数      | 说明                   | 类型                                                        | 默认值  |
| --------- | ---------------------- | ----------------------------------------------------------- | ------- |
| isActive  | 子按钮：是否激活       | `boolean`                                                   | `false` |
| size      | 子按钮：尺寸           | `"sm" \| "md"`                                              | `"md"`  |
| render    | 子按钮：自定义渲染元素 | `React.ReactElement \| ((props, state) => React.ReactNode)` | -       |
| className | 自定义类名             | `string`                                                    | -       |

### useSidebar

获取当前 Sidebar 上下文，返回：

```ts
{
  state: "expanded" | "collapsed";
  open: boolean;
  setOpen: (open: boolean) => void;
  openMobile: boolean;
  setOpenMobile: (open: boolean) => void;
  isMobile: boolean;
  toggleSidebar: () => void;
}
```
