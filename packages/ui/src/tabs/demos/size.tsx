import { Tabs, TabsContent, TabsList, TabsTrigger } from "lynote-ui";

const App: React.FC = () => {
  return (
    <div className="flex flex-col gap-6">
      <Tabs defaultValue="tab1">
        <TabsList size="xs">
          <TabsTrigger value="tab1">标签一</TabsTrigger>
          <TabsTrigger value="tab2">标签二</TabsTrigger>
        </TabsList>
        <TabsContent value="tab1">xs 尺寸的内容</TabsContent>
        <TabsContent value="tab2">xs 尺寸的内容 2</TabsContent>
      </Tabs>
      <Tabs defaultValue="tab1">
        <TabsList size="sm">
          <TabsTrigger value="tab1">标签一</TabsTrigger>
          <TabsTrigger value="tab2">标签二</TabsTrigger>
        </TabsList>
        <TabsContent value="tab1">sm 尺寸的内容</TabsContent>
        <TabsContent value="tab2">sm 尺寸的内容 2</TabsContent>
      </Tabs>
      <Tabs defaultValue="tab1">
        <TabsList>
          <TabsTrigger value="tab1">标签一</TabsTrigger>
          <TabsTrigger value="tab2">标签二</TabsTrigger>
        </TabsList>
        <TabsContent value="tab1">default 尺寸的内容</TabsContent>
        <TabsContent value="tab2">default 尺寸的内容 2</TabsContent>
      </Tabs>
      <Tabs defaultValue="tab1">
        <TabsList size="lg">
          <TabsTrigger value="tab1">标签一</TabsTrigger>
          <TabsTrigger value="tab2">标签二</TabsTrigger>
        </TabsList>
        <TabsContent value="tab1">lg 尺寸的内容</TabsContent>
        <TabsContent value="tab2">lg 尺寸的内容 2</TabsContent>
      </Tabs>
    </div>
  );
};

export default App;
