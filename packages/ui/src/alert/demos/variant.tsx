import { Alert, AlertDescription, AlertTitle } from "lynote-ui";

const App: React.FC = () => {
  return (
    <div className="flex flex-col gap-4">
      <Alert variant="default">
        <AlertTitle>默认样式</AlertTitle>
        <AlertDescription>这是默认样式的警告提示。</AlertDescription>
      </Alert>
      <Alert variant="destructive">
        <AlertTitle>错误提示</AlertTitle>
        <AlertDescription>
          这是错误样式的警告提示，用于显示错误或危险信息。
        </AlertDescription>
      </Alert>
    </div>
  );
};

export default App;
