import * as React from "react";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "lynote-ui";

const App: React.FC = () => {
  const [value, setValue] = React.useState("profile");

  return (
    <div className="space-y-3">
      <Tabs value={value} onValueChange={setValue} className="w-[420px]">
        <TabsList>
          <TabsTrigger value="profile">资料</TabsTrigger>
          <TabsTrigger value="security">安全</TabsTrigger>
          <TabsTrigger value="billing">账单</TabsTrigger>
        </TabsList>
        <TabsContent value="profile">资料设置内容</TabsContent>
        <TabsContent value="security">安全设置内容</TabsContent>
        <TabsContent value="billing">账单设置内容</TabsContent>
      </Tabs>
      <p className="text-muted-foreground text-sm">当前标签：{value}</p>
    </div>
  );
};

export default App;
