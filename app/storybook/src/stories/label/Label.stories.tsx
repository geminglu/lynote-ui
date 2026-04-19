import type { Meta, StoryObj } from "@storybook/react-vite";

import { Label } from "lynote-ui/label";

import BaseDemo from "../../../../../packages/ui/src/label/demos/base";
import WithInputDemo from "../../../../../packages/ui/src/label/demos/with-input";
import { createDemoStory } from "../_shared/demo-story";

const meta = {
  title: "Form/Label",
  component: Label,
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component:
          "标签用于为输入控件提供语义化说明，帮助用户理解当前字段的含义。",
      },
    },
  },
  tags: ["autodocs"],
} satisfies Meta<typeof Label>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Basic: Story = createDemoStory("基础用法", BaseDemo);
export const WithInput: Story = createDemoStory("与输入框配合", WithInputDemo);
