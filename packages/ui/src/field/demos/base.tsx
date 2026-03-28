import {
  Field,
  FieldContent,
  FieldDescription,
  FieldLabel,
  Input,
} from "lynote-ui";

const App: React.FC = () => {
  return (
    <div className="space-y-4">
      <Field>
        <FieldLabel>用户名</FieldLabel>
        <FieldContent>
          <Input placeholder="请输入用户名" />
          <FieldDescription>这是你的公开显示名称。</FieldDescription>
        </FieldContent>
      </Field>
      <Field>
        <FieldLabel>邮箱</FieldLabel>
        <FieldContent>
          <Input type="email" placeholder="请输入邮箱" />
        </FieldContent>
      </Field>
    </div>
  );
};

export default App;
