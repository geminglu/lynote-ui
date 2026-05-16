import { Button } from "lynote-ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "lynote-ui/card";
import { Field, FieldGroup, FieldLabel } from "lynote-ui/field";
import { Input } from "lynote-ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "lynote-ui/tabs";

const App: React.FC = () => {
  return (
    <Tabs defaultValue="account" className="w-full max-w-md">
      <TabsList>
        <TabsTrigger value="account">账户</TabsTrigger>
        <TabsTrigger value="password">密码</TabsTrigger>
      </TabsList>
      <TabsContent value="account">
        <Card>
          <CardHeader>
            <CardTitle>账户信息</CardTitle>
            <CardDescription>
              更新你的账户基础信息，保存后立即生效。
            </CardDescription>
          </CardHeader>
          <CardContent>
            <FieldGroup>
              <Field>
                <FieldLabel htmlFor="tabs-card-name">昵称</FieldLabel>
                <Input id="tabs-card-name" defaultValue="lynote" />
              </Field>
              <Field>
                <FieldLabel htmlFor="tabs-card-username">用户名</FieldLabel>
                <Input id="tabs-card-username" defaultValue="@lynote" />
              </Field>
            </FieldGroup>
          </CardContent>
          <CardFooter>
            <Button>保存修改</Button>
          </CardFooter>
        </Card>
      </TabsContent>
      <TabsContent value="password">
        <Card>
          <CardHeader>
            <CardTitle>修改密码</CardTitle>
            <CardDescription>
              请输入旧密码与新密码，保存后会在所有设备上重新登录。
            </CardDescription>
          </CardHeader>
          <CardContent>
            <FieldGroup>
              <Field>
                <FieldLabel htmlFor="tabs-card-current">当前密码</FieldLabel>
                <Input id="tabs-card-current" type="password" />
              </Field>
              <Field>
                <FieldLabel htmlFor="tabs-card-new">新密码</FieldLabel>
                <Input id="tabs-card-new" type="password" />
              </Field>
            </FieldGroup>
          </CardContent>
          <CardFooter>
            <Button>更新密码</Button>
          </CardFooter>
        </Card>
      </TabsContent>
    </Tabs>
  );
};

export default App;
