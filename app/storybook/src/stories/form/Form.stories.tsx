import type { Meta, StoryObj } from "@storybook/react-vite";

import { FormRoot } from "lynote-ui/form";

import BaseDemo from "../../../../../packages/ui/src/form/demos/base";
import CustomDemo from "../../../../../packages/ui/src/form/demos/custom";
import { createDemoStory } from "../_shared/demo-story";

const meta = {
  title: "Form/Form",
  component: FormRoot,
  parameters: {
    layout: "padded",
    docs: {
      description: {
        component:
          "表单组件用于组合输入项、校验规则和提交行为，适合构建完整的交互录入流程。",
      },
    },
  },
  tags: ["autodocs"],
} satisfies Meta<typeof FormRoot>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Basic: Story = createDemoStory("基础用法", BaseDemo);
export const Custom: Story = createDemoStory("自定义表单", CustomDemo);
