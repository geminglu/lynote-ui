import * as React from "react";

import {
  Combobox,
  ComboboxContent,
  ComboboxInput,
  ComboboxItem,
  ComboboxList,
} from "lynote-ui";

type Tag = {
  value: string;
  label: string;
};

const defaultTags: Tag[] = [
  { value: "design", label: "Design" },
  { value: "frontend", label: "Frontend" },
  { value: "backend", label: "Backend" },
];

const App: React.FC = () => {
  const [tags, setTags] = React.useState(defaultTags);
  const [query, setQuery] = React.useState("");

  const filteredTags = tags.filter((tag) =>
    tag.label.toLowerCase().includes(query.toLowerCase()),
  );
  const canCreate =
    query.trim().length > 0 &&
    !tags.some((tag) => tag.label.toLowerCase() === query.trim().toLowerCase());
  const createdTag = {
    value: query.trim().toLowerCase().replace(/\s+/g, "-"),
    label: query.trim(),
  };

  return (
    <Combobox<(typeof tags)[number]>
      items={tags}
      filteredItems={filteredTags}
      inputValue={query}
      onInputValueChange={setQuery}
      onValueChange={(value) => {
        if (value && canCreate) {
          setTags((prevTags) => [...prevTags, value]);
        }
      }}
      filter={null}
      itemToStringLabel={(tag) => tag.label}
    >
      <ComboboxInput className="w-[280px]" placeholder="选择或创建标签..." />
      <ComboboxContent>
        <ComboboxList>
          {filteredTags.map((tag) => (
            <ComboboxItem key={tag.value} value={tag}>
              {tag.label}
            </ComboboxItem>
          ))}
          {canCreate && (
            <ComboboxItem value={createdTag}>
              创建 “{createdTag.label}”
            </ComboboxItem>
          )}
        </ComboboxList>
      </ComboboxContent>
    </Combobox>
  );
};

export default App;
