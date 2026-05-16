"use client";

import { useState } from "react";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "lynote-ui/select";

const items = [
  { value: "draft", label: "草稿" },
  { value: "review", label: "审核中" },
  { value: "published", label: "已发布" },
  { value: "archived", label: "已归档" },
];

const App: React.FC = () => {
  const [value, setValue] = useState<string>("draft");

  return (
    <div className="flex flex-col gap-3">
      <Select
        value={value}
        onValueChange={setValue as (v: unknown) => void}
        items={items}
      >
        <SelectTrigger className="w-[200px]">
          <SelectValue placeholder="请选择状态" />
        </SelectTrigger>
        <SelectContent>
          {items.map((item) => (
            <SelectItem key={item.value} value={item.value}>
              {item.label}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>

      <div className="text-muted-foreground text-sm">
        当前选中：<span className="text-foreground font-medium">{value}</span>
      </div>
    </div>
  );
};

export default App;
