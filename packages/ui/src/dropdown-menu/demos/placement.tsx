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
        <DropdownMenuContent className="w-40" align="start">
          {items.map((item) => (
            <DropdownMenuItem key={item.key} label={item.label}>
              {item.label}
            </DropdownMenuItem>
          ))}
        </DropdownMenuContent>
      </DropdownMenu>

      <DropdownMenu>
        <DropdownMenuTrigger
          render={<Button variant="outline">center</Button>}
        />
        <DropdownMenuContent className="w-40" align="center">
          {items.map((item) => (
            <DropdownMenuItem key={item.key} label={item.label}>
              {item.label}
            </DropdownMenuItem>
          ))}
        </DropdownMenuContent>
      </DropdownMenu>

      <DropdownMenu>
        <DropdownMenuTrigger render={<Button variant="outline">end</Button>} />
        <DropdownMenuContent className="w-40" align="end">
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
