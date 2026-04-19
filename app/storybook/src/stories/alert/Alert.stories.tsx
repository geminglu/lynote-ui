import type { Meta, StoryObj } from "@storybook/react-vite";

import { Alert } from "lynote-ui/alert";

import BaseDemo from "../../../../../packages/ui/src/alert/demos/base";
import VariantDemo from "../../../../../packages/ui/src/alert/demos/variant";
import WithIconDemo from "../../../../../packages/ui/src/alert/demos/with-icon";
import { createDemoStory } from "../_shared/demo-story";

const meta = {
  title: "Feedback/Alert",
  component: Alert,
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component:
          "警告提示用于展示需要用户关注的重要信息，也适合承载带图标的状态说明。",
      },
    },
  },
  tags: ["autodocs"],
} satisfies Meta<typeof Alert>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Basic: Story = createDemoStory("基础用法", BaseDemo);
export const Variants: Story = createDemoStory("变体", VariantDemo);
export const WithIcons: Story = createDemoStory("带图标", WithIconDemo);
