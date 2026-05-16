"use client";

import { Button } from "lynote-ui/button";
import { Spinner } from "lynote-ui/spinner";
import { useState } from "react";

const App: React.FC = () => {
  const [loading, setLoading] = useState(false);

  const handleSubmit = () => {
    setLoading(true);
    setTimeout(() => setLoading(false), 1500);
  };

  return (
    <div className="flex flex-wrap items-center gap-2">
      <Button disabled>
        <Spinner data-icon="inline-start" />
        加载中
      </Button>
      <Button variant="outline" disabled>
        <Spinner data-icon="inline-start" />
        请稍候
      </Button>
      <Button onClick={handleSubmit} disabled={loading}>
        {loading && <Spinner data-icon="inline-start" />}
        {loading ? "提交中..." : "点我提交"}
      </Button>
    </div>
  );
};

export default App;
