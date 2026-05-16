import {
  Field,
  FieldDescription,
  FieldGroup,
  FieldLabel,
} from "lynote-ui/field";
import {
  InputGroup,
  InputGroupAddon,
  InputGroupButton,
  InputGroupInput,
  InputGroupText,
  InputGroupTextarea,
} from "lynote-ui/input-group";

export default function App() {
  return (
    <FieldGroup className="max-w-sm">
      <Field>
        <FieldLabel htmlFor="block-end-input">输入框</FieldLabel>
        <InputGroup className="h-auto">
          <InputGroupInput id="block-end-input" placeholder="输入金额" />
          <InputGroupAddon align="block-end">
            <InputGroupText>USD</InputGroupText>
          </InputGroupAddon>
        </InputGroup>
        <FieldDescription>底部输入框。</FieldDescription>
      </Field>
      <Field>
        <FieldLabel htmlFor="block-end-textarea">文本框</FieldLabel>
        <InputGroup>
          <InputGroupTextarea
            id="block-end-textarea"
            placeholder="输入评论..."
          />
          <InputGroupAddon align="block-end">
            <InputGroupText>0/280</InputGroupText>
            <InputGroupButton variant="default" size="sm" className="ml-auto">
              发布
            </InputGroupButton>
          </InputGroupAddon>
        </InputGroup>
        <FieldDescription>底部文本框。</FieldDescription>
      </Field>
    </FieldGroup>
  );
}
