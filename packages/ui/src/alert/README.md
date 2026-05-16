---
category: Components
title: Alert 警告提示
subtitle: Alert 警告提示
demo:
  cols: 1
group:
  title: 反馈
  order: 1
nav: 组件
toc: content
background: #111
compact: true
---

Alert 用于在页面内呈现需要关注的提示信息(成功、警告、错误、说明)。不会自动消失,用户必须主动关注或操作。

## 特性

- **2 种变体**:`default` 普通提示 / `destructive` 错误警告。
- **结构化子组件**:`AlertTitle` / `AlertDescription` / `AlertAction`。
- **支持图标**:作为第一个子元素的 `<svg>` 会自动定位到左侧。
- **支持右上角操作**:`AlertAction` 自动定位。
- **完整 ARIA**:`role="alert"`,读屏器会立即朗读。

## 何时使用

- 表单页顶部提示提交错误。
- 页面顶部公告(系统维护、订阅到期等)。
- 危险操作前的明确警告。

## 何时不使用

- 短暂反馈消息(操作成功)——使用 `Sonner` toast。
- 二次确认弹窗——使用 `AlertDialog`。
- 表单字段内联错误——使用 `FieldError`。

## 导入

```ts | pure
import {
  Alert,
  AlertAction,
  AlertDescription,
  AlertTitle,
} from "lynote-ui/alert";
```

## 代码演示

<code src="./demos/base.tsx">基本用法</code>

<code src="./demos/variant.tsx">变体</code>

<code src="./demos/with-icon.tsx" description="作为 Alert 第一个子元素的图标会自动定位到左侧。">带图标</code>

<code src="./demos/with-action.tsx" description="`AlertAction` 在右上角放置一个动作按钮(如续费 / 重试)。">带操作按钮</code>

## 最佳实践

- **明确标题**:`AlertTitle` 一句话能说明问题,描述写后果。
- **`destructive` 只用于错误**:成功 / 信息提示用 `default`,不要把"已保存"做成红色。
- **避免长篇大论**:超过两句的描述请改用 Card 或独立页面。
- **提供解决路径**:能用按钮就用 `AlertAction`,让用户知道下一步做什么。

## API

### Alert

| 参数      | 说明              | 类型                          | 默认值      |
| --------- | ----------------- | ----------------------------- | ----------- |
| variant   | 视觉变体          | `"default" \| "destructive"`  | `"default"` |
| className | 自定义类名        | `string`                      | -           |
| ...props  | 透传原生 div 属性 | `React.ComponentProps<"div">` | -           |

### AlertTitle / AlertDescription / AlertAction

均为容器组件,支持 `className` 与原生 `<div>` 属性。
