import type { Meta, StoryObj } from "@storybook/react-vite";

import { Progress } from "lynote-ui/progress";

import AnimatedDemo from "../../../../../packages/ui/src/progress/demos/animated";
import BaseDemo from "../../../../../packages/ui/src/progress/demos/base";
import VariantDemo from "../../../../../packages/ui/src/progress/demos/variant";
import { createDemoStory } from "../_shared/demo-story";

const meta = {
  title: "Feedback/Progress",
  component: Progress,
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component:
          "进度条用于展示任务完成程度和加载反馈，适合上传、导入和分步流程场景。",
      },
    },
  },
  tags: ["autodocs"],
} satisfies Meta<typeof Progress>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Basic: Story = createDemoStory("基础用法", BaseDemo);
export const Animated: Story = createDemoStory("动态效果", AnimatedDemo);
export const Variants: Story = createDemoStory("样式变体", VariantDemo);
