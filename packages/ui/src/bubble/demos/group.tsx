import {
  Bubble,
  BubbleContent,
  BubbleGroup,
  BubbleReactions,
} from "lynote-ui/bubble";

const App: React.FC = () => {
  return (
    <BubbleGroup className="w-full max-w-lg gap-5">
      <Bubble variant="secondary">
        <BubbleContent>我已经检查了构建日志。</BubbleContent>
      </Bubble>
      <Bubble variant="secondary">
        <BubbleContent>问题来自工作区里的依赖版本不一致。</BubbleContent>
        <BubbleReactions aria-label="消息反应">
          <span>👍</span>
          <span>👀</span>
          <span className="text-xs">+2</span>
        </BubbleReactions>
      </Bubble>
      <Bubble align="end">
        <BubbleContent>收到，我先统一依赖版本。</BubbleContent>
      </Bubble>
    </BubbleGroup>
  );
};

export default App;
