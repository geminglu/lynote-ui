---
category: Components
title: AlertDialog 警告对话框
subtitle: AlertDialog 警告对话框
demo:
  cols: 1
group:
  title: 反馈
  order: 5
nav: 组件
toc: content
background: #111
compact: true
---

AlertDialog 用于在用户执行不可逆 / 高风险操作之前进行二次确认。与 `Dialog` 不同,它不能通过点击遮罩关闭——必须显式选择"取消"或"确认",避免误触。

## 特性

- **强制选择**:无法通过 Esc 之外的方式关闭(不能点击外部)。
- **`AlertDialogCancel` / `AlertDialogAction`**:语义化的取消 / 确认按钮。
- **可访问语义**:`role="alertdialog"` + `aria-labelledby` / `aria-describedby`。
- **2 种尺寸**:`default` / `sm`(`sm` 紧凑且按钮自动 grid 排布)。

## 何时使用

- 删除资源 / 退订 / 退出登录等不可逆操作前的二次确认。
- 任何"操作后无法撤销"的关键时刻。

## 何时不使用

- 一般信息收集 / 表单——用 `Dialog`(允许点击外部关闭)。
- 仅展示通知——用 `Alert` 或 `Sonner`。
- 可恢复的操作(支持撤销)——直接执行 + 给出"撤销"按钮。

## 导入

```ts | pure
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "lynote-ui/alert-dialog";
```

## 组件结构

```tsx | pure
<AlertDialog>
  <AlertDialogTrigger />
  <AlertDialogContent>
    <AlertDialogHeader>
      <AlertDialogTitle />
      <AlertDialogDescription />
    </AlertDialogHeader>
    <AlertDialogFooter>
      <AlertDialogCancel />
      <AlertDialogAction />
    </AlertDialogFooter>
  </AlertDialogContent>
</AlertDialog>
```

## 代码演示

<code src="./demos/base.tsx">基本用法</code>

<code src="./demos/destructive.tsx" description="确认按钮使用 destructive 变体,语义上更直观。">危险操作确认</code>

<code src="./demos/small.tsx" description="使用 `size='sm'` 属性使警告对话框更小。">小尺寸</code>

<code src="./demos/media.tsx" description="使用 `AlertDialogMedia` 组件展示图标或图片。">带媒体</code>

## 最佳实践

- **标题用问句**:"确认删除?" 而非"删除"——明确这是一个需要决策的问题。
- **描述写后果**:描述具体会发生什么、是否可恢复。
- **危险确认按钮用 `destructive`**:让用户看到红色后再点击,有最后一次反应机会。
- **不要默认聚焦在确认按钮**:base-ui 默认会聚焦到第一个可聚焦按钮(通常是取消),保留这个行为更安全。

## API

### AlertDialog

| 参数                 | 说明                            | 类型                                                                    | 默认值  |
| -------------------- | ------------------------------- | ----------------------------------------------------------------------- | ------- |
| open                 | 是否打开（受控）                | `boolean`                                                               | -       |
| defaultOpen          | 默认打开（非受控）              | `boolean`                                                               | `false` |
| onOpenChange         | 打开状态变化回调                | `(open: boolean, eventDetails: AlertDialog.ChangeEventDetails) => void` | -       |
| actionsRef           | 用于以命令式打开/关闭弹窗的 ref | `RefObject<{ unmount: () => void } \| null>`                            | -       |
| onOpenChangeComplete | 打开/关闭动画完成回调           | `(open: boolean) => void`                                               | -       |
| children             | 由 trigger 与 content 组合      | `React.ReactNode`                                                       | -       |

### AlertDialogContent

| 参数         | 说明                 | 类型                                                                                                | 默认值      |
| ------------ | -------------------- | --------------------------------------------------------------------------------------------------- | ----------- |
| size         | 弹窗尺寸             | `"default" \| "sm"`                                                                                 | `"default"` |
| initialFocus | 打开时初始聚焦的元素 | `RefObject<HTMLElement \| null> \| ((event: OpenChangeReason) => HTMLElement \| null \| undefined)` | -           |
| finalFocus   | 关闭后聚焦回的元素   | `RefObject<HTMLElement \| null> \| ((event: OpenChangeReason) => HTMLElement \| null \| undefined)` | -           |
| render       | 自定义渲染元素       | `React.ReactElement \| ((props, state) => React.ReactNode)`                                         | -           |
| className    | 自定义类名           | `string`                                                                                            | -           |
| children     | 内容                 | `React.ReactNode`                                                                                   | -           |

### AlertDialogTrigger

包裹任意元素作为打开 trigger。`render` 可用来渲染为 `Button` 等组件。

| 参数         | 说明                           | 类型                                                        | 默认值  |
| ------------ | ------------------------------ | ----------------------------------------------------------- | ------- |
| nativeButton | 是否强制以原生 `<button>` 挂载 | `boolean`                                                   | `true`  |
| disabled     | 是否禁用                       | `boolean`                                                   | `false` |
| render       | 自定义渲染元素                 | `React.ReactElement \| ((props, state) => React.ReactNode)` | -       |
| className    | 自定义类名                     | `string`                                                    | -       |
| children     | 触发元素内容                   | `React.ReactNode`                                           | -       |

### AlertDialogCancel

关闭弹窗的取消按钮，内部已默认 `render={<Button variant="outline" />}`。

| 参数         | 说明                                 | 类型                                                                          | 默认值      |
| ------------ | ------------------------------------ | ----------------------------------------------------------------------------- | ----------- |
| variant      | Button 视觉变体（透传给内置 Button） | `"default" \| "outline" \| "secondary" \| "ghost" \| "destructive" \| "link"` | `"outline"` |
| size         | Button 尺寸（透传给内置 Button）     | `Button["size"]`                                                              | `"default"` |
| nativeButton | 是否强制以原生 `<button>` 挂载       | `boolean`                                                                     | `true`      |
| disabled     | 是否禁用                             | `boolean`                                                                     | `false`     |
| render       | 自定义渲染元素                       | `React.ReactElement \| ((props, state) => React.ReactNode)`                   | -           |
| className    | 自定义类名                           | `string`                                                                      | -           |
| children     | 按钮内容                             | `React.ReactNode`                                                             | -           |

### AlertDialogAction

确认按钮，直接渲染为 `<Button />`，接受 Button 的所有 props（如 `variant="destructive"`）。

| 参数     | 说明                     | 类型                                         | 默认值      |
| -------- | ------------------------ | -------------------------------------------- | ----------- |
| variant  | Button 视觉变体          | `Button["variant"]`                          | `"default"` |
| size     | Button 尺寸              | `Button["size"]`                             | `"default"` |
| onClick  | 点击回调                 | `React.MouseEventHandler<HTMLButtonElement>` | -           |
| ...props | 透传 `Button` 的剩余属性 | `ButtonProps`                                | -           |

### AlertDialogHeader / AlertDialogFooter

结构化容器，分别用于布局头部（标题、描述、媒体）和底部（操作按钮）。

| 参数      | 说明              | 类型                          | 默认值 |
| --------- | ----------------- | ----------------------------- | ------ |
| className | 自定义类名        | `string`                      | -      |
| children  | 子节点            | `React.ReactNode`             | -      |
| ...props  | 原生 `<div>` 属性 | `React.ComponentProps<"div">` | -      |

### AlertDialogTitle

标题，会自动注册到 ARIA `aria-labelledby`。

| 参数      | 说明           | 类型                                                        | 默认值 |
| --------- | -------------- | ----------------------------------------------------------- | ------ |
| render    | 自定义渲染元素 | `React.ReactElement \| ((props, state) => React.ReactNode)` | -      |
| className | 自定义类名     | `string`                                                    | -      |
| children  | 标题内容       | `React.ReactNode`                                           | -      |

### AlertDialogDescription

描述，会自动注册到 ARIA `aria-describedby`。

| 参数      | 说明           | 类型                                                        | 默认值 |
| --------- | -------------- | ----------------------------------------------------------- | ------ |
| render    | 自定义渲染元素 | `React.ReactElement \| ((props, state) => React.ReactNode)` | -      |
| className | 自定义类名     | `string`                                                    | -      |
| children  | 描述内容       | `React.ReactNode`                                           | -      |

### AlertDialogMedia

放在 header 内展示图标或图片的容器。

| 参数      | 说明              | 类型                          | 默认值 |
| --------- | ----------------- | ----------------------------- | ------ |
| className | 自定义类名        | `string`                      | -      |
| children  | 图标 / 图片       | `React.ReactNode`             | -      |
| ...props  | 原生 `<div>` 属性 | `React.ComponentProps<"div">` | -      |
