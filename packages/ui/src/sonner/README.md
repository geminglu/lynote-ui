---
category: Components
title: Sonner 轻提示
subtitle: Sonner Toast
demo:
  cols: 1
group:
  title: 反馈
  order: 7
nav: 组件
toc: content
background: #111
compact: true
---

Sonner 是基于 [sonner](https://sonner.emilkowal.ski/) 实现的轻量级 toast 通知。组件在页面挂一个 `<Toaster />`,然后在任意位置调用 `toast(...)` 即可。

## 特性

- **多种类型**:`toast.success` / `toast.error` / `toast.info` / `toast.warning` / `toast.loading`。
- **可撤销**:通过 `action` 提供"撤销"按钮。
- **异步 loading**:`toast.loading` 返回 id,异步完成后用 `toast.success({ id })` 升级。
- **暗色主题**:自动跟随 `next-themes` 的主题。
- **可堆叠**:多个 toast 自动堆叠并支持悬停展开。

## 何时使用

- 操作完成 / 失败的非阻塞反馈("已保存"、"网络错误")。
- 异步任务的进度提示。
- 危险操作之后提供撤销机会。

## 何时不使用

- 关键决策 / 确认——使用 `AlertDialog`。
- 必读说明 / 系统公告——使用 `Alert`。
- 表单字段错误——使用 `FieldError`。

## 安装与挂载

在应用根节点挂载 `<Toaster />`:

```tsx | pure
import { Toaster } from "lynote-ui/sonner";

export default function App() {
  return (
    <>
      <YourApp />
      <Toaster richColors position="top-right" />
    </>
  );
}
```

## 导入

```ts | pure
import { Toaster, toast } from "lynote-ui/sonner";
```

## 代码演示

<code src="./demos/base.tsx" description="不同类型的 toast + 带 action 的撤销 + 异步 loading 升级。">基本用法</code>

## 最佳实践

- **同时挂一个 `Toaster`**:Provider 没有 Toaster 会无任何效果。
- **保留撤销选项**:删除、归档等可逆操作请提供 `action`,优于二次确认弹窗。
- **不要堆积太多**:同一时刻 ≤ 3 个 toast;超过会让用户感到信息过载。
- **及时关闭 loading**:`toast.loading` 返回 id,务必在完成后用同一 id 升级 / 关闭。

## API

### Toaster

继承 sonner 的所有 props。常用项:

| 参数                  | 说明                                                                | 类型                                                                                              | 默认值               |
| --------------------- | ------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------- | -------------------- |
| position              | 提示出现的位置                                                      | `"top-left" \| "top-right" \| "bottom-left" \| "bottom-right" \| "top-center" \| "bottom-center"` | `"bottom-right"`     |
| richColors            | 启用类型化的颜色                                                    | `boolean`                                                                                         | `false`              |
| expand                | 是否默认展开堆叠的 toast                                            | `boolean`                                                                                         | `false`              |
| visibleToasts         | 同时可见的 toast 数                                                 | `number`                                                                                          | `3`                  |
| theme                 | 主题（默认跟随 next-themes 系统）                                   | `"light" \| "dark" \| "system"`                                                                   | `"system"`           |
| closeButton           | 显示关闭按钮                                                        | `boolean`                                                                                         | `false`              |
| invert                | 反色显示                                                            | `boolean`                                                                                         | `false`              |
| toastOptions          | 全局 toast 配置（duration / className / icons 等）                  | `ToastOptions`                                                                                    | -                    |
| gap                   | toast 之间的间距（px）                                              | `number`                                                                                          | `14`                 |
| offset                | 距离视口边缘的偏移                                                  | `string \| number`                                                                                | `32`                 |
| dir                   | 文字方向                                                            | `"rtl" \| "ltr" \| "auto"`                                                                        | `"auto"`             |
| hotkey                | 聚焦 toast 列表的快捷键                                             | `string[]`                                                                                        | `["altKey", "KeyT"]` |
| duration              | 单个 toast 默认显示时间（毫秒）                                     | `number`                                                                                          | `4000`               |
| icons                 | 自定义图标集合（已内置 success / info / warning / error / loading） | `ToastIcons`                                                                                      | -                    |
| className             | Toaster 容器类名                                                    | `string`                                                                                          | -                    |
| style                 | Toaster 容器内联样式                                                | `React.CSSProperties`                                                                             | -                    |
| pauseWhenPageIsHidden | 页面隐藏时暂停计时                                                  | `boolean`                                                                                         | `false`              |

### toast(message, options)

```ts | pure
toast("已发送邀请");
toast.success("保存成功", { description: "..." });
toast.error("提交失败");
toast.info("有新版本可用");
toast.warning("即将到期");
toast.loading("正在保存...");

// 异步升级
const id = toast.loading("上传中");
toast.success("上传成功", { id });

// 撤销
toast("文件已删除", {
  action: { label: "撤销", onClick: () => toast.success("已恢复") },
});
```
