import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "lynote-ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "lynote-ui/tabs";

export default function App() {
  return (
    <Tabs defaultValue="overview" className="w-[400px]">
      <TabsList>
        <TabsTrigger value="overview">概览</TabsTrigger>
        <TabsTrigger value="analytics">分析</TabsTrigger>
        <TabsTrigger value="reports">报告</TabsTrigger>
        <TabsTrigger value="settings">设置</TabsTrigger>
      </TabsList>
      <TabsContent value="overview">
        <Card>
          <CardHeader>
            <CardTitle>概览</CardTitle>
            <CardDescription>
              查看您的关键指标和最近的项目活动。跟踪所有活跃项目的进度。
            </CardDescription>
          </CardHeader>
          <CardContent className="text-muted-foreground text-sm">
            您有 12 个活跃项目和 3 个待处理任务。
          </CardContent>
        </Card>
      </TabsContent>
      <TabsContent value="analytics">
        <Card>
          <CardHeader>
            <CardTitle>分析</CardTitle>
            <CardDescription>
              跟踪性能和用户参与度指标。监控趋势并识别增长机会。
            </CardDescription>
          </CardHeader>
          <CardContent className="text-muted-foreground text-sm">
            页面浏览量比上个月增加了 25%。
          </CardContent>
        </Card>
      </TabsContent>
      <TabsContent value="reports">
        <Card>
          <CardHeader>
            <CardTitle>报告</CardTitle>
            <CardDescription>
              生成和下载您的详细报告。导出多种格式以进行分析。
            </CardDescription>
          </CardHeader>
          <CardContent className="text-muted-foreground text-sm">
            您有 5 个报告准备就绪并可供导出。
          </CardContent>
        </Card>
      </TabsContent>
      <TabsContent value="settings">
        <Card>
          <CardHeader>
            <CardTitle>设置</CardTitle>
            <CardDescription>
              管理您的账户偏好和选项。根据您的需求定制您的体验。
            </CardDescription>
          </CardHeader>
          <CardContent className="text-muted-foreground text-sm">
            配置通知、安全和主题。
          </CardContent>
        </Card>
      </TabsContent>
    </Tabs>
  );
}
