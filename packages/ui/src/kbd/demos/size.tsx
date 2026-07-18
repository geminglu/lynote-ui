import { Kbd } from "lynote-ui";

const App: React.FC = () => {
  return (
    <div className="flex flex-wrap items-center gap-2">
      <Kbd size="xs">⌘</Kbd>
      <Kbd size="sm">⌘</Kbd>
      <Kbd size="default">⌘</Kbd>
      <Kbd size="lg">⌘</Kbd>
    </div>
  );
};

export default App;
