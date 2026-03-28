import { Checkbox } from "lynote-ui";
import { useState } from "react";

const App: React.FC = () => {
  const [checked, setChecked] = useState(false);

  return (
    <div className="flex flex-col gap-4">
      <div className="flex items-center gap-2">
        <Checkbox id="terms" checked={checked} onCheckedChange={setChecked} />
        <label htmlFor="terms" className="text-sm font-medium leading-none">
          接受条款和条件
        </label>
      </div>
      <div className="flex items-center gap-2">
        <Checkbox id="newsletter" />
        <label
          htmlFor="newsletter"
          className="text-sm font-medium leading-none"
        >
          订阅新闻通讯
        </label>
      </div>
    </div>
  );
};

export default App;
