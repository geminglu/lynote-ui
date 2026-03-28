---
category: Components
title: NavigationMenu 导航菜单
subtitle: NavigationMenu 导航菜单
demo:
  cols: 1
group:
  title: 导航
  order: 6
nav: 组件
toc: content
background: #111
compact: true
---

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

```ts [单个] | pure
import {
  NavigationMenu,
  NavigationMenuList,
  NavigationMenuItem,
  NavigationMenuTrigger,
  NavigationMenuContent,
  NavigationMenuLink,
  NavigationMenuViewport,
  NavigationMenuIndicator,
} from "lynote-ui";
```

:::

导航菜单组件，用于创建网站的主要导航结构。

## 代码演示

<code src="./demos/base.tsx">基本用法</code>

## API

### NavigationMenu

导航菜单的根容器组件。

| 参数      | 说明         | 类型                                                        | 默认值 |
| --------- | ------------ | ----------------------------------------------------------- | ------ |
| viewport  | 是否显示视口 | `boolean`                                                   | `true` |
| className | 自定义类名   | `string`                                                    | -      |
| ...props  | 其他原生属性 | `React.ComponentProps<typeof NavigationMenuPrimitive.Root>` | -      |

### NavigationMenuList

导航菜单列表容器。

| 参数      | 说明         | 类型                                                        | 默认值 |
| --------- | ------------ | ----------------------------------------------------------- | ------ |
| className | 自定义类名   | `string`                                                    | -      |
| ...props  | 其他原生属性 | `React.ComponentProps<typeof NavigationMenuPrimitive.List>` | -      |

### NavigationMenuItem

导航菜单项。

| 参数      | 说明         | 类型                                                        | 默认值 |
| --------- | ------------ | ----------------------------------------------------------- | ------ |
| className | 自定义类名   | `string`                                                    | -      |
| ...props  | 其他原生属性 | `React.ComponentProps<typeof NavigationMenuPrimitive.Item>` | -      |

### NavigationMenuTrigger

导航菜单触发器。

| 参数      | 说明         | 类型                                                           | 默认值 |
| --------- | ------------ | -------------------------------------------------------------- | ------ |
| className | 自定义类名   | `string`                                                       | -      |
| ...props  | 其他原生属性 | `React.ComponentProps<typeof NavigationMenuPrimitive.Trigger>` | -      |

### NavigationMenuContent

导航菜单内容区域。

| 参数      | 说明         | 类型                                                           | 默认值 |
| --------- | ------------ | -------------------------------------------------------------- | ------ |
| className | 自定义类名   | `string`                                                       | -      |
| ...props  | 其他原生属性 | `React.ComponentProps<typeof NavigationMenuPrimitive.Content>` | -      |

### NavigationMenuLink

导航菜单链接。

| 参数      | 说明         | 类型                                                        | 默认值 |
| --------- | ------------ | ----------------------------------------------------------- | ------ |
| className | 自定义类名   | `string`                                                    | -      |
| ...props  | 其他原生属性 | `React.ComponentProps<typeof NavigationMenuPrimitive.Link>` | -      |

### NavigationMenuViewport

导航菜单视口。

| 参数     | 说明         | 类型                                                            | 默认值 |
| -------- | ------------ | --------------------------------------------------------------- | ------ |
| ...props | 其他原生属性 | `React.ComponentProps<typeof NavigationMenuPrimitive.Viewport>` | -      |

### NavigationMenuIndicator

导航菜单指示器。

| 参数     | 说明         | 类型                                                             | 默认值 |
| -------- | ------------ | ---------------------------------------------------------------- | ------ |
| ...props | 其他原生属性 | `React.ComponentProps<typeof NavigationMenuPrimitive.Indicator>` | -      |
