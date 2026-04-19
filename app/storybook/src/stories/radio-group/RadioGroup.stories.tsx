import type { Meta, StoryObj } from "@storybook/react-vite";

import { RadioGroup } from "lynote-ui/radio-group";

import BaseDemo from "../../../../../packages/ui/src/radio-group/demos/base";
import ControlledDemo from "../../../../../packages/ui/src/radio-group/demos/controlled";
import DisabledDemo from "../../../../../packages/ui/src/radio-group/demos/disabled";
import { createDemoStory } from "../_shared/demo-story";

const meta = {
  title: "Form/RadioGroup",
  component: RadioGroup,
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component:
          "单选框组用于在多个互斥选项中做唯一选择，适合配置项、筛选和偏好设置。",
      },
    },
  },
  tags: ["autodocs"],
} satisfies Meta<typeof RadioGroup>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Basic: Story = createDemoStory("基础用法", BaseDemo);
export const Controlled: Story = createDemoStory("受控用法", ControlledDemo);
export const Disabled: Story = createDemoStory("禁用状态", DisabledDemo);
