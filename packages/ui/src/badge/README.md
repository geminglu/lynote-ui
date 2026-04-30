---
category: Components
title: Badge 徽标
subtitle: Badge 徽标
demo:
  cols: 1
group:
  title: 数据展示
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
import { Badge } from "lynote-ui";
```

:::

用于展示状态、分类、计数或简短标签。

## 使用建议

- 该组件基于 Base UI 封装，行为、键盘交互和无障碍语义继承自 Base UI。
- 文档中的 API 以当前 `lynote-ui` 封装导出的属性为准，优先列出业务中最常用且稳定的属性。
- `className` 用于覆盖或扩展样式；复杂组合场景建议优先使用已导出的子组件组合。

## 组件结构

```tsx | pure
<Badge />
```

## 代码演示

<code src="./demos/base.tsx">基本用法</code>

<code src="./demos/variant.tsx">变体</code>

## API

### Badge

Badge 组件。

| 参数      | 说明           | 类型                                                                          | 默认值    |
| --------- | -------------- | ----------------------------------------------------------------------------- | --------- |
| variant   | 视觉样式       | `"default" \| "secondary" \| "destructive" \| "outline" \| "ghost" \| "link"` | "default" |
| render    | 自定义渲染元素 | `React.ReactElement \| ((props, state) => React.ReactElement)`                | -         |
| className | 自定义类名     | `string`                                                                      | -         |
| children  | 徽标内容       | `React.ReactNode`                                                             | -         |
