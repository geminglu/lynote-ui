import type { Meta, StoryObj } from "@storybook/react-vite";

import { Command } from "lynote-ui/command";

import BaseDemo from "../../../../../packages/ui/src/command/demos/base";
import { createDemoStory } from "../_shared/demo-story";

const meta = {
  title: "Overlay/Command",
  component: Command,
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component:
          "命令面板适合快速搜索、键盘操作和快捷跳转，是高效率交互的重要入口。",
      },
    },
  },
  tags: ["autodocs"],
} satisfies Meta<typeof Command>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Basic: Story = createDemoStory("基础用法", BaseDemo);
