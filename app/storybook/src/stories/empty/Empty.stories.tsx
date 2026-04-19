import type { Meta, StoryObj } from "@storybook/react-vite";

import { Empty } from "lynote-ui/empty";

import BaseDemo from "../../../../../packages/ui/src/empty/demos/base";
import { createDemoStory } from "../_shared/demo-story";

const meta = {
  title: "Feedback/Empty",
  component: Empty,
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component:
          "空状态用于在没有数据、暂无结果或首次进入页面时给予用户明确引导。",
      },
    },
  },
  tags: ["autodocs"],
} satisfies Meta<typeof Empty>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Basic: Story = createDemoStory("基础用法", BaseDemo);
