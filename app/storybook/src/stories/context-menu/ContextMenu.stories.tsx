import type { Meta, StoryObj } from "@storybook/react-vite";

import { ContextMenu } from "lynote-ui/context-menu";

import BaseDemo from "../../../../../packages/ui/src/context-menu/demos/base";
import { createDemoStory } from "../_shared/demo-story";

const meta = {
  title: "Overlay/ContextMenu",
  component: ContextMenu,
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component:
          "右键菜单适合提供上下文操作入口，让列表项和画布对象拥有更高效的快捷动作。",
      },
    },
  },
  tags: ["autodocs"],
} satisfies Meta<typeof ContextMenu>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Basic: Story = createDemoStory("基础用法", BaseDemo);
