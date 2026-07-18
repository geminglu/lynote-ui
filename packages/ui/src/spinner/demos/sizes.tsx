import { Spinner } from "lynote-ui";

const App: React.FC = () => {
  return (
    <div className="flex items-center gap-3">
      <Spinner size="xs" />
      <Spinner size="sm" />
      <Spinner size="default" />
      <Spinner size="lg" />
    </div>
  );
};

export default App;
