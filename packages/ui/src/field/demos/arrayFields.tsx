"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { XIcon } from "lucide-react";
import { Controller, useFieldArray, useForm } from "react-hook-form";
import * as z from "zod";

import { Button } from "lynote-ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "lynote-ui/card";
import {
  Field,
  FieldContent,
  FieldDescription,
  FieldError,
  FieldGroup,
  FieldLegend,
  FieldSet,
} from "lynote-ui/field";
import {
  InputGroup,
  InputGroupAddon,
  InputGroupButton,
  InputGroupInput,
} from "lynote-ui/input-group";

const formSchema = z.object({
  emails: z
    .array(
      z.object({
        address: z.string().email("请输入有效的电子邮件地址。"),
      }),
    )
    .min(1, "请至少输入一个电子邮件地址。")
    .max(5, "您最多可以输入 5 个电子邮件地址。"),
});

export default function App() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      emails: [{ address: "" }, { address: "" }],
    },
  });

  const { fields, append, remove } = useFieldArray({
    control: form.control,
    name: "emails",
  });

  function onSubmit(data: z.infer<typeof formSchema>) {
    console.log(data);
  }

  return (
    <Card className="w-full sm:max-w-md">
      <CardHeader className="border-b">
        <CardTitle>联系电子邮件</CardTitle>
        <CardDescription>管理您的联系电子邮件地址。</CardDescription>
      </CardHeader>
      <CardContent>
        <form id="form-rhf-array" onSubmit={form.handleSubmit(onSubmit)}>
          <FieldSet className="gap-4">
            <FieldLegend variant="label">电子邮件地址</FieldLegend>
            <FieldDescription>
              添加最多 5 个电子邮件地址，以便我们可以与您联系。
            </FieldDescription>
            <FieldGroup className="gap-4">
              {fields.map((field, index) => (
                <Controller
                  key={field.id}
                  name={`emails.${index}.address`}
                  control={form.control}
                  render={({ field: controllerField, fieldState }) => (
                    <Field
                      orientation="horizontal"
                      data-invalid={fieldState.invalid}
                    >
                      <FieldContent>
                        <InputGroup>
                          <InputGroupInput
                            {...controllerField}
                            id={`form-rhf-array-email-${index}`}
                            aria-invalid={fieldState.invalid}
                            placeholder="example@example.com"
                            type="email"
                            autoComplete="email"
                          />
                          {fields.length > 1 && (
                            <InputGroupAddon align="inline-end">
                              <InputGroupButton
                                type="button"
                                variant="ghost"
                                size="xs"
                                icon
                                onClick={() => remove(index)}
                                aria-label={`删除电子邮件 ${index + 1}`}
                              >
                                <XIcon />
                              </InputGroupButton>
                            </InputGroupAddon>
                          )}
                        </InputGroup>
                        {fieldState.invalid && (
                          <FieldError errors={[fieldState.error]} />
                        )}
                      </FieldContent>
                    </Field>
                  )}
                />
              ))}
              <Button
                type="button"
                variant="outline"
                size="sm"
                onClick={() => append({ address: "" })}
                disabled={fields.length >= 5}
              >
                添加电子邮件地址
              </Button>
            </FieldGroup>
            {form.formState.errors.emails?.root && (
              <FieldError errors={[form.formState.errors.emails.root]} />
            )}
          </FieldSet>
        </form>
      </CardContent>
      <CardFooter className="border-t">
        <Field orientation="horizontal">
          <Button type="button" variant="outline" onClick={() => form.reset()}>
            重置
          </Button>
          <Button type="submit" form="form-rhf-array">
            保存
          </Button>
        </Field>
      </CardFooter>
    </Card>
  );
}
