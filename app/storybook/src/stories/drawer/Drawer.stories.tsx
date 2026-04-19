import type { Meta, StoryObj } from "@storybook/react-vite";

import { Drawer } from "lynote-ui/drawer";

import BaseDemo from "../../../../../packages/ui/src/drawer/demos/base";
import { createDemoStory } from "../_shared/demo-story";

const meta = {
  title: "Overlay/Drawer",
  component: Drawer,
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component:
          "抽屉适合承载次级任务和编辑流程，让用户在保留上下文的同时完成操作。",
      },
    },
  },
  tags: ["autodocs"],
} satisfies Meta<typeof Drawer>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Basic: Story = createDemoStory("基础用法", BaseDemo);
