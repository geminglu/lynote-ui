import {
  Field,
  FieldDescription,
  FieldError,
  FieldGroup,
  FieldLabel,
} from "lynote-ui/field";
import { Input } from "lynote-ui/input";

const App: React.FC = () => {
  return (
    <form className="w-full max-w-sm">
      <FieldGroup>
        <Field>
          <FieldLabel htmlFor="input-form-email">邮箱</FieldLabel>
          <Input
            id="input-form-email"
            type="email"
            placeholder="you@example.com"
            autoComplete="email"
            required
          />
          <FieldDescription>我们不会泄露你的邮箱地址。</FieldDescription>
        </Field>

        <Field data-invalid>
          <FieldLabel htmlFor="input-form-name">用户名</FieldLabel>
          <Input
            id="input-form-name"
            placeholder="请输入用户名"
            aria-invalid
            defaultValue="ab"
          />
          <FieldError errors={[{ message: "用户名至少需要 3 个字符" }]} />
        </Field>
      </FieldGroup>
    </form>
  );
};

export default App;
