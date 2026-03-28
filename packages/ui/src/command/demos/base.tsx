import {
  Button,
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "lynote-ui";
import { useState } from "react";

const App: React.FC = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <Button onClick={() => setOpen(true)}>打开命令面板</Button>
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
            <CommandItem>设置</CommandItem>
          </CommandGroup>
        </CommandList>
      </CommandDialog>
    </>
  );
};

export default App;
