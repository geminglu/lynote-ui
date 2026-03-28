---
category: Components
title: Button 按钮
subtitle: Button 按钮
demo:
  cols: 1
group:
  title: 表单
  order: 1
nav: 组件
toc: content
background: #111
compact: true
---

## 安装

:::code-group

```bash [npm]
npm install @lynote/button
```

```bash [yarn]
yarn add @lynote/button
```

```bash [pnpm]
pnpm add @lynote/button
```

:::

## 导入

:::code-group

```ts [单个] | pure
import { Button } from "@lynote/button";
```

```ts [全局] | pure
import { Button } from "gml-ui";
```

:::

标记了一个（或封装一组）操作命令，响应用户点击行为，触发相应的业务逻辑。

我们提供了八种按钮。

- 🔵 主按钮：用于主行动点，一个操作区域只能有一个主按钮。
- ⚪️ 默认按钮：用于没有主次之分的一组行动点。
- 🫥 虚线按钮：常用于添加操作。
- 🔤 文本按钮：用于最次级的行动点。
- 🔗 链接按钮：一般用于链接，即导航至某位置。
- 🟦 扁平按钮：浅色背景不带边框
- 🔳 浅色按钮：浅色背景带边框
- 🌠 投影按钮：底部带有倒影

以及四种状态属性与上面配合使用。

- ⚠️ 危险：删除/移动/修改权限等危险操作，一般需要二次确认。
- 👻 幽灵：用于背景色比较复杂的地方，常用在首页/产品页等展示场景。
- 🚫 禁用：行动点不可用的时候，一般需要文案解释。
- 🔃 加载中：用于异步操作等待反馈的时候，也可以避免多次提交。

## 代码演示

<code src="./demos/base.tsx">基本用法</code>

<code src="./demos/variant.tsx">变体用法</code>

<code src="./demos/size.tsx">尺寸用法</code>
