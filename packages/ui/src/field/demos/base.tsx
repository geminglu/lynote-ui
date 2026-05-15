"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { Controller, useForm } from "react-hook-form";
import * as z from "zod";

import { Button } from "../..";
import {
  Field,
  FieldDescription,
  FieldError,
  FieldGroup,
  FieldLabel,
} from "../../field";
import { Input } from "../../input";

const formSchema = z.object({
  username: z
    .string()
    .min(3, "用户名必须至少包含 3 个字符。")
    .max(10, "用户名最多只能有 10 个字符。")
    .regex(/^[a-zA-Z0-9_]+$/, "用户名只能包含字母、数字和下划线。"),
});

export default function App() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      username: "",
    },
  });

  function onSubmit(data: z.infer<typeof formSchema>) {
    console.log(data);
  }

  return (
    <form id="form-rhf-input" onSubmit={form.handleSubmit(onSubmit)}>
      <FieldGroup>
        <Controller
          name="username"
          control={form.control}
          render={({ field, fieldState }) => (
            <Field data-invalid={fieldState.invalid}>
              <FieldLabel htmlFor="form-rhf-input-username">
                Username
              </FieldLabel>
              <Input
                {...field}
                id="form-rhf-input-username"
                aria-invalid={fieldState.invalid}
                placeholder="shadcn"
                autoComplete="username"
              />
              <FieldDescription>
                这是您的公开显示名称。长度必须在 3 到 10
                个字符之间。只能包含字母、数字和下划线。
              </FieldDescription>
              {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
            </Field>
          )}
        />
      </FieldGroup>

      <Field orientation="horizontal">
        <Button type="button" variant="outline" onClick={() => form.reset()}>
          重置
        </Button>
        <Button type="submit" form="form-rhf-input">
          保存
        </Button>
      </Field>
    </form>
  );
}
