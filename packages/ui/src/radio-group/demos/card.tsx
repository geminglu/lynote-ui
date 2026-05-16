"use client";

import { useState } from "react";

import {
  Field,
  FieldDescription,
  FieldLabel,
  FieldTitle,
} from "lynote-ui/field";
import { RadioGroup, RadioGroupItem } from "lynote-ui/radio-group";

const plans = [
  { value: "starter", title: "入门版", desc: "适合个人使用，3 个项目内免费" },
  { value: "pro", title: "专业版", desc: "无限项目数 + 优先支持" },
  { value: "team", title: "团队版", desc: "团队协作、SSO 与 SLA" },
];

const App: React.FC = () => {
  const [value, setValue] = useState("pro");

  return (
    <RadioGroup
      value={value}
      onValueChange={(v) => setValue(v as string)}
      className="grid w-full max-w-md gap-3"
    >
      {plans.map((p) => (
        <FieldLabel key={p.value} htmlFor={`plan-${p.value}`}>
          <Field orientation="horizontal">
            <RadioGroupItem value={p.value} id={`plan-${p.value}`} />
            <div>
              <FieldTitle>{p.title}</FieldTitle>
              <FieldDescription>{p.desc}</FieldDescription>
            </div>
          </Field>
        </FieldLabel>
      ))}
    </RadioGroup>
  );
};

export default App;
