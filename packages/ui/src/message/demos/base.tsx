import { Avatar, AvatarFallback } from "lynote-ui/avatar";
import { Bubble, BubbleContent } from "lynote-ui/bubble";
import { Message, MessageAvatar, MessageContent } from "lynote-ui/message";

const App: React.FC = () => {
  return (
    <div className="flex w-full max-w-lg flex-col gap-5">
      <Message>
        <MessageAvatar>
          <Avatar>
            <AvatarFallback>AI</AvatarFallback>
          </Avatar>
        </MessageAvatar>
        <MessageContent>
          <Bubble variant="secondary">
            <BubbleContent>构建失败发生在依赖安装阶段。</BubbleContent>
          </Bubble>
        </MessageContent>
      </Message>
      <Message align="end">
        <MessageAvatar>
          <Avatar>
            <AvatarFallback>明</AvatarFallback>
          </Avatar>
        </MessageAvatar>
        <MessageContent>
          <Bubble>
            <BubbleContent>请把具体错误和失败的包名发给我。</BubbleContent>
          </Bubble>
        </MessageContent>
      </Message>
    </div>
  );
};

export default App;
