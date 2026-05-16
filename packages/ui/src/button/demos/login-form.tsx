"use client";

import { GithubIcon, LogInIcon } from "lucide-react";
import { useState } from "react";

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
  FieldDescription,
  FieldGroup,
  FieldLabel,
  FieldSeparator,
} from "lynote-ui/field";
import { Input } from "lynote-ui/input";
import { Spinner } from "lynote-ui/spinner";

const App: React.FC = () => {
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => setLoading(false), 1500);
  };

  return (
    <Card className="w-full sm:max-w-sm">
      <CardHeader>
        <CardTitle>登录账户</CardTitle>
        <CardDescription>请输入邮箱与密码登录系统。</CardDescription>
      </CardHeader>
      <CardContent>
        <form id="form-button-login" onSubmit={handleSubmit}>
          <FieldGroup>
            <Field>
              <FieldLabel htmlFor="form-button-login-email">邮箱</FieldLabel>
              <Input
                id="form-button-login-email"
                type="email"
                placeholder="you@example.com"
                autoComplete="email"
                required
              />
            </Field>
            <Field>
              <FieldLabel htmlFor="form-button-login-password">密码</FieldLabel>
              <Input
                id="form-button-login-password"
                type="password"
                placeholder="••••••••"
                autoComplete="current-password"
                required
              />
              <FieldDescription>
                <a href="#">忘记密码？</a>
              </FieldDescription>
            </Field>
          </FieldGroup>
        </form>
      </CardContent>
      <CardFooter className="flex-col gap-2">
        <Field>
          <Button
            type="submit"
            form="form-button-login"
            disabled={loading}
            className="w-full"
          >
            {loading ? (
              <Spinner data-icon="inline-start" />
            ) : (
              <LogInIcon data-icon="inline-start" />
            )}
            {loading ? "登录中..." : "登录"}
          </Button>
        </Field>
        <FieldSeparator>或</FieldSeparator>
        <Field>
          <Button variant="outline" type="button" className="w-full">
            <GithubIcon data-icon="inline-start" />
            使用 GitHub 登录
          </Button>
        </Field>
        <Field>
          <Button variant="link" type="button" className="mx-auto">
            还没有账户？立即注册
          </Button>
        </Field>
      </CardFooter>
    </Card>
  );
};

export default App;
