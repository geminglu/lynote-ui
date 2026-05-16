import { ArrowRightIcon, MailIcon, PlusIcon, TrashIcon } from "lucide-react";
import { Button } from "lynote-ui/button";

const App: React.FC = () => {
  return (
    <div className="flex flex-wrap items-center gap-2">
      <Button>
        <MailIcon data-icon="inline-start" />
        发送邮件
      </Button>
      <Button variant="outline">
        <PlusIcon data-icon="inline-start" />
        新建
      </Button>
      <Button variant="secondary">
        继续
        <ArrowRightIcon data-icon="inline-end" />
      </Button>
      <Button variant="destructive">
        <TrashIcon data-icon="inline-start" />
        删除
      </Button>
    </div>
  );
};

export default App;
