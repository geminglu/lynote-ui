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
} from "../../field";
import { Input } from "../../input";

const formSchema = z.object({
  username: z
    .string()
    .min(1, "请输入用户名。")
    .min(3, "用户名至少需要 3 个字符。"),
  password: z.string().min(1, "请输入密码。").min(6, "密码至少需要 6 个字符。"),
  remember: z.boolean(),
});

export default function App() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      username: "",
      password: "",
      remember: true,
    },
  });

  function onSubmit(data: z.infer<typeof formSchema>) {
    console.log(data);
  }

  return (
    <Card className="w-full sm:max-w-sm">
      <CardHeader>
        <CardTitle>登录账户</CardTitle>
        <CardDescription>请输入您的账户信息以继续。</CardDescription>
      </CardHeader>
      <CardContent>
        <form id="form-rhf-login" onSubmit={form.handleSubmit(onSubmit)}>
          <FieldGroup>
            <Controller
              name="username"
              control={form.control}
              render={({ field, fieldState }) => (
                <Field data-invalid={fieldState.invalid}>
                  <FieldLabel htmlFor="form-rhf-login-username">
                    用户名
                  </FieldLabel>
                  <Input
                    {...field}
                    id="form-rhf-login-username"
                    aria-invalid={fieldState.invalid}
                    placeholder="请输入用户名"
                    autoComplete="username"
                  />
                  {fieldState.invalid && (
                    <FieldError errors={[fieldState.error]} />
                  )}
                </Field>
              )}
            />
            <Controller
              name="password"
              control={form.control}
              render={({ field, fieldState }) => (
                <Field data-invalid={fieldState.invalid}>
                  <FieldLabel htmlFor="form-rhf-login-password">
                    密码
                  </FieldLabel>
                  <Input
                    {...field}
                    id="form-rhf-login-password"
                    type="password"
                    aria-invalid={fieldState.invalid}
                    placeholder="请输入密码"
                    autoComplete="current-password"
                  />
                  {fieldState.invalid && (
                    <FieldError errors={[fieldState.error]} />
                  )}
                </Field>
              )}
            />
            <Controller
              name="remember"
              control={form.control}
              render={({ field }) => (
                <Field orientation="horizontal">
                  <Checkbox
                    id="form-rhf-login-remember"
                    name={field.name}
                    checked={field.value}
                    onCheckedChange={field.onChange}
                  />
                  <FieldLabel
                    htmlFor="form-rhf-login-remember"
                    className="font-normal"
                  >
                    记住我
                  </FieldLabel>
                </Field>
              )}
            />
            <FieldDescription>
              还没有账户？<a href="#">立即注册</a>
            </FieldDescription>
          </FieldGroup>
        </form>
      </CardContent>
      <CardFooter>
        <Field>
          <Button type="submit" form="form-rhf-login">
            登录
          </Button>
        </Field>
      </CardFooter>
    </Card>
  );
}
