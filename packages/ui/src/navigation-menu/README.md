---
category: Components
title: NavigationMenu 导航菜单
subtitle: NavigationMenu 导航菜单
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

NavigationMenu 用于构建顶部导航,支持嵌套子菜单(类似 Stripe / Vercel 等站点的顶部导航条)。基于 Base UI NavigationMenu 原语,自带触发延迟、自动定位、键盘可达。

## 特性

- **二级菜单**:`NavigationMenuTrigger` 弹出 `NavigationMenuContent`。
- **链接 / 触发器混用**:既可以是直接的链接,也可以是带下拉的 trigger。
- **键盘可达**:方向键 / `Tab` / `Enter` 均可触发。
- **自动定位**:`NavigationMenuPositioner` 计算位置并提供动画。

## 何时使用

- 顶部站点导航(产品 / 解决方案 / 资源 / 定价)。
- 后台导航条(项目 / 团队 / 设置)。

## 何时不使用

- 简单的菜单或操作——使用 `DropdownMenu`。
- 移动端导航——使用 `Sheet` 抽屉式导航。
- 上下文相关的右键菜单——使用 `ContextMenu`。

## 导入

```ts | pure
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "lynote-ui/navigation-menu";
```

## 代码演示

<code src="./demos/base.tsx">基本用法</code>

<code src="./demos/featured-links.tsx" description="使用图标、标题和说明构建资源导航面板。">资源导航</code>

## 最佳实践

- **每个 trigger 包含 2-6 项**:超过会显得拥挤,可考虑拆成多个 trigger。
- **链接使用 `render={<a/>}`**:`NavigationMenuLink` 可以通过 render 渲染为路由组件。
- **响应式**:窄屏建议换成 `Sheet` 侧边抽屉。
- **不要嵌套 NavigationMenu**:嵌套会破坏键盘焦点环。

## API

### NavigationMenu

继承 Base UI `NavigationMenu.Root` 的 props。

| 参数          | 说明                                      | 类型                                                                    | 默认值         |
| ------------- | ----------------------------------------- | ----------------------------------------------------------------------- | -------------- |
| value         | 当前激活的菜单值（受控）                  | `any`                                                                   | -              |
| defaultValue  | 默认激活值（非受控）                      | `any`                                                                   | -              |
| onValueChange | 激活变化回调                              | `(value: any, eventDetails: NavigationMenu.ChangeEventDetails) => void` | -              |
| orientation   | 排列方向                                  | `"horizontal" \| "vertical"`                                            | `"horizontal"` |
| openOnHover   | 是否在悬停时展开                          | `boolean`                                                               | `true`         |
| delay         | 悬停展开/关闭延时（毫秒）                 | `number`                                                                | `50`           |
| closeDelay    | 鼠标移开关闭延时（毫秒）                  | `number`                                                                | `50`           |
| actionsRef    | 用于命令式控制的 ref                      | `RefObject<{ unmount: () => void } \| null>`                            | -              |
| align         | 弹层对齐方式（透传给内置的 `Positioner`） | `"start" \| "center" \| "end"`                                          | `"start"`      |
| render        | 自定义渲染元素                            | `React.ReactElement \| ((props, state) => React.ReactNode)`             | -              |
| className     | 自定义类名                                | `string`                                                                | -              |
| children      | 子组件                                    | `React.ReactNode`                                                       | -              |

### NavigationMenuList

`<ul>` 容器。

| 参数      | 说明                      | 类型                                                        | 默认值 |
| --------- | ------------------------- | ----------------------------------------------------------- | ------ |
| render    | 自定义渲染元素            | `React.ReactElement \| ((props, state) => React.ReactNode)` | -      |
| className | 自定义类名                | `string`                                                    | -      |
| children  | `NavigationMenuItem` 列表 | `React.ReactNode`                                           | -      |

### NavigationMenuItem

单个菜单项。

| 参数      | 说明           | 类型                                                        | 默认值 |
| --------- | -------------- | ----------------------------------------------------------- | ------ |
| value     | 项标识         | `any`                                                       | -      |
| render    | 自定义渲染元素 | `React.ReactElement \| ((props, state) => React.ReactNode)` | -      |
| className | 自定义类名     | `string`                                                    | -      |
| children  | 子节点         | `React.ReactNode`                                           | -      |

### NavigationMenuTrigger

菜单触发按钮，自带右侧 `ChevronDown` 旋转动画。

| 参数         | 说明                           | 类型                                                        | 默认值  |
| ------------ | ------------------------------ | ----------------------------------------------------------- | ------- |
| nativeButton | 是否强制以原生 `<button>` 挂载 | `boolean`                                                   | `true`  |
| disabled     | 是否禁用                       | `boolean`                                                   | `false` |
| render       | 自定义渲染元素                 | `React.ReactElement \| ((props, state) => React.ReactNode)` | -       |
| className    | 自定义类名                     | `string`                                                    | -       |
| children     | 触发元素文本                   | `React.ReactNode`                                           | -       |

### NavigationMenuContent

弹层内容区。

| 参数      | 说明           | 类型                                                        | 默认值 |
| --------- | -------------- | ----------------------------------------------------------- | ------ |
| render    | 自定义渲染元素 | `React.ReactElement \| ((props, state) => React.ReactNode)` | -      |
| className | 自定义类名     | `string`                                                    | -      |
| children  | 弹层内容       | `React.ReactNode`                                           | -      |

### NavigationMenuLink

可点击的菜单链接，自动维护 `data-active`。

| 参数      | 说明                          | 类型                                                        | 默认值 |
| --------- | ----------------------------- | ----------------------------------------------------------- | ------ |
| active    | 当前是否激活                  | `boolean`                                                   | -      |
| render    | 自定义渲染元素（如路由 Link） | `React.ReactElement \| ((props, state) => React.ReactNode)` | -      |
| className | 自定义类名                    | `string`                                                    | -      |
| children  | 链接内容                      | `React.ReactNode`                                           | -      |

### NavigationMenuIndicator

激活项下方的小箭头指示器，可放在 `NavigationMenuList` 旁。

| 参数      | 说明       | 类型     | 默认值 |
| --------- | ---------- | -------- | ------ |
| className | 自定义类名 | `string` | -      |

### NavigationMenuPositioner

内部已由 `NavigationMenu` 自动挂载，通常无需手动使用；如需自定义弹层位置可单独引入。

| 参数        | 说明           | 类型                                                                       | 默认值     |
| ----------- | -------------- | -------------------------------------------------------------------------- | ---------- |
| side        | 弹层方向       | `"top" \| "bottom" \| "left" \| "right" \| "inline-start" \| "inline-end"` | `"bottom"` |
| sideOffset  | 距离锚点的间距 | `number`                                                                   | `8`        |
| align       | 对齐方式       | `"start" \| "center" \| "end"`                                             | `"start"`  |
| alignOffset | 对齐偏移       | `number`                                                                   | `0`        |
| className   | 自定义类名     | `string`                                                                   | -          |

### navigationMenuTriggerStyle

可单独导出的 `cva` 样式，便于在不直接使用 `<NavigationMenuTrigger>` 时复用相同视觉。
