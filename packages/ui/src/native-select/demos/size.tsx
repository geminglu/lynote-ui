import { NativeSelect } from "lynote-ui";

const App: React.FC = () => {
  return (
    <div className="flex flex-col gap-3">
      <NativeSelect size="xs">
        <option>选项一</option>
        <option>选项二</option>
      </NativeSelect>
      <NativeSelect size="sm">
        <option>选项一</option>
        <option>选项二</option>
      </NativeSelect>
      <NativeSelect size="default">
        <option>选项一</option>
        <option>选项二</option>
      </NativeSelect>
      <NativeSelect size="lg">
        <option>选项一</option>
        <option>选项二</option>
      </NativeSelect>
    </div>
  );
};

export default App;
