import { Checkbox } from "lynote-ui/checkbox";
import {
  Field,
  FieldContent,
  FieldDescription,
  FieldLabel,
} from "lynote-ui/field";

const App: React.FC = () => {
  return (
    <div className="flex max-w-md flex-col gap-4">
      <Field orientation="horizontal">
        <Checkbox id="cb-marketing" defaultChecked />
        <FieldContent>
          <FieldLabel htmlFor="cb-marketing">订阅营销邮件</FieldLabel>
          <FieldDescription>
            我们偶尔会向你发送产品更新和优惠信息，可随时退订。
          </FieldDescription>
        </FieldContent>
      </Field>

      <Field orientation="horizontal">
        <Checkbox id="cb-terms" />
        <FieldContent>
          <FieldLabel htmlFor="cb-terms">同意服务条款</FieldLabel>
          <FieldDescription>
            勾选即表示你已阅读并同意 <a href="#">用户协议</a> 与{" "}
            <a href="#">隐私政策</a>。
          </FieldDescription>
        </FieldContent>
      </Field>
    </div>
  );
};

export default App;
