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

## 最佳实践

- **每个 trigger 包含 2-6 项**:超过会显得拥挤,可考虑拆成多个 trigger。
- **链接使用 `render={<a/>}`**:`NavigationMenuLink` 可以通过 render 渲染为路由组件。
- **响应式**:窄屏建议换成 `Sheet` 侧边抽屉。
- **不要嵌套 NavigationMenu**:嵌套会破坏键盘焦点环。

## API

### NavigationMenu

| 参数      | 说明       | 类型                           | 默认值    |
| --------- | ---------- | ------------------------------ | --------- |
| align     | 对齐方式   | `"start" \| "center" \| "end"` | `"start"` |
| className | 自定义类名 | `string`                       | -         |
| children  | 子组件     | `React.ReactNode`              | -         |

### NavigationMenuList / NavigationMenuItem / NavigationMenuTrigger / NavigationMenuContent / NavigationMenuLink

结构化的子组件,详见 Base UI 官方文档。
