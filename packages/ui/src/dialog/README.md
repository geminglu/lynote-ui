---
category: Components
title: Dialog 对话框
subtitle: Dialog 对话框
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

Dialog 在当前页面上方覆盖一个浮层，用于承载需要用户关注或完成的操作（编辑表单、确认动作、查阅条款等）。它会主动捕获焦点、屏蔽页面背景的滚动，并支持键盘可关闭。

## 特性

- **焦点管理**：打开时自动把焦点送到弹窗内，关闭时返回到 trigger 元素。
- **背景滚动锁定**：打开期间页面不能滚动。
- **可访问语义**：自动将 title / description 关联到 `aria-labelledby` / `aria-describedby`。
- **`DialogClose`**：用于关闭按钮，免去手动维护 `open` 状态。
- **可定制尺寸**：通过 `DialogContent` 的 `className` 控制最大宽度，自带响应式断点。

## 何时使用

- 需要用户完成一个明确任务（编辑、提交、确认）。
- 内容相对独立，不必让用户切换到新页面。
- 在不可逆操作前进行二次确认（删除、退订等）。

## 何时不使用

- 仅作短暂反馈（"操作成功"）——使用 `Sonner` toast。
- 需要让用户对照页面其它信息——使用 `Sheet` 或就近显示。
- 移动端的全屏表单——使用 `Drawer` 在底部弹出。
- 二次确认且无表单——`AlertDialog` 提供了更准确的语义（不能点击遮罩关闭）。

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
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogOverlay,
  DialogPortal,
  DialogTitle,
  DialogTrigger,
} from "lynote-ui/dialog";
```

```ts [整体] | pure
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "lynote-ui";
```

:::

## 组件结构

```tsx | pure
<Dialog>
  <DialogTrigger />
  <DialogContent>
    <DialogHeader>
      <DialogTitle />
      <DialogDescription />
    </DialogHeader>
    {/* 内容 */}
    <DialogFooter>
      <DialogClose />
    </DialogFooter>
  </DialogContent>
</Dialog>
```

## 代码演示

<code src="./demos/base.tsx">基本用法</code>

<code src="./demos/controlled.tsx">受控用法</code>

<code src="./demos/with-form.tsx" description="在 Dialog 中承载表单并通过 submit 后关闭。建议把 form 元素放在 DialogContent 内、围绕 header/footer。">表单对话框</code>

<code src="./demos/confirm.tsx" description="二次确认的标准写法：destructive 按钮 + 描述清楚后果。">确认删除</code>

<code src="./demos/scroll.tsx" description="长内容应放在一个内置滚动容器内，避免整体 dialog 撑高超出视口。">滚动内容</code>

<code src="./demos/sizes.tsx" description="通过 `className` 覆盖 `sm:max-w-*` 控制对话框宽度。">尺寸</code>

## 最佳实践

- **使用 `DialogClose` 关闭**：所有"取消 / 关闭 / 我知道了"按钮都应该用 `DialogClose render={...}`，免去手动 `setOpen(false)`。
- **始终设置 `DialogTitle`**：即使设计上不可见也应保留并设置 `className="sr-only"`，否则读屏器朗读会缺失标题。
- **首个可聚焦元素是主要操作**：用户回车应当能完成"确认 / 保存"动作。
- **不要嵌套 Dialog**：嵌套会破坏焦点环并让用户找不到关闭入口。如必须串联，请关闭当前再打开下一个。
- **不要让 dialog 高度大于视口**：超长内容请使用滚动子区域（见 `scroll.tsx`）。

## 无障碍与键盘交互

- 渲染为 `role="dialog"`，自动加 `aria-modal="true"`。
- `DialogTitle` / `DialogDescription` 自动注册到 `aria-labelledby` / `aria-describedby`。
- 焦点环陷阱：`Tab` / `Shift+Tab` 只会在 dialog 内部循环。
- 关闭后焦点会回到 `DialogTrigger`。

| 按键        | 行为             |
| ----------- | ---------------- |
| `Esc`       | 关闭对话框       |
| `Tab`       | 焦点在弹窗内循环 |
| `Shift+Tab` | 反向焦点循环     |

## API

### Dialog

| 参数         | 说明                     | 类型                      | 默认值  |
| ------------ | ------------------------ | ------------------------- | ------- |
| open         | 是否打开（受控）         | `boolean`                 | -       |
| defaultOpen  | 是否默认打开（非受控）   | `boolean`                 | `false` |
| onOpenChange | 打开状态变化回调         | `(open: boolean) => void` | -       |
| modal        | 是否模态（锁定背景滚动） | `boolean`                 | `true`  |
| children     | 子组件                   | `React.ReactNode`         | -       |

### DialogTrigger

| 参数      | 说明                                     | 类型                      | 默认值 |
| --------- | ---------------------------------------- | ------------------------- | ------ |
| render    | 多态渲染，常用于把 trigger 渲染为 Button | `React.ReactElement`      | -      |
| className | 自定义类名                               | `string`                  | -      |
| children  | 触发器内容                               | `React.ReactNode`         | -      |
| onClick   | 点击回调                                 | `React.MouseEventHandler` | -      |

### DialogContent

| 参数            | 说明                                                                        | 类型              | 默认值 |
| --------------- | --------------------------------------------------------------------------- | ----------------- | ------ |
| showCloseButton | 是否显示右上角关闭按钮                                                      | `boolean`         | `true` |
| className       | 自定义类名（控制最大宽度，如 `sm:max-w-md`、`sm:max-w-lg`、`sm:max-w-3xl`） | `string`          | -      |
| children        | 弹窗内容                                                                    | `React.ReactNode` | -      |

### DialogHeader / DialogFooter

布局容器，分别用于头部（标题区）和底部（按钮区）。`DialogFooter` 自带次级背景与上分隔线。

| 参数            | 说明                                     | 类型              | 默认值  |
| --------------- | ---------------------------------------- | ----------------- | ------- |
| showCloseButton | 仅 `DialogFooter` 支持，自动追加关闭按钮 | `boolean`         | `false` |
| className       | 自定义类名                               | `string`          | -       |
| children        | 内容                                     | `React.ReactNode` | -       |

### DialogTitle / DialogDescription

| 参数      | 说明       | 类型              | 默认值 |
| --------- | ---------- | ----------------- | ------ |
| className | 自定义类名 | `string`          | -      |
| children  | 文本内容   | `React.ReactNode` | -      |

### DialogClose

包裹任意元素作为关闭按钮。常配合 `render` 把它渲染成 Button。

| 参数      | 说明         | 类型                      | 默认值 |
| --------- | ------------ | ------------------------- | ------ |
| render    | 多态渲染     | `React.ReactElement`      | -      |
| className | 自定义类名   | `string`                  | -      |
| children  | 关闭按钮内容 | `React.ReactNode`         | -      |
| onClick   | 点击回调     | `React.MouseEventHandler` | -      |

### DialogPortal / DialogOverlay

通常无需直接使用（`DialogContent` 内部已经使用）。需要自定义遮罩样式时可重新组合。
