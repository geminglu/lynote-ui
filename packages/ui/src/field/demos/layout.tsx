"use client";

import { useState } from "react";

import { Button } from "lynote-ui/button";
import { ButtonGroup } from "lynote-ui/button-group";
import { Input } from "lynote-ui/input";
import { Field, FieldDescription, FieldGroup, FieldLabel } from "../../field";

type Orientation = "vertical" | "horizontal" | "responsive";

export default function App() {
  const [orientation, setOrientation] = useState<Orientation>("vertical");

  return (
    <div className="flex w-full flex-col gap-6">
      <Field orientation="horizontal">
        <FieldLabel className="font-normal">布局方向：</FieldLabel>
        <ButtonGroup>
          {["vertical", "horizontal", "responsive"].map((value) => (
            <Button
              key={value}
              variant={value === orientation ? "default" : "outline"}
              value={value}
              onClick={() => setOrientation(value as Orientation)}
            >
              {value}
            </Button>
          ))}
        </ButtonGroup>
      </Field>

      <form>
        <FieldGroup>
          <Field orientation={orientation}>
            <FieldLabel htmlFor="form-rhf-layout-username">用户名</FieldLabel>
            <Input
              id="form-rhf-layout-username"
              placeholder="请输入用户名"
              autoComplete="username"
            />
          </Field>
          <Field orientation={orientation}>
            <FieldLabel htmlFor="form-rhf-layout-email">邮箱</FieldLabel>
            <Input
              id="form-rhf-layout-email"
              type="email"
              placeholder="请输入邮箱"
              autoComplete="email"
            />
          </Field>
          <Field orientation={orientation}>
            <FieldLabel htmlFor="form-rhf-layout-phone">手机号</FieldLabel>
            <Input
              id="form-rhf-layout-phone"
              type="tel"
              placeholder="请输入手机号"
              autoComplete="tel"
            />
          </Field>
          <FieldDescription>
            切换上方布局方向，预览同一组字段在不同方向下的展示效果。 responsive
            会根据容器宽度自动切换为水平布局。
          </FieldDescription>
          <Field orientation="horizontal">
            <Button type="button" variant="outline">
              重置
            </Button>
            <Button type="submit">提交</Button>
          </Field>
        </FieldGroup>
      </form>
    </div>
  );
}
