---
category: Components
title: DropdownMenu 下拉菜单
subtitle: DropdownMenu 下拉菜单
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

DropdownMenu 从一个触发器展开一组可执行的命令或可勾选状态，是页面顶栏用户菜单、表格行操作、工具栏更多动作的标准做法。

## 特性

- **多类型菜单项**：`Item`（命令）、`CheckboxItem`（多选状态）、`RadioItem`（单选状态）。
- **支持子菜单**：通过 `DropdownMenuSub` 嵌套，自动管理子菜单的展开与方向。
- **分组与标签**：`DropdownMenuGroup` + `DropdownMenuLabel` 对长列表分组。
- **快捷键提示**：`DropdownMenuShortcut` 在右侧呈现快捷键，自动 muted 色。
- **危险项语义**：`DropdownMenuItem variant="destructive"` 渲染为红色，常用于"删除 / 退出登录"。
- **完整键盘可达**：方向键导航、字母 typeahead、`Esc` 关闭、`→` 进入子菜单、`←` 返回。

## 何时使用

- 把一组次要 / 低频操作收进按钮内，避免占用工具栏空间。
- 表格行尾的"更多动作"。
- 用户头像下的账户菜单。
- 顶部导航中的设置/帮助二级入口。

## 何时不使用

- 用于在两个值之间快速切换——使用 `Toggle` 或 `Switch`。
- 单选超过 5 项——`Select` 在视觉上更适合作"选择"。
- 需要承载可编辑控件（输入框、滑块）——使用 `Popover`。
- 命令搜索 / 全局命令面板——使用 `Command`。

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

```ts [按需] | pure
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuPortal,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuTrigger,
} from "lynote-ui/dropdown-menu";
```

```ts [整体] | pure
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "lynote-ui";
```

:::

## 组件结构

```tsx | pure
<DropdownMenu>
  <DropdownMenuTrigger />
  <DropdownMenuContent>
    <DropdownMenuGroup>
      <DropdownMenuLabel />
      <DropdownMenuItem />
    </DropdownMenuGroup>
    <DropdownMenuSeparator />
    <DropdownMenuCheckboxItem />
    <DropdownMenuRadioGroup>
      <DropdownMenuRadioItem />
    </DropdownMenuRadioGroup>
    <DropdownMenuSub>
      <DropdownMenuSubTrigger />
      <DropdownMenuSubContent />
    </DropdownMenuSub>
  </DropdownMenuContent>
</DropdownMenu>
```

## 代码演示

<code src="./demos/base.tsx">基本用法</code>

<code src="./demos/icons.tsx">图标</code>

<code src="./demos/shortcuts.tsx">快捷键</code>

<code src="./demos/avatar.tsx" description="头像 + 下拉菜单是用户菜单的标准写法。">头像菜单</code>

<code src="./demos/destructive.tsx" description="危险操作通过 `variant=\"destructive\"` 着色，建议放在分隔线之后。">危险操作</code>

<code src="./demos/checkboxes.tsx" description="`DropdownMenuCheckboxItem` 适合用于显示/隐藏列、过滤标签等多选场景。">复选项</code>

<code src="./demos/checkboxesIcons.tsx">复选项 + 图标</code>

<code src="./demos/radioGroup.tsx" description="`DropdownMenuRadioGroup` 用于互斥单选，常见于"按字段排序"或主题切换。">单选组</code>

<code src="./demos/radioIcons.tsx">单选组 + 图标</code>

<code src="./demos/submenu.tsx" description="子菜单适合放置二级动作（如"导出为 → CSV / Excel"）。建议层级不超过 2 级。">子菜单</code>

<code src="./demos/placement.tsx">弹层位置</code>

<code src="./demos/side.tsx">展开方向</code>

<code src="./demos/complex.tsx" description="包含分组、子菜单、复选项、快捷键的完整菜单示例。">完整复杂示例</code>

## 最佳实践

- **按优先级排序**：常用 → 次常用 → 危险动作。危险项之前放 `DropdownMenuSeparator`。
- **同类项靠近、不同类分隔**：用 `DropdownMenuSeparator` 分组,而不是用空白行。
- **图标对齐统一**：所有 item 要么都有图标，要么都没有，避免参差不齐。
- **子菜单不要超过 2 级**：三级以上的嵌套用户很难发现。如有大量分支动作，请改用 `Command` 或独立页面。
- **trigger 一定带 aria-label**：当 trigger 是纯图标按钮（如 `⋯`、头像）时，要给按钮显式声明 aria-label。
- **保留键盘可达**：避免把 `DropdownMenuItem` 渲染成 `<a>` 后丢失键盘语义，需要跳转时优先在 `onSelect` 内 `router.push`。

## 无障碍与键盘交互

- `DropdownMenuContent` 渲染为 `role="menu"`，每个 item 自动获得 `role="menuitem"` / `menuitemcheckbox` / `menuitemradio`。
- 打开时焦点自动移入菜单，关闭时返回到 trigger。
- 字母键支持 typeahead，便于快速跳转。

| 按键              | 行为                  |
| ----------------- | --------------------- |
| `Space` / `Enter` | 选中当前高亮项        |
| `↑` / `↓`         | 上一项 / 下一项       |
| `→`               | 打开当前子菜单        |
| `←`               | 返回上一级菜单        |
| `Home` / `End`    | 跳到第一项 / 最后一项 |
| 字母键            | typeahead 跳转        |
| `Esc`             | 关闭菜单              |

## API

### DropdownMenu

| 参数         | 说明                   | 类型                      | 默认值  |
| ------------ | ---------------------- | ------------------------- | ------- |
| open         | 是否打开（受控）       | `boolean`                 | -       |
| defaultOpen  | 是否默认打开（非受控） | `boolean`                 | `false` |
| onOpenChange | 打开状态变化回调       | `(open: boolean) => void` | -       |
| modal        | 是否锁定背景滚动       | `boolean`                 | `false` |
| children     | 子组件                 | `React.ReactNode`         | -       |

### DropdownMenuTrigger

| 参数      | 说明                                              | 类型                      | 默认值 |
| --------- | ------------------------------------------------- | ------------------------- | ------ |
| render    | 多态渲染，常用于把 trigger 渲染成 Button / Avatar | `React.ReactElement`      | -      |
| className | 自定义类名                                        | `string`                  | -      |
| children  | trigger 内容                                      | `React.ReactNode`         | -      |
| onClick   | 点击回调                                          | `React.MouseEventHandler` | -      |

### DropdownMenuContent

| 参数        | 说明         | 类型                                                                       | 默认值     |
| ----------- | ------------ | -------------------------------------------------------------------------- | ---------- |
| side        | 弹层方向     | `"top" \| "bottom" \| "left" \| "right" \| "inline-start" \| "inline-end"` | `"bottom"` |
| align       | 弹层对齐方式 | `"start" \| "center" \| "end"`                                             | `"start"`  |
| sideOffset  | 与锚点的间距 | `number`                                                                   | `4`        |
| alignOffset | 对齐偏移量   | `number`                                                                   | `0`        |
| className   | 自定义类名   | `string`                                                                   | -          |
| children    | 菜单内容     | `React.ReactNode`                                                          | -          |

### DropdownMenuItem

| 参数      | 说明                                 | 类型                         | 默认值      |
| --------- | ------------------------------------ | ---------------------------- | ----------- |
| variant   | 视觉变体，destructive 显示为红色     | `"default" \| "destructive"` | `"default"` |
| inset     | 是否额外缩进（与 CheckboxItem 对齐） | `boolean`                    | `false`     |
| disabled  | 是否禁用                             | `boolean`                    | `false`     |
| onSelect  | 选中回调（推荐替代 onClick）         | `(event: Event) => void`     | -           |
| className | 自定义类名                           | `string`                     | -           |
| children  | 菜单项内容                           | `React.ReactNode`            | -           |

### DropdownMenuCheckboxItem

| 参数            | 说明             | 类型                         | 默认值  |
| --------------- | ---------------- | ---------------------------- | ------- |
| checked         | 是否选中（受控） | `boolean`                    | -       |
| onCheckedChange | 选中状态变化回调 | `(checked: boolean) => void` | -       |
| disabled        | 是否禁用         | `boolean`                    | `false` |
| inset           | 是否额外缩进     | `boolean`                    | `false` |
| className       | 自定义类名       | `string`                     | -       |
| children        | 菜单项内容       | `React.ReactNode`            | -       |

### DropdownMenuRadioGroup / DropdownMenuRadioItem

`RadioGroup` 维护选中值，`RadioItem` 通过 `value` 加入互斥组。

| 参数（RadioGroup） | 说明       | 类型                      | 默认值 |
| ------------------ | ---------- | ------------------------- | ------ |
| value              | 当前选中值 | `string`                  | -      |
| onValueChange      | 切换回调   | `(value: string) => void` | -      |

| 参数（RadioItem） | 说明       | 类型              | 默认值  |
| ----------------- | ---------- | ----------------- | ------- |
| value             | 选项值     | `string`          | -       |
| disabled          | 是否禁用   | `boolean`         | `false` |
| className         | 自定义类名 | `string`          | -       |
| children          | 内容       | `React.ReactNode` | -       |

### DropdownMenuSub / DropdownMenuSubTrigger / DropdownMenuSubContent

构建二级子菜单。`SubTrigger` 自带 `→` 指示图标。

### DropdownMenuLabel / DropdownMenuSeparator / DropdownMenuShortcut

- `DropdownMenuLabel`：分组标题，不可点击。
- `DropdownMenuSeparator`：分隔线。
- `DropdownMenuShortcut`：放在 item 最末展示快捷键（仅 UI 提示，不绑定真实快捷键）。
