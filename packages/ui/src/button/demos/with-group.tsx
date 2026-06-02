import {
  AlignCenterIcon,
  AlignLeftIcon,
  AlignRightIcon,
  ChevronLeftIcon,
  ChevronRightIcon,
} from "lucide-react";
import { Button } from "lynote-ui/button";
import { ButtonGroup, ButtonGroupSeparator } from "lynote-ui/button-group";

const App: React.FC = () => {
  return (
    <div className="flex flex-col gap-4">
      <ButtonGroup>
        <Button variant="outline" icon aria-label="左对齐">
          <AlignLeftIcon />
        </Button>
        <Button variant="outline" icon aria-label="居中对齐">
          <AlignCenterIcon />
        </Button>
        <Button variant="outline" icon aria-label="右对齐">
          <AlignRightIcon />
        </Button>
      </ButtonGroup>

      <ButtonGroup>
        <Button variant="outline">
          <ChevronLeftIcon data-icon="inline-start" />
          上一页
        </Button>
        <Button variant="outline">
          下一页
          <ChevronRightIcon data-icon="inline-end" />
        </Button>
      </ButtonGroup>

      <ButtonGroup>
        <Button variant="outline">复制</Button>
        <Button variant="outline">粘贴</Button>
        <ButtonGroupSeparator />
        <Button variant="outline">撤销</Button>
        <Button variant="outline">重做</Button>
      </ButtonGroup>
    </div>
  );
};

export default App;
