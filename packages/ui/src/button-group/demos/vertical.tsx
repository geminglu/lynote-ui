import {
  AlignCenterIcon,
  AlignLeftIcon,
  AlignRightIcon,
  BoldIcon,
  ItalicIcon,
} from "lucide-react";
import { Button, ButtonGroup, ButtonGroupSeparator } from "lynote-ui";

const App: React.FC = () => {
  return (
    <ButtonGroup orientation="vertical" aria-label="文本工具">
      <Button variant="outline" size="icon" aria-label="加粗">
        <BoldIcon />
      </Button>
      <Button variant="outline" size="icon" aria-label="斜体">
        <ItalicIcon />
      </Button>
      <ButtonGroupSeparator orientation="horizontal" />
      <Button variant="outline" size="icon" aria-label="左对齐">
        <AlignLeftIcon />
      </Button>
      <Button variant="outline" size="icon" aria-label="居中">
        <AlignCenterIcon />
      </Button>
      <Button variant="outline" size="icon" aria-label="右对齐">
        <AlignRightIcon />
      </Button>
    </ButtonGroup>
  );
};

export default App;
