import { Button } from "lynote-ui/button";
import { Field, FieldGroup, FieldLabel } from "lynote-ui/field";
import { Input } from "lynote-ui/input";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "lynote-ui/sheet";

const App: React.FC = () => {
  return (
    <Sheet>
      <SheetTrigger render={<Button variant="outline">编辑资料</Button>} />
      <SheetContent>
        <SheetHeader>
          <SheetTitle>编辑个人资料</SheetTitle>
          <SheetDescription>修改你的信息,保存后立即生效。</SheetDescription>
        </SheetHeader>
        <FieldGroup className="px-4">
          <Field>
            <FieldLabel htmlFor="sheet-name">昵称</FieldLabel>
            <Input id="sheet-name" defaultValue="LyNote" />
          </Field>
          <Field>
            <FieldLabel htmlFor="sheet-username">用户名</FieldLabel>
            <Input id="sheet-username" defaultValue="@lynote" />
          </Field>
        </FieldGroup>
        <SheetFooter>
          <Button type="submit">保存</Button>
          <SheetClose render={<Button variant="outline">取消</Button>} />
        </SheetFooter>
      </SheetContent>
    </Sheet>
  );
};

export default App;
