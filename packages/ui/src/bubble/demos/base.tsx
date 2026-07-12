import { Bubble, BubbleContent } from "lynote-ui/bubble";

const App: React.FC = () => {
  return (
    <div className="flex w-full max-w-lg flex-col gap-3">
      <Bubble variant="secondary">
        <BubbleContent>你好，今天需要我帮你处理什么？</BubbleContent>
      </Bubble>
      <Bubble align="end">
        <BubbleContent>请帮我整理一下这份会议纪要。</BubbleContent>
      </Bubble>
    </div>
  );
};

export default App;
