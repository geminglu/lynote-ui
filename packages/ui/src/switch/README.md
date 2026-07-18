---
category: Components
title: Switch 开关
subtitle: Switch 开关
demo:
  cols: 1
group:
  title: 表单
  order: 4
nav: 组件
toc: content
background: #111
compact: true
---

Switch 用于在两种状态之间切换，常见于设置面板中表达"立即生效"的偏好开关。它在语义上等同于"开/关"，与 `Checkbox`（用于多选 / 表单提交）的使用场景明显不同。

## 特性

- **四种尺寸**：`size="xs" | "sm" | "default" | "lg"`。
- **受控/非受控**：通过 `checked` + `onCheckedChange` 或 `defaultChecked` 控制。
- **支持表单**：可使用 `name` 参与原生表单序列化。
- **校验态**：`aria-invalid` 会触发红色边框。

## 何时使用

- 设置面板中"立即生效"的偏好开关（消息通知、暗色主题、自动保存）。
- 状态切换无须二次确认且变更立刻可见的场景。

## 何时不使用

- 需要在表单提交时统一收集——使用 `Checkbox` 更直观。
- 需要呈现三种状态（开 / 关 / 不确定）——使用 `Checkbox` 的 `indeterminate`。
- 一组互斥的视图切换——使用 `Tabs` 或 `ToggleGroup`。

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

```ts [按需] | pure
import { Switch } from "lynote-ui/switch";
```

```ts [整体] | pure
import { Switch } from "lynote-ui";
```

:::

## 组件结构

```tsx | pure
<Switch checked={open} onCheckedChange={setOpen} />
```

## 代码演示

<code src="./demos/base.tsx">基本用法</code>

<code src="./demos/controlled.tsx">受控用法</code>

<code src="./demos/size.tsx" description="四种尺寸，适配不同布局密度。">尺寸</code>

<code src="./demos/disabled.tsx">禁用状态</code>

<code src="./demos/with-description.tsx" description="结合 `Field` 在标签下方提供说明文字，便于用户理解开关的含义。">带说明文字</code>

<code src="./demos/settings.tsx" description="完整的设置面板示例，包含多个开关的受控状态管理。">设置面板</code>

## 最佳实践

- **使用动词性 label**：如"启用 / 开启 / 接收"，避免使用名词标签让用户不确定开关方向。
- **状态变化立刻生效**：Switch 隐含"立即生效"语义。如果操作需要保存按钮，请改用 Checkbox。
- **危险开关附加二次确认**：关闭"安全防护""自动备份"等关键开关时，弹出 `AlertDialog` 进行二次确认。
- **不要在 label 中重复状态**：错误示例"启用通知（开启）"。状态由控件本身表达，label 应保持稳定。
- **使用 `Field` 提供说明**：当一个 switch 的语义不明显时，配合 `FieldDescription` 解释会发生什么。

## 无障碍与键盘交互

- 默认渲染为 `<button role="switch">`，状态变化时自动更新 `aria-checked`。
- 必须显式关联 `<label htmlFor>`，否则读屏器无法朗读用途。
- 状态变更后焦点保持在控件上，不会跳走。

| 按键              | 行为             |
| ----------------- | ---------------- |
| `Space` / `Enter` | 切换开关状态     |
| `Tab`             | 移动到下一个控件 |

## API

### Switch

| 参数            | 说明                       | 类型                                | 默认值      |
| --------------- | -------------------------- | ----------------------------------- | ----------- |
| checked         | 选中状态（受控）           | `boolean`                           | -           |
| defaultChecked  | 默认选中状态（非受控）     | `boolean`                           | `false`     |
| onCheckedChange | 状态变化回调               | `(checked: boolean) => void`        | -           |
| size            | 控件尺寸                   | `"xs" \| "sm" \| "default" \| "lg"` | `"default"` |
| disabled        | 是否禁用                   | `boolean`                           | `false`     |
| required        | 是否必填，用于原生表单校验 | `boolean`                           | `false`     |
| name            | 表单字段名                 | `string`                            | -           |
| value           | 选中时的字段值             | `string`                            | `"on"`      |
| aria-invalid    | 是否处于错误态             | `boolean`                           | -           |
| id              | 元素 id，用于关联 label    | `string`                            | -           |
| className       | 自定义类名                 | `string`                            | -           |
