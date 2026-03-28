import { MoreHorizontalIcon } from "lucide-react";
import {
  Button,
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "lynote-ui";

const App: React.FC = () => {
  return (
    <Card className="w-[350px]">
      <CardHeader>
        <CardTitle>带操作按钮的卡片</CardTitle>
        <CardDescription>卡片头部可以包含操作按钮</CardDescription>
        <CardAction>
          <Button variant="ghost" size="icon">
            <MoreHorizontalIcon />
          </Button>
        </CardAction>
      </CardHeader>
      <CardContent>
        <p>这里是卡片的内容区域。</p>
      </CardContent>
    </Card>
  );
};

export default App;
