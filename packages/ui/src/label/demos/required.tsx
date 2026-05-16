import { Input } from "lynote-ui/input";
import { Label } from "lynote-ui/label";

const App: React.FC = () => {
  return (
    <div className="flex w-full max-w-sm flex-col gap-4">
      <div className="flex flex-col gap-2">
        <Label htmlFor="label-required-email">
          邮箱<span className="text-destructive">*</span>
        </Label>
        <Input
          id="label-required-email"
          type="email"
          placeholder="you@example.com"
          required
        />
      </div>
      <div className="flex flex-col gap-2">
        <Label htmlFor="label-required-name">
          昵称
          <span className="text-muted-foreground text-xs font-normal">
            （可选）
          </span>
        </Label>
        <Input id="label-required-name" placeholder="请输入" />
      </div>
    </div>
  );
};

export default App;
