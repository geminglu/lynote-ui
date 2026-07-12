import { Bubble, BubbleContent } from "lynote-ui/bubble";
import { Message, MessageContent } from "lynote-ui/message";
import {
  MessageScroller,
  MessageScrollerButton,
  MessageScrollerContent,
  MessageScrollerItem,
  MessageScrollerProvider,
  MessageScrollerViewport,
} from "lynote-ui/message-scroller";

const messages = [
  ["user-1", "end", "帮我总结一下本周项目进展。"],
  [
    "assistant-1",
    "start",
    "本周完成了组件 API 对齐、文档结构调整和构建流程验证。",
  ],
  ["user-2", "end", "目前还有哪些风险？"],
  [
    "assistant-2",
    "start",
    "主要风险是新组件尚未覆盖交互示例，以及包入口还需要验证。",
  ],
  ["user-3", "end", "请按优先级给出下一步。"],
  [
    "assistant-3",
    "start",
    "先补齐导出和基础文档，再添加组合示例，最后执行类型检查与文档构建。",
  ],
] as const;

const App: React.FC = () => {
  return (
    <div className="h-[420px] w-full max-w-xl overflow-hidden rounded-lg border">
      <MessageScrollerProvider defaultScrollPosition="end">
        <MessageScroller>
          <MessageScrollerViewport>
            <MessageScrollerContent className="p-4">
              {messages.map(([id, align, content]) => (
                <MessageScrollerItem
                  key={id}
                  messageId={id}
                  scrollAnchor={align === "end"}
                >
                  <Message align={align}>
                    <MessageContent>
                      <Bubble
                        variant={align === "end" ? "default" : "secondary"}
                      >
                        <BubbleContent>{content}</BubbleContent>
                      </Bubble>
                    </MessageContent>
                  </Message>
                </MessageScrollerItem>
              ))}
            </MessageScrollerContent>
          </MessageScrollerViewport>
          <MessageScrollerButton />
        </MessageScroller>
      </MessageScrollerProvider>
    </div>
  );
};

export default App;
