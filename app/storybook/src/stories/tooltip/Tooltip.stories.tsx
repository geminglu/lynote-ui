import type { Meta, StoryObj } from "@storybook/react-vite";

import { Tooltip } from "lynote-ui/tooltip";

import BaseDemo from "../../../../../packages/ui/src/tooltip/demos/base";
import { createDemoStory } from "../_shared/demo-story";

const meta = {
  title: "Overlay/Tooltip",
  component: Tooltip,
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component:
          "文字提示适合为图标按钮和简短操作补充解释信息，避免界面语义不清。",
      },
    },
  },
  tags: ["autodocs"],
} satisfies Meta<typeof Tooltip>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Basic: Story = createDemoStory("基础用法", BaseDemo);
