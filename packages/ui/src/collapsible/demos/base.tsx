import {
  Button,
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "lynote-ui";
import { useState } from "react";

const App: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Collapsible open={isOpen} onOpenChange={setIsOpen} className="w-[350px]">
      <div className="flex items-center justify-between space-x-4 px-4">
        <h4 className="text-sm font-semibold">
          @peduarte starred 3 repositories
        </h4>
        <CollapsibleTrigger>
          <Button variant="ghost" size="sm">
            打开
          </Button>
        </CollapsibleTrigger>
      </div>
      <div className="px-4 py-2">
        <p className="text-muted-foreground text-sm">@radix-ui/primitives</p>
      </div>
      <CollapsibleContent className="space-y-2 px-4">
        <div className="rounded-md border px-4 py-2 text-sm">
          @radix-ui/colors
        </div>
        <div className="rounded-md border px-4 py-2 text-sm">
          @stitches/react
        </div>
      </CollapsibleContent>
    </Collapsible>
  );
};

export default App;
