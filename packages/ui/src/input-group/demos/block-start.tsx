import { CopyIcon, FileCodeIcon } from "lucide-react";

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
        <FieldLabel htmlFor="block-start-input">输入框</FieldLabel>
        <InputGroup className="h-auto">
          <InputGroupInput id="block-start-input" placeholder="输入你的名字" />
          <InputGroupAddon align="block-start">
            <InputGroupText>全名</InputGroupText>
          </InputGroupAddon>
        </InputGroup>
        <FieldDescription>顶部输入框。</FieldDescription>
      </Field>
      <Field>
        <FieldLabel htmlFor="block-start-textarea">文本框</FieldLabel>
        <InputGroup>
          <InputGroupTextarea
            id="block-start-textarea"
            placeholder="console.log('Hello, world!');"
            className="font-mono text-sm"
          />
          <InputGroupAddon align="block-start">
            <FileCodeIcon className="text-muted-foreground" />
            <InputGroupText className="font-mono">script.js</InputGroupText>
            <InputGroupButton size="icon-xs" className="ml-auto">
              <CopyIcon />
              <span className="sr-only">复制</span>
            </InputGroupButton>
          </InputGroupAddon>
        </InputGroup>
        <FieldDescription>顶部文本框。</FieldDescription>
      </Field>
    </FieldGroup>
  );
}
