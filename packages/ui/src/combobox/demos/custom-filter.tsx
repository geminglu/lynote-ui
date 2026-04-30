import {
  Combobox,
  ComboboxContent,
  ComboboxEmpty,
  ComboboxInput,
  ComboboxItem,
  ComboboxList,
} from "lynote-ui";

const packages = [
  { value: "react", label: "React" },
  { value: "react-dom", label: "React DOM" },
  { value: "react-router", label: "React Router" },
  { value: "tailwindcss", label: "Tailwind CSS" },
  { value: "typescript", label: "TypeScript" },
  { value: "vite", label: "Vite" },
];

const App: React.FC = () => {
  return (
    <Combobox<(typeof packages)[number]>
      items={packages}
      itemToStringLabel={(item) => item.label}
      filter={(item, query) =>
        item.label.toLowerCase().startsWith(query.toLowerCase())
      }
    >
      <ComboboxInput className="w-[280px]" placeholder="按开头匹配包名..." />
      <ComboboxContent>
        <ComboboxEmpty>未找到包</ComboboxEmpty>
        <ComboboxList>
          {(item) => (
            <ComboboxItem key={item.value} value={item}>
              {item.label}
            </ComboboxItem>
          )}
        </ComboboxList>
      </ComboboxContent>
    </Combobox>
  );
};

export default App;
