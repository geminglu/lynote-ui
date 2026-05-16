"use client";

import { useState } from "react";

import {
  Field,
  FieldError,
  FieldGroup,
  FieldLabel,
  FieldLegend,
  FieldSet,
} from "lynote-ui/field";
import { RadioGroup, RadioGroupItem } from "lynote-ui/radio-group";

const App: React.FC = () => {
  const [value, setValue] = useState<string>();
  const invalid = !value;

  return (
    <form className="w-full max-w-sm">
      <FieldSet>
        <FieldLegend>选择交付方式</FieldLegend>
        <RadioGroup value={value} onValueChange={(v) => setValue(v as string)}>
          <FieldGroup data-slot="radio-group">
            <Field orientation="horizontal" data-invalid={invalid}>
              <RadioGroupItem
                value="express"
                id="ship-express"
                aria-invalid={invalid}
              />
              <FieldLabel htmlFor="ship-express" className="font-normal">
                顺丰特快(次日达)
              </FieldLabel>
            </Field>
            <Field orientation="horizontal" data-invalid={invalid}>
              <RadioGroupItem
                value="standard"
                id="ship-standard"
                aria-invalid={invalid}
              />
              <FieldLabel htmlFor="ship-standard" className="font-normal">
                普通配送(3-5 天)
              </FieldLabel>
            </Field>
            <Field orientation="horizontal" data-invalid={invalid}>
              <RadioGroupItem
                value="pickup"
                id="ship-pickup"
                aria-invalid={invalid}
              />
              <FieldLabel htmlFor="ship-pickup" className="font-normal">
                门店自提
              </FieldLabel>
            </Field>
          </FieldGroup>
        </RadioGroup>
        {invalid && <FieldError errors={[{ message: "请选择一种交付方式" }]} />}
      </FieldSet>
    </form>
  );
};

export default App;
