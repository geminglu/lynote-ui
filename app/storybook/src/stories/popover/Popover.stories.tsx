import type { Meta, StoryObj } from "@storybook/react-vite";

import { Popover } from "lynote-ui/popover";

import AlignDemo from "../../../../../packages/ui/src/popover/demos/align";
import BaseDemo from "../../../../../packages/ui/src/popover/demos/base";
import WithFormDemo from "../../../../../packages/ui/src/popover/demos/withForm";
import { createDemoStory } from "../_shared/demo-story";

const meta = {
  title: "Overlay/Popover",
  component: Popover,
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component:
          "气泡卡片用于承载轻量交互和附加说明，适合操作菜单、补充信息和嵌入表单。",
      },
    },
  },
  tags: ["autodocs"],
} satisfies Meta<typeof Popover>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Basic: Story = createDemoStory("基础用法", BaseDemo);
export const Align: Story = createDemoStory("对齐方式", AlignDemo);
export const WithForm: Story = createDemoStory("表单场景", WithFormDemo);
