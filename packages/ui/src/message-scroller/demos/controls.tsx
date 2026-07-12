import { ArrowDownIcon, ArrowUpIcon } from "lucide-react";

import { Bubble, BubbleContent } from "lynote-ui/bubble";
import { Button } from "lynote-ui/button";
import { Message, MessageContent } from "lynote-ui/message";
import {
  MessageScroller,
  MessageScrollerButton,
  MessageScrollerContent,
  MessageScrollerItem,
  MessageScrollerProvider,
  MessageScrollerViewport,
  useMessageScroller,
} from "lynote-ui/message-scroller";

function ScrollControls() {
  const { scrollToEnd, scrollToStart } = useMessageScroller();

  return (
    <div className="flex justify-center gap-2 border-t p-2">
      <Button variant="outline" size="sm" onClick={() => scrollToStart()}>
        <ArrowUpIcon data-icon="inline-start" /> 开头
      </Button>
      <Button variant="outline" size="sm" onClick={() => scrollToEnd()}>
        <ArrowDownIcon data-icon="inline-start" /> 最新消息
      </Button>
    </div>
  );
}

const App: React.FC = () => {
  return (
    <MessageScrollerProvider>
      <div className="flex h-[420px] w-full max-w-xl flex-col overflow-hidden rounded-lg border">
        <MessageScroller className="flex-1">
          <MessageScrollerViewport>
            <MessageScrollerContent className="p-4">
              {Array.from({ length: 10 }, (_, index) => {
                const isUser = index % 2 === 0;
                return (
                  <MessageScrollerItem
                    key={index}
                    messageId={`message-${index}`}
                  >
                    <Message align={isUser ? "end" : "start"}>
                      <MessageContent>
                        <Bubble variant={isUser ? "default" : "secondary"}>
                          <BubbleContent>
                            {isUser
                              ? `请检查第 ${index + 1} 项。`
                              : `第 ${index} 项已检查，结果正常。`}
                          </BubbleContent>
                        </Bubble>
                      </MessageContent>
                    </Message>
                  </MessageScrollerItem>
                );
              })}
            </MessageScrollerContent>
          </MessageScrollerViewport>
          <MessageScrollerButton />
        </MessageScroller>
        <ScrollControls />
      </div>
    </MessageScrollerProvider>
  );
};

export default App;
