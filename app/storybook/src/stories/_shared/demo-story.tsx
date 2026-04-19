import type { StoryObj } from "@storybook/react-vite";
import type { ComponentType } from "react";

export function createDemoStory(
  name: string,
  DemoComponent: ComponentType,
): StoryObj {
  return {
    name,
    render: () => <DemoComponent />,
  };
}
