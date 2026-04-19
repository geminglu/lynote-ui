import type { Meta, StoryObj } from "@storybook/react-vite";

import { DatePicker } from "lynote-ui/date-picker";

import BaseDemo from "../../../../../packages/ui/src/date-picker/demos/base";
import InputDateDemo from "../../../../../packages/ui/src/date-picker/demos/input-date";
import NaturalLanguagePickerDemo from "../../../../../packages/ui/src/date-picker/demos/natural-language-picker";
import RangePickerDemo from "../../../../../packages/ui/src/date-picker/demos/range-picker";
import SelectionDateDemo from "../../../../../packages/ui/src/date-picker/demos/selection-date";
import TimePickerDemo from "../../../../../packages/ui/src/date-picker/demos/time-picker";
import { createDemoStory } from "../_shared/demo-story";

const meta = {
  title: "Form/DatePicker",
  component: DatePicker,
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component:
          "日期选择器用于选择单个日期、日期范围或时间信息，适合预约、筛选和排期场景。",
      },
    },
  },
  tags: ["autodocs"],
} satisfies Meta<typeof DatePicker>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Basic: Story = createDemoStory("基础用法", BaseDemo);
export const SelectionDate: Story = createDemoStory(
  "快捷选择",
  SelectionDateDemo,
);
export const InputDate: Story = createDemoStory("输入日期", InputDateDemo);
export const RangePicker: Story = createDemoStory("范围选择", RangePickerDemo);
export const TimePicker: Story = createDemoStory("时间选择", TimePickerDemo);
export const NaturalLanguage: Story = createDemoStory(
  "自然语言输入",
  NaturalLanguagePickerDemo,
);
