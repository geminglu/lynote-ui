import { Avatar, AvatarFallback } from "lynote-ui/avatar";
import { Bubble, BubbleContent } from "lynote-ui/bubble";
import {
  Message,
  MessageAvatar,
  MessageContent,
  MessageGroup,
} from "lynote-ui/message";

const App: React.FC = () => {
  return (
    <MessageGroup className="w-full max-w-lg">
      <Message>
        <MessageAvatar aria-hidden="true" />
        <MessageContent>
          <Bubble variant="secondary">
            <BubbleContent>我检查了注册表地址。</BubbleContent>
          </Bubble>
        </MessageContent>
      </Message>
      <Message>
        <MessageAvatar>
          <Avatar>
            <AvatarFallback>陈</AvatarFallback>
          </Avatar>
        </MessageAvatar>
        <MessageContent>
          <Bubble variant="secondary">
            <BubbleContent>
              组件定义和示例数据现在都位于 UI 注册表中。
            </BubbleContent>
          </Bubble>
        </MessageContent>
      </Message>
    </MessageGroup>
  );
};

export default App;
