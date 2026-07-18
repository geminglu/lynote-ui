import { Skeleton } from "lynote-ui";

const App: React.FC = () => {
  return (
    <div className="flex flex-col gap-3">
      <Skeleton size="xs" className="w-32" />
      <Skeleton size="sm" className="w-48" />
      <Skeleton size="default" className="w-64" />
      <Skeleton size="lg" className="w-80" />
    </div>
  );
};

export default App;
