import {
  ChevronDownIcon,
  CopyIcon,
  DownloadIcon,
  ShareIcon,
} from "lucide-react";
import {
  Button,
  ButtonGroup,
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "lynote-ui";

const App: React.FC = () => {
  return (
    <ButtonGroup>
      <Button>发布</Button>
      <DropdownMenu>
        <DropdownMenuTrigger
          render={
            <Button size="icon" aria-label="更多发布选项">
              <ChevronDownIcon />
            </Button>
          }
        />
        <DropdownMenuContent align="end">
          <DropdownMenuItem>
            <DownloadIcon />
            导出为 PDF
          </DropdownMenuItem>
          <DropdownMenuItem>
            <CopyIcon />
            复制链接
          </DropdownMenuItem>
          <DropdownMenuItem>
            <ShareIcon />
            分享到团队
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </ButtonGroup>
  );
};

export default App;
