import { Field, FieldDescription, FieldLabel } from "lynote-ui/field";
import { Input } from "lynote-ui/input";

const App: React.FC = () => {
  return (
    <div className="w-full max-w-sm">
      <Field>
        <FieldLabel htmlFor="input-file-picture">头像</FieldLabel>
        <Input id="input-file-picture" type="file" accept="image/*" />
        <FieldDescription>支持 JPG / PNG / SVG，最大 2MB。</FieldDescription>
      </Field>
    </div>
  );
};

export default App;
