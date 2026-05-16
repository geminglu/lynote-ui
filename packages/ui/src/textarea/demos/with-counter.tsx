"use client";

import { useState } from "react";

import { Field, FieldDescription, FieldLabel } from "lynote-ui/field";
import { Textarea } from "lynote-ui/textarea";

const MAX = 140;

const App: React.FC = () => {
  const [value, setValue] = useState("");
  const over = value.length > MAX;

  return (
    <div className="w-full max-w-md">
      <Field data-invalid={over}>
        <FieldLabel htmlFor="textarea-bio">个人简介</FieldLabel>
        <Textarea
          id="textarea-bio"
          placeholder="介绍一下你自己..."
          value={value}
          onChange={(e) => setValue(e.target.value)}
          aria-invalid={over}
          maxLength={MAX + 30}
        />
        <FieldDescription className="flex items-center justify-between">
          <span>简短的介绍会显示在个人资料页。</span>
          <span className={over ? "text-destructive font-medium" : ""}>
            {value.length} / {MAX}
          </span>
        </FieldDescription>
      </Field>
    </div>
  );
};

export default App;
