import type { Meta, StoryObj } from "@storybook/react-vite";
import { Checkbox } from "lynote-ui/checkbox";
import { useState } from "react";
import { fn } from "storybook/test";

function CheckboxRow({
  label,
  description,
  ...props
}: React.ComponentProps<typeof Checkbox> & {
  label: string;
  description?: string;
}) {
  return (
    <label className="flex items-start gap-3">
      <Checkbox {...props} className="mt-0.5" />
      <span className="space-y-1">
        <span className="block text-sm font-medium leading-none">{label}</span>
        {description ? (
          <span className="text-muted-foreground block text-sm">
            {description}
          </span>
        ) : null}
      </span>
    </label>
  );
}

function ControlledCheckboxPreview() {
  const [checked, setChecked] = useState(true);

  return (
    <div className="w-80 space-y-3">
      <CheckboxRow
        checked={checked}
        onCheckedChange={setChecked}
        label={checked ? "已订阅更新" : "未订阅更新"}
        description="点击后会立即更新当前选中状态。"
      />
      <p className="text-muted-foreground text-sm">
        当前状态：{checked ? "选中" : "未选中"}
      </p>
    </div>
  );
}

const meta = {
  title: "Form/Checkbox",
  component: Checkbox,
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component:
          "复选框用于表达开关式选择或多选项目，通常与标签文案一起使用。",
      },
    },
  },
  tags: ["autodocs"],
  argTypes: {
    checked: {
      control: "boolean",
      description: "是否选中",
    },
    disabled: {
      control: "boolean",
      description: "是否禁用",
    },
  },
  args: {
    checked: false,
    disabled: false,
    onCheckedChange: fn(),
  },
} satisfies Meta<typeof Checkbox>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Basic: Story = {
  name: "基础用法",
  render: (args) => <CheckboxRow {...args} label="接受条款和条件" />,
};

export const Checked: Story = {
  name: "选中状态",
  args: {
    checked: true,
  },
  render: (args) => <CheckboxRow {...args} label="已启用消息通知" />,
};

export const Disabled: Story = {
  name: "禁用状态",
  render: (args) => (
    <div className="space-y-4">
      <CheckboxRow
        {...args}
        disabled
        checked={false}
        label="禁用未选中"
        description="该选项当前不可修改。"
      />
      <CheckboxRow
        {...args}
        disabled
        checked
        label="禁用已选中"
        description="该选项已锁定为启用状态。"
      />
    </div>
  ),
};

export const Controlled: Story = {
  name: "受控用法",
  render: () => <ControlledCheckboxPreview />,
};

export const Group: Story = {
  name: "多项选择",
  render: (args) => (
    <div className="border-border bg-card w-96 space-y-4 rounded-xl border p-4">
      <CheckboxRow
        {...args}
        checked
        label="邮件通知"
        description="接收产品更新和活动通知。"
      />
      <CheckboxRow
        {...args}
        label="短信提醒"
        description="接收重要动态和安全提醒。"
      />
      <CheckboxRow
        {...args}
        label="系统公告"
        description="接收维护公告和版本升级消息。"
      />
    </div>
  ),
};
