import { Tabs, TabsContent, TabsList, TabsTrigger } from "lynote-ui";

const App: React.FC = () => {
  return (
    <Tabs defaultValue="overview" className="w-[400px]">
      <TabsList>
        <TabsTrigger value="overview">概览</TabsTrigger>
        <TabsTrigger value="analytics">分析</TabsTrigger>
        <TabsTrigger value="reports" disabled>
          报告（升级后可用）
        </TabsTrigger>
      </TabsList>
      <TabsContent value="overview">数据概览</TabsContent>
      <TabsContent value="analytics">趋势分析</TabsContent>
      <TabsContent value="reports">报告中心</TabsContent>
    </Tabs>
  );
};

export default App;
