import {
  Combobox,
  ComboboxContent,
  ComboboxEmpty,
  ComboboxInput,
  ComboboxItem,
  ComboboxList,
} from "lynote-ui";

const cities = ["北京", "上海", "广州", "深圳", "杭州", "成都"];

const App: React.FC = () => {
  return (
    <Combobox items={cities} defaultValue="上海">
      <ComboboxInput className="w-[240px]" placeholder="选择城市" showClear />
      <ComboboxContent>
        <ComboboxEmpty>未找到城市</ComboboxEmpty>
        <ComboboxList>
          {(city) => (
            <ComboboxItem key={city} value={city}>
              {city}
            </ComboboxItem>
          )}
        </ComboboxList>
      </ComboboxContent>
    </Combobox>
  );
};

export default App;
