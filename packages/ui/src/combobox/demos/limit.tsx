import {
  Combobox,
  ComboboxContent,
  ComboboxEmpty,
  ComboboxInput,
  ComboboxItem,
  ComboboxList,
} from "lynote-ui";

const components = [
  "Accordion",
  "Alert",
  "Avatar",
  "Button",
  "Calendar",
  "Combobox",
  "Dialog",
  "Dropdown Menu",
  "Popover",
  "Select",
  "Tabs",
  "Tooltip",
];

const App: React.FC = () => {
  return (
    <Combobox<(typeof components)[number]> items={components} limit={5}>
      <ComboboxInput className="w-[280px]" placeholder="最多展示 5 个结果..." />
      <ComboboxContent>
        <ComboboxEmpty>未找到组件</ComboboxEmpty>
        <ComboboxList>
          {(component) => (
            <ComboboxItem key={component} value={component}>
              {component}
            </ComboboxItem>
          )}
        </ComboboxList>
      </ComboboxContent>
    </Combobox>
  );
};

export default App;
