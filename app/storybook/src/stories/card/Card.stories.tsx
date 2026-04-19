import type { Meta, StoryObj } from "@storybook/react-vite";

import { Card } from "lynote-ui/card";

import BaseDemo from "../../../../../packages/ui/src/card/demos/base";
import ComplexDemo from "../../../../../packages/ui/src/card/demos/complex";
import WithActionDemo from "../../../../../packages/ui/src/card/demos/with-action";
import { createDemoStory } from "../_shared/demo-story";

const meta = {
  title: "Data Display/Card",
  component: Card,
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component:
          "卡片用于承载结构化信息和复合操作，适合面板、列表和仪表盘模块。",
      },
    },
  },
  tags: ["autodocs"],
} satisfies Meta<typeof Card>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Basic: Story = createDemoStory("基础用法", BaseDemo);
export const WithAction: Story = createDemoStory("带操作区", WithActionDemo);
export const Complex: Story = createDemoStory("复杂内容", ComplexDemo);
