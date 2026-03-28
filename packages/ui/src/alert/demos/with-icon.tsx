import { InfoIcon } from "lucide-react";
import { Alert, AlertDescription, AlertTitle } from "lynote-ui";

const App: React.FC = () => {
  return (
    <div className="flex flex-col gap-4">
      <Alert>
        <InfoIcon />
        <AlertTitle>带图标的提示</AlertTitle>
        <AlertDescription>
          可以在警告提示中添加图标来增强视觉效果。
        </AlertDescription>
      </Alert>
      <Alert variant="destructive">
        <InfoIcon />
        <AlertTitle>带图标的错误提示</AlertTitle>
        <AlertDescription>错误提示也可以添加图标。</AlertDescription>
      </Alert>
    </div>
  );
};

export default App;
