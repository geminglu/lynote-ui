import { BellIcon, CheckIcon } from "lucide-react";

import { Button } from "lynote-ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "lynote-ui/card";
import { Switch } from "lynote-ui/switch";

const notifications = [
  {
    title: "你的密码已 30 天未更新",
    description: "建议立即修改密码以提升账户安全。",
  },
  {
    title: "新的协作邀请",
    description: "Alice 邀请你加入 “Design System” 项目。",
  },
];

const App: React.FC = () => {
  return (
    <Card className="w-full max-w-sm">
      <CardHeader>
        <CardTitle>通知</CardTitle>
        <CardDescription>
          你有 {notifications.length} 条未读通知。
        </CardDescription>
      </CardHeader>
      <CardContent className="flex flex-col gap-4">
        <div className="flex items-center gap-3 rounded-lg border p-3">
          <BellIcon className="text-muted-foreground size-4" />
          <div className="flex-1 text-sm">推送通知</div>
          <Switch defaultChecked />
        </div>

        <div className="flex flex-col gap-3">
          {notifications.map((n, i) => (
            <div key={i} className="flex items-start gap-3">
              <span className="bg-primary mt-1 size-2 shrink-0 rounded-full" />
              <div className="text-sm">
                <div className="font-medium">{n.title}</div>
                <div className="text-muted-foreground">{n.description}</div>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
      <CardFooter>
        <Button className="w-full">
          <CheckIcon data-icon="inline-start" />
          全部标为已读
        </Button>
      </CardFooter>
    </Card>
  );
};

export default App;
