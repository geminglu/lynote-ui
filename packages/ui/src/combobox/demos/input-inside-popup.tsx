import {
  Combobox,
  ComboboxContent,
  ComboboxEmpty,
  ComboboxInput,
  ComboboxItem,
  ComboboxList,
  ComboboxTrigger,
  ComboboxValue,
} from "lynote-ui";

const countries = [
  { value: "cn", label: "中国" },
  { value: "jp", label: "日本" },
  { value: "sg", label: "新加坡" },
  { value: "uk", label: "英国" },
  { value: "us", label: "美国" },
];

const App: React.FC = () => {
  return (
    <Combobox<(typeof countries)[number]>
      items={countries}
      itemToStringLabel={(country) => country.label}
    >
      <ComboboxTrigger className="border-input bg-background flex h-9 w-[240px] items-center justify-between rounded-md border px-3 text-sm">
        <ComboboxValue placeholder="选择国家" />
      </ComboboxTrigger>
      <ComboboxContent>
        <ComboboxInput
          className="w-full"
          placeholder="搜索国家..."
          showTrigger={false}
          showClear
        />
        <ComboboxEmpty>未找到国家</ComboboxEmpty>
        <ComboboxList>
          {(country) => (
            <ComboboxItem key={country.value} value={country}>
              {country.label}
            </ComboboxItem>
          )}
        </ComboboxList>
      </ComboboxContent>
    </Combobox>
  );
};

export default App;
