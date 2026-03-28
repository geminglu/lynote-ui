import { Alert, AlertDescription, AlertTitle } from "lynote-ui";

const App: React.FC = () => {
  return (
    <div className="flex flex-col gap-4">
      <Alert>
        <AlertTitle>提示标题</AlertTitle>
        <AlertDescription>
          这是一条提示信息，用于向用户展示重要的信息。
        </AlertDescription>
      </Alert>
      <Alert>
        <AlertDescription>只有描述内容的警告提示。</AlertDescription>
      </Alert>
    </div>
  );
};

export default App;
