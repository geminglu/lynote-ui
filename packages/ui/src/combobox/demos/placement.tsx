import {
  Combobox,
  ComboboxContent,
  ComboboxEmpty,
  ComboboxInput,
  ComboboxItem,
  ComboboxList,
} from "lynote-ui";

const timezones = [
  "Asia/Shanghai",
  "Asia/Tokyo",
  "Europe/London",
  "America/New_York",
  "Australia/Sydney",
];

const App: React.FC = () => {
  return (
    <Combobox items={timezones}>
      <ComboboxInput className="w-[280px]" placeholder="选择时区" />
      <ComboboxContent side="right" align="start" sideOffset={8}>
        <ComboboxEmpty>未找到时区</ComboboxEmpty>
        <ComboboxList>
          {(timezone) => (
            <ComboboxItem key={timezone} value={timezone}>
              {timezone}
            </ComboboxItem>
          )}
        </ComboboxList>
      </ComboboxContent>
    </Combobox>
  );
};

export default App;
