import {
  Avatar,
  AvatarFallback,
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "lynote-ui";

const App: React.FC = () => {
  return (
    <HoverCard>
      <HoverCardTrigger className="text-sm font-medium underline underline-offset-4">
        @gml
      </HoverCardTrigger>
      <HoverCardContent className="w-72">
        <div className="flex gap-3">
          <Avatar>
            <AvatarFallback>G</AvatarFallback>
          </Avatar>
          <div className="space-y-1">
            <p className="text-sm font-medium">GML</p>
            <p className="text-muted-foreground text-sm">
              组件库维护者，关注设计系统与前端工程。
            </p>
          </div>
        </div>
      </HoverCardContent>
    </HoverCard>
  );
};

export default App;
