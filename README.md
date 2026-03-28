# GML UI

一个基于 React + TypeScript + Tailwind CSS 的现代化组件库，采用 monorepo 架构，提供丰富的 UI 组件和工具。

## ✨ 特性

- 🎨 **现代化设计** - 基于 Tailwind CSS 4.x，提供美观的 UI 组件
- 📦 **Monorepo 架构** - 使用 pnpm workspace 管理多包项目
- 🔧 **TypeScript** - 完整的类型支持
- 🎯 **组件丰富** - 60+ 高质量组件
- 🚀 **性能优化** - 基于 Radix UI 的无障碍组件
- 🎭 **主题系统** - 灵活的主题定制能力
- 📱 **响应式设计** - 移动端友好的组件

## 📦 包结构

### 主包

#### `lynote-ui` - 组件库主包

包含所有 UI 组件的统一导出入口。

**安装方式：**

```bash
# npm
npm install lynote-ui

# yarn
yarn add lynote-ui

# pnpm
pnpm add lynote-ui
```

**使用方式：**

```tsx
// 从主包导入组件
import { Button, Input, Form, Card } from "lynote-ui";

function App() {
  return (
    <div>
      <Button>点击我</Button>
      <Input placeholder="请输入..." />
    </div>
  );
}
```

**包含的组件：**

- **表单组件**：Button, Input, Textarea, Select, Checkbox, RadioGroup, Switch, Form, Field, Label
- **布局组件**：Card, Separator, AspectRatio, Resizable, ScrollArea, Sidebar
- **反馈组件**：Alert, AlertDialog, Dialog, Drawer, Sheet, Toast (Sonner), Progress, Skeleton, Spinner
- **导航组件**：Breadcrumb, NavigationMenu, Menubar, Pagination, Tabs
- **数据展示**：Table, Avatar, Badge, Calendar, Chart, Empty
- **交互组件**：Popover, Tooltip, HoverCard, DropdownMenu, ContextMenu, Command
- **其他组件**：Accordion, Collapsible, Carousel, DatePicker, InputGroup, InputOTP, KBD, Slider, Toggle, ToggleGroup

## 🚀 快速开始

### 前置要求

- Node.js >= 18
- pnpm >= 8

### 安装依赖

```bash
# 克隆项目
git clone <repository-url>
cd gmlUi

# 安装依赖
pnpm install
```

### 开发

```bash
# 启动文档服务器
cd app/docs && pnpm dev

# 启动storybook
cd app/storybook && pnpm dev

# 构建所有包
pnpm build

# 类型检查
pnpm type-check

# 代码检查
pnpm lint

# 自动修复代码格式
pnpm lint:fix
```

### 在项目中使用

#### 1. 安装依赖

```bash
pnpm add lynote-ui
```

#### 4. 使用组件

```tsx
import { Button, Input, Card } from "lynote-ui";

function App() {
  return (
    <Card>
      <Input placeholder="用户名" />
      <Button variant="default">提交</Button>
    </Card>
  );
}
```

## 📚 组件文档

每个组件都有详细的文档和示例，请查看各组件目录下的 `README.md` 文件。

### 常用组件示例

#### Button 按钮

```tsx
import { Button } from "lynote-ui"

// 基础用法
<Button>点击我</Button>

// 不同变体
<Button variant="default">默认</Button>
<Button variant="outline">轮廓</Button>
<Button variant="ghost">幽灵</Button>
<Button variant="destructive">危险</Button>

// 不同尺寸
<Button size="sm">小</Button>
<Button size="default">默认</Button>
<Button size="lg">大</Button>

// 加载状态
<Button loading>加载中</Button>
```

#### Input 输入框

```tsx
import { Input } from "lynote-ui"

// 基础用法
<Input placeholder="请输入..." />

// 不同尺寸
<Input size="sm" placeholder="小尺寸" />
<Input size="default" placeholder="默认尺寸" />
<Input size="lg" placeholder="大尺寸" />

// 禁用状态
<Input disabled placeholder="禁用状态" />

// 不同类型
<Input type="email" placeholder="邮箱" />
<Input type="password" placeholder="密码" />
```

#### Form 表单

```tsx
import {
  Form,
  FormField,
  FormItem,
  FormLabel,
  FormControl,
  FormMessage,
} from "lynote-ui";
import { useForm } from "react-hook-form";

function LoginForm() {
  const form = useForm({
    defaultValues: {
      username: "",
      password: "",
    },
  });

  return (
    <Form {...form}>
      <FormField
        control={form.control}
        name="username"
        render={({ field }) => (
          <FormItem>
            <FormLabel>用户名</FormLabel>
            <FormControl>
              <Input {...field} />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
    </Form>
  );
}
```

#### Card 卡片

```tsx
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "lynote-ui";
<Card>
  <CardHeader>
    <CardTitle>卡片标题</CardTitle>
    <CardDescription>卡片描述</CardDescription>
  </CardHeader>
  <CardContent>
    <p>卡片内容</p>
  </CardContent>
  <CardFooter>
    <Button>操作</Button>
  </CardFooter>
</Card>;
```

## 🛠️ 技术栈

- **框架**: React 19
- **语言**: TypeScript 5.7+
- **样式**: Tailwind CSS 4.x
- **构建**: Vite
- **包管理**: pnpm workspace
- **UI 基础**: Radix UI primitives
- **表单**: react-hook-form
- **动画**: framer-motion (motion)
- **图标**: Lucide React

## 📖 项目结构

```text
gmlUi/
├── packages/
│   ├── components/          # UI 组件包
│   │   └── src/
│   │       ├── button/      # 按钮组件
│   │       ├── input/       # 输入框组件
│   │       ├── form/        # 表单组件
│   │       └── ...          # 其他组件
│   └── core/                # 核心功能包
│       ├── lib/             # 工具库
│       ├── theme/            # 主题系统
│       └── icon/             # 图标系统
├── app/                      # 应用目录（docs 和 storybook）
├── build/                    # 构建脚本
└── package.json              # 根配置
```

## 🤝 贡献

欢迎贡献！请查看 [CONTRIBUTING.md](./CONTRIBUTING.md) 了解详细信息。

## 📄 许可证

MIT License

## 👥 作者

GMLUi <geminglu199698@outlook.com>

## 🔗 相关链接

- [文档网站](#) (待添加)
- [Storybook](#) (待添加)
- [GitHub Issues](#) (待添加)
