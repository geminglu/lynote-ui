"use client";

import { Checkbox } from "lynote-ui/checkbox";
import {
  Field,
  FieldGroup,
  FieldLabel,
  FieldLegend,
  FieldSet,
} from "lynote-ui/field";
import { useState } from "react";

const skills = [
  { value: "ts", label: "TypeScript" },
  { value: "react", label: "React" },
  { value: "vue", label: "Vue" },
  { value: "node", label: "Node.js" },
] as const;

const App: React.FC = () => {
  const [selected, setSelected] = useState<string[]>(["ts", "react"]);

  const toggle = (value: string, checked: boolean) => {
    setSelected((prev) =>
      checked ? [...prev, value] : prev.filter((v) => v !== value),
    );
  };

  return (
    <FieldSet>
      <FieldLegend>选择擅长的技术栈</FieldLegend>
      <FieldGroup data-slot="checkbox-group">
        {skills.map((s) => (
          <Field key={s.value} orientation="horizontal">
            <Checkbox
              id={`cb-skill-${s.value}`}
              checked={selected.includes(s.value)}
              onCheckedChange={(v) => toggle(s.value, !!v)}
            />
            <FieldLabel htmlFor={`cb-skill-${s.value}`} className="font-normal">
              {s.label}
            </FieldLabel>
          </Field>
        ))}
      </FieldGroup>
    </FieldSet>
  );
};

export default App;
