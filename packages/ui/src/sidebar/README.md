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

## 最佳实践

- **`SidebarProvider` 包根节点**:所有 Sidebar 相关组件必须放在 Provider 内部。
- **`SidebarMenuButton` 是焦点单元**:按钮上加 `aria-current` / `isActive` 让当前路由高亮。
- **图标 + 文字**:每个 MenuItem 配一个 `lucide-react` 图标,折叠状态下只显示图标。
- **`SidebarTrigger` 放在 SidebarInset 头部**:让用户随时能折叠侧栏。
- **持久化选择**:用 `defaultOpen` + cookie 把用户的折叠偏好保存下来。

## API

### SidebarProvider

| 参数         | 说明            | 类型                      | 默认值 |
| ------------ | --------------- | ------------------------- | ------ |
| defaultOpen  | 默认展开 / 折叠 | `boolean`                 | `true` |
| open         | 受控展开状态    | `boolean`                 | -      |
| onOpenChange | 状态变化回调    | `(open: boolean) => void` | -      |

### Sidebar

| 参数        | 说明          | 类型                                 | 默认值        |
| ----------- | ------------- | ------------------------------------ | ------------- |
| side        | 显示在左 / 右 | `"left" \| "right"`                  | `"left"`      |
| variant     | 视觉变体      | `"sidebar" \| "floating" \| "inset"` | `"sidebar"`   |
| collapsible | 折叠方式      | `"offcanvas" \| "icon" \| "none"`    | `"offcanvas"` |

### 子组件

- `SidebarHeader` / `SidebarContent` / `SidebarFooter`:整体结构区域。
- `SidebarGroup` / `SidebarGroupLabel` / `SidebarGroupContent`:分组容器。
- `SidebarMenu` / `SidebarMenuItem` / `SidebarMenuButton`:菜单项核心。
- `SidebarMenuSub` / `SidebarMenuSubItem` / `SidebarMenuSubButton`:二级子菜单。
- `SidebarSeparator`:分隔线。
- `SidebarRail`:折叠后的轨道区域。
- `SidebarInset`:主内容区,自动让出侧栏宽度。
- `SidebarTrigger`:折叠 / 展开按钮。
