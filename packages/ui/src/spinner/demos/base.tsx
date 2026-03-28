import { Spinner } from "lynote-ui";

const App: React.FC = () => {
  return (
    <div className="flex items-center gap-4">
      <Spinner />
      <Spinner className="size-6" />
      <Spinner className="size-8" />
    </div>
  );
};

export default App;
