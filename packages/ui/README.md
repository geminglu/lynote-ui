# lynote-ui

`lynote-ui` 是一个基于 React 的通用 UI 组件库，提供了表单、弹层、导航、数据展示等常用组件，并支持整包引入和按组件路径引入。

## 特性

- 基于 `shadcn/ui` 二次封装，保留常用交互模式与组件设计思路
- 支持 `ESM` 和 `CJS` 双格式产物
- 支持 TypeScript 类型提示
- 支持整包引入和按需引入
- 内置组件样式产物，消费端可直接引入
- 基于 React 18+，适合业务项目和中后台场景复用

## 关于 `shadcn/ui`

`lynote-ui` 并不是 `shadcn/ui` 官方包，而是在 `shadcn/ui` 的组件思想和部分实现基础上进行的二次封装，主要补充了以下能力：

- 统一组件出口，支持 npm 包直接安装使用
- 提供构建后的 `dist` 产物与类型声明
- 提供统一样式入口，降低消费端接入成本
- 对部分组件的命名、导出结构和默认行为做了工程化整理

如果你已经熟悉 `shadcn/ui`，可以把 `lynote-ui` 理解为一个更适合团队复用和工程分发的封装版本。

## 安装

推荐使用 `pnpm`：

```sh
pnpm add lynote-ui
```

也可以使用 `npm` 或 `yarn`：

```sh
npm install lynote-ui
```

```sh
yarn add lynote-ui
```

## 前置依赖

- `react >= 18`
- `react-dom >= 18`

## 引入样式

请在应用入口处引入一次样式文件。

如果你使用的是 CSS 文件：

```css
@import "lynote-ui/style";
```

## 使用方式

### 方式一：从根入口引入

适合快速使用多个组件：

```tsx
import { Button, Input } from "lynote-ui";

export function Demo() {
  return (
    <div className="flex gap-3">
      <Input placeholder="请输入内容" />
      <Button>提交</Button>
    </div>
  );
}
```

### 方式二：按组件路径引入

适合更清晰地控制组件来源，也更符合组件库子路径导出的使用习惯：

```tsx
import { Button } from "lynote-ui/button";
import { Input } from "lynote-ui/input";

export function Demo() {
  return (
    <div className="flex gap-3">
      <Input placeholder="请输入内容" />
      <Button variant="default">确认</Button>
    </div>
  );
}
```

## 常用组件

当前根入口已导出以下常用组件分类：

- 基础组件：`Button`、`Input`、`Textarea`、`Label`、`Badge`、`Spinner`
- 表单相关：`Form`、`Field`、`Checkbox`、`RadioGroup`、`Select`、`Switch`
- 布局与容器：`Card`、`Accordion`、`Tabs`、`Table`、`Separator`
- 弹层反馈：`Dialog`、`Drawer`、`Sheet`、`Popover`、`Tooltip`、`AlertDialog`
- 导航交互：`DropdownMenu`、`ContextMenu`、`Menubar`、`NavigationMenu`、`Breadcrumb`
- 数据与扩展：`Calendar`、`DatePicker`、`Chart`、`Pagination`、`Sidebar`

## 按需引入示例

组件库支持子路径导出，例如：

```tsx
import { Button } from "lynote-ui/button";
import { Dialog, DialogContent, DialogTrigger } from "lynote-ui/dialog";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
} from "lynote-ui/select";
```

## 注意事项

- 本包不会打入 `react` 和 `react-dom`，消费端需要自行安装。
- 样式文件只需要引入一次，重复引入没有必要。
- 组件来源与设计思路基于 `shadcn/ui`，但 API、默认样式和导出结构不保证与原项目完全一致。

## License

MIT
