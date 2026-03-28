import { InboxIcon } from "lucide-react";
import {
  Empty,
  EmptyDescription,
  EmptyHeader,
  EmptyMedia,
  EmptyTitle,
} from "lynote-ui";

const App: React.FC = () => {
  return (
    <Empty>
      <EmptyHeader>
        <EmptyMedia variant="icon">
          <InboxIcon />
        </EmptyMedia>
        <EmptyTitle>暂无数据</EmptyTitle>
        <EmptyDescription>当前没有可显示的内容，请稍后再试。</EmptyDescription>
      </EmptyHeader>
    </Empty>
  );
};

export default App;
