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

<code src="./demos/destructive.tsx" description="危险操作通过 `variant='destructive'` 着色，建议放在分隔线之后。">危险操作</code>

<code src="./demos/checkboxes.tsx" description="`DropdownMenuCheckboxItem` 适合用于显示/隐藏列、过滤标签等多选场景。">复选项</code>

<code src="./demos/checkboxesIcons.tsx">复选项 + 图标</code>

<code src="./demos/radioGroup.tsx" description="`DropdownMenuRadioGroup` 用于互斥单选，常见于'按字段排序'或主题切换。">单选组</code>

<code src="./demos/radioIcons.tsx">单选组 + 图标</code>

<code src="./demos/submenu.tsx" description="子菜单适合放置二级动作（如'导出为 → CSV / Excel'）。建议层级不超过 2 级。">子菜单</code>

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

除特别说明外,各部件会透传对应 Base UI 原语支持的原生元素属性。`className` / `style` 可传入静态值,也可传入基于组件状态返回值的函数;`render` 可替换最终渲染的 HTML 元素。

### DropdownMenu

根组件,管理下拉菜单的打开状态。继承 Base UI Menu Root 属性。

| 参数                 | 说明                                                                                 | 类型                                                                                 | 默认值       |
| -------------------- | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------ |
| defaultOpen          | 菜单是否默认打开。渲染受控菜单时请使用 `open`。                                      | `boolean \| undefined`                                                               | `false`      |
| open                 | 菜单当前是否打开。                                                                   | `boolean \| undefined`                                                               | -            |
| onOpenChange         | 菜单打开或关闭时调用的事件处理程序。                                                 | `((open: boolean, eventDetails: Menu.Root.ChangeEventDetails) => void) \| undefined` | -            |
| onOpenChangeComplete | 菜单关闭动画完成后调用的事件处理程序。                                               | `((open: boolean) => void) \| undefined`                                             | -            |
| loopFocus            | 使用方向键导航到列表末尾时,是否循环回第一个菜单项。                                  | `boolean \| undefined`                                                               | `true`       |
| highlightItemOnHover | 指针移过菜单项时是否高亮。关闭后可区分 CSS `:hover` 和 `data-highlighted` 焦点状态。 | `boolean \| undefined`                                                               | `true`       |
| modal                | 菜单打开时是否进入模态状态,限制页面滚动和外部指针交互。                              | `boolean \| undefined`                                                               | `true`       |
| orientation          | 菜单视觉方向,决定焦点导航使用上下方向键还是左右方向键。                              | `"horizontal" \| "vertical" \| undefined`                                            | `"vertical"` |
| disabled             | 是否忽略用户交互。                                                                   | `boolean \| undefined`                                                               | `false`      |
| closeParentOnEsc     | 在子菜单中按下 `Esc` 时,是否关闭整个父级菜单。                                       | `boolean \| undefined`                                                               | `false`      |
| actionsRef           | 命令式操作引用,支持 `unmount` 和 `close`。                                           | `React.RefObject<Menu.Root.Actions \| null> \| undefined`                            | -            |
| triggerId            | 与弹出层关联的触发器 ID,通常配合受控 `open` 使用。                                   | `string \| null \| undefined`                                                        | -            |
| defaultTriggerId     | 与弹出层关联的默认触发器 ID,通常配合 `defaultOpen` 使用。                            | `string \| null \| undefined`                                                        | -            |
| handle               | 用于将菜单与外部触发器关联的句柄。                                                   | `MenuHandle<unknown> \| undefined`                                                   | -            |
| children             | 菜单结构,也可以是接收当前触发器 payload 的渲染函数。                                 | `React.ReactNode \| PayloadChildRenderFunction<unknown>`                             | -            |

### DropdownMenuPortal

将弹出内容传送到 DOM 的其他位置,默认挂载到 `body`。

| 参数        | 说明                            | 类型                   | 默认值  |
| ----------- | ------------------------------- | ---------------------- | ------- |
| keepMounted | 弹出层隐藏时是否保持 DOM 挂载。 | `boolean \| undefined` | `false` |
| children    | 传送的内容。                    | `React.ReactNode`      | -       |

### DropdownMenuTrigger

打开菜单的按钮,默认渲染为 `button` 元素。

| 参数         | 说明                                                                                            | 类型                                                                                                    | 默认值  |
| ------------ | ----------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------- | ------- |
| disabled     | 是否忽略用户交互。                                                                              | `boolean \| undefined`                                                                                  | `false` |
| handle       | 用于将触发器与菜单关联的句柄。                                                                  | `MenuHandle<unknown> \| undefined`                                                                      | -       |
| payload      | 打开菜单时传递给菜单内容渲染函数的 payload。                                                    | `unknown`                                                                                               | -       |
| openOnHover  | 是否在悬停触发器时打开菜单。                                                                    | `boolean \| undefined`                                                                                  | -       |
| delay        | 悬停后等待多久才允许打开菜单,单位为毫秒。需要配合 `openOnHover` 使用。                          | `number \| undefined`                                                                                   | `100`   |
| closeDelay   | 通过悬停打开的菜单在关闭前等待多久,单位为毫秒。需要配合 `openOnHover` 使用。                    | `number \| undefined`                                                                                   | `0`     |
| nativeButton | 通过 `render` 属性替换元素时,是否渲染为原生 button 元素。若渲染元素不是 button,请设为 `false`。 | `boolean \| undefined`                                                                                  | `true`  |
| className    | 应用于触发器的 CSS 类名,或根据组件状态返回类名的函数。                                          | `string \| ((state: Menu.Trigger.State) => string \| undefined) \| undefined`                           | -       |
| style        | 应用于触发器的样式,或根据组件状态返回样式对象的函数。                                           | `React.CSSProperties \| ((state: Menu.Trigger.State) => React.CSSProperties \| undefined) \| undefined` | -       |
| render       | 替换触发器的 HTML 元素,或与其他组件组合。                                                       | `ReactElement \| ((props: HTMLProps, state: Menu.Trigger.State) => ReactElement) \| undefined`          | -       |
| children     | 触发器内容。                                                                                    | `React.ReactNode`                                                                                       | -       |

### DropdownMenuContent / DropdownMenuSubContent

菜单内容容器,内部放置菜单项、分组、分隔线和子菜单。

| 参数                  | 说明                                                                     | 类型                                                                                                                                       | 默认值                            |
| --------------------- | ------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------ | --------------------------------- |
| side                  | 弹出层相对触发器的展开方向。                                             | `"top" \| "bottom" \| "left" \| "right" \| "inline-end" \| "inline-start" \| undefined`                                                    | `DropdownMenuContent`: `"bottom"` |
| align                 | 弹出层相对触发器的对齐方式。                                             | `"start" \| "center" \| "end" \| undefined`                                                                                                | `"start"`                         |
| sideOffset            | 弹出层与触发器之间的距离,单位为像素;也可传入根据布局数据计算距离的函数。 | `number \| OffsetFunction \| undefined`                                                                                                    | `DropdownMenuContent`: `4`        |
| alignOffset           | 沿对齐轴的额外偏移,单位为像素;也可传入根据布局数据计算偏移的函数。       | `number \| OffsetFunction \| undefined`                                                                                                    | `DropdownMenuContent`: `0`        |
| anchor                | 用于定位弹出层的锚点元素。默认使用触发器。                               | `Element \| VirtualElement \| React.RefObject<Element \| null> \| (() => Element \| VirtualElement \| null) \| null \| undefined`          | -                                 |
| positionMethod        | 用于定位的 CSS `position` 策略。                                         | `"absolute" \| "fixed" \| undefined`                                                                                                       | `"absolute"`                      |
| collisionBoundary     | 限制弹出层避让碰撞的边界。                                               | `"clipping-ancestors" \| Element \| Element[] \| Rect \| undefined`                                                                        | `"clipping-ancestors"`            |
| collisionPadding      | 弹出层与碰撞边界之间保留的距离。                                         | `Padding \| undefined`                                                                                                                     | `5`                               |
| collisionAvoidance    | 碰撞时如何翻转、平移或回退到垂直轴方向。                                 | `CollisionAvoidance \| undefined`                                                                                                          | -                                 |
| sticky                | 锚点滚出视口后,是否仍让弹出层维持在视口内。                              | `boolean \| undefined`                                                                                                                     | `false`                           |
| arrowPadding          | 箭头与弹出层边缘之间保持的最小距离。                                     | `number \| undefined`                                                                                                                      | `5`                               |
| disableAnchorTracking | 是否禁用对定位锚点布局变化的跟踪。                                       | `boolean \| undefined`                                                                                                                     | `false`                           |
| finalFocus            | 菜单关闭时要移动焦点的目标或策略。                                       | `boolean \| React.RefObject<HTMLElement \| null> \| ((closeType: InteractionType) => boolean \| HTMLElement \| null \| void) \| undefined` | -                                 |
| className             | 应用于菜单内容的 CSS 类名,或根据组件状态返回类名的函数。                 | `string \| ((state: Menu.Popup.State) => string \| undefined) \| undefined`                                                                | -                                 |
| style                 | 应用于菜单内容的样式,或根据组件状态返回样式对象的函数。                  | `React.CSSProperties \| ((state: Menu.Popup.State) => React.CSSProperties \| undefined) \| undefined`                                      | -                                 |
| render                | 替换菜单内容的 HTML 元素,或与其他组件组合。                              | `ReactElement \| ((props: HTMLProps, state: Menu.Popup.State) => ReactElement) \| undefined`                                               | -                                 |
| children              | 菜单内容。                                                               | `React.ReactNode`                                                                                                                          | -                                 |

`DropdownMenuSubContent` 默认 `side="right"`、`sideOffset={0}`、`alignOffset={-3}`。

### DropdownMenuItem

普通菜单项。可搭配图标、快捷键或危险变体。

| 参数         | 说明                                                                                                      | 类型                                                                                                 | 默认值      |
| ------------ | --------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- | ----------- |
| variant      | 视觉变体。本库封装属性,用于标记普通或危险操作。                                                           | `"default" \| "destructive"`                                                                         | `"default"` |
| inset        | 缩进显示。本库封装属性。                                                                                  | `boolean`                                                                                            | -           |
| label        | 在通过键盘进行文本导航时,覆盖匹配该项所使用的文本标签。                                                   | `string \| undefined`                                                                                | -           |
| onClick      | 菜单项的点击处理程序。                                                                                    | `((event: BaseUIEvent<React.MouseEvent<HTMLDivElement, MouseEvent>>) => void) \| undefined`          | -           |
| closeOnClick | 当项目被点击时是否关闭菜单。                                                                              | `boolean \| undefined`                                                                               | `true`      |
| nativeButton | 通过 `render` 属性替换元素时,是否渲染为原生 button 元素。若渲染元素本身就是原生 button,请设为 `true`。    | `boolean \| undefined`                                                                               | `false`     |
| disabled     | 是否忽略用户交互。                                                                                        | `boolean \| undefined`                                                                               | `false`     |
| className    | 应用于元素的 CSS 类名,或根据组件状态返回类名的函数。                                                      | `string \| ((state: Menu.Item.State) => string \| undefined) \| undefined`                           | -           |
| style        | 应用于元素的样式,或根据组件状态返回样式对象的函数。                                                       | `React.CSSProperties \| ((state: Menu.Item.State) => React.CSSProperties \| undefined) \| undefined` | -           |
| render       | 允许用不同的标签替换组件的 HTML 元素,或将其与另一个组件组合。接受 `ReactElement` 或返回要渲染元素的函数。 | `ReactElement \| ((props: HTMLProps, state: Menu.Item.State) => ReactElement) \| undefined`          | -           |
| children     | 菜单项内容。                                                                                              | `React.ReactNode`                                                                                    | -           |

### DropdownMenuCheckboxItem

可勾选菜单项,适合表示开关状态。

| 参数            | 说明                                                                                                      | 类型                                                                                                         | 默认值  |
| --------------- | --------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------ | ------- |
| label           | 在通过键盘进行文本导航时,覆盖匹配该项所使用的文本标签。                                                   | `string \| undefined`                                                                                        | -       |
| defaultChecked  | 是否默认选中。渲染非受控复选项时使用,受控复选项请使用 `checked`。                                         | `boolean \| undefined`                                                                                       | `false` |
| checked         | 当前是否选中。渲染受控复选项时使用,非受控复选项请使用 `defaultChecked`。                                  | `boolean \| undefined`                                                                                       | -       |
| onCheckedChange | 选中状态变化时调用的事件处理程序。                                                                        | `((checked: boolean, eventDetails: Menu.CheckboxItem.ChangeEventDetails) => void) \| undefined`              | -       |
| onClick         | 菜单项的点击处理程序。                                                                                    | `((event: BaseUIEvent<React.MouseEvent<HTMLDivElement, MouseEvent>>) => void) \| undefined`                  | -       |
| closeOnClick    | 当项目被点击时是否关闭菜单。                                                                              | `boolean \| undefined`                                                                                       | `false` |
| nativeButton    | 通过 `render` 属性替换元素时,是否渲染为原生 button 元素。若渲染元素本身就是原生 button,请设为 `true`。    | `boolean \| undefined`                                                                                       | `false` |
| disabled        | 是否忽略用户交互。                                                                                        | `boolean \| undefined`                                                                                       | `false` |
| className       | 应用于元素的 CSS 类名,或根据组件状态返回类名的函数。                                                      | `string \| ((state: Menu.CheckboxItem.State) => string \| undefined) \| undefined`                           | -       |
| style           | 应用于元素的样式,或根据组件状态返回样式对象的函数。                                                       | `React.CSSProperties \| ((state: Menu.CheckboxItem.State) => React.CSSProperties \| undefined) \| undefined` | -       |
| render          | 允许用不同的标签替换组件的 HTML 元素,或将其与另一个组件组合。接受 `ReactElement` 或返回要渲染元素的函数。 | `ReactElement \| ((props: HTMLProps, state: Menu.CheckboxItem.State) => ReactElement) \| undefined`          | -       |
| inset           | 缩进显示。本库封装属性。                                                                                  | `boolean`                                                                                                    | -       |
| children        | 菜单项内容。                                                                                              | `React.ReactNode`                                                                                            | -       |

### DropdownMenuRadioGroup / DropdownMenuRadioItem

`DropdownMenuRadioGroup` 用于管理一组互斥的 `DropdownMenuRadioItem`。

| 参数          | 说明                                                          | 类型                                                                                                       | 默认值  |
| ------------- | ------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- | ------- |
| value         | 当前选中的受控值。渲染非受控单选组时请使用 `defaultValue`。   | `any`                                                                                                      | -       |
| defaultValue  | 默认选中的非受控值。渲染受控单选组时请使用 `value`。          | `any`                                                                                                      | -       |
| onValueChange | 选中值变化时调用的事件处理程序。                              | `((value: any, eventDetails: Menu.RadioGroup.ChangeEventDetails) => void) \| undefined`                    | -       |
| disabled      | 是否忽略用户交互。                                            | `boolean \| undefined`                                                                                     | `false` |
| className     | 应用于元素的 CSS 类名,或根据组件状态返回类名的函数。          | `string \| ((state: Menu.RadioGroup.State) => string \| undefined) \| undefined`                           | -       |
| style         | 应用于元素的样式,或根据组件状态返回样式对象的函数。           | `React.CSSProperties \| ((state: Menu.RadioGroup.State) => React.CSSProperties \| undefined) \| undefined` | -       |
| render        | 允许用不同的标签替换组件的 HTML 元素,或将其与另一个组件组合。 | `ReactElement \| ((props: HTMLProps, state: Menu.RadioGroup.State) => ReactElement) \| undefined`          | -       |
| children      | 单选项内容。                                                  | `React.ReactNode`                                                                                          | -       |

### DropdownMenuRadioItem

| 参数         | 说明                                                                                                      | 类型                                                                                                      | 默认值  |
| ------------ | --------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------- | ------- |
| value        | 单选项的值。选中该项后会写入 `DropdownMenuRadioGroup`。                                                   | `any`                                                                                                     | -       |
| inset        | 缩进显示。本库封装属性。                                                                                  | `boolean`                                                                                                 | -       |
| label        | 在通过键盘进行文本导航时,覆盖匹配该项所使用的文本标签。                                                   | `string \| undefined`                                                                                     | -       |
| onClick      | 菜单项的点击处理程序。                                                                                    | `((event: BaseUIEvent<React.MouseEvent<HTMLDivElement, MouseEvent>>) => void) \| undefined`               | -       |
| closeOnClick | 当项目被点击时是否关闭菜单。                                                                              | `boolean \| undefined`                                                                                    | `false` |
| nativeButton | 通过 `render` 属性替换元素时,是否渲染为原生 button 元素。若渲染元素本身就是原生 button,请设为 `true`。    | `boolean \| undefined`                                                                                    | `false` |
| disabled     | 是否忽略用户交互。                                                                                        | `boolean \| undefined`                                                                                    | `false` |
| className    | 应用于元素的 CSS 类名,或根据组件状态返回类名的函数。                                                      | `string \| ((state: Menu.RadioItem.State) => string \| undefined) \| undefined`                           | -       |
| style        | 应用于元素的样式,或根据组件状态返回样式对象的函数。                                                       | `React.CSSProperties \| ((state: Menu.RadioItem.State) => React.CSSProperties \| undefined) \| undefined` | -       |
| render       | 允许用不同的标签替换组件的 HTML 元素,或将其与另一个组件组合。接受 `ReactElement` 或返回要渲染元素的函数。 | `ReactElement \| ((props: HTMLProps, state: Menu.RadioItem.State) => ReactElement) \| undefined`          | -       |
| children     | 单选项内容。                                                                                              | `React.ReactNode`                                                                                         | -       |

### DropdownMenuSub

子菜单根组件,不渲染自己的 HTML 元素。

| 参数                 | 说明                                                                                 | 类型                                                                                        | 默认值       |
| -------------------- | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------- | ------------ |
| defaultOpen          | 子菜单是否默认打开。渲染受控子菜单时请使用 `open`。                                  | `boolean \| undefined`                                                                      | `false`      |
| open                 | 子菜单当前是否打开。                                                                 | `boolean \| undefined`                                                                      | -            |
| onOpenChange         | 子菜单打开或关闭时调用的事件处理程序。                                               | `((open: boolean, eventDetails: Menu.SubmenuRoot.ChangeEventDetails) => void) \| undefined` | -            |
| onOpenChangeComplete | 子菜单关闭动画完成后调用的事件处理程序。                                             | `((open: boolean) => void) \| undefined`                                                    | -            |
| loopFocus            | 使用方向键导航到列表末尾时,是否循环回第一个菜单项。                                  | `boolean \| undefined`                                                                      | `true`       |
| highlightItemOnHover | 指针移过菜单项时是否高亮。关闭后可区分 CSS `:hover` 和 `data-highlighted` 焦点状态。 | `boolean \| undefined`                                                                      | `true`       |
| orientation          | 菜单视觉方向,决定焦点导航使用上下方向键还是左右方向键。                              | `"horizontal" \| "vertical" \| undefined`                                                   | `"vertical"` |
| disabled             | 是否忽略用户交互。                                                                   | `boolean \| undefined`                                                                      | `false`      |
| closeParentOnEsc     | 在子菜单中按下 `Esc` 时,是否关闭整个父级菜单。                                       | `boolean \| undefined`                                                                      | `false`      |
| actionsRef           | 命令式操作引用,支持 `unmount` 和 `close`。                                           | `React.RefObject<Menu.Root.Actions \| null> \| undefined`                                   | -            |
| triggerId            | 与弹出层关联的触发器 ID,通常配合受控 `open` 使用。                                   | `string \| null \| undefined`                                                               | -            |
| defaultTriggerId     | 与弹出层关联的默认触发器 ID,通常配合 `defaultOpen` 使用。                            | `string \| null \| undefined`                                                               | -            |
| handle               | 用于将菜单与外部触发器关联的句柄。                                                   | `MenuHandle<unknown> \| undefined`                                                          | -            |
| children             | 子菜单结构,也可以是接收当前触发器 payload 的渲染函数。                               | `React.ReactNode \| PayloadChildRenderFunction<unknown>`                                    | -            |

### DropdownMenuSubTrigger

一个可以打开子菜单的菜单项。默认渲染为 `div` 元素,并自带右侧箭头图标。

| 参数         | 说明                                                                                                      | 类型                                                                                                           | 默认值  |
| ------------ | --------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- | ------- |
| inset        | 缩进显示。本库封装属性。                                                                                  | `boolean`                                                                                                      | -       |
| label        | 在通过键盘进行文本导航时,覆盖匹配该项所使用的文本标签。                                                   | `string \| undefined`                                                                                          | -       |
| onClick      | 子菜单触发项的点击处理程序。                                                                              | `((event: BaseUIEvent<React.MouseEvent<HTMLDivElement, MouseEvent>>) => void) \| undefined`                    | -       |
| nativeButton | 通过 `render` 属性替换元素时,是否渲染为原生 button 元素。若渲染元素本身就是原生 button,请设为 `true`。    | `boolean \| undefined`                                                                                         | `false` |
| disabled     | 是否忽略用户交互。                                                                                        | `boolean \| undefined`                                                                                         | `false` |
| openOnHover  | 是否在悬停触发项时打开子菜单。                                                                            | `boolean \| undefined`                                                                                         | -       |
| delay        | 悬停后等待多久才允许打开子菜单,单位为毫秒。需要配合 `openOnHover` 使用。                                  | `number \| undefined`                                                                                          | `100`   |
| closeDelay   | 通过悬停打开的子菜单在关闭前等待多久,单位为毫秒。需要配合 `openOnHover` 使用。                            | `number \| undefined`                                                                                          | `0`     |
| className    | 应用于元素的 CSS 类名,或根据组件状态返回类名的函数。                                                      | `string \| ((state: Menu.SubmenuTrigger.State) => string \| undefined) \| undefined`                           | -       |
| style        | 应用于元素的样式,或根据组件状态返回样式对象的函数。                                                       | `React.CSSProperties \| ((state: Menu.SubmenuTrigger.State) => React.CSSProperties \| undefined) \| undefined` | -       |
| render       | 允许用不同的标签替换组件的 HTML 元素,或将其与另一个组件组合。接受 `ReactElement` 或返回要渲染元素的函数。 | `ReactElement \| ((props: HTMLProps, state: Menu.SubmenuTrigger.State) => ReactElement) \| undefined`          | -       |
| children     | 子菜单触发项内容。                                                                                        | `React.ReactNode`                                                                                              | -       |

### DropdownMenuGroup

对一组相关菜单项进行语义分组。

| 参数      | 说明                                                 | 类型                                                                                                  | 默认值 |
| --------- | ---------------------------------------------------- | ----------------------------------------------------------------------------------------------------- | ------ |
| className | 应用于元素的 CSS 类名,或根据组件状态返回类名的函数。 | `string \| ((state: Menu.Group.State) => string \| undefined) \| undefined`                           | -      |
| style     | 应用于元素的样式,或根据组件状态返回样式对象的函数。  | `React.CSSProperties \| ((state: Menu.Group.State) => React.CSSProperties \| undefined) \| undefined` | -      |
| render    | 替换分组容器的 HTML 元素,或与其他组件组合。          | `ReactElement \| ((props: HTMLProps, state: Menu.Group.State) => ReactElement) \| undefined`          | -      |
| children  | 分组内容。                                           | `React.ReactNode`                                                                                     | -      |

### DropdownMenuLabel

分组标题,会自动与父级 `DropdownMenuGroup` 建立可访问关联。

| 参数      | 说明                                                 | 类型                                                                                                       | 默认值 |
| --------- | ---------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- | ------ |
| inset     | 缩进显示。本库封装属性。                             | `boolean`                                                                                                  | -      |
| className | 应用于元素的 CSS 类名,或根据组件状态返回类名的函数。 | `string \| ((state: Menu.GroupLabel.State) => string \| undefined) \| undefined`                           | -      |
| style     | 应用于元素的样式,或根据组件状态返回样式对象的函数。  | `React.CSSProperties \| ((state: Menu.GroupLabel.State) => React.CSSProperties \| undefined) \| undefined` | -      |
| render    | 替换标题的 HTML 元素,或与其他组件组合。              | `ReactElement \| ((props: HTMLProps, state: Menu.GroupLabel.State) => ReactElement) \| undefined`          | -      |
| children  | 标题内容。                                           | `React.ReactNode`                                                                                          | -      |

### DropdownMenuSeparator

视觉和语义分隔线。

| 参数        | 说明                                                 | 类型                                                                                                 | 默认值         |
| ----------- | ---------------------------------------------------- | ---------------------------------------------------------------------------------------------------- | -------------- |
| orientation | 分隔线方向。                                         | `"horizontal" \| "vertical" \| undefined`                                                            | `"horizontal"` |
| className   | 应用于元素的 CSS 类名,或根据组件状态返回类名的函数。 | `string \| ((state: Separator.State) => string \| undefined) \| undefined`                           | -              |
| style       | 应用于元素的样式,或根据组件状态返回样式对象的函数。  | `React.CSSProperties \| ((state: Separator.State) => React.CSSProperties \| undefined) \| undefined` | -              |
| render      | 替换分隔线的 HTML 元素,或与其他组件组合。            | `ReactElement \| ((props: HTMLProps, state: Separator.State) => ReactElement) \| undefined`          | -              |

### DropdownMenuShortcut

菜单项右侧的快捷键提示,只负责展示,不自动绑定键盘事件。继承原生 `span` 属性。

| 参数      | 说明             | 类型              | 默认值 |
| --------- | ---------------- | ----------------- | ------ |
| className | 自定义类名。     | `string`          | -      |
| children  | 快捷键提示内容。 | `React.ReactNode` | -      |
