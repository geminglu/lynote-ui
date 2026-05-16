import { NativeSelect, NativeSelectOption } from "lynote-ui/native-select";

const App: React.FC = () => {
  return (
    <NativeSelect className="w-48" defaultValue="ts">
      <NativeSelectOption value="ts">TypeScript</NativeSelectOption>
      <NativeSelectOption value="js">JavaScript</NativeSelectOption>
      <NativeSelectOption value="py">Python</NativeSelectOption>
      <NativeSelectOption value="go">Go</NativeSelectOption>
    </NativeSelect>
  );
};

export default App;
