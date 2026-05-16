import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "lynote-ui/card";

const App: React.FC = () => {
  return (
    <div className="flex flex-col gap-4">
      <Card size="default" className="w-[320px]">
        <CardHeader>
          <CardTitle>默认尺寸</CardTitle>
          <CardDescription>适合一般业务展示</CardDescription>
        </CardHeader>
        <CardContent>内容区域</CardContent>
      </Card>

      <Card size="sm" className="w-[320px]">
        <CardHeader>
          <CardTitle>紧凑尺寸 (sm)</CardTitle>
          <CardDescription>适合表格行内/统计卡片等紧凑场景</CardDescription>
        </CardHeader>
        <CardContent>内容区域</CardContent>
      </Card>
    </div>
  );
};

export default App;
