"use client";

import { useEffect, useState } from "react";

import { Button } from "lynote-ui/button";
import {
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "lynote-ui/command";
import { Kbd, KbdGroup } from "lynote-ui/kbd";

const App: React.FC = () => {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "k" && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        setOpen((v) => !v);
      }
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, []);

  return (
    <>
      <Button variant="outline" onClick={() => setOpen(true)} className="gap-3">
        <span className="text-muted-foreground">搜索命令...</span>
        <KbdGroup>
          <Kbd>⌘</Kbd>
          <Kbd>K</Kbd>
        </KbdGroup>
      </Button>
      <CommandDialog open={open} onOpenChange={setOpen}>
        <CommandInput placeholder="输入命令或搜索..." />
        <CommandList>
          <CommandEmpty>未找到结果。</CommandEmpty>
          <CommandGroup heading="建议">
            <CommandItem>日历</CommandItem>
            <CommandItem>表情符号</CommandItem>
            <CommandItem>计算器</CommandItem>
          </CommandGroup>
          <CommandGroup heading="设置">
            <CommandItem>个人资料</CommandItem>
            <CommandItem>账单</CommandItem>
            <CommandItem>偏好设置</CommandItem>
          </CommandGroup>
        </CommandList>
      </CommandDialog>
    </>
  );
};

export default App;
