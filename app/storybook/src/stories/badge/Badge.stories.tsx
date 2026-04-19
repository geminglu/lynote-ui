import type { Meta, StoryObj } from "@storybook/react-vite";

import { Badge } from "lynote-ui/badge";

import BaseDemo from "../../../../../packages/ui/src/badge/demos/base";
import VariantDemo from "../../../../../packages/ui/src/badge/demos/variant";
import { createDemoStory } from "../_shared/demo-story";

const meta = {
  title: "Data Display/Badge",
  component: Badge,
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component:
          "徽标用于展示状态、分类和标签信息，适合与列表、卡片和标题组合使用。",
      },
    },
  },
  tags: ["autodocs"],
} satisfies Meta<typeof Badge>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Basic: Story = createDemoStory("基础用法", BaseDemo);
export const Variants: Story = createDemoStory("变体", VariantDemo);
