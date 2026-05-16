"use client";

import { useState } from "react";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "lynote-ui/card";
import {
  Field,
  FieldContent,
  FieldDescription,
  FieldGroup,
  FieldLabel,
} from "lynote-ui/field";
import { Switch } from "lynote-ui/switch";

const App: React.FC = () => {
  const [settings, setSettings] = useState({
    marketing: true,
    digest: false,
    security: true,
  });

  const update = (key: keyof typeof settings) => (next: boolean) =>
    setSettings((s) => ({ ...s, [key]: next }));

  return (
    <Card className="w-full max-w-md">
      <CardHeader>
        <CardTitle>邮件通知</CardTitle>
        <CardDescription>设置你希望接收哪些类型的邮件。</CardDescription>
      </CardHeader>
      <CardContent>
        <FieldGroup>
          <Field orientation="horizontal">
            <FieldContent>
              <FieldLabel htmlFor="settings-marketing">营销邮件</FieldLabel>
              <FieldDescription>
                接收关于新产品、新功能等营销信息。
              </FieldDescription>
            </FieldContent>
            <Switch
              id="settings-marketing"
              checked={settings.marketing}
              onCheckedChange={update("marketing")}
            />
          </Field>

          <Field orientation="horizontal">
            <FieldContent>
              <FieldLabel htmlFor="settings-digest">每周摘要</FieldLabel>
              <FieldDescription>
                每周一上午发送本周内重要更新摘要。
              </FieldDescription>
            </FieldContent>
            <Switch
              id="settings-digest"
              checked={settings.digest}
              onCheckedChange={update("digest")}
            />
          </Field>

          <Field orientation="horizontal">
            <FieldContent>
              <FieldLabel htmlFor="settings-security">安全提醒</FieldLabel>
              <FieldDescription>
                登录异常、密码修改等账户安全事件通知（无法关闭核心安全提醒）。
              </FieldDescription>
            </FieldContent>
            <Switch
              id="settings-security"
              checked={settings.security}
              onCheckedChange={update("security")}
            />
          </Field>
        </FieldGroup>
      </CardContent>
    </Card>
  );
};

export default App;
