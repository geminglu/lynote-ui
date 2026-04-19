---
category: Components
title: DropdownMenu 下拉菜单
subtitle: DropdownMenu 下拉菜单
demo:
  cols: 1
group:
  title: 导航
  order: 2
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
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuCheckboxItem,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuSub,
  DropdownMenuSubTrigger,
  DropdownMenuSubContent,
  DropdownMenuShortcut,
} from "lynote-ui";
```

:::

下拉菜单组件，用于显示上下文菜单或下拉选项。

## 代码演示

<code src="./demos/base.tsx">基本用法</code>

<code src="./demos/submenu.tsx" description="使用 DropdownMenuSub 来嵌套次要操作。">子菜单</code>

<code src="./demos/shortcuts.tsx" description="添加 DropdownMenuShortcut 以显示键盘提示。">快捷键</code>

<code src="./demos/icons.tsx">带图标</code>

<code src="./demos/checkboxes.tsx" desctiption="使用 DropdownMenuCheckboxItem 进行切换。">复选框</code>

<code src="./demos/checkboxesIcons.tsx" desctiption="为复选框项添加图标。">复选框图标</code>

<code src="./demos/radioGroup.tsx" desctiption="使用DropdownMenuRadioGroup进行互斥选择。">单选组</code>

<code src="./demos/radioIcons.tsx" desctiption="显示带图标的单选选项。">单选图标</code>

<code src="./demos/destructive.tsx" desctiption="对于不可逆的操作，请使用 variant='destructive'">销毁</code>

<code src="./demos/avatar.tsx" desctiption="由头像触发的账户切换下拉菜单。">头像</code>

<code src="./demos/complex.tsx" desctiption="一个结合了分组、图标和子菜单的更丰富的示例。">复杂</code>

<code src="./demos/placement.tsx" desctiption="">对其</code>

<code src="./demos/side.tsx" desctiption="">弹出位置</code>

## API

### DropdownMenu

下拉菜单的根容器组件。

| 参数         | 说明             | 类型                      | 默认值 |
| ------------ | ---------------- | ------------------------- | ------ |
| open         | 是否打开         | `boolean`                 | -      |
| defaultOpen  | 默认是否打开     | `boolean`                 | -      |
| onOpenChange | 打开状态变化回调 | `(open: boolean) => void` | -      |

### DropdownMenuTrigger

触发下拉菜单的元素。

| 参数     | 说明                                               | 类型              | 默认值 |
| -------- | -------------------------------------------------- | ----------------- | ------ |
| children | children                                           | `React.ReactNode` | -      |
| render   | 接收`React.ReactNode` ，当传入render时children无效 | `React.ReactNode` | -      |

### DropdownMenuContent

下拉菜单的内容区域。

| 参数                  | 说明                                                                                                                             | 类型                                                                                                                               | 默认值                 |
| --------------------- | -------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------- | ---------------------- |
| sideOffset            | 与触发元素的距离                                                                                                                 | `number`                                                                                                                           | `4`                    |
| portal                | 是否使用 Portal                                                                                                                  | `boolean`                                                                                                                          | `true`                 |
| align                 | 如何将弹出窗口与指定的边框对齐。                                                                                                 | `Element \| null \| VirtualElement \| React.RefObject<Element \| null> \| (() => Element  \| VirtualElement \| null) \| undefined` | -                      |
| anchor                | 用于确定弹出窗口位置的元素。默认情况下，弹出窗口将与触发按钮对齐。                                                               | `'start' \| 'center'  \| 'end'` \| `'center'`                                                                                      |
| positionMethod        | 确定使用哪个 CSS 的`position` 属性。                                                                                             | `'absolute' \| 'fixed'`                                                                                                            | -                      |
| side                  | 要将弹出窗口与锚元素的哪一侧对齐。系统可能会自动调整以避免发生碰撞。                                                             | `"left"  \| "right" \| "top"  \| "bottom"  \| "inline-end"  \| "inline-start"`                                                     | `'bottom'`             |
| sideOffset            | 锚点与弹出窗口之间的距离（以像素为单位）。也可接受一个函数，该函数返回距离值，用于读取锚点和定位器元素的尺寸，                   | `number \| OffsetFunction \| undefined`                                                                                            | -                      |
| className             | 自定义类名                                                                                                                       | `string`                                                                                                                           | -                      |
| alignOffset           | 沿对齐轴的额外偏移量（以像素为单位）。也可接受一个返回偏移量的函数，该函数用于读取锚点和定位器元素的尺寸，以及其边长和对齐方式。 | `number \| OffsetFunction \| undefined`                                                                                            | -                      |
| collisionBoundary     | 一个元素或矩形，用于界定弹出窗口所占用的区域。                                                                                   | `'clipping-ancestors' \| Element \| Element[] \| Rect`                                                                             | `'clipping-ancestors'` |
| collisionPadding      | 距离碰撞边界边缘需额外保留的空间。                                                                                               | `number`                                                                                                                           | `5`                    |
| sticky                | 锚点元素滚动出视图范围后，是否在视口内保留该弹出窗口。                                                                           | `boolean`                                                                                                                          | `false`                |
| arrowPadding          | 箭头与弹出窗口边缘之间应保持的最小距离。使用此属性可防止箭头元素超出弹出窗口的圆角范围。                                         | `number`                                                                                                                           | `5`                    |
| disableAnchorTracking | 是否禁用弹出窗口对其定位锚点的任何布局偏移进行跟踪。                                                                             | `boolean`                                                                                                                          | `false`                |
| collisionAvoidance    | 确定在定位弹出窗口时如何处理冲突。                                                                                               | `CollisionAvoidance`                                                                                                               | -                      |

### DropdownMenuItem

下拉菜单项。

| 参数      | 说明       | 类型                         | 默认值      |
| --------- | ---------- | ---------------------------- | ----------- |
| variant   | 菜单项变体 | `"default" \| "destructive"` | `"default"` |
| inset     | 是否内缩   | `boolean`                    | -           |
| className | 自定义类名 | `string`                     | -           |

### DropdownMenuCheckboxItem

下拉菜单复选框项。

| 参数            | 说明             | 类型                         | 默认值 |
| --------------- | ---------------- | ---------------------------- | ------ |
| checked         | 是否选中         | `boolean`                    | -      |
| onCheckedChange | 选中状态变化回调 | `(checked: boolean) => void` | -      |
| className       | 自定义类名       | `string`                     | -      |

### DropdownMenuRadioGroup

下拉菜单单选组。

| 参数          | 说明       | 类型                      | 默认值 |
| ------------- | ---------- | ------------------------- | ------ |
| value         | 当前值     | `string`                  | -      |
| onValueChange | 值变化回调 | `(value: string) => void` | -      |

### DropdownMenuRadioItem

下拉菜单单选项。

| 参数      | 说明       | 类型     | 默认值 |
| --------- | ---------- | -------- | ------ |
| value     | 选项值     | `string` | -      |
| className | 自定义类名 | `string` | -      |

### DropdownMenuLabel

下拉菜单标签。

| 参数      | 说明       | 类型      | 默认值 |
| --------- | ---------- | --------- | ------ |
| inset     | 是否内缩   | `boolean` | -      |
| className | 自定义类名 | `string`  | -      |

### DropdownMenuSeparator

下拉菜单分隔符。

| 参数      | 说明       | 类型     | 默认值 |
| --------- | ---------- | -------- | ------ |
| className | 自定义类名 | `string` | -      |

### DropdownMenuShortcut

下拉菜单快捷键提示。

| 参数      | 说明       | 类型     | 默认值 |
| --------- | ---------- | -------- | ------ |
| className | 自定义类名 | `string` | -      |

### DropdownMenuSub

下拉菜单子菜单。

| 参数     | 说明         | 类型                                                     | 默认值 |
| -------- | ------------ | -------------------------------------------------------- | ------ |
| ...props | 其他原生属性 | `React.ComponentProps<typeof DropdownMenuPrimitive.Sub>` | -      |

### DropdownMenuSubTrigger

下拉菜单子菜单触发器。

| 参数      | 说明       | 类型      | 默认值 |
| --------- | ---------- | --------- | ------ |
| inset     | 是否内缩   | `boolean` | -      |
| className | 自定义类名 | `string`  | -      |

### DropdownMenuSubContent

下拉菜单子菜单内容。

| 参数      | 说明       | 类型     | 默认值 |
| --------- | ---------- | -------- | ------ |
| className | 自定义类名 | `string` | -      |

### 相关类型

```tsx
type OffsetFunction = (data: {
  side: Side;
  align: Align;
  anchor: {
    width: number;
    height: number;
  };
  positioner: {
    width: number;
    height: number;
  };
}) => number;
```

```tsx
type CollisionAvoidance = SideFlipMode | SideShiftMode;

interface SideFlipMode {
  /**
   * 如何避免在侧边轴上发生冲突。
   * - `'flip'`：如果空间不足，将弹出窗口放置在对侧。
   * - `'none'`：即使发生溢出，仍保留首选侧。
   */
  side?: "flip" | "none" | undefined;
  /**
   * 如何避免在对齐轴上发生冲突。
   * - `'flip'`：如果空间不足，则交换 `‘start’` 和 `‘end’` 的对齐方式。
   * - `'shift'`：保持对齐方式，并将弹出窗口向内移动以适应边界。
   * - `'none'`：即使发生溢出，也保持首选的对齐方式。
   */
  align?: "flip" | "shift" | "none" | undefined;
  /**
   * 如果首选轴上的两侧均无法适配，则确定是否回退
   * 至垂直轴上的某一侧，以及优先选择哪个逻辑侧。
   * - `'start’`：优先选择垂直轴上的逻辑起始侧。
   * - `‘end’`：优先选择垂直轴上的逻辑结束侧。
   * - `‘none’`：不回退到垂直轴。
   */
  fallbackAxisSide?: "start" | "end" | "none" | undefined;
}

interface SideShiftMode {
  /**
   * 如何避免在侧边轴上发生冲突。
   * - `'shift'`：保留首选侧边，并将弹出窗口平移以适应边界。
   * - `'none'`：即使发生溢出，也保留首选侧边。
   */
  side?: "shift" | "none" | undefined;
  /**
   * 如何避免在对齐轴上发生冲突。
   * - `‘shift’`：保持对齐方式，并将弹出窗口平移以适应边界。
   * - `‘none’`：即使发生溢出，也保持首选的对齐方式。
   */
  align?: "shift" | "none" | undefined;
  /**
   * 如果首选轴上的两侧均无法适配，则确定是否回退
   * 至垂直轴上的某一侧，以及优先选择哪个逻辑侧。
   * - `'start'`：优先选择垂直轴上的逻辑起始侧。
   * - `'end'`：优先选择垂直轴上的逻辑结束侧。
   * - `'none'`：不回退到垂直轴。
   */
  fallbackAxisSide?: "start" | "end" | "none" | undefined;
}
```
