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

<code src="./demos/destructive.tsx" description="使用 `variant=\'destructive\'` 标记危险操作。">危险操作</code>

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

除特别说明外,各部件会透传对应 Base UI 原语支持的原生元素属性。`className` / `style` 可传入静态值,也可传入基于组件状态返回值的函数;`render` 可替换最终渲染的 HTML 元素。

### ContextMenu

根组件,管理右键菜单的打开状态。继承 Base UI Context Menu Root 属性。

| 参数                 | 说明                                                                                 | 类型                                                                                        | 默认值       |
| -------------------- | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------- | ------------ |
| defaultOpen          | 菜单是否默认打开。渲染受控菜单时请使用 `open`。                                      | `boolean \| undefined`                                                                      | `false`      |
| open                 | 菜单当前是否打开。                                                                   | `boolean \| undefined`                                                                      | -            |
| onOpenChange         | 菜单打开或关闭时调用的事件处理程序。                                                 | `((open: boolean, eventDetails: ContextMenu.Root.ChangeEventDetails) => void) \| undefined` | -            |
| onOpenChangeComplete | 菜单关闭动画完成后调用的事件处理程序。                                               | `((open: boolean) => void) \| undefined`                                                    | -            |
| loopFocus            | 使用方向键导航到列表末尾时,是否循环回第一个菜单项。                                  | `boolean \| undefined`                                                                      | `true`       |
| highlightItemOnHover | 指针移过菜单项时是否高亮。关闭后可区分 CSS `:hover` 和 `data-highlighted` 焦点状态。 | `boolean \| undefined`                                                                      | `true`       |
| orientation          | 菜单视觉方向,决定焦点导航使用上下方向键还是左右方向键。                              | `"horizontal" \| "vertical" \| undefined`                                                   | `"vertical"` |
| disabled             | 是否忽略用户交互。                                                                   | `boolean \| undefined`                                                                      | `false`      |
| closeParentOnEsc     | 在子菜单中按下 `Esc` 时,是否关闭整个父级菜单。                                       | `boolean \| undefined`                                                                      | `false`      |
| actionsRef           | 命令式操作引用,支持 `unmount` 和 `close`。                                           | `React.RefObject<ContextMenu.Root.Actions \| null> \| undefined`                            | -            |
| triggerId            | 与弹出层关联的触发器 ID,通常配合受控 `open` 使用。                                   | `string \| null \| undefined`                                                               | -            |
| defaultTriggerId     | 与弹出层关联的默认触发器 ID,通常配合 `defaultOpen` 使用。                            | `string \| null \| undefined`                                                               | -            |
| handle               | 用于将菜单与外部触发器关联的句柄。                                                   | `MenuHandle<unknown> \| undefined`                                                          | -            |
| children             | 菜单结构,也可以是接收当前触发器 payload 的渲染函数。                                 | `React.ReactNode \| PayloadChildRenderFunction<unknown>`                                    | -            |

### ContextMenuPortal

将弹出内容传送到 DOM 的其他位置,默认挂载到 `body`。

| 参数        | 说明                            | 类型                   | 默认值  |
| ----------- | ------------------------------- | ---------------------- | ------- |
| keepMounted | 弹出层隐藏时是否保持 DOM 挂载。 | `boolean \| undefined` | `false` |
| children    | 传送的内容。                    | `React.ReactNode`      | -       |

### ContextMenuTrigger

右键 / 长按触发区域。继承原生元素属性。

| 参数      | 说明                                                         | 类型                                                                                                           | 默认值 |
| --------- | ------------------------------------------------------------ | -------------------------------------------------------------------------------------------------------------- | ------ |
| className | 应用于触发区域的 CSS 类名,或根据触发区域状态返回类名的函数。 | `string \| ((state: ContextMenu.Trigger.State) => string \| undefined) \| undefined`                           | -      |
| style     | 应用于触发区域的样式,或根据触发区域状态返回样式对象的函数。  | `React.CSSProperties \| ((state: ContextMenu.Trigger.State) => React.CSSProperties \| undefined) \| undefined` | -      |
| render    | 替换触发区域的 HTML 元素,或与其他组件组合。                  | `ReactElement \| ((props: HTMLProps, state: ContextMenu.Trigger.State) => ReactElement) \| undefined`          | -      |
| children  | 触发内容。                                                   | `React.ReactNode`                                                                                              | -      |

### ContextMenuContent \ ContextMenuSubContent

菜单内容容器,内部放置菜单项、分组、分隔线和子菜单。

| 参数                  | 说明                                                                       | 类型                                                                                                                                       | 默认值                          |
| --------------------- | -------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------- |
| side                  | 弹出层相对触发区域的展开方向。                                             | `"top" \| "bottom" \| "left" \| "right" \| "inline-end" \| "inline-start" \| undefined`                                                    | `ContextMenuContent`: `"right"` |
| align                 | 弹出层相对触发区域的对齐方式。                                             | `"start" \| "center" \| "end" \| undefined`                                                                                                | `ContextMenuContent`: `"start"` |
| sideOffset            | 弹出层与触发区域之间的距离,单位为像素;也可传入根据布局数据计算距离的函数。 | `number \| OffsetFunction \| undefined`                                                                                                    | `0`                             |
| alignOffset           | 沿对齐轴的额外偏移,单位为像素;也可传入根据布局数据计算偏移的函数。         | `number \| OffsetFunction \| undefined`                                                                                                    | `4`                             |
| anchor                | 用于定位弹出层的锚点元素。默认使用触发区域。                               | `Element \| VirtualElement \| React.RefObject<Element \| null> \| (() => Element \| VirtualElement \| null) \| null \| undefined`          | -                               |
| positionMethod        | 用于定位的 CSS `position` 策略。                                           | `"absolute" \| "fixed" \| undefined`                                                                                                       | `"absolute"`                    |
| collisionBoundary     | 限制弹出层避让碰撞的边界。                                                 | `"clipping-ancestors" \| Element \| Element[] \| Rect \| undefined`                                                                        | `"clipping-ancestors"`          |
| collisionPadding      | 弹出层与碰撞边界之间保留的距离。                                           | `Padding \| undefined`                                                                                                                     | `5`                             |
| collisionAvoidance    | 碰撞时如何翻转、平移或回退到垂直轴方向。                                   | `CollisionAvoidance \| undefined`                                                                                                          | -                               |
| sticky                | 锚点滚出视口后,是否仍让弹出层维持在视口内。                                | `boolean \| undefined`                                                                                                                     | `false`                         |
| arrowPadding          | 箭头与弹出层边缘之间保持的最小距离。                                       | `number \| undefined`                                                                                                                      | `5`                             |
| disableAnchorTracking | 是否禁用对定位锚点布局变化的跟踪。                                         | `boolean \| undefined`                                                                                                                     | `false`                         |
| finalFocus            | 菜单关闭时要移动焦点的目标或策略。                                         | `boolean \| React.RefObject<HTMLElement \| null> \| ((closeType: InteractionType) => boolean \| HTMLElement \| null \| void) \| undefined` | -                               |
| className             | 应用于菜单内容的 CSS 类名,或根据组件状态返回类名的函数。                   | `string \| ((state: ContextMenu.Popup.State) => string \| undefined) \| undefined`                                                         | -                               |
| style                 | 应用于菜单内容的样式,或根据组件状态返回样式对象的函数。                    | `React.CSSProperties \| ((state: ContextMenu.Popup.State) => React.CSSProperties \| undefined) \| undefined`                               | -                               |
| render                | 替换菜单内容的 HTML 元素,或与其他组件组合。                                | `ReactElement \| ((props: HTMLProps, state: ContextMenu.Popup.State) => ReactElement) \| undefined`                                        | -                               |
| children              | 菜单内容。                                                                 | `React.ReactNode`                                                                                                                          | -                               |

### ContextMenuItem

普通菜单项。可搭配图标、快捷键或危险变体。

| 参数         | 说明                                                                                                      | 类型                                                                                                        | 默认值      |
| ------------ | --------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------- | ----------- |
| variant      | 视觉变体。本库封装属性,用于标记普通或危险操作。                                                           | `"default" \| "destructive"`                                                                                | `"default"` |
| inset        | 缩进显示。本库封装属性。                                                                                  | `boolean`                                                                                                   | -           |
| label        | 在通过键盘进行文本导航时,覆盖匹配该项所使用的文本标签。                                                   | `string \| undefined`                                                                                       | -           |
| onClick      | 菜单项的点击处理程序。                                                                                    | `((event: BaseUIEvent<React.MouseEvent<HTMLDivElement, MouseEvent>>) => void) \| undefined`                 | -           |
| closeOnClick | 当项目被点击时是否关闭菜单。                                                                              | `boolean \| undefined`                                                                                      | `true`      |
| nativeButton | 通过 `render` 属性替换元素时,是否渲染为原生 button 元素。若渲染元素本身就是原生 button,请设为 `true`。    | `boolean \| undefined`                                                                                      | `false`     |
| disabled     | 是否忽略用户交互。                                                                                        | `boolean \| undefined`                                                                                      | `false`     |
| className    | 应用于元素的 CSS 类名,或根据组件状态返回类名的函数。                                                      | `string \| ((state: ContextMenu.Item.State) => string \| undefined) \| undefined`                           | -           |
| style        | 应用于元素的样式,或根据组件状态返回样式对象的函数。                                                       | `React.CSSProperties \| ((state: ContextMenu.Item.State) => React.CSSProperties \| undefined) \| undefined` | -           |
| render       | 允许用不同的标签替换组件的 HTML 元素,或将其与另一个组件组合。接受 `ReactElement` 或返回要渲染元素的函数。 | `ReactElement \| ((props: HTMLProps, state: ContextMenu.Item.State) => ReactElement) \| undefined`          | -           |
| children     | 菜单项内容。                                                                                              | `React.ReactNode`                                                                                           | -           |

### ContextMenuCheckboxItem

可勾选菜单项,适合表示开关状态。

| 参数            | 说明                                                                                                      | 类型                                                                                                                | 默认值  |
| --------------- | --------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------- | ------- |
| label           | 在通过键盘进行文本导航时,覆盖匹配该项所使用的文本标签。                                                   | `string \| undefined`                                                                                               | -       |
| defaultChecked  | 是否默认选中。渲染非受控复选项时使用,受控复选项请使用 `checked`。                                         | `boolean \| undefined`                                                                                              | `false` |
| checked         | 当前是否选中。渲染受控复选项时使用,非受控复选项请使用 `defaultChecked`。                                  | `boolean \| undefined`                                                                                              | -       |
| onCheckedChange | 选中状态变化时调用的事件处理程序。                                                                        | `((checked: boolean, eventDetails: ContextMenu.CheckboxItem.ChangeEventDetails) => void) \| undefined`              | -       |
| onClick         | 菜单项的点击处理程序。                                                                                    | `((event: BaseUIEvent<React.MouseEvent<HTMLDivElement, MouseEvent>>) => void) \| undefined`                         | -       |
| closeOnClick    | 当项目被点击时是否关闭菜单。                                                                              | `boolean \| undefined`                                                                                              | `false` |
| nativeButton    | 通过 `render` 属性替换元素时,是否渲染为原生 button 元素。若渲染元素本身就是原生 button,请设为 `true`。    | `boolean \| undefined`                                                                                              | `false` |
| disabled        | 是否忽略用户交互。                                                                                        | `boolean \| undefined`                                                                                              | `false` |
| className       | 应用于元素的 CSS 类名,或根据组件状态返回类名的函数。                                                      | `string \| ((state: ContextMenu.CheckboxItem.State) => string \| undefined) \| undefined`                           | -       |
| style           | 应用于元素的样式,或根据组件状态返回样式对象的函数。                                                       | `React.CSSProperties \| ((state: ContextMenu.CheckboxItem.State) => React.CSSProperties \| undefined) \| undefined` | -       |
| render          | 允许用不同的标签替换组件的 HTML 元素,或将其与另一个组件组合。接受 `ReactElement` 或返回要渲染元素的函数。 | `ReactElement \| ((props: HTMLProps, state: ContextMenu.CheckboxItem.State) => ReactElement) \| undefined`          | -       |
| inset           | 缩进显示。                                                                                                | `boolean`                                                                                                           | -       |

### ContextMenuRadioGroup / ContextMenuRadioItem

`ContextMenuRadioGroup` 用于管理一组互斥的 `ContextMenuRadioItem`。

| 参数          | 说明                                                          | 类型                                                                                                              | 默认值  |
| ------------- | ------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------- | ------- |
| value         | 当前选中的受控值。渲染非受控单选组时请使用 `defaultValue`。   | `any`                                                                                                             | -       |
| defaultValue  | 默认选中的非受控值。渲染受控单选组时请使用 `value`。          | `any`                                                                                                             | -       |
| onValueChange | 选中值变化时调用的事件处理程序。                              | `((value: any, eventDetails: ContextMenu.RadioGroup.ChangeEventDetails) => void) \| undefined`                    | -       |
| disabled      | 是否忽略用户交互。                                            | `boolean \| undefined`                                                                                            | `false` |
| className     | 应用于元素的 CSS 类名,或根据组件状态返回类名的函数。          | `string \| ((state: ContextMenu.RadioGroup.State) => string \| undefined) \| undefined`                           | -       |
| style         | 应用于元素的样式,或根据组件状态返回样式对象的函数。           | `React.CSSProperties \| ((state: ContextMenu.RadioGroup.State) => React.CSSProperties \| undefined) \| undefined` | -       |
| render        | 允许用不同的标签替换组件的 HTML 元素,或将其与另一个组件组合。 | `ReactElement \| ((props: HTMLProps, state: ContextMenu.RadioGroup.State) => ReactElement) \| undefined`          | -       |
| children      | 单选项内容。                                                  | `React.ReactNode`                                                                                                 | -       |

### ContextMenuRadioItem

| 参数         | 说明                                                                                                      | 类型                                                                                                             | 默认值  |
| ------------ | --------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------- | ------- |
| value        | 单选项的值。选中该项后会写入 `ContextMenuRadioGroup`。                                                    | `any`                                                                                                            | -       |
| inset        | 缩进显示。本库封装属性。                                                                                  | `boolean`                                                                                                        | -       |
| label        | 在通过键盘进行文本导航时,覆盖匹配该项所使用的文本标签。                                                   | `string \| undefined`                                                                                            | -       |
| onClick      | 菜单项的点击处理程序。                                                                                    | `((event: BaseUIEvent<React.MouseEvent<HTMLDivElement, MouseEvent>>) => void) \| undefined`                      | -       |
| closeOnClick | 当项目被点击时是否关闭菜单。本库默认设为 `true`。                                                         | `boolean \| undefined`                                                                                           | `true`  |
| nativeButton | 通过 `render` 属性替换元素时,是否渲染为原生 button 元素。若渲染元素本身就是原生 button,请设为 `true`。    | `boolean \| undefined`                                                                                           | `false` |
| disabled     | 是否忽略用户交互。                                                                                        | `boolean \| undefined`                                                                                           | `false` |
| className    | 应用于元素的 CSS 类名,或根据组件状态返回类名的函数。                                                      | `string \| ((state: ContextMenu.RadioItem.State) => string \| undefined) \| undefined`                           | -       |
| style        | 应用于元素的样式,或根据组件状态返回样式对象的函数。                                                       | `React.CSSProperties \| ((state: ContextMenu.RadioItem.State) => React.CSSProperties \| undefined) \| undefined` | -       |
| render       | 允许用不同的标签替换组件的 HTML 元素,或将其与另一个组件组合。接受 `ReactElement` 或返回要渲染元素的函数。 | `ReactElement \| ((props: HTMLProps, state: ContextMenu.RadioItem.State) => ReactElement) \| undefined`          | -       |
| children     | 单选项内容。                                                                                              | `React.ReactNode`                                                                                                | -       |

### ContextMenuSub

子菜单根组件,不渲染自己的 HTML 元素。

| 参数                 | 说明                                                                                 | 类型                                                                                               | 默认值       |
| -------------------- | ------------------------------------------------------------------------------------ | -------------------------------------------------------------------------------------------------- | ------------ |
| defaultOpen          | 子菜单是否默认打开。渲染受控子菜单时请使用 `open`。                                  | `boolean \| undefined`                                                                             | `false`      |
| open                 | 子菜单当前是否打开。                                                                 | `boolean \| undefined`                                                                             | -            |
| onOpenChange         | 子菜单打开或关闭时调用的事件处理程序。                                               | `((open: boolean, eventDetails: ContextMenu.SubmenuRoot.ChangeEventDetails) => void) \| undefined` | -            |
| onOpenChangeComplete | 子菜单关闭动画完成后调用的事件处理程序。                                             | `((open: boolean) => void) \| undefined`                                                           | -            |
| loopFocus            | 使用方向键导航到列表末尾时,是否循环回第一个菜单项。                                  | `boolean \| undefined`                                                                             | `true`       |
| highlightItemOnHover | 指针移过菜单项时是否高亮。关闭后可区分 CSS `:hover` 和 `data-highlighted` 焦点状态。 | `boolean \| undefined`                                                                             | `true`       |
| orientation          | 菜单视觉方向,决定焦点导航使用上下方向键还是左右方向键。                              | `"horizontal" \| "vertical" \| undefined`                                                          | `"vertical"` |
| disabled             | 是否忽略用户交互。                                                                   | `boolean \| undefined`                                                                             | `false`      |
| closeParentOnEsc     | 在子菜单中按下 `Esc` 时,是否关闭整个父级菜单。                                       | `boolean \| undefined`                                                                             | `false`      |
| actionsRef           | 命令式操作引用,支持 `unmount` 和 `close`。                                           | `React.RefObject<MenuRoot.Actions \| null> \| undefined`                                           | -            |
| triggerId            | 与弹出层关联的触发器 ID,通常配合受控 `open` 使用。                                   | `string \| null \| undefined`                                                                      | -            |
| defaultTriggerId     | 与弹出层关联的默认触发器 ID,通常配合 `defaultOpen` 使用。                            | `string \| null \| undefined`                                                                      | -            |
| handle               | 用于将菜单与外部触发器关联的句柄。                                                   | `MenuHandle<unknown> \| undefined`                                                                 | -            |
| children             | 子菜单结构,也可以是接收当前触发器 payload 的渲染函数。                               | `React.ReactNode \| PayloadChildRenderFunction<unknown>`                                           | -            |

### ContextMenuSubTrigger

一个可以打开子菜单的菜单项。默认渲染为 div 元素。

| 参数         | 说明                                                                                                      | 类型                                                                                                                  | 默认值  |
| ------------ | --------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------- | ------- |
| inset        | 缩进显示。本库封装属性。                                                                                  | `boolean`                                                                                                             | -       |
| label        | 在通过键盘进行文本导航时,覆盖匹配该项所使用的文本标签。                                                   | `string \| undefined`                                                                                                 | -       |
| onClick      | 子菜单触发项的点击处理程序。                                                                              | `((event: BaseUIEvent<React.MouseEvent<HTMLDivElement, MouseEvent>>) => void) \| undefined`                           | -       |
| nativeButton | 通过 `render` 属性替换元素时,是否渲染为原生 button 元素。若渲染元素本身就是原生 button,请设为 `true`。    | `boolean \| undefined`                                                                                                | `false` |
| disabled     | 是否忽略用户交互。                                                                                        | `boolean \| undefined`                                                                                                | `false` |
| openOnHover  | 是否在悬停触发项时打开子菜单。                                                                            | `boolean \| undefined`                                                                                                | -       |
| delay        | 悬停后等待多久才允许打开子菜单,单位为毫秒。需要配合 `openOnHover` 使用。                                  | `number \| undefined`                                                                                                 | `100`   |
| closeDelay   | 通过悬停打开的子菜单在关闭前等待多久,单位为毫秒。需要配合 `openOnHover` 使用。                            | `number \| undefined`                                                                                                 | `0`     |
| className    | 应用于元素的 CSS 类名,或根据组件状态返回类名的函数。                                                      | `string \| ((state: ContextMenu.SubmenuTrigger.State) => string \| undefined) \| undefined`                           | -       |
| style        | 应用于元素的样式,或根据组件状态返回样式对象的函数。                                                       | `React.CSSProperties \| ((state: ContextMenu.SubmenuTrigger.State) => React.CSSProperties \| undefined) \| undefined` | -       |
| render       | 允许用不同的标签替换组件的 HTML 元素,或将其与另一个组件组合。接受 `ReactElement` 或返回要渲染元素的函数。 | `ReactElement \| ((props: HTMLProps, state: ContextMenu.SubmenuTrigger.State) => ReactElement) \| undefined`          | -       |
| children     | 子菜单触发项内容。                                                                                        | `React.ReactNode`                                                                                                     | -       |

### ContextMenuGroup

对一组相关菜单项进行语义分组。

| 参数      | 说明                                                 | 类型                                                                                                         | 默认值 |
| --------- | ---------------------------------------------------- | ------------------------------------------------------------------------------------------------------------ | ------ |
| className | 应用于元素的 CSS 类名,或根据组件状态返回类名的函数。 | `string \| ((state: ContextMenu.Group.State) => string \| undefined) \| undefined`                           | -      |
| style     | 应用于元素的样式,或根据组件状态返回样式对象的函数。  | `React.CSSProperties \| ((state: ContextMenu.Group.State) => React.CSSProperties \| undefined) \| undefined` | -      |
| render    | 替换分组容器的 HTML 元素,或与其他组件组合。          | `ReactElement \| ((props: HTMLProps, state: ContextMenu.Group.State) => ReactElement) \| undefined`          | -      |
| children  | 分组内容。                                           | `React.ReactNode`                                                                                            | -      |

### ContextMenuLabel

分组标题,会自动与父级 `ContextMenuGroup` 建立可访问关联。

| 参数      | 说明                                                 | 类型                                                                                                              | 默认值 |
| --------- | ---------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------- | ------ |
| inset     | 缩进显示。本库封装属性。                             | `boolean`                                                                                                         | -      |
| className | 应用于元素的 CSS 类名,或根据组件状态返回类名的函数。 | `string \| ((state: ContextMenu.GroupLabel.State) => string \| undefined) \| undefined`                           | -      |
| style     | 应用于元素的样式,或根据组件状态返回样式对象的函数。  | `React.CSSProperties \| ((state: ContextMenu.GroupLabel.State) => React.CSSProperties \| undefined) \| undefined` | -      |
| render    | 替换标题的 HTML 元素,或与其他组件组合。              | `ReactElement \| ((props: HTMLProps, state: ContextMenu.GroupLabel.State) => ReactElement) \| undefined`          | -      |
| children  | 标题内容。                                           | `React.ReactNode`                                                                                                 | -      |

### ContextMenuSeparator

视觉和语义分隔线。

| 参数        | 说明                                                 | 类型                                                                                                 | 默认值         |
| ----------- | ---------------------------------------------------- | ---------------------------------------------------------------------------------------------------- | -------------- |
| orientation | 分隔线方向。                                         | `"horizontal" \| "vertical" \| undefined`                                                            | `"horizontal"` |
| className   | 应用于元素的 CSS 类名,或根据组件状态返回类名的函数。 | `string \| ((state: Separator.State) => string \| undefined) \| undefined`                           | -              |
| style       | 应用于元素的样式,或根据组件状态返回样式对象的函数。  | `React.CSSProperties \| ((state: Separator.State) => React.CSSProperties \| undefined) \| undefined` | -              |
| render      | 替换分隔线的 HTML 元素,或与其他组件组合。            | `ReactElement \| ((props: HTMLProps, state: Separator.State) => ReactElement) \| undefined`          | -              |

### ContextMenuShortcut

菜单项右侧的快捷键提示,只负责展示,不自动绑定键盘事件。继承原生 `span` 属性。

| 参数      | 说明             | 类型              | 默认值 |
| --------- | ---------------- | ----------------- | ------ |
| className | 自定义类名。     | `string`          | -      |
| children  | 快捷键提示内容。 | `React.ReactNode` | -      |
