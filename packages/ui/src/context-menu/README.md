---
category: Components
title: ContextMenu 右键菜单
subtitle: ContextMenu 右键菜单
demo:
  cols: 1
group:
  title: 导航
  order: 3
nav: 组件
toc: content
background: #111
compact: true
---

ContextMenu 在用户对触发区域右键(或长按)时弹出一组操作。基于 Base UI Context Menu 原语,适合承载与当前对象强相关的快捷操作,用法参考 shadcn/ui 的 Context Menu 文档模式。

## 特性

- **右键 / 长按触发**:桌面右键、移动长按。
- **完整菜单 API**:`Item` / `CheckboxItem` / `RadioItem` / `Sub` / `Group` / `Label` / `Separator` / `Shortcut`。
- **嵌套子菜单**:使用 `ContextMenuSub` 组织二级操作。
- **复选 / 单选项**:适合视图开关、排序方式、面板位置等状态设置。
- **危险操作变体**:`ContextMenuItem variant="destructive"` 用于删除、移除等高风险操作。
- **可访问语义**:菜单显示后焦点自动进入,符合 ARIA 规范。

## 何时使用

- 列表行 / 文件项的"更多操作"。
- 富文本 / 画布上的对象操作。
- 任意自定义触发区域上的快捷动作。

## 何时不使用

- 主要操作——放在显眼按钮中,不要藏到右键。
- 移动端为主的项目——长按发现性差,改用更明显的按钮。
- 简单导航——使用 `DropdownMenu`。

## 导入

```ts | pure
import {
  ContextMenu,
  ContextMenuCheckboxItem,
  ContextMenuContent,
  ContextMenuGroup,
  ContextMenuItem,
  ContextMenuLabel,
  ContextMenuPortal,
  ContextMenuRadioGroup,
  ContextMenuRadioItem,
  ContextMenuSeparator,
  ContextMenuShortcut,
  ContextMenuSub,
  ContextMenuSubContent,
  ContextMenuSubTrigger,
  ContextMenuTrigger,
} from "lynote-ui/context-menu";
```

## 代码演示

<code src="./demos/base.tsx">基本用法</code>

<code src="./demos/submenu.tsx" description="使用 `ContextMenuSub` 嵌套二级操作。">子菜单</code>

<code src="./demos/shortcuts.tsx" description="使用 `ContextMenuShortcut` 在右侧展示键盘提示。">快捷键</code>

<code src="./demos/groups.tsx" description="通过 `ContextMenuGroup`、`ContextMenuLabel` 和 `ContextMenuSeparator` 分组相关操作。">分组</code>

<code src="./demos/icons.tsx" description="菜单项左侧搭配图标,提升扫描效率。">图标</code>

<code src="./demos/checkboxes.tsx" description="使用 `ContextMenuCheckboxItem` 表示可开关的状态项。">复选项</code>

<code src="./demos/radio.tsx" description="使用 `ContextMenuRadioGroup` 和 `ContextMenuRadioItem` 表示互斥选项。">单选项</code>

<code src="./demos/destructive.tsx" description="使用 `variant=\"destructive\"` 标记危险操作。">危险操作</code>

<code src="./demos/sides.tsx" description="使用 `side` 属性控制菜单的展开方向。">方向控制</code>

## 组件结构

```tsx | pure
<ContextMenu>
  <ContextMenuTrigger>右键点击这里</ContextMenuTrigger>
  <ContextMenuContent>
    <ContextMenuGroup>
      <ContextMenuLabel>分组标题</ContextMenuLabel>
      <ContextMenuItem>普通操作</ContextMenuItem>
      <ContextMenuItem>
        带快捷键
        <ContextMenuShortcut>⌘K</ContextMenuShortcut>
      </ContextMenuItem>
    </ContextMenuGroup>
    <ContextMenuSeparator />
    <ContextMenuCheckboxItem checked>复选项</ContextMenuCheckboxItem>
    <ContextMenuRadioGroup value="name">
      <ContextMenuRadioItem value="name">名称</ContextMenuRadioItem>
      <ContextMenuRadioItem value="date">日期</ContextMenuRadioItem>
    </ContextMenuRadioGroup>
    <ContextMenuSub>
      <ContextMenuSubTrigger>更多操作</ContextMenuSubTrigger>
      <ContextMenuSubContent>
        <ContextMenuItem>子菜单项</ContextMenuItem>
      </ContextMenuSubContent>
    </ContextMenuSub>
  </ContextMenuContent>
</ContextMenu>
```

## 最佳实践

- **配合显式按钮**:右键发现性差,主要动作应同时提供可见按钮。
- **trigger 区域明确**:鼠标悬停时给视觉提示(如背景变化)告诉用户可以右键。
- **保留浏览器默认菜单的入口**:不要在整个 body 上劫持右键,只在特定区域使用。
- **右侧只放快捷信息**:复选 / 单选指示器放左侧,右侧保留给 `ContextMenuShortcut` 或子菜单箭头。
- **危险操作单独分组**:删除、移除等操作使用 `variant="destructive"`,并放在分隔线之后。
- **不要承载主流程**:ContextMenu 是快捷入口,关键流程应在页面中有可见入口。

## API

### ContextMenu

根组件,管理右键菜单的打开状态。继承 Base UI Context Menu Root 属性。

| 参数         | 说明         | 类型                      | 默认值 |
| ------------ | ------------ | ------------------------- | ------ |
| open         | 受控打开状态 | `boolean`                 | -      |
| onOpenChange | 状态变化回调 | `(open: boolean) => void` | -      |
| children     | 菜单结构     | `React.ReactNode`         | -      |

### ContextMenuTrigger

右键 / 长按触发区域。继承原生元素属性。

| 参数      | 说明       | 类型              | 默认值 |
| --------- | ---------- | ----------------- | ------ |
| className | 自定义类名 | `string`          | -      |
| children  | 触发内容   | `React.ReactNode` | -      |

### ContextMenuContent

菜单内容容器,内部放置菜单项、分组、分隔线和子菜单。

| 参数        | 说明       | 类型                                     | 默认值    |
| ----------- | ---------- | ---------------------------------------- | --------- |
| align       | 对齐方式   | `"start" \| "center" \| "end"`           | `"start"` |
| side        | 展开方向   | `"top" \| "right" \| "bottom" \| "left"` | `"right"` |
| alignOffset | 对齐偏移   | `number`                                 | `4`       |
| sideOffset  | 方向偏移   | `number`                                 | `0`       |
| className   | 自定义类名 | `string`                                 | -         |

### ContextMenuItem

普通菜单项。可搭配图标、快捷键或危险变体。

| 参数      | 说明       | 类型                         | 默认值      |
| --------- | ---------- | ---------------------------- | ----------- |
| variant   | 视觉变体   | `"default" \| "destructive"` | `"default"` |
| inset     | 缩进显示   | `boolean`                    | -           |
| disabled  | 禁用状态   | `boolean`                    | -           |
| className | 自定义类名 | `string`                     | -           |

### ContextMenuCheckboxItem

可勾选菜单项,适合表示开关状态。

| 参数            | 说明     | 类型                         | 默认值 |
| --------------- | -------- | ---------------------------- | ------ |
| checked         | 是否选中 | `boolean`                    | -      |
| onCheckedChange | 状态变化 | `(checked: boolean) => void` | -      |
| disabled        | 禁用状态 | `boolean`                    | -      |
| inset           | 缩进显示 | `boolean`                    | -      |

### ContextMenuRadioGroup / ContextMenuRadioItem

单选菜单组,适合排序方式、位置、密度等互斥配置。

| 参数          | 说明         | 类型                      | 默认值 |
| ------------- | ------------ | ------------------------- | ------ |
| value         | 当前值       | `string`                  | -      |
| onValueChange | 状态变化回调 | `(value: string) => void` | -      |

`ContextMenuRadioItem` 需要提供 `value`。

### ContextMenuSub / ContextMenuSubTrigger / ContextMenuSubContent

子菜单结构,用于承载二级操作。`ContextMenuSubTrigger` 会在右侧自动显示箭头。

### ContextMenuGroup / ContextMenuLabel / ContextMenuSeparator / ContextMenuShortcut

- `ContextMenuGroup`:对一组相关操作进行语义分组。
- `ContextMenuLabel`:分组标题。
- `ContextMenuSeparator`:视觉分隔线。
- `ContextMenuShortcut`:菜单项右侧的快捷键提示,只负责展示,不自动绑定键盘事件。
