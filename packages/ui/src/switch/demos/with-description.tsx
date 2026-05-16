import {
  Field,
  FieldContent,
  FieldDescription,
  FieldLabel,
} from "lynote-ui/field";
import { Switch } from "lynote-ui/switch";

const App: React.FC = () => {
  return (
    <div className="flex max-w-md flex-col gap-4">
      <Field orientation="horizontal">
        <FieldContent>
          <FieldLabel htmlFor="sw-2fa">两步验证</FieldLabel>
          <FieldDescription>
            登录时需要额外输入验证码，可显著提升账户安全。
          </FieldDescription>
        </FieldContent>
        <Switch id="sw-2fa" defaultChecked />
      </Field>

      <Field orientation="horizontal">
        <FieldContent>
          <FieldLabel htmlFor="sw-notification">桌面通知</FieldLabel>
          <FieldDescription>
            有人评论或提及你时通过浏览器通知提醒。
          </FieldDescription>
        </FieldContent>
        <Switch id="sw-notification" />
      </Field>
    </div>
  );
};

export default App;
