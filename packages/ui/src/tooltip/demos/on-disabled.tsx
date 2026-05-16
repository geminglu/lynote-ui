import { Button } from "lynote-ui/button";
import { Tooltip, TooltipContent, TooltipTrigger } from "lynote-ui/tooltip";

const App: React.FC = () => {
  return (
    <div className="flex gap-3">
      <Tooltip>
        <TooltipTrigger
          render={
            <span tabIndex={0} className="inline-flex">
              <Button variant="outline" disabled>
                禁用按钮
              </Button>
            </span>
          }
        />
        <TooltipContent>升级后即可使用此功能</TooltipContent>
      </Tooltip>
    </div>
  );
};

export default App;
