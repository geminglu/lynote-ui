import type { Meta, StoryObj } from "@storybook/react-vite";
import { ArrowUpIcon } from "lucide-react";
import { Button } from "lynote-ui/button";
import { fn } from "storybook/test";

const BUTTON_VARIANTS = [
  "default",
  "outline",
  "secondary",
  "ghost",
  "destructive",
  "link",
] as const;

const TEXT_BUTTON_SIZES = ["xs", "sm", "default", "lg"] as const;
const ICON_BUTTON_SIZES = ["icon-xs", "icon-sm", "icon", "icon-lg"] as const;
const DISABLED_VARIANTS = [
  "default",
  "outline",
  "secondary",
  "destructive",
] as const;

const meta = {
  title: "Form/Button",
  component: Button,
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component:
          "按钮用于触发操作或跳转，是表单与交互场景里最常用的基础组件之一。",
      },
    },
  },
  tags: ["autodocs"],
  argTypes: {
    children: {
      control: "text",
      description: "按钮内容",
    },
    variant: {
      control: "select",
      description: "按钮视觉风格",
      options: BUTTON_VARIANTS,
    },
    size: {
      control: "select",
      description: "按钮尺寸",
      options: [...TEXT_BUTTON_SIZES, ...ICON_BUTTON_SIZES],
    },
    disabled: {
      control: "boolean",
      description: "是否禁用",
    },
  },
  args: {
    children: "按钮",
    variant: "default",
    size: "default",
    disabled: false,
    onClick: fn(),
  },
} satisfies Meta<typeof Button>;

export default meta;

type Story = StoryObj<typeof meta>;

/**
 * 按钮基础用法
 */
export const Basic: Story = {
  name: "基础用法",
};

/**
 * 按钮变体展示,
 * 这里展示了按钮的多种变体，包括默认`outline`、`secondary`、`ghost`、`destructive`、`link`
 */
export const Variants: Story = {
  name: "按钮变体",
  render: (args) => (
    <div className="flex flex-wrap items-center gap-3">
      {BUTTON_VARIANTS.map((variant) => (
        <Button key={variant} {...args} variant={variant}>
          {variant}
        </Button>
      ))}
    </div>
  ),
};

/**
 * 按钮尺寸展示
 */
export const Sizes: Story = {
  name: "按钮尺寸",
  render: (args) => (
    <div className="flex flex-wrap items-center gap-3">
      {TEXT_BUTTON_SIZES.map((size) => (
        <Button key={size} {...args} size={size}>
          {size}
        </Button>
      ))}
    </div>
  ),
};

/**
 * 图标按钮展示
 */
export const IconButtons: Story = {
  name: "图标按钮",
  args: {
    children: <ArrowUpIcon />,
  },
  render: (args) => (
    <div className="flex flex-wrap items-center gap-3">
      {ICON_BUTTON_SIZES.map((size) => (
        <Button key={size} {...args} size={size} aria-label={`icon-${size}`}>
          <ArrowUpIcon />
        </Button>
      ))}
    </div>
  ),
};

/**
 * 禁用状态展示
 */
export const Disabled: Story = {
  name: "禁用状态",
  args: {
    disabled: true,
  },
  render: (args) => (
    <div className="flex flex-wrap items-center gap-3">
      {DISABLED_VARIANTS.map((variant) => (
        <Button key={variant} {...args} variant={variant}>
          {variant}
        </Button>
      ))}
    </div>
  ),
};

/**
 * 带图标的常见操作按钮
 */
export const WithIcons: Story = {
  name: "带图标",
  render: (args) => (
    <div className="flex flex-wrap items-center gap-3">
      <Button {...args} variant="default">
        <ArrowUpIcon />
        继续
      </Button>
      <Button {...args} variant="outline">
        返回
        <ArrowUpIcon />
      </Button>
      <Button {...args} variant="secondary" size="sm">
        <ArrowUpIcon />
        上传
      </Button>
    </div>
  ),
};

/**
 * 链接和次级操作通常会一起出现
 */
export const ActionGroup: Story = {
  name: "操作组合",
  render: (args) => (
    <div className="flex flex-wrap items-center gap-3">
      <Button {...args} variant="default">
        保存
      </Button>
      <Button {...args} variant="outline">
        取消
      </Button>
      <Button {...args} variant="ghost">
        稍后处理
      </Button>
      <Button {...args} variant="link">
        查看详情
      </Button>
    </div>
  ),
};

/**
 * 展示按钮在较窄容器中的占满宽度效果
 */
export const FullWidth: Story = {
  name: "占满容器",
  render: (args) => (
    <div className="border-border w-80 rounded-xl border p-4">
      <div className="space-y-3">
        <Button {...args} className="w-full">
          立即提交
        </Button>
        <Button {...args} className="w-full" variant="outline">
          保存草稿
        </Button>
      </div>
    </div>
  ),
};

/**
 * 用于演示页面中常见的风险操作
 */
export const DestructiveActions: Story = {
  name: "危险操作",
  render: (args) => (
    <div className="flex flex-wrap items-center gap-3">
      <Button {...args} variant="destructive">
        删除记录
      </Button>
      <Button {...args} variant="destructive" disabled>
        删除中
      </Button>
      <Button {...args} variant="outline">
        返回列表
      </Button>
    </div>
  ),
};
