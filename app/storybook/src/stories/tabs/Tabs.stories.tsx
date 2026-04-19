import type { Meta, StoryObj } from "@storybook/react-vite";

import { Tabs } from "lynote-ui/tabs";

import BaseDemo from "../../../../../packages/ui/src/tabs/demos/base";
import { createDemoStory } from "../_shared/demo-story";

const meta = {
  title: "Navigation/Tabs",
  component: Tabs,
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component:
          "标签页用于在同一区域切换不同内容视图，适合设置页、详情页和模块切换。",
      },
    },
  },
  tags: ["autodocs"],
} satisfies Meta<typeof Tabs>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Basic: Story = createDemoStory("基础用法", BaseDemo);
