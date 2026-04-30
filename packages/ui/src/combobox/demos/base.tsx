import {
  Combobox,
  ComboboxContent,
  ComboboxEmpty,
  ComboboxInput,
  ComboboxItem,
  ComboboxList,
} from "lynote-ui/combobox";

const frameworks = [
  { value: "nextjs", label: "Next.js" },
  { value: "react", label: "React" },
  { value: "vue", label: "Vue" },
  { value: "svelte", label: "Svelte" },
  { value: "astro", label: "Astro" },
];

const App: React.FC = () => {
  return (
    <Combobox<(typeof frameworks)[number]> items={frameworks}>
      <ComboboxInput className="w-[260px]" placeholder="搜索框架..." />
      <ComboboxContent>
        <ComboboxEmpty>未找到匹配的框架</ComboboxEmpty>
        <ComboboxList>
          {(framework) => (
            <ComboboxItem key={framework.value} value={framework}>
              {framework.label}
            </ComboboxItem>
          )}
        </ComboboxList>
      </ComboboxContent>
    </Combobox>
  );
};

export default App;
