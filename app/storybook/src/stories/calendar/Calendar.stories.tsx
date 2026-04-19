import type { Meta, StoryObj } from "@storybook/react-vite";

import { Calendar } from "lynote-ui/calendar";

import BaseDemo from "../../../../../packages/ui/src/calendar/demos/base";
import { createDemoStory } from "../_shared/demo-story";

const meta = {
  title: "Form/Calendar",
  component: Calendar,
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component:
          "日历用于直接展示日期视图和选择状态，适合排期、签到和日程场景。",
      },
    },
  },
  tags: ["autodocs"],
} satisfies Meta<typeof Calendar>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Basic: Story = createDemoStory("基础用法", BaseDemo);
