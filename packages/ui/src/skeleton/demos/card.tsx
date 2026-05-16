import { Skeleton } from "lynote-ui/skeleton";

const App: React.FC = () => {
  return (
    <div className="flex w-full max-w-sm flex-col gap-3">
      <Skeleton className="aspect-video w-full rounded-xl" />
      <div className="space-y-2">
        <Skeleton className="h-4 w-2/3" />
        <Skeleton className="h-4 w-full" />
        <Skeleton className="h-4 w-4/5" />
      </div>
    </div>
  );
};

export default App;
