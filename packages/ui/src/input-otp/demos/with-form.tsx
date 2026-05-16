"use client";

import { useState } from "react";

import { Field, FieldDescription, FieldLabel } from "lynote-ui/field";
import {
  InputOTP,
  InputOTPGroup,
  InputOTPSeparator,
  InputOTPSlot,
} from "lynote-ui/input-otp";

const App: React.FC = () => {
  const [value, setValue] = useState("");

  return (
    <Field>
      <FieldLabel htmlFor="otp-input">输入验证码</FieldLabel>
      <InputOTP id="otp-input" maxLength={6} value={value} onChange={setValue}>
        <InputOTPGroup>
          <InputOTPSlot index={0} />
          <InputOTPSlot index={1} />
          <InputOTPSlot index={2} />
        </InputOTPGroup>
        <InputOTPSeparator />
        <InputOTPGroup>
          <InputOTPSlot index={3} />
          <InputOTPSlot index={4} />
          <InputOTPSlot index={5} />
        </InputOTPGroup>
      </InputOTP>
      <FieldDescription>
        请输入发送到手机的 6 位验证码 (当前: {value || "未输入"})
      </FieldDescription>
    </Field>
  );
};

export default App;
