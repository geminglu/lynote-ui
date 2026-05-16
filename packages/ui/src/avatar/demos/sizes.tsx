import { Avatar, AvatarFallback, AvatarImage } from "lynote-ui/avatar";

const App: React.FC = () => {
  return (
    <div className="flex items-center gap-3">
      <Avatar size="sm">
        <AvatarImage src="https://github.com/shadcn.png" alt="" />
        <AvatarFallback>SM</AvatarFallback>
      </Avatar>
      <Avatar size="default">
        <AvatarImage src="https://github.com/shadcn.png" alt="" />
        <AvatarFallback>MD</AvatarFallback>
      </Avatar>
      <Avatar size="lg">
        <AvatarImage src="https://github.com/shadcn.png" alt="" />
        <AvatarFallback>LG</AvatarFallback>
      </Avatar>
    </div>
  );
};

export default App;
