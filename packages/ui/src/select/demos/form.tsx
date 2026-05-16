"use client";

import { useState } from "react";

import {
  Field,
  FieldDescription,
  FieldError,
  FieldGroup,
  FieldLabel,
} from "lynote-ui/field";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "lynote-ui/select";

const timezones = [
  { value: "asia-shanghai", label: "中国 (UTC+8)" },
  { value: "asia-tokyo", label: "日本 (UTC+9)" },
  { value: "europe-london", label: "英国 (UTC+0/+1)" },
  { value: "america-newyork", label: "美东 (UTC-5/-4)" },
];

const App: React.FC = () => {
  const [value, setValue] = useState<string>();
  const invalid = value === undefined;

  return (
    <form className="w-full max-w-sm">
      <FieldGroup>
        <Field data-invalid={invalid}>
          <FieldLabel htmlFor="select-form-tz">时区</FieldLabel>
          <Select
            value={value}
            onValueChange={(v) => setValue(v as string)}
            items={timezones}
          >
            <SelectTrigger id="select-form-tz" aria-invalid={invalid}>
              <SelectValue placeholder="选择你所在的时区" />
            </SelectTrigger>
            <SelectContent>
              {timezones.map((tz) => (
                <SelectItem key={tz.value} value={tz.value}>
                  {tz.label}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
          {invalid ? (
            <FieldError errors={[{ message: "请选择一个时区" }]} />
          ) : (
            <FieldDescription>
              用于发送邮件摘要时的时间格式化。
            </FieldDescription>
          )}
        </Field>
      </FieldGroup>
    </form>
  );
};

export default App;
