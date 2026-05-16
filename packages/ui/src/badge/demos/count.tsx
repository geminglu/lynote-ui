import { BellIcon, MailIcon } from "lucide-react";

import { Badge } from "lynote-ui/badge";
import { Button } from "lynote-ui/button";

const App: React.FC = () => {
  return (
    <div className="flex items-center gap-3">
      <div className="relative inline-flex">
        <Button variant="outline" size="icon" aria-label="通知">
          <BellIcon />
        </Button>
        <Badge
          variant="destructive"
          className="absolute -right-1.5 -top-1.5 h-4 min-w-4 px-1 text-[10px]"
        >
          12
        </Badge>
      </div>

      <div className="relative inline-flex">
        <Button variant="outline" size="icon" aria-label="邮件">
          <MailIcon />
        </Button>
        <Badge
          variant="destructive"
          className="absolute -right-1.5 -top-1.5 h-4 min-w-4 px-1 text-[10px]"
        >
          99+
        </Badge>
      </div>
    </div>
  );
};

export default App;
