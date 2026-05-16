import { Separator } from "lynote-ui/separator";

const App: React.FC = () => {
  return (
    <div className="flex w-full max-w-sm flex-col gap-4">
      <Separator />
      <div className="flex items-center gap-3">
        <Separator className="flex-1" />
        <span className="text-muted-foreground text-xs">或</span>
        <Separator className="flex-1" />
      </div>
      <Separator />
    </div>
  );
};

export default App;
