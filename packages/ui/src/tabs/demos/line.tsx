import { Tabs, TabsContent, TabsList, TabsTrigger } from "lynote-ui";

const App: React.FC = () => {
  return (
    <Tabs defaultValue="all" className="w-[480px]">
      <TabsList variant="line">
        <TabsTrigger value="all">全部</TabsTrigger>
        <TabsTrigger value="opened">进行中</TabsTrigger>
        <TabsTrigger value="closed">已关闭</TabsTrigger>
        <TabsTrigger value="archived">归档</TabsTrigger>
      </TabsList>
      <TabsContent value="all" className="border-t pt-3">
        显示全部任务
      </TabsContent>
      <TabsContent value="opened" className="border-t pt-3">
        显示进行中的任务
      </TabsContent>
      <TabsContent value="closed" className="border-t pt-3">
        显示已关闭的任务
      </TabsContent>
      <TabsContent value="archived" className="border-t pt-3">
        显示归档的任务
      </TabsContent>
    </Tabs>
  );
};

export default App;
