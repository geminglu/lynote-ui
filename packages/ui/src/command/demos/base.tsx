"use client";

import * as React from "react";

import { Button } from "lynote-ui/button";
import {
  Command,
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "lynote-ui/command";

export default function App() {
  const [open, setOpen] = React.useState(false);

  return (
    <div className="flex flex-col gap-4">
      <Button onClick={() => setOpen(true)} variant="outline" className="w-fit">
        打开菜单
      </Button>
      <CommandDialog open={open} onOpenChange={setOpen}>
        <Command>
          <CommandInput placeholder="输入命令或搜索..." />
          <CommandList>
            <CommandEmpty>没有找到结果。</CommandEmpty>
            <CommandGroup heading="Suggestions">
              <CommandItem>日历</CommandItem>
              <CommandItem>搜索表情</CommandItem>
              <CommandItem>计算器</CommandItem>
            </CommandGroup>
          </CommandList>
        </Command>
      </CommandDialog>
    </div>
  );
}
