import { Checkbox } from "lynote-ui/checkbox";
import {
  Field,
  FieldContent,
  FieldDescription,
  FieldLabel,
  FieldTitle,
} from "lynote-ui/field";

const App: React.FC = () => {
  return (
    <div className="grid w-full max-w-md grid-cols-2 gap-3">
      <FieldLabel htmlFor="plan-pro">
        <Field>
          <FieldTitle>专业版</FieldTitle>
          <FieldDescription>
            包含全部专业功能，10GB 存储空间，邮箱支持。
          </FieldDescription>
          <FieldContent>
            <Checkbox
              id="plan-pro"
              defaultChecked
              className="self-end"
              aria-label="选择专业版"
            />
          </FieldContent>
        </Field>
      </FieldLabel>

      <FieldLabel htmlFor="plan-team">
        <Field>
          <FieldTitle>团队版</FieldTitle>
          <FieldDescription>
            包含专业版全部功能，并支持团队协作与 SSO。
          </FieldDescription>
          <FieldContent>
            <Checkbox
              id="plan-team"
              className="self-end"
              aria-label="选择团队版"
            />
          </FieldContent>
        </Field>
      </FieldLabel>
    </div>
  );
};

export default App;
