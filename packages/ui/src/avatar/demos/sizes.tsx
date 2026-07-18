import { Avatar, AvatarFallback, AvatarImage } from "lynote-ui";

const App: React.FC = () => {
  return (
    <div className="flex items-center gap-3">
      <Avatar size="xs">
        <AvatarImage src="https://github.com/shadcn.png" alt="Avatar" />
        <AvatarFallback>xs</AvatarFallback>
      </Avatar>
      <Avatar size="sm">
        <AvatarImage src="https://github.com/shadcn.png" alt="Avatar" />
        <AvatarFallback>sm</AvatarFallback>
      </Avatar>
      <Avatar>
        <AvatarImage src="https://github.com/shadcn.png" alt="Avatar" />
        <AvatarFallback>df</AvatarFallback>
      </Avatar>
      <Avatar size="lg">
        <AvatarImage src="https://github.com/shadcn.png" alt="Avatar" />
        <AvatarFallback>lg</AvatarFallback>
      </Avatar>
    </div>
  );
};

export default App;
