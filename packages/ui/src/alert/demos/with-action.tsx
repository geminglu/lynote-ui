import { TriangleAlertIcon } from "lucide-react";

import {
  Alert,
  AlertAction,
  AlertDescription,
  AlertTitle,
} from "lynote-ui/alert";
import { Button } from "lynote-ui/button";

const App: React.FC = () => {
  return (
    <Alert variant="destructive" className="w-full max-w-md">
      <TriangleAlertIcon />
      <AlertTitle>账户即将到期</AlertTitle>
      <AlertDescription>
        你的订阅将在 3 天后过期,请尽快续费以避免服务中断。
      </AlertDescription>
      <AlertAction>
        <Button variant="outline" size="sm">
          续费
        </Button>
      </AlertAction>
    </Alert>
  );
};

export default App;
