"use client";

import { useState } from "react";

import { Button } from "../..";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../../card";
import {
  Field,
  FieldDescription,
  FieldGroup,
  FieldLabel,
  FieldLegend,
  FieldSet,
} from "../../field";
import { Input } from "../../input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../../select";
import { Switch } from "../../switch";

export default function App() {
  const [disabled, setDisabled] = useState(true);

  return (
    <Card className="w-full sm:max-w-md">
      <CardHeader>
        <CardTitle>个人资料</CardTitle>
        <CardDescription>
          通过 FieldSet 的 disabled 属性可以一次性禁用整组字段。
        </CardDescription>
      </CardHeader>
      <CardContent>
        <FieldGroup>
          <Field orientation="horizontal">
            <FieldLabel
              htmlFor="form-rhf-disabled-toggle"
              className="font-normal"
            >
              禁用整个表单
            </FieldLabel>
            <Switch
              id="form-rhf-disabled-toggle"
              checked={disabled}
              onCheckedChange={setDisabled}
            />
          </Field>
          <form id="form-rhf-disabled">
            <FieldSet disabled={disabled}>
              <FieldLegend variant="label">基本信息</FieldLegend>
              <FieldDescription>
                禁用状态下所有字段都不可编辑，包括按钮也将自动禁用。
              </FieldDescription>
              <FieldGroup>
                <Field>
                  <FieldLabel htmlFor="form-rhf-disabled-name">姓名</FieldLabel>
                  <Input
                    id="form-rhf-disabled-name"
                    defaultValue="张三"
                    placeholder="请输入姓名"
                  />
                </Field>
                <Field>
                  <FieldLabel htmlFor="form-rhf-disabled-email">
                    邮箱
                  </FieldLabel>
                  <Input
                    id="form-rhf-disabled-email"
                    type="email"
                    defaultValue="zhangsan@example.com"
                    placeholder="请输入邮箱"
                  />
                </Field>
                <Field>
                  <FieldLabel htmlFor="form-rhf-disabled-role">角色</FieldLabel>
                  <Select defaultValue="member">
                    <SelectTrigger id="form-rhf-disabled-role">
                      <SelectValue placeholder="请选择角色" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="admin">管理员</SelectItem>
                      <SelectItem value="member">普通成员</SelectItem>
                      <SelectItem value="guest">访客</SelectItem>
                    </SelectContent>
                  </Select>
                </Field>
              </FieldGroup>
            </FieldSet>
          </form>
        </FieldGroup>
      </CardContent>
      <CardFooter>
        <Field orientation="horizontal">
          <Button type="button" variant="outline" disabled={disabled}>
            取消
          </Button>
          <Button type="submit" form="form-rhf-disabled" disabled={disabled}>
            保存
          </Button>
        </Field>
      </CardFooter>
    </Card>
  );
}
