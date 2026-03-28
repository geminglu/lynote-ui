import {
  Button,
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "lynote-ui";

const App: React.FC = () => {
  return (
    <div className="flex flex-col gap-4">
      <Card className="w-[350px]">
        <CardHeader>
          <CardTitle>项目统计</CardTitle>
          <CardDescription>查看你的项目数据</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-2">
            <div className="flex justify-between">
              <span>总项目数</span>
              <span className="font-semibold">24</span>
            </div>
            <div className="flex justify-between">
              <span>进行中</span>
              <span className="font-semibold">12</span>
            </div>
            <div className="flex justify-between">
              <span>已完成</span>
              <span className="font-semibold">12</span>
            </div>
          </div>
        </CardContent>
        <CardFooter className="border-t">
          <Button variant="outline" className="w-full">
            查看详情
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
};

export default App;
