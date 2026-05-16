---
category: Components
title: Command 命令面板
subtitle: Command 命令面板
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

Command 是一个内置搜索过滤的命令面板,基于 [cmdk](https://cmdk.paco.me/) 实现。常以 `⌘K` 触发,呈现可搜索、可分组、可键盘导航的命令列表。

## 特性

- **内置过滤**:输入即按 fuzzy 算法过滤候选项。
- **分组**:`CommandGroup heading="..."` 把候选项分组展示。
- **键盘可达**:`↑` `↓` 移动、`Enter` 选中、`Esc` 关闭。
- **`CommandDialog`**:已经封装好的弹层版本,直接当 `Dialog` 用即可。
- **`CommandEmpty`**:无匹配时的兜底视图。

## 何时使用

- 全局命令面板(`⌘K`)。
- 搜索 + 跳转的统一入口。
- 富文本编辑器的"插入"面板。

## 何时不使用

- 普通选择器——使用 `Select`。
- 实际表单字段——使用 `Combobox`。
- 主导航——使用 `NavigationMenu`。

## 导入

```ts | pure
import {
  Command,
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
  CommandShortcut,
} from "lynote-ui/command";
```

## 代码演示

<code src="./demos/base.tsx" description="一个简单的对话框命令菜单。">基本用法</code>

<code src="./demos/shortcuts.tsx" description="带有快捷键提示的命令菜单。">快捷键提示</code>

<code src="./demos/groups.tsx" description="一个包含分组、图标和分隔符的命令菜单。">分组</code>

<code src="./demos/scrollable.tsx" description="一个包含大量选项的命令菜单。">滚动</code>

## 最佳实践

- **全局快捷键**:绑定 `⌘K` / `Ctrl+K` 唤起,这是用户的肌肉记忆。
- **分组合理**:按"建议 / 设置 / 文档 / 帮助"等大类分组。
- **`CommandEmpty` 不要省**:用户输入无匹配时必须给出反馈。
- **`onSelect` 处理跳转**:命中后跳转或执行命令,然后 `setOpen(false)` 关闭。

## API

### Command / CommandDialog

| 参数          | 说明             | 类型                        | 默认值 |
| ------------- | ---------------- | --------------------------- | ------ |
| value         | 当前选中值(受控) | `string`                    | -      |
| onValueChange | 值变化回调       | `(value: string) => void`   | -      |
| filter        | 自定义过滤函数   | `(value, search) => number` | -      |
| children      | 子组件           | `React.ReactNode`           | -      |

### CommandInput

搜索框,自带搜索图标。

### CommandList / CommandEmpty / CommandGroup / CommandItem / CommandSeparator / CommandShortcut

结构化子组件,详见 cmdk 官方文档。
