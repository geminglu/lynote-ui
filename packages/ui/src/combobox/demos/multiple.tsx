import * as React from "react";

import {
  Combobox,
  ComboboxChip,
  ComboboxChips,
  ComboboxChipsInput,
  ComboboxContent,
  ComboboxEmpty,
  ComboboxItem,
  ComboboxList,
  useComboboxAnchor,
} from "lynote-ui";

type Skill = {
  value: string;
  label: string;
};

const skills: Skill[] = [
  { value: "react", label: "React" },
  { value: "typescript", label: "TypeScript" },
  { value: "tailwindcss", label: "Tailwind CSS" },
  { value: "vite", label: "Vite" },
  { value: "storybook", label: "Storybook" },
];

const App: React.FC = () => {
  const anchorRef = useComboboxAnchor();
  const [selectedSkills, setSelectedSkills] = React.useState<Skill[]>([
    skills[0],
    skills[1],
  ]);

  return (
    <Combobox
      multiple
      items={skills}
      value={selectedSkills}
      onValueChange={(value) => setSelectedSkills(value)}
      itemToStringLabel={(skill) => skill.label}
    >
      <ComboboxChips ref={anchorRef} className="w-[320px]">
        {selectedSkills.map((skill) => (
          <ComboboxChip key={skill.value}>{skill.label}</ComboboxChip>
        ))}
        <ComboboxChipsInput placeholder="添加技能..." />
      </ComboboxChips>
      <ComboboxContent anchor={anchorRef}>
        <ComboboxEmpty>未找到技能</ComboboxEmpty>
        <ComboboxList>
          {(skill) => (
            <ComboboxItem key={skill.value} value={skill}>
              {skill.label}
            </ComboboxItem>
          )}
        </ComboboxList>
      </ComboboxContent>
    </Combobox>
  );
};

export default App;
