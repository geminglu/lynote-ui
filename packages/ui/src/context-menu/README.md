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

ContextMenu 在用户对触发区域右键(或长按)时弹出一组操作。基于 Base UI Menu 原语,功能与 `DropdownMenu` 几乎一致,差别在于触发方式。

## 特性

- **右键 / 长按触发**:桌面右键、移动长按。
- **完整菜单 API**:`Item` / `CheckboxItem` / `RadioItem` / `Sub` / `Separator`。
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

## 最佳实践

- **配合显式按钮**:右键发现性差,主要动作应同时提供可见按钮。
- **trigger 区域明确**:鼠标悬停时给视觉提示(如背景变化)告诉用户可以右键。
- **保留浏览器默认菜单的入口**:不要在整个 body 上劫持右键,只在特定区域使用。
- **API 一致**:其他用法参考 DropdownMenu。

## API

API 与 `DropdownMenu` 一致,只是 `Trigger` 触发方式为右键 / 长按。详见 DropdownMenu 文档。
