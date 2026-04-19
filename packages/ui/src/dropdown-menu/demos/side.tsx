import { Button } from "lynote-ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "lynote-ui/dropdown-menu";

const App: React.FC = () => {
  const items: React.ComponentProps<typeof DropdownMenuItem>[] = [
    {
      key: "1",
      label: "1nt Item",
    },
    {
      key: "2",
      label: "2nt Item",
    },
    {
      key: "3",
      label: "3nt Item",
    },
  ];

  return (
    <div className="flex gap-6">
      <DropdownMenu>
        <DropdownMenuTrigger
          render={<Button variant="outline">start</Button>}
        />
        <DropdownMenuContent className="w-40" side="top">
          {items.map((item) => (
            <DropdownMenuItem key={item.key} label={item.label}>
              {item.label}
            </DropdownMenuItem>
          ))}
        </DropdownMenuContent>
      </DropdownMenu>

      <DropdownMenu>
        <DropdownMenuTrigger
          render={<Button variant="outline">bottom</Button>}
        />
        <DropdownMenuContent className="w-40" side="bottom">
          {items.map((item) => (
            <DropdownMenuItem key={item.key} label={item.label}>
              {item.label}
            </DropdownMenuItem>
          ))}
        </DropdownMenuContent>
      </DropdownMenu>

      <DropdownMenu>
        <DropdownMenuTrigger render={<Button variant="outline">left</Button>} />
        <DropdownMenuContent className="w-40" side="left">
          {items.map((item) => (
            <DropdownMenuItem key={item.key} label={item.label}>
              {item.label}
            </DropdownMenuItem>
          ))}
        </DropdownMenuContent>
      </DropdownMenu>

      <DropdownMenu>
        <DropdownMenuTrigger
          render={<Button variant="outline">right</Button>}
        />
        <DropdownMenuContent className="w-40" side="right">
          {items.map((item) => (
            <DropdownMenuItem key={item.key} label={item.label}>
              {item.label}
            </DropdownMenuItem>
          ))}
        </DropdownMenuContent>
      </DropdownMenu>

      <DropdownMenu>
        <DropdownMenuTrigger
          render={<Button variant="outline">inline-end</Button>}
        />
        <DropdownMenuContent className="w-40" side="inline-end">
          {items.map((item) => (
            <DropdownMenuItem key={item.key} label={item.label}>
              {item.label}
            </DropdownMenuItem>
          ))}
        </DropdownMenuContent>
      </DropdownMenu>

      <DropdownMenu>
        <DropdownMenuTrigger
          render={<Button variant="outline">inline-start</Button>}
        />
        <DropdownMenuContent className="w-40" side="inline-start">
          {items.map((item) => (
            <DropdownMenuItem key={item.key} label={item.label}>
              {item.label}
            </DropdownMenuItem>
          ))}
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
};

export default App;
