import { Button } from "lynote-ui/button";
import React from "react";

const App: React.FC = () => {
  return (
    <div className="flex flex-wrap items-center gap-2 md:flex-row">
      <Button variant="outline">outline</Button>
      <Button variant="default">default</Button>
      <Button variant="link">link</Button>
      <Button variant="destructive">destructive</Button>
      <Button variant="secondary">secondary</Button>
      <Button variant="ghost">ghost</Button>
    </div>
  );
};

export default App;
