import type { Meta, StoryObj } from "@storybook/react-vite";

import { Switch } from "lynote-ui/switch";

import BaseDemo from "../../../../../packages/ui/src/switch/demos/base";
import { createDemoStory } from "../_shared/demo-story";

const meta = {
  title: "Form/Switch",
  component: Switch,
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component:
          "开关适合表达立即生效的二元状态切换，如通知、权限和偏好设置。",
      },
    },
  },
  tags: ["autodocs"],
} satisfies Meta<typeof Switch>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Basic: Story = createDemoStory("基础用法", BaseDemo);
