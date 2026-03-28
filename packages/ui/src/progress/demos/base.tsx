import { Progress } from "lynote-ui";

const App: React.FC = () => {
  return (
    <div className="flex w-full max-w-sm flex-col gap-4">
      <Progress value={33} />
      <Progress value={66} />
      <Progress value={100} />
    </div>
  );
};

export default App;
