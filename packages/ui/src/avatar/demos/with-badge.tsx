import { CheckIcon } from "lucide-react";

import {
  Avatar,
  AvatarBadge,
  AvatarFallback,
  AvatarImage,
} from "lynote-ui/avatar";

const App: React.FC = () => {
  return (
    <div className="flex items-center gap-4">
      <Avatar>
        <AvatarImage src="https://github.com/shadcn.png" alt="" />
        <AvatarFallback>SC</AvatarFallback>
        <AvatarBadge className="bg-emerald-500" />
      </Avatar>
      <Avatar>
        <AvatarImage src="https://github.com/vercel.png" alt="" />
        <AvatarFallback>VC</AvatarFallback>
        <AvatarBadge>
          <CheckIcon />
        </AvatarBadge>
      </Avatar>
      <Avatar size="lg">
        <AvatarImage src="https://github.com/shadcn.png" alt="" />
        <AvatarFallback>SC</AvatarFallback>
        <AvatarBadge className="bg-amber-500" />
      </Avatar>
    </div>
  );
};

export default App;
