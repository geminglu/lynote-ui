---
category: Components
title: Checkbox 复选框
subtitle: Checkbox 复选框
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

复选框用于在两个或三个状态（选中、未选中、不确定）之间切换，适合多选场景或单个布尔选项。

## 特性

- **三态支持**：通过 `checked` + `indeterminate` 两个独立的布尔属性表达选中/未选中/不确定状态。
- **键盘可达**：默认渲染为 `<button role="checkbox">`，支持 `Space` 切换。
- **表单友好**：可通过 Base UI 的 `name` 属性绑定到原生表单序列化中。
- **校验态**：`aria-invalid` 会触发红色边框与焦点环，便于配合表单验证。

## 何时使用

- 一个独立的布尔开关（同意条款、订阅通讯）。
- 一组互相独立的多选项（权限、兴趣标签、过滤器）。
- 树形选择中的父子级状态指示（使用 `indeterminate`）。

## 何时不使用

- 一组互斥选项——使用 `RadioGroup` 或 `Select`。
- 立即生效的偏好/设置开关——`Switch` 在语义上更准确。
- 触发动作而非状态切换——使用 `Button` 或 `Toggle`。

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
import { Checkbox } from "lynote-ui/checkbox";
```

```ts [整体] | pure
import { Checkbox } from "lynote-ui";
```

:::

## 组件结构

```tsx | pure
<Checkbox checked={false} onCheckedChange={setChecked} />
```

## 代码演示

<code src="./demos/base.tsx">基本用法</code>

<code src="./demos/controlled.tsx">受控用法</code>

<code src="./demos/disabled.tsx">禁用状态</code>

<code src="./demos/indeterminate.tsx" description="父复选框根据子项状态自动切换 `checked` 与 `indeterminate`。">不确定态（父子联动）</code>

<code src="./demos/with-description.tsx" description="结合 `Field` / `FieldLabel` / `FieldDescription` 提供说明文字，提升可读性与可访问性。">带说明文字</code>

<code src="./demos/group.tsx" description="多项独立选择的标准写法。请在 `FieldGroup` 上加 `data-slot=\"checkbox-group\"` 以保证间距正确。">多选分组</code>

<code src="./demos/card.tsx" description="卡片式可点击区域，用于价格方案、订阅类型等强视觉选择场景。">卡片式选择</code>

<code src="./demos/size.tsx">尺寸</code>

## 最佳实践

- **始终关联 label**：通过 `htmlFor` 或外层 `<FieldLabel>` 包裹，提升点击区域和读屏体验。
- **复选项 ≥ 5 项考虑搜索/分组**：长列表用 `Combobox` 多选模式或加入分组标题。
- **必填的单复选框需要校验提示**：例如"同意条款"，请在 `Field` 上设置 `data-invalid` 并显示错误信息。
- **不要把多个独立 checkbox 当作 toggle**：每个 checkbox 只代表一个独立的布尔值，多个 checkbox 的状态不应互斥。
- **`indeterminate` 不可由用户直接设置**：只能由程序根据子项推导，用户操作后会调用 `onCheckedChange`，由你决定下一个 `checked` 值。

## 无障碍与键盘交互

- 默认 `role="checkbox"`，状态变化时会自动更新 `aria-checked`。
- 校验失败时设置 `aria-invalid` 即可获得错误样式；外层 `Field` 加 `data-invalid` 让 label 同步变色。
- 与 label 关联（`htmlFor` / 嵌套）后，点击 label 也会触发切换。

| 按键    | 行为                 |
| ------- | -------------------- |
| `Space` | 切换选中/未选中状态  |
| `Tab`   | 移动到下一个可聚焦项 |

## API

### Checkbox

| 参数            | 说明                                        | 类型                                | 默认值  |
| --------------- | ------------------------------------------- | ----------------------------------- | ------- |
| checked         | 选中状态（受控）                            | `boolean`                           | -       |
| defaultChecked  | 默认选中状态（非受控）                      | `boolean`                           | `false` |
| indeterminate   | 是否以"部分选中"状态显示，与 `checked` 独立 | `boolean`                           | `false` |
| onCheckedChange | 选中状态变化回调                            | `(checked: boolean) => void`        | -       |
| disabled        | 是否禁用                                    | `boolean`                           | `false` |
| required        | 是否必填，用于原生表单校验                  | `boolean`                           | `false` |
| name            | 表单字段名，参与原生序列化                  | `string`                            | -       |
| value           | 表单字段值，参与原生序列化                  | `string`                            | `"on"`  |
| aria-invalid    | 是否处于错误态                              | `boolean`                           | -       |
| size            | 复选框尺寸                                  | `"xs" \| "sm" \| "default" \| "lg"` | -       |
| className       | 自定义类名                                  | `string`                            | -       |
| id              | 元素 id，用于和 label 关联                  | `string`                            | -       |
