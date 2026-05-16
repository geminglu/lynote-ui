---
category: Components
title: Direction 文字方向
subtitle: Direction 文字方向
demo:
  cols: 1
group:
  title: 通用
  order: 1
nav: 组件
toc: content
background: #111
compact: true
---

`DirectionProvider` 用于声明子树的文字阅读方向（LTR / RTL）。基于 Base UI 的 `DirectionProvider` 透传，所有依赖方向感知的组件（如菜单、滑块、面包屑）会自动响应。

## 特性

- **零运行时开销**：仅在 React Context 中传递 `dir` 值。
- **`useDirection` 钩子**：可以在自定义组件内读取当前方向，按方向条件渲染。
- **可嵌套**：内层 Provider 可覆盖外层方向。

## 何时使用

- 需要支持阿拉伯语 / 希伯来语等 RTL 语言。
- 单页面内有局部需要切换方向的区域（如富文本预览）。

## 何时不使用

- 项目无国际化需求且只使用 LTR——不需要包 Provider。

## 导入

```ts | pure
import { DirectionProvider, useDirection } from "lynote-ui/direction";
```

## 代码演示

<code src="./demos/base.tsx" description="包一层 `DirectionProvider`，子组件即可读取方向。">基本用法</code>

## 最佳实践

- **放在应用根部**：通常在 `<html dir="rtl">` 之外，再在 React 根上包一层 `DirectionProvider`，让两边一致。
- **配合 Tailwind 的 logical 工具类**：使用 `ms-2`（margin-inline-start）替代 `ml-2`，配合 RTL 自动镜像。
- **测试镜像布局**：复杂界面切到 RTL 后建议手动走查，确认所有图标方向、滚动条都正确。

## API

### DirectionProvider

| 参数     | 说明         | 类型              | 默认值  |
| -------- | ------------ | ----------------- | ------- |
| dir      | 方向         | `"ltr" \| "rtl"`  | `"ltr"` |
| children | 受影响的子树 | `React.ReactNode` | -       |

### useDirection()

返回当前 `dir` 字符串。在 `DirectionProvider` 外调用会返回默认 `"ltr"`。
