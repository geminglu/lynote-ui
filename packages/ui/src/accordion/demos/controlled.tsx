"use client";

import { useState } from "react";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "lynote-ui/accordion";

const App: React.FC = () => {
  const [value, setValue] = useState<string[]>(["q-1"]);

  return (
    <div className="flex w-full flex-col gap-3">
      <div className="text-muted-foreground text-xs">
        当前展开:{" "}
        <span className="text-foreground font-medium">
          {value.length === 0 ? "无" : value.join(", ")}
        </span>
      </div>
      <Accordion
        value={value}
        onValueChange={(v) => setValue(v as string[])}
        className="w-full"
      >
        <AccordionItem value="q-1">
          <AccordionTrigger>支持受控吗？</AccordionTrigger>
          <AccordionContent>
            通过 `value` 与 `onValueChange` 实现受控模式。
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="q-2">
          <AccordionTrigger>可以多个同时展开吗？</AccordionTrigger>
          <AccordionContent>
            传入数组形式的 value 即可同时展开多项。
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  );
};

export default App;
