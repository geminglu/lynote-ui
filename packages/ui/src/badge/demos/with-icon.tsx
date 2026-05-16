import { CheckIcon, ClockIcon, TriangleAlertIcon, XIcon } from "lucide-react";
import { Badge } from "lynote-ui/badge";

const App: React.FC = () => {
  return (
    <div className="flex flex-wrap items-center gap-2">
      <Badge>
        <CheckIcon data-icon="inline-start" />
        已完成
      </Badge>
      <Badge variant="secondary">
        <ClockIcon data-icon="inline-start" />
        进行中
      </Badge>
      <Badge variant="destructive">
        <XIcon data-icon="inline-start" />
        失败
      </Badge>
      <Badge variant="outline">
        <TriangleAlertIcon data-icon="inline-start" />
        待审核
      </Badge>
    </div>
  );
};

export default App;
