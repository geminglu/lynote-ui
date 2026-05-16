import { Button, Popover, PopoverContent, PopoverTrigger } from "lynote-ui";

const App: React.FC = () => {
  return (
    <div className="flex gap-6">
      <Popover>
        <PopoverTrigger
          render={
            <Button variant="outline" size="sm">
              Start
            </Button>
          }
        />
        <PopoverContent align="start" className="w-40">
          Aligned to start
        </PopoverContent>
      </Popover>
      <Popover>
        <PopoverTrigger
          render={
            <Button variant="outline" size="sm">
              Center
            </Button>
          }
        />
        <PopoverContent align="center" className="w-40">
          Aligned to center
        </PopoverContent>
      </Popover>
      <Popover>
        <PopoverTrigger
          render={
            <Button variant="outline" size="sm">
              End
            </Button>
          }
        />
        <PopoverContent align="end" className="w-40">
          Aligned to end
        </PopoverContent>
      </Popover>
    </div>
  );
};

export default App;
