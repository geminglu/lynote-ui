import { SearchIcon } from "lucide-react";
import {
  Button,
  InputGroup,
  InputGroupAddon,
  InputGroupButton,
  InputGroupInput,
} from "lynote-ui";

const App: React.FC = () => {
  return (
    <div className="space-y-4">
      <InputGroup>
        <InputGroupAddon>
          <SearchIcon />
        </InputGroupAddon>
        <InputGroupInput placeholder="搜索..." />
      </InputGroup>
      <InputGroup>
        <InputGroupInput placeholder="输入金额" />
        <InputGroupAddon align="inline-end">元</InputGroupAddon>
      </InputGroup>
      <InputGroup>
        <InputGroupButton>
          <Button variant="ghost" size="xs">
            搜索
          </Button>
        </InputGroupButton>
        <InputGroupInput placeholder="搜索..." />
      </InputGroup>
    </div>
  );
};

export default App;
