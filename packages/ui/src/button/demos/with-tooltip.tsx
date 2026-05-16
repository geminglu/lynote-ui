import { CopyIcon, SettingsIcon, ShareIcon } from "lucide-react";
import { Button } from "lynote-ui/button";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "lynote-ui/tooltip";

const App: React.FC = () => {
  return (
    <TooltipProvider>
      <div className="flex flex-wrap items-center gap-2">
        <Tooltip>
          <TooltipTrigger
            render={
              <Button variant="outline" size="icon" aria-label="复制">
                <CopyIcon />
              </Button>
            }
          />
          <TooltipContent>复制到剪贴板</TooltipContent>
        </Tooltip>

        <Tooltip>
          <TooltipTrigger
            render={
              <Button variant="outline" size="icon" aria-label="分享">
                <ShareIcon />
              </Button>
            }
          />
          <TooltipContent>分享当前页面</TooltipContent>
        </Tooltip>

        <Tooltip>
          <TooltipTrigger
            render={
              <Button variant="ghost" size="icon" aria-label="设置">
                <SettingsIcon />
              </Button>
            }
          />
          <TooltipContent side="bottom">设置</TooltipContent>
        </Tooltip>
      </div>
    </TooltipProvider>
  );
};

export default App;
