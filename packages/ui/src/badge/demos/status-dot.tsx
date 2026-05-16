import { Badge } from "lynote-ui/badge";

const App: React.FC = () => {
  return (
    <div className="flex flex-wrap items-center gap-2">
      <Badge variant="outline" className="gap-1.5">
        <span className="size-1.5 rounded-full bg-emerald-500" />
        在线
      </Badge>
      <Badge variant="outline" className="gap-1.5">
        <span className="size-1.5 rounded-full bg-amber-500" />
        离开
      </Badge>
      <Badge variant="outline" className="gap-1.5">
        <span className="size-1.5 rounded-full bg-rose-500" />
        忙碌
      </Badge>
      <Badge variant="outline" className="gap-1.5">
        <span className="size-1.5 rounded-full bg-zinc-400" />
        离线
      </Badge>
    </div>
  );
};

export default App;
