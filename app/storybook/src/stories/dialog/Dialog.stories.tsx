import type { Meta, StoryObj } from "@storybook/react-vite";

import { Button } from "lynote-ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "lynote-ui/dialog";

const meta = {
  title: "Overlay/Dialog",
  component: Dialog,
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component:
          "对话框用于承载需要用户立即关注和处理的任务，适合确认操作、补充信息和展示重点内容。",
      },
    },
  },
  tags: ["autodocs"],
} satisfies Meta<typeof Dialog>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Basic: Story = {
  name: "基础用法",
  render: () => (
    <Dialog>
      <DialogTrigger render={<Button variant="outline" />}>
        打开对话框
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>这是一个对话框</DialogTitle>
          <DialogDescription>
            这是一个基础示例，你可以在这里放置说明内容和后续操作。
          </DialogDescription>
        </DialogHeader>
        <div className="py-2">这里是对话框内容区域。</div>
        <DialogFooter>
          <Button variant="outline">取消</Button>
          <Button>确认</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  ),
};

export const Destructive: Story = {
  name: "危险确认",
  render: () => (
    <Dialog>
      <DialogTrigger render={<Button variant="destructive" />}>
        删除项目
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>确认删除这个项目？</DialogTitle>
          <DialogDescription>
            删除后将无法恢复，相关成员也会失去访问权限。
          </DialogDescription>
        </DialogHeader>
        <div className="text-muted-foreground py-2 text-sm">
          建议在执行前再次确认名称、负责人和关联数据。
        </div>
        <DialogFooter>
          <Button variant="outline">取消</Button>
          <Button variant="destructive">确认删除</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  ),
};

export const WithoutCloseButton: Story = {
  name: "隐藏右上角关闭按钮",
  render: () => (
    <Dialog>
      <DialogTrigger render={<Button variant="secondary" />}>
        打开引导弹窗
      </DialogTrigger>
      <DialogContent showCloseButton={false}>
        <DialogHeader>
          <DialogTitle>开启新版本引导</DialogTitle>
          <DialogDescription>
            当前操作会跳转到引导流程，建议先保存当前编辑内容。
          </DialogDescription>
        </DialogHeader>
        <div className="space-y-2 py-2 text-sm">
          <p>1. 检查当前草稿是否已保存。</p>
          <p>2. 确认是否需要通知协作者。</p>
          <p>3. 点击继续后将进入分步引导页面。</p>
        </div>
        <DialogFooter>
          <Button variant="outline">稍后再说</Button>
          <Button>继续</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  ),
};

export const LongContent: Story = {
  name: "长内容",
  render: () => (
    <Dialog>
      <DialogTrigger render={<Button variant="outline" />}>
        查看发布说明
      </DialogTrigger>
      <DialogContent className="sm:max-w-lg">
        <DialogHeader>
          <DialogTitle>版本更新说明</DialogTitle>
          <DialogDescription>
            本次更新主要聚焦在组件文档体验、主题切换和可访问性支持。
          </DialogDescription>
        </DialogHeader>
        <div className="max-h-80 space-y-3 overflow-y-auto py-2 text-sm">
          <p>
            1. 新增了 Storybook 文档首页，帮助团队快速理解组件库的维护方式。
          </p>
          <p>2. 为常用组件补充了更贴近业务场景的案例，而不仅是基础展示。</p>
          <p>
            3. 增加了浅色与深色主题切换，便于检查组件在不同视觉主题下的表现。
          </p>
          <p>4. 统一了文档页的结构和排序方式，后续新增组件时可以直接复用。</p>
          <p>5. 可访问性面板保持开启状态，便于在开发阶段尽早发现问题。</p>
          <p>6. 后续还可以继续补充交互测试、视觉回归和复杂组件的专项示例。</p>
        </div>
        <DialogFooter>
          <Button variant="outline">关闭</Button>
          <Button>我知道了</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  ),
};
