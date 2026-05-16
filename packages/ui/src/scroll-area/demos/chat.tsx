import { ScrollArea } from "lynote-ui/scroll-area";

const messages = [
  { from: "Alice", text: "嗨，新版本组件库做得怎么样了？" },
  { from: "Bob", text: "我在收尾文档，新增了 30 多个 demo。" },
  { from: "Alice", text: "太棒了！预计什么时候能发布？" },
  { from: "Bob", text: "本周内吧，还在做最后的回归测试。" },
  { from: "Alice", text: "需要我帮忙再看一遍登录表单的细节吗？" },
  { from: "Bob", text: "好啊，明天上午一起对一下。" },
  { from: "Alice", text: "OK，时间发我日历邀请。" },
  { from: "Bob", text: "👌" },
  { from: "Alice", text: "对了，移动端的 Sheet 在 iOS 上的滚动也修了？" },
  { from: "Bob", text: "是的，那个偶发的失焦问题也一起处理掉了。" },
];

const App: React.FC = () => {
  return (
    <ScrollArea className="h-72 w-full max-w-md rounded-md border p-3 text-sm">
      <div className="flex flex-col gap-3">
        {messages.map((m, i) => (
          <div key={i} className="flex flex-col">
            <span className="text-muted-foreground text-xs">{m.from}</span>
            <span>{m.text}</span>
          </div>
        ))}
      </div>
    </ScrollArea>
  );
};

export default App;
