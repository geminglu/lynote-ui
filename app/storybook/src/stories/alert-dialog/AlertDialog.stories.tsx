import type { Meta, StoryObj } from "@storybook/react-vite";

import { AlertDialog } from "lynote-ui/alert-dialog";

import BaseDemo from "../../../../../packages/ui/src/alert-dialog/demos/base";
import { createDemoStory } from "../_shared/demo-story";

const meta = {
  title: "Overlay/AlertDialog",
  component: AlertDialog,
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component:
          "警告对话框适合危险操作确认、权限提醒和不可逆行为的二次确认。",
      },
    },
  },
  tags: ["autodocs"],
} satisfies Meta<typeof AlertDialog>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Basic: Story = createDemoStory("基础用法", BaseDemo);
