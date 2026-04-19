import type { Meta, StoryObj } from "@storybook/react-vite";

import { HoverCard } from "lynote-ui/hover-card";

import BaseDemo from "../../../../../packages/ui/src/hover-card/demos/base";
import { createDemoStory } from "../_shared/demo-story";

const meta = {
  title: "Overlay/HoverCard",
  component: HoverCard,
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component:
          "悬浮信息卡适合补充用户信息、预览详情和轻量说明，不打断当前阅读流程。",
      },
    },
  },
  tags: ["autodocs"],
} satisfies Meta<typeof HoverCard>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Basic: Story = createDemoStory("基础用法", BaseDemo);
