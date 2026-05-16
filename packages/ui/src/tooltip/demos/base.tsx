import { Button, Tooltip, TooltipContent, TooltipTrigger } from "lynote-ui";

const App: React.FC = () => {
  return (
    <Tooltip>
      <TooltipTrigger
        render={<Button variant="outline">悬停查看提示</Button>}
      />
      <TooltipContent>
        <p>这是一个工具提示</p>
      </TooltipContent>
    </Tooltip>
  );
};

export default App;
