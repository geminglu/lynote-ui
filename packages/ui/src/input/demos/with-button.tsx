"use client";

import { EyeIcon, EyeOffIcon, SearchIcon } from "lucide-react";
import { useState } from "react";

import {
  InputGroup,
  InputGroupAddon,
  InputGroupButton,
  InputGroupInput,
} from "lynote-ui/input-group";

const App: React.FC = () => {
  const [visible, setVisible] = useState(false);

  return (
    <div className="flex w-full max-w-sm flex-col gap-4">
      <InputGroup>
        <InputGroupAddon>
          <SearchIcon />
        </InputGroupAddon>
        <InputGroupInput placeholder="搜索..." />
        <InputGroupAddon align="inline-end">
          <InputGroupButton size="icon-sm">⌘K</InputGroupButton>
        </InputGroupAddon>
      </InputGroup>

      <InputGroup>
        <InputGroupInput
          type={visible ? "text" : "password"}
          placeholder="请输入密码"
        />
        <InputGroupAddon align="inline-end">
          <InputGroupButton
            size="icon-sm"
            aria-label={visible ? "隐藏密码" : "显示密码"}
            onClick={() => setVisible((v) => !v)}
          >
            {visible ? <EyeOffIcon /> : <EyeIcon />}
          </InputGroupButton>
        </InputGroupAddon>
      </InputGroup>
    </div>
  );
};

export default App;
