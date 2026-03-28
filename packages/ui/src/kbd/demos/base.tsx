import { Kbd, KbdGroup } from "lynote-ui";

const App: React.FC = () => {
  return (
    <div className="flex flex-wrap items-center gap-2">
      <Kbd>⌘</Kbd>
      <Kbd>K</Kbd>
      <KbdGroup>
        <Kbd>⌘</Kbd>
        <Kbd>K</Kbd>
      </KbdGroup>
      <KbdGroup>
        <Kbd>⌘</Kbd>
        <Kbd>⇧</Kbd>
        <Kbd>N</Kbd>
      </KbdGroup>
    </div>
  );
};

export default App;
