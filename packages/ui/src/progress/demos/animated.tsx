import { Progress } from "lynote-ui";
import { useEffect, useState } from "react";

const App: React.FC = () => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          return 0;
        }
        return prev + 10;
      });
    }, 500);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="flex w-full max-w-sm flex-col gap-4">
      <div className="flex justify-between text-sm">
        <span>加载进度</span>
        <span>{progress}%</span>
      </div>
      <Progress value={progress} />
    </div>
  );
};

export default App;
