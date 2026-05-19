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

### Command

继承 `cmdk` 的 `Command.Root`，是命令面板的容器。

| 参数                    | 说明                                       | 类型                                                             | 默认值  |
| ----------------------- | ------------------------------------------ | ---------------------------------------------------------------- | ------- |
| value                   | 当前选中值（受控）                         | `string`                                                         | -       |
| defaultValue            | 默认选中值（非受控）                       | `string`                                                         | -       |
| onValueChange           | 选中变化回调                               | `(value: string) => void`                                        | -       |
| filter                  | 自定义过滤函数；返回 0 表示不匹配          | `(value: string, search: string, keywords?: string[]) => number` | -       |
| shouldFilter            | 是否启用内置过滤                           | `boolean`                                                        | `true`  |
| loop                    | 键盘上下选中是否在首尾循环                 | `boolean`                                                        | `false` |
| disablePointerSelection | 是否禁用鼠标悬停选中                       | `boolean`                                                        | `false` |
| vimBindings             | 是否启用 vim 风格按键（`ctrl-n`/`ctrl-p`） | `boolean`                                                        | `true`  |
| label                   | 命令面板的可访问性 label                   | `string`                                                         | -       |
| className               | 自定义类名                                 | `string`                                                         | -       |
| children                | 子组件                                     | `React.ReactNode`                                                | -       |

### CommandDialog

把 `Command` 包装在 `Dialog` 内的命令面板。继承 `Dialog` 的 props。

| 参数            | 说明                               | 类型                      | 默认值                             |
| --------------- | ---------------------------------- | ------------------------- | ---------------------------------- |
| title           | 可访问性标题（默认隐藏在 sr-only） | `string`                  | `"Command Palette"`                |
| description     | 可访问性描述（默认隐藏在 sr-only） | `string`                  | `"Search for a command to run..."` |
| showCloseButton | 是否显示右上角关闭按钮             | `boolean`                 | `false`                            |
| open            | 是否打开（受控）                   | `boolean`                 | -                                  |
| defaultOpen     | 默认是否打开（非受控）             | `boolean`                 | `false`                            |
| onOpenChange    | 打开状态变化回调                   | `(open: boolean) => void` | -                                  |
| className       | 应用到 `DialogContent` 的类名      | `string`                  | -                                  |
| children        | 通常是 `<Command>` 及其子项        | `React.ReactNode`         | -                                  |

### CommandInput

搜索框，已自带 `SearchIcon` 与 `InputGroup` 包裹。

| 参数          | 说明                    | 类型                                          | 默认值  |
| ------------- | ----------------------- | --------------------------------------------- | ------- |
| value         | 输入值（受控）          | `string`                                      | -       |
| onValueChange | 输入变化回调            | `(search: string) => void`                    | -       |
| placeholder   | 占位文案                | `string`                                      | -       |
| disabled      | 是否禁用                | `boolean`                                     | `false` |
| className     | 自定义类名              | `string`                                      | -       |
| ...props      | 透传原生 `<input>` 属性 | `React.InputHTMLAttributes<HTMLInputElement>` | -       |

### CommandList

候选项滚动容器，默认 `max-h-72`。

| 参数      | 说明       | 类型              | 默认值 |
| --------- | ---------- | ----------------- | ------ |
| className | 自定义类名 | `string`          | -      |
| children  | 子节点     | `React.ReactNode` | -      |

### CommandEmpty

输入无匹配时显示的兜底视图。

| 参数      | 说明       | 类型              | 默认值 |
| --------- | ---------- | ----------------- | ------ |
| className | 自定义类名 | `string`          | -      |
| children  | 提示文案   | `React.ReactNode` | -      |

### CommandGroup

候选项分组容器，支持 `heading` 显示分组标题。

| 参数       | 说明                   | 类型              | 默认值 |
| ---------- | ---------------------- | ----------------- | ------ |
| heading    | 分组标题               | `React.ReactNode` | -      |
| value      | 分组值                 | `string`          | -      |
| forceMount | 强制挂载（即便无匹配） | `boolean`         | -      |
| className  | 自定义类名             | `string`          | -      |
| children   | 子项                   | `React.ReactNode` | -      |

### CommandItem

单个候选项，命中时自动显示 `CheckIcon`。

| 参数       | 说明                   | 类型                      | 默认值  |
| ---------- | ---------------------- | ------------------------- | ------- |
| value      | 项值（用于过滤与回调） | `string`                  | -       |
| keywords   | 额外搜索关键字         | `string[]`                | -       |
| onSelect   | 选中回调               | `(value: string) => void` | -       |
| disabled   | 是否禁用               | `boolean`                 | `false` |
| forceMount | 强制挂载               | `boolean`                 | -       |
| className  | 自定义类名             | `string`                  | -       |
| children   | 项内容                 | `React.ReactNode`         | -       |

### CommandSeparator

分隔线。

| 参数         | 说明                       | 类型      | 默认值  |
| ------------ | -------------------------- | --------- | ------- |
| alwaysRender | 是否始终渲染（即使无匹配） | `boolean` | `false` |
| className    | 自定义类名                 | `string`  | -       |

### CommandShortcut

命令项右侧的快捷键提示文本。

| 参数      | 说明               | 类型                           | 默认值 |
| --------- | ------------------ | ------------------------------ | ------ |
| className | 自定义类名         | `string`                       | -      |
| children  | 快捷键文本         | `React.ReactNode`              | -      |
| ...props  | 原生 `<span>` 属性 | `React.ComponentProps<"span">` | -      |
