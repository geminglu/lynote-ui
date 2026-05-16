import {
  Field,
  FieldDescription,
  FieldError,
  FieldGroup,
  FieldLabel,
} from "lynote-ui/field";
import { Textarea } from "lynote-ui/textarea";

const App: React.FC = () => {
  return (
    <form className="w-full max-w-md">
      <FieldGroup>
        <Field>
          <FieldLabel htmlFor="textarea-form-feedback">反馈内容</FieldLabel>
          <Textarea
            id="textarea-form-feedback"
            placeholder="详细描述你遇到的问题..."
            rows={4}
          />
          <FieldDescription>
            请尽量提供具体的复现步骤与环境信息。
          </FieldDescription>
        </Field>
        <Field data-invalid>
          <FieldLabel htmlFor="textarea-form-required">摘要</FieldLabel>
          <Textarea
            id="textarea-form-required"
            aria-invalid
            defaultValue=""
            placeholder="必填"
          />
          <FieldError errors={[{ message: "摘要不能为空" }]} />
        </Field>
      </FieldGroup>
    </form>
  );
};

export default App;
