import { CheckCheckIcon, CopyIcon, RefreshCcwIcon } from "lucide-react";

import { Bubble, BubbleContent } from "lynote-ui/bubble";
import { Button } from "lynote-ui/button";
import {
  Message,
  MessageContent,
  MessageFooter,
  MessageHeader,
} from "lynote-ui/message";

const App: React.FC = () => {
  return (
    <div className="flex w-full max-w-lg flex-col gap-5">
      <Message>
        <MessageContent>
          <MessageHeader>项目助手 · 刚刚</MessageHeader>
          <Bubble variant="ghost">
            <BubbleContent>
              我已经定位到依赖冲突，并整理了建议的修复顺序。
            </BubbleContent>
          </Bubble>
          <MessageFooter className="gap-1">
            <Button variant="ghost" size="xs" icon aria-label="复制消息">
              <CopyIcon />
            </Button>
            <Button variant="ghost" size="xs" icon aria-label="重新生成">
              <RefreshCcwIcon />
            </Button>
          </MessageFooter>
        </MessageContent>
      </Message>
      <Message align="end">
        <MessageContent>
          <Bubble>
            <BubbleContent>先按这个顺序处理。</BubbleContent>
          </Bubble>
          <MessageFooter className="gap-1">
            <CheckCheckIcon className="size-3.5" /> 已读
          </MessageFooter>
        </MessageContent>
      </Message>
    </div>
  );
};

export default App;
