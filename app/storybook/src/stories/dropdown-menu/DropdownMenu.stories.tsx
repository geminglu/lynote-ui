import type { Meta, StoryObj } from "@storybook/react-vite";
import { DropdownMenu } from "lynote-ui/dropdown-menu";
import AvatarBaseDemo from "../../../../../packages/ui/src/dropdown-menu/demos/avatar";
import BaseDemo from "../../../../../packages/ui/src/dropdown-menu/demos/base";
import CheckboxesBaseDemo from "../../../../../packages/ui/src/dropdown-menu/demos/checkboxes";
import CheckboxesIconsBaseDemo from "../../../../../packages/ui/src/dropdown-menu/demos/checkboxesIcons";
import ComplexBaseDemo from "../../../../../packages/ui/src/dropdown-menu/demos/complex";
import DestructiveBaseDemo from "../../../../../packages/ui/src/dropdown-menu/demos/destructive";
import IconsBaseDemo from "../../../../../packages/ui/src/dropdown-menu/demos/icons";
import PlacementBaseDemo from "../../../../../packages/ui/src/dropdown-menu/demos/placement";
import RadioGroupBaseDemo from "../../../../../packages/ui/src/dropdown-menu/demos/radioGroup";
import RadioGroupIconsBaseDemo from "../../../../../packages/ui/src/dropdown-menu/demos/radioIcons";
import ShortcutsBaseDemo from "../../../../../packages/ui/src/dropdown-menu/demos/shortcuts";
import SideBaseDemo from "../../../../../packages/ui/src/dropdown-menu/demos/side";
import SubmenuBaseDemo from "../../../../../packages/ui/src/dropdown-menu/demos/submenu";
import { createDemoStory } from "../_shared/demo-story";

const meta = {
  title: "Overlay/DropdownMenu",
  component: DropdownMenu,
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component:
          "下拉菜单适合容纳按钮的延伸操作，在工具栏、列表和卡片中都很常见。",
      },
    },
  },
  tags: ["autodocs"],
} satisfies Meta<typeof DropdownMenu>;

export default meta;

type Story = StoryObj<typeof meta>;

/**
 * 基础用法
 */
export const Basic: Story = createDemoStory("基础用法", BaseDemo);

/**
 * 子菜单
 使用 DropdownMenuSub 来嵌套次要操作。
 */
export const Submenu: Story = createDemoStory("子菜单", SubmenuBaseDemo);

/**
 * 快捷键
 * 添加 DropdownMenuShortcut 以显示键盘提示。
 */
export const Shortcuts: Story = createDemoStory("快捷键", ShortcutsBaseDemo);

/**
 * 带图标
 * 使用图标来表示菜单项。
 */
export const Icons: Story = createDemoStory("带图标", IconsBaseDemo);

/**
 * 复选框
 * 使用 DropdownMenuCheckboxItem 进行切换。
 */
export const Checkboxes: Story = createDemoStory("复选框", CheckboxesBaseDemo);

/**
 * 复选框图标
 * 使用 DropdownMenuCheckboxItem 进行切换。
 */
export const CheckboxesIcons: Story = createDemoStory(
  "复选框",
  CheckboxesIconsBaseDemo,
);

/**
 * 单选组
 * 使用 DropdownMenuRadioGroup 进行互斥选择。
 */
export const RadioGroup: Story = createDemoStory("单选组", RadioGroupBaseDemo);

/**
 * 单选组图标
 * 使用 DropdownMenuRadioGroup 进行互斥选择。
 */
export const RadioGroupIcons: Story = createDemoStory(
  "单选组图标",
  RadioGroupIconsBaseDemo,
);

/**
 * 销毁
 * 对于不可逆的操作，请使用 variant='destructive'。
 */
export const Destructive: Story = createDemoStory("销毁", DestructiveBaseDemo);

/**
 * 头像
 * 由头像触发的账户切换下拉菜单。
 */
export const Avatar: Story = createDemoStory("头像", AvatarBaseDemo);

/**
 * 复杂
 * 一个结合了分组、图标和子菜单的更丰富的示例。
 */
export const Complex: Story = createDemoStory("复杂", ComplexBaseDemo);

/**
 * 对其
 * 使用 align 和 side 属性来控制对其。
 */
export const Placement: Story = createDemoStory("对其", PlacementBaseDemo);

/**
 * 弹出位置
 * 使用 align 和 side 属性来控制弹出位置。
 */
export const Side: Story = createDemoStory("弹出位置", SideBaseDemo);
