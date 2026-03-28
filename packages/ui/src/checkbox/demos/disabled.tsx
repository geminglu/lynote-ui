import { Checkbox } from "lynote-ui";

const App: React.FC = () => {
  return (
    <div className="flex flex-col gap-4">
      <div className="flex items-center gap-2">
        <Checkbox id="disabled-unchecked" disabled />
        <label
          htmlFor="disabled-unchecked"
          className="text-sm font-medium leading-none"
        >
          禁用未选中
        </label>
      </div>
      <div className="flex items-center gap-2">
        <Checkbox id="disabled-checked" checked disabled />
        <label
          htmlFor="disabled-checked"
          className="text-sm font-medium leading-none"
        >
          禁用已选中
        </label>
      </div>
    </div>
  );
};

export default App;
