import type { Meta, StoryObj } from "@storybook/react-vite";

import { Textarea } from "lynote-ui/textarea";

import BaseDemo from "../../../../../packages/ui/src/textarea/demos/base";
import DisabledDemo from "../../../../../packages/ui/src/textarea/demos/disabled";
import ResizeDemo from "../../../../../packages/ui/src/textarea/demos/resize";
import { createDemoStory } from "../_shared/demo-story";

const meta = {
  title: "Form/Textarea",
  component: Textarea,
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component:
          "多行输入框适合录入说明、备注和长文本信息，也适合需要自适应高度的表单场景。",
      },
    },
  },
  tags: ["autodocs"],
} satisfies Meta<typeof Textarea>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Basic: Story = createDemoStory("基础用法", BaseDemo);
export const Resize: Story = createDemoStory("可调整大小", ResizeDemo);
export const Disabled: Story = createDemoStory("禁用状态", DisabledDemo);
