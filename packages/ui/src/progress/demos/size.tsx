import { Progress } from "lynote-ui";

const App: React.FC = () => {
  return (
    <div className="flex flex-col gap-4">
      <Progress size="xs" value={60} />
      <Progress size="sm" value={60} />
      <Progress size="default" value={60} />
      <Progress size="lg" value={60} />
    </div>
  );
};

export default App;
