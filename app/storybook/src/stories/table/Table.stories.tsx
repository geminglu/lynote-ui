import type { Meta, StoryObj } from "@storybook/react-vite";

import { Table } from "lynote-ui/table";

import BaseDemo from "../../../../../packages/ui/src/table/demos/base";
import { createDemoStory } from "../_shared/demo-story";

const meta = {
  title: "Data Display/Table",
  component: Table,
  parameters: {
    layout: "padded",
    docs: {
      description: {
        component:
          "表格用于展示结构化数据，适合后台列表、统计数据和多列信息对比场景。",
      },
    },
  },
  tags: ["autodocs"],
} satisfies Meta<typeof Table>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Basic: Story = createDemoStory("基础用法", BaseDemo);
