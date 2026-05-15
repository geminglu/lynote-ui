"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { Controller, useForm } from "react-hook-form";
import * as z from "zod";

import { Button } from "../..";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../../card";
import { Checkbox } from "../../checkbox";
import {
  Field,
  FieldDescription,
  FieldError,
  FieldGroup,
  FieldLabel,
  FieldLegend,
  FieldSeparator,
  FieldSet,
} from "../../field";

const tasks = [
  {
    id: "push",
    label: "推送通知",
  },
  {
    id: "email",
    label: "邮件通知",
  },
] as const;

const formSchema = z.object({
  responses: z.boolean(),
  tasks: z
    .array(z.string())
    .min(1, "请至少选择一个通知类型。")
    .refine(
      (value) => value.every((task) => tasks.some((t) => t.id === task)),
      {
        message: "无效的通知类型选择。",
      },
    ),
});

export default function App() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      responses: true,
      tasks: [],
    },
  });

  function onSubmit(data: z.infer<typeof formSchema>) {
    console.log(data);
  }

  return (
    <Card className="w-full sm:max-w-md">
      <CardHeader>
        <CardTitle>通知</CardTitle>
        <CardDescription>管理您的通知偏好。</CardDescription>
      </CardHeader>
      <CardContent>
        <form id="form-rhf-checkbox" onSubmit={form.handleSubmit(onSubmit)}>
          <FieldGroup>
            <Controller
              name="responses"
              control={form.control}
              render={({ field, fieldState }) => (
                <div>
                  <FieldSet data-invalid={fieldState.invalid}>
                    <FieldLegend variant="label">响应</FieldLegend>
                    <FieldDescription>
                      获取有关需要时间才能完成的事务的通知，例如研究或图像生成。
                    </FieldDescription>
                    <FieldGroup data-slot="checkbox-group">
                      <Field orientation="horizontal">
                        <Checkbox
                          id="form-rhf-checkbox-responses"
                          name={field.name}
                          checked={field.value}
                          onCheckedChange={field.onChange}
                          disabled
                        />
                        <FieldLabel
                          htmlFor="form-rhf-checkbox-responses"
                          className="font-normal"
                        >
                          推送通知
                        </FieldLabel>
                      </Field>
                    </FieldGroup>
                  </FieldSet>
                  {fieldState.invalid && (
                    <FieldError errors={[fieldState.error]} />
                  )}
                </div>
              )}
            />
            <FieldSeparator />
            <Controller
              name="tasks"
              control={form.control}
              render={({ field, fieldState }) => (
                <FieldGroup>
                  <FieldSet data-invalid={fieldState.invalid}>
                    <FieldLegend variant="label">任务</FieldLegend>
                    <FieldDescription>
                      当您创建的任务有更新时，获取通知。
                    </FieldDescription>
                    <FieldGroup data-slot="checkbox-group">
                      {tasks.map((task) => (
                        <Field
                          key={task.id}
                          orientation="horizontal"
                          data-invalid={fieldState.invalid}
                        >
                          <Checkbox
                            id={`form-rhf-checkbox-${task.id}`}
                            name={field.name}
                            aria-invalid={fieldState.invalid}
                            checked={field.value.includes(task.id)}
                            onCheckedChange={(checked) => {
                              const newValue = checked
                                ? [...field.value, task.id]
                                : field.value.filter(
                                    (value) => value !== task.id,
                                  );
                              field.onChange(newValue);
                            }}
                          />
                          <FieldLabel
                            htmlFor={`form-rhf-checkbox-${task.id}`}
                            className="font-normal"
                          >
                            {task.label}
                          </FieldLabel>
                        </Field>
                      ))}
                    </FieldGroup>
                  </FieldSet>
                  {fieldState.invalid && (
                    <FieldError errors={[fieldState.error]} />
                  )}
                </FieldGroup>
              )}
            />
          </FieldGroup>
        </form>
      </CardContent>
      <CardFooter>
        <Field orientation="horizontal">
          <Button type="button" variant="outline" onClick={() => form.reset()}>
            重置
          </Button>
          <Button type="submit" form="form-rhf-checkbox">
            保存
          </Button>
        </Field>
      </CardFooter>
    </Card>
  );
}
