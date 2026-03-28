import { Progress } from "lynote-ui";

const App: React.FC = () => {
  return (
    <div className="flex w-full max-w-sm flex-col gap-4">
      <div className="flex flex-col gap-2">
        <div className="flex justify-between text-sm">
          <span>开始</span>
          <span>0%</span>
        </div>
        <Progress value={0} />
      </div>
      <div className="flex flex-col gap-2">
        <div className="flex justify-between text-sm">
          <span>进行中</span>
          <span>50%</span>
        </div>
        <Progress value={50} />
      </div>
      <div className="flex flex-col gap-2">
        <div className="flex justify-between text-sm">
          <span>完成</span>
          <span>100%</span>
        </div>
        <Progress value={100} />
      </div>
    </div>
  );
};

export default App;
