import type { Meta, StoryObj } from "@storybook/react-vite";

import { Accordion } from "lynote-ui/accordion";

import { createElement } from "react";

const meta = {
  title: "Navigation/Accordion",
  component: Accordion,
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component:
          "手风琴适合在有限空间中分组展示内容，用于 FAQ、设置项和分段说明。",
      },
    },
  },
  tags: ["autodocs"],
} satisfies Meta<typeof Accordion>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Basic: Story = {
  name: "基础用法",
  render: () => createElement(Accordion, {}),
};
