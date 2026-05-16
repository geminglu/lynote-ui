---
category: Components
title: Progress 进度条
subtitle: Progress 进度条
demo:
  cols: 1
group:
  title: 反馈
  order: 4
nav: 组件
toc: content
background: #111
compact: true
---

进度条用于展示一个可量化任务的进展(上传、下载、安装、问卷完成度等)。基于 Base UI Progress 原语,内置 `Track` 与 `Indicator` 两个子组件,默认以一根细线条呈现。

## 特性

- **数值驱动**:`value` 是 0-100 的数字,组件按比例渲染。
- **不确定态**:不传 `value` 时呈现 indeterminate 动画(用于无法量化的进度)。
- **自带 `ProgressLabel`**:可显示当前百分比或自定义文字。
- **ARIA 完整**:`role="progressbar"` + `aria-valuenow` / `aria-valuemin` / `aria-valuemax`。

## 何时使用

- 文件上传 / 下载的实时进度。
- 多步骤任务完成度(注册流程、问卷进度)。
- 安装 / 加载等可量化任务。

## 何时不使用

- 任务时间无法预估——使用 `Spinner`。
- 后台异步操作的概览状态——使用通知 / Toast。
- 表示百分比但与时间无关(评分、健康度)——使用普通条形图。

## 导入

```ts | pure
import { Progress } from "lynote-ui/progress";
```

## 代码演示

<code src="./demos/base.tsx">基本用法</code>

<code src="./demos/controlled.tsx" description="通过 `value` 受控驱动。">受控用法</code>

<code src="./demos/animated.tsx" description="模拟上传 / 加载场景的渐进式进度。">渐进式动画</code>

<code src="./demos/variant.tsx">变体</code>

## 最佳实践

- **进度可预估时显示百分比**:数字让用户更有掌控感。
- **进度长时间停滞要提示**:停留超过 5 秒未动应给予"网络较慢 / 重试"提示。
- **不要倒退**:除非真的失败(此时配合错误提示),否则避免数值回退。
- **不要堆叠多个进度条**:多任务并行时使用列表 + 各自的进度。

## API

### Progress

| 参数      | 说明                             | 类型              | 默认值 |
| --------- | -------------------------------- | ----------------- | ------ |
| value     | 当前进度(0-100),不传则为不确定态 | `number \| null`  | -      |
| className | 自定义类名                       | `string`          | -      |
| children  | 可选 label / 自定义子节点        | `React.ReactNode` | -      |
