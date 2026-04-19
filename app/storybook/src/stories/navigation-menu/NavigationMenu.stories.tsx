import type { Meta, StoryObj } from "@storybook/react-vite";

import { NavigationMenu } from "lynote-ui/navigation-menu";

import BaseDemo from "../../../../../packages/ui/src/navigation-menu/demos/base";
import { createDemoStory } from "../_shared/demo-story";

const meta = {
  title: "Navigation/NavigationMenu",
  component: NavigationMenu,
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component:
          "导航菜单适合展示站点层级结构和分组入口，常用于头部导航与产品菜单。",
      },
    },
  },
  tags: ["autodocs"],
} satisfies Meta<typeof NavigationMenu>;

export default meta;

type Story = StoryObj<typeof meta>;

/**
 * 按钮变体展示,
 * 这里展示了按钮的多种变体，包括默认`outline`、`secondary`、`ghost`、`destructive`、`link`
 */
// export const Basic: Story = createDemoStory("基础用法", BaseDemo);
export const Basic: Story = createDemoStory("基础用法", BaseDemo);
