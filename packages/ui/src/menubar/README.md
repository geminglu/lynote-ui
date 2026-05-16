---
category: Components
title: Menubar 菜单栏
subtitle: Menubar 菜单栏
demo:
  cols: 1
group:
  title: 导航
  order: 2
nav: 组件
toc: content
background: #111
compact: true
---

Menubar 是一组横向排列的下拉菜单,模拟桌面应用的菜单栏(文件 / 编辑 / 视图 / 帮助)。基于 Base UI Menu 原语,支持子菜单、快捷键、复选项。

## 特性

- **多 trigger**:横向排列多个菜单触发器。
- **跨菜单切换**:打开任一菜单后,鼠标悬停其他 trigger 自动切换。
- **完整菜单类型**:`MenubarItem` / `MenubarCheckboxItem` / `MenubarRadioItem` / `MenubarSub`。
- **快捷键提示**:`MenubarShortcut` 在右侧显示快捷键。

## 何时使用

- 桌面 App 风格的应用顶部菜单栏。
- 富文本编辑器、IDE、设计工具的菜单栏。

## 何时不使用

- 移动端导航——使用 `Sheet`。
- 简单的下拉菜单——使用 `DropdownMenu`。
- 站点导航——使用 `NavigationMenu`。

## 导入

```ts | pure
import {
  Menubar,
  MenubarCheckboxItem,
  MenubarContent,
  MenubarItem,
  MenubarLabel,
  MenubarMenu,
  MenubarRadioGroup,
  MenubarRadioItem,
  MenubarSeparator,
  MenubarShortcut,
  MenubarSub,
  MenubarSubContent,
  MenubarSubTrigger,
  MenubarTrigger,
} from "lynote-ui/menubar";
```

## 代码演示

<code src="./demos/base.tsx">基本用法</code>

## 最佳实践

- **按文件 / 编辑 / 视图 / 工具 / 帮助分组**:遵守桌面 App 的惯例。
- **提供快捷键**:用 `MenubarShortcut` 提示常用快捷键(如 `⌘S`)。
- **不要超过 7 个顶级 trigger**:超过会让顶部拥挤。
- **配合实际快捷键监听**:`MenubarShortcut` 只是视觉提示,你需要自己绑定 `useEffect` + `keydown`。

## API

API 与 `DropdownMenu` 几乎一致,所有 `Menubar*` 都对应 base-ui 的 `Menu*` 原语。详见 DropdownMenu 文档。
