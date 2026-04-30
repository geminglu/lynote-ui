import * as React from "react";

import {
  Combobox,
  ComboboxContent,
  ComboboxEmpty,
  ComboboxInput,
  ComboboxItem,
  ComboboxList,
} from "lynote-ui";

type Framework = {
  value: string;
  label: string;
};

const frameworks: Framework[] = [
  { value: "nextjs", label: "Next.js" },
  { value: "react", label: "React" },
  { value: "vue", label: "Vue" },
  { value: "svelte", label: "Svelte" },
  { value: "astro", label: "Astro" },
];

const App: React.FC = () => {
  const [value, setValue] = React.useState<Framework | null>(frameworks[0]);

  return (
    <div className="space-y-3">
      <Combobox
        items={frameworks}
        value={value}
        onValueChange={setValue}
        itemToStringLabel={(framework) => framework.label}
      >
        <ComboboxInput className="w-[260px]" placeholder="选择框架" />
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
      <p className="text-muted-foreground text-sm">
        当前选择：{value?.label ?? "未选择"}
      </p>
    </div>
  );
};

export default App;
