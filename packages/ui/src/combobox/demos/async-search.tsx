import * as React from "react";

import {
  Combobox,
  ComboboxContent,
  ComboboxEmpty,
  ComboboxInput,
  ComboboxItem,
  ComboboxList,
} from "lynote-ui";

type Member = {
  value: string;
  label: string;
  email: string;
};

const members: Member[] = [
  { value: "ada", label: "Ada Lovelace", email: "ada@example.com" },
  { value: "grace", label: "Grace Hopper", email: "grace@example.com" },
  { value: "alan", label: "Alan Turing", email: "alan@example.com" },
  { value: "katherine", label: "Katherine Johnson", email: "k@example.com" },
  { value: "margaret", label: "Margaret Hamilton", email: "mh@example.com" },
];

const App: React.FC = () => {
  const [query, setQuery] = React.useState("");
  const [loading, setLoading] = React.useState(false);
  const [results, setResults] = React.useState(members);

  React.useEffect(() => {
    setLoading(true);

    const timer = window.setTimeout(() => {
      const nextResults = members.filter((member) =>
        `${member.label} ${member.email}`
          .toLowerCase()
          .includes(query.toLowerCase()),
      );

      setResults(nextResults);
      setLoading(false);
    }, 300);

    return () => window.clearTimeout(timer);
  }, [query]);

  return (
    <Combobox<(typeof members)[number]>
      items={members}
      filteredItems={results}
      inputValue={query}
      onInputValueChange={setQuery}
      filter={null}
      itemToStringLabel={(member) => member.label}
    >
      <ComboboxInput className="w-[320px]" placeholder="异步搜索成员..." />
      <ComboboxContent>
        {loading && (
          <div className="text-muted-foreground px-3 py-2 text-sm">
            正在加载...
          </div>
        )}
        <ComboboxEmpty>未找到成员</ComboboxEmpty>
        <ComboboxList>
          {(member) => (
            <ComboboxItem key={member.value} value={member}>
              <div className="flex flex-col">
                <span>{member.label}</span>
                <span className="text-muted-foreground text-xs">
                  {member.email}
                </span>
              </div>
            </ComboboxItem>
          )}
        </ComboboxList>
      </ComboboxContent>
    </Combobox>
  );
};

export default App;
