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
    <Card className="w-[350px]">
      <CardHeader>
        <CardTitle>创建项目</CardTitle>
        <CardDescription>创建一个新项目来开始你的工作</CardDescription>
      </CardHeader>
      <CardContent>
        <p>这里是卡片的内容区域。</p>
      </CardContent>
      <CardFooter>
        <Button>创建</Button>
      </CardFooter>
    </Card>
  );
};

export default App;
