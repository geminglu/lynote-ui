import {
  NativeSelect,
  NativeSelectOptGroup,
  NativeSelectOption,
} from "lynote-ui/native-select";

const App: React.FC = () => {
  return (
    <NativeSelect className="w-56" defaultValue="apple">
      <NativeSelectOptGroup label="水果">
        <NativeSelectOption value="apple">苹果</NativeSelectOption>
        <NativeSelectOption value="banana">香蕉</NativeSelectOption>
        <NativeSelectOption value="orange">橙子</NativeSelectOption>
      </NativeSelectOptGroup>
      <NativeSelectOptGroup label="蔬菜">
        <NativeSelectOption value="potato">土豆</NativeSelectOption>
        <NativeSelectOption value="tomato">番茄</NativeSelectOption>
      </NativeSelectOptGroup>
    </NativeSelect>
  );
};

export default App;
