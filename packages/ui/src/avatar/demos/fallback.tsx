import { UserIcon } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "lynote-ui/avatar";

const App: React.FC = () => {
  return (
    <div className="flex items-center gap-4">
      <Avatar>
        <AvatarImage src="https://invalid-url.example/missing.png" alt="" />
        <AvatarFallback>LR</AvatarFallback>
      </Avatar>
      <Avatar>
        <AvatarFallback>
          <UserIcon className="size-4" />
        </AvatarFallback>
      </Avatar>
      <Avatar>
        <AvatarFallback className="bg-emerald-500/15 text-emerald-700 dark:text-emerald-300">
          GE
        </AvatarFallback>
      </Avatar>
    </div>
  );
};

export default App;
