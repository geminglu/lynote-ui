import type { Meta, StoryObj } from "@storybook/react-vite";

import { Select } from "lynote-ui/select";

import BaseDemo from "../../../../../packages/ui/src/select/demos/base";
import DisabledDemo from "../../../../../packages/ui/src/select/demos/disabled";
import GroupDemo from "../../../../../packages/ui/src/select/demos/group";
import SizeDemo from "../../../../../packages/ui/src/select/demos/size";
import { createDemoStory } from "../_shared/demo-story";

const meta = {
  title: "Form/Select",
  component: Select,
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component:
          "下拉选择器用于在有限选项中快速选择单个值，适合筛选、配置和状态切换。",
      },
    },
  },
  tags: ["autodocs"],
} satisfies Meta<typeof Select>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Basic: Story = createDemoStory("基础用法", BaseDemo);
export const Group: Story = createDemoStory("分组选项", GroupDemo);
export const Sizes: Story = createDemoStory("尺寸", SizeDemo);
export const Disabled: Story = createDemoStory("禁用状态", DisabledDemo);
