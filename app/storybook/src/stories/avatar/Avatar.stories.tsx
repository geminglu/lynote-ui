import type { Meta, StoryObj } from "@storybook/react-vite";

import { Avatar } from "lynote-ui/avatar";

import BaseDemo from "../../../../../packages/ui/src/avatar/demos/base";
import { createDemoStory } from "../_shared/demo-story";

const meta = {
  title: "Data Display/Avatar",
  component: Avatar,
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component:
          "头像用于展示用户身份或对象缩略图，适合成员列表、评论和导航区域。",
      },
    },
  },
  tags: ["autodocs"],
} satisfies Meta<typeof Avatar>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Basic: Story = createDemoStory("基础用法", BaseDemo);
