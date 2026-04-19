import type { Meta, StoryObj } from "@storybook/react-vite";

import { Carousel } from "lynote-ui/carousel";

import BaseDemo from "../../../../../packages/ui/src/carousel/demos/base";
import { createDemoStory } from "../_shared/demo-story";

const meta = {
  title: "Data Display/Carousel",
  component: Carousel,
  parameters: {
    layout: "padded",
    docs: {
      description: {
        component:
          "轮播组件适合展示图集、活动卡片和多步内容，引导用户横向浏览信息。",
      },
    },
  },
  tags: ["autodocs"],
} satisfies Meta<typeof Carousel>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Basic: Story = createDemoStory("基础用法", BaseDemo);
