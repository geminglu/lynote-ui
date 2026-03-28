---
category: Components
title: Resizable 可调整大小
subtitle: Resizable 可调整大小
demo:
  cols: 1
group:
  title: 布局
  order: 5
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
  ResizablePanelGroup,
  ResizablePanel,
  ResizableHandle,
} from "lynote-ui";
```

:::

可调整大小的面板组件，用于创建可拖拽调整大小的布局。

## 代码演示

<code src="./demos/base.tsx">基本用法</code>

## API

### ResizablePanelGroup

可调整大小面板组的根容器组件。

| 参数      | 说明         | 类型                                                         | 默认值 |
| --------- | ------------ | ------------------------------------------------------------ | ------ |
| direction | 面板方向     | `"horizontal" \| "vertical"`                                 | -      |
| className | 自定义类名   | `string`                                                     | -      |
| ...props  | 其他原生属性 | `React.ComponentProps<typeof ResizablePrimitive.PanelGroup>` | -      |

### ResizablePanel

可调整大小的单个面板。

| 参数        | 说明               | 类型                                                    | 默认值 |
| ----------- | ------------------ | ------------------------------------------------------- | ------ |
| defaultSize | 默认大小（百分比） | `number`                                                | -      |
| minSize     | 最小大小（百分比） | `number`                                                | -      |
| maxSize     | 最大大小（百分比） | `number`                                                | -      |
| ...props    | 其他原生属性       | `React.ComponentProps<typeof ResizablePrimitive.Panel>` | -      |

### ResizableHandle

可调整大小面板之间的拖拽手柄。

| 参数       | 说明             | 类型                                                                | 默认值 |
| ---------- | ---------------- | ------------------------------------------------------------------- | ------ |
| withHandle | 是否显示手柄图标 | `boolean`                                                           | -      |
| className  | 自定义类名       | `string`                                                            | -      |
| ...props   | 其他原生属性     | `React.ComponentProps<typeof ResizablePrimitive.PanelResizeHandle>` | -      |
