"use client";

import { ChevronsUpDownIcon } from "lucide-react";
import { useState } from "react";

import { Button } from "lynote-ui/button";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "lynote-ui/collapsible";

const App: React.FC = () => {
  const [open, setOpen] = useState(false);

  return (
    <Collapsible
      open={open}
      onOpenChange={setOpen}
      className="w-full max-w-sm space-y-2"
    >
      <div className="flex items-center justify-between gap-2 rounded-lg border px-3 py-2">
        <h4 className="text-sm font-medium">本次发布更新</h4>
        <CollapsibleTrigger
          render={
            <Button variant="ghost" size="icon-sm" aria-label="展开 / 收起">
              <ChevronsUpDownIcon />
            </Button>
          }
        />
      </div>
      <div className="text-muted-foreground rounded-md border px-3 py-2 text-sm">
        修复了登录跳转的两个边界 bug
      </div>
      <CollapsibleContent className="space-y-2">
        <div className="text-muted-foreground rounded-md border px-3 py-2 text-sm">
          新增 30+ 组件文档示例
        </div>
        <div className="text-muted-foreground rounded-md border px-3 py-2 text-sm">
          升级 Base UI 到 1.3.0
        </div>
      </CollapsibleContent>
    </Collapsible>
  );
};

export default App;
