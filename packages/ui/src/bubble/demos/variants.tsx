import { Bubble, BubbleContent } from "lynote-ui/bubble";

const variants = [
  ["default", "Default 主色气泡"],
  ["secondary", "Secondary 中性气泡"],
  ["muted", "Muted 低强调气泡"],
  ["tinted", "Tinted 主色浅染气泡"],
  ["outline", "Outline 描边气泡"],
  ["destructive", "Destructive 错误气泡"],
  ["ghost", "Ghost 无边框内容，适合助手回复或富文本。"],
] as const;

const App: React.FC = () => {
  return (
    <div className="flex w-full max-w-lg flex-col gap-3">
      {variants.map(([variant, label]) => (
        <Bubble key={variant} variant={variant}>
          <BubbleContent>{label}</BubbleContent>
        </Bubble>
      ))}
    </div>
  );
};

export default App;
