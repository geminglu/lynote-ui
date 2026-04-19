import type { Meta, StoryObj } from "@storybook/react-vite";
import { Input } from "lynote-ui/input";
import { fn } from "storybook/test";

const INPUT_TYPES = ["text", "password", "email", "number", "search"] as const;

const meta = {
  title: "Form/Input",
  component: Input,
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component:
          "输入框用于收集短文本、账号信息和搜索内容，是表单场景中最常见的基础组件。",
      },
    },
  },
  tags: ["autodocs"],
  argTypes: {
    type: {
      control: "select",
      description: "输入框类型",
      options: INPUT_TYPES,
    },
    placeholder: {
      control: "text",
      description: "占位提示",
    },
    disabled: {
      control: "boolean",
      description: "是否禁用",
    },
    value: {
      control: "text",
      description: "输入值",
    },
  },
  args: {
    type: "text",
    placeholder: "请输入内容",
    disabled: false,
    onChange: fn(),
  },
} satisfies Meta<typeof Input>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Basic: Story = {
  name: "基础用法",
  render: (args) => (
    <div className="w-80">
      <Input {...args} />
    </div>
  ),
};

export const Types: Story = {
  name: "输入类型",
  render: (args) => (
    <div className="flex w-80 flex-col gap-4">
      {INPUT_TYPES.map((type) => (
        <Input key={type} {...args} type={type} placeholder={`请输入${type}`} />
      ))}
    </div>
  ),
};

export const Disabled: Story = {
  name: "禁用状态",
  args: {
    disabled: true,
  },
  render: (args) => (
    <div className="flex w-80 flex-col gap-4">
      <Input {...args} placeholder="禁用状态" />
      <Input {...args} value="禁用内容" placeholder="禁用状态（带值）" />
    </div>
  ),
};

export const WithValue: Story = {
  name: "预填内容",
  render: (args) => (
    <div className="flex w-80 flex-col gap-4">
      <Input {...args} value="GML" placeholder="用户名" />
      <Input {...args} type="email" value="minglu@example.com" />
    </div>
  ),
};

export const InFormLayout: Story = {
  name: "表单布局",
  render: (args) => (
    <div className="border-border bg-card w-96 rounded-xl border p-4">
      <div className="space-y-4">
        <div className="space-y-2">
          <label className="text-sm font-medium">邮箱</label>
          <Input {...args} type="email" placeholder="请输入邮箱地址" />
        </div>
        <div className="space-y-2">
          <label className="text-sm font-medium">密码</label>
          <Input {...args} type="password" placeholder="请输入密码" />
        </div>
      </div>
    </div>
  ),
};
