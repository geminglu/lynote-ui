import { BellIcon, LockIcon, UserIcon } from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "lynote-ui";

const App: React.FC = () => {
  return (
    <Tabs defaultValue="account" className="w-[400px]">
      <TabsList>
        <TabsTrigger value="account">
          <UserIcon />
          账户
        </TabsTrigger>
        <TabsTrigger value="security">
          <LockIcon />
          安全
        </TabsTrigger>
        <TabsTrigger value="notification">
          <BellIcon />
          通知
        </TabsTrigger>
      </TabsList>
      <TabsContent value="account">账户信息相关内容</TabsContent>
      <TabsContent value="security">密码、两步验证、登录设备</TabsContent>
      <TabsContent value="notification">订阅、推送等通知设置</TabsContent>
    </Tabs>
  );
};

export default App;
