import { FolderPlusIcon, InboxIcon } from "lucide-react";

import { Button } from "lynote-ui/button";
import {
  Empty,
  EmptyContent,
  EmptyDescription,
  EmptyHeader,
  EmptyMedia,
  EmptyTitle,
} from "lynote-ui/empty";

const App: React.FC = () => {
  return (
    <Empty>
      <EmptyHeader>
        <EmptyMedia variant="icon">
          <InboxIcon />
        </EmptyMedia>
        <EmptyTitle>还没有任何项目</EmptyTitle>
        <EmptyDescription>
          创建你的第一个项目来开始管理任务、文档与团队协作。
        </EmptyDescription>
      </EmptyHeader>
      <EmptyContent>
        <Button>
          <FolderPlusIcon data-icon="inline-start" />
          创建项目
        </Button>
      </EmptyContent>
    </Empty>
  );
};

export default App;
