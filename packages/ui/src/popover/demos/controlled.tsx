import * as React from "react";

import { Button, Popover, PopoverContent, PopoverTrigger } from "lynote-ui";

const App: React.FC = () => {
  const [open, setOpen] = React.useState(false);

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger render={<Button variant="outline" />}>
        筛选
      </PopoverTrigger>
      <PopoverContent className="w-64 space-y-3">
        <p className="text-sm">这里可以放筛选表单或快捷操作。</p>
        <Button size="sm" onClick={() => setOpen(false)}>
          应用
        </Button>
      </PopoverContent>
    </Popover>
  );
};

export default App;
