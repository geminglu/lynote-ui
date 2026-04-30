import { Tabs, TabsContent, TabsList, TabsTrigger } from "lynote-ui";

const App: React.FC = () => {
  return (
    <Tabs defaultValue="overview" orientation="vertical" className="flex gap-4">
      <TabsList orientation="vertical">
        <TabsTrigger value="overview">概览</TabsTrigger>
        <TabsTrigger value="members">成员</TabsTrigger>
        <TabsTrigger value="settings">设置</TabsTrigger>
      </TabsList>
      <div className="min-w-60 rounded-lg border p-4 text-sm">
        <TabsContent value="overview">项目概览内容</TabsContent>
        <TabsContent value="members">成员管理内容</TabsContent>
        <TabsContent value="settings">项目设置内容</TabsContent>
      </div>
    </Tabs>
  );
};

export default App;
