import type { Meta, StoryObj } from "@storybook/react-vite";

import { Pagination } from "lynote-ui/pagination";

import BaseDemo from "../../../../../packages/ui/src/pagination/demos/base";
import { createDemoStory } from "../_shared/demo-story";

const meta = {
  title: "Navigation/Pagination",
  component: Pagination,
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component:
          "分页器用于在长列表中切换页码，适合表格、列表和搜索结果页面。",
      },
    },
  },
  tags: ["autodocs"],
} satisfies Meta<typeof Pagination>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Basic: Story = createDemoStory("基础用法", BaseDemo);
