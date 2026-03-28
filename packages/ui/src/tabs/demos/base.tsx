import { Tabs, TabsContent, TabsList, TabsTrigger } from "lynote-ui";

const App: React.FC = () => {
  return (
    <Tabs defaultValue="account" className="w-[400px]">
      <TabsList>
        <TabsTrigger value="account">账户</TabsTrigger>
        <TabsTrigger value="password">密码</TabsTrigger>
      </TabsList>
      <TabsContent value="account">账户设置的内容</TabsContent>
      <TabsContent value="password">密码设置的内容</TabsContent>
    </Tabs>
  );
};

export default App;
