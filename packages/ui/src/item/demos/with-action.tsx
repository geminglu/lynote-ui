import { Avatar, AvatarFallback, AvatarImage } from "lynote-ui/avatar";
import { Button } from "lynote-ui/button";
import {
  Item,
  ItemActions,
  ItemContent,
  ItemDescription,
  ItemGroup,
  ItemMedia,
  ItemTitle,
} from "lynote-ui/item";

const users = [
  { name: "Alice", role: "Owner", avatar: "https://github.com/shadcn.png" },
  { name: "Bob", role: "Editor", avatar: "https://github.com/vercel.png" },
  { name: "Carol", role: "Viewer", avatar: "" },
];

const App: React.FC = () => {
  return (
    <ItemGroup className="w-full max-w-md">
      {users.map((u) => (
        <Item key={u.name} variant="outline">
          <ItemMedia>
            <Avatar>
              <AvatarImage src={u.avatar} alt="" />
              <AvatarFallback>{u.name[0]}</AvatarFallback>
            </Avatar>
          </ItemMedia>
          <ItemContent>
            <ItemTitle>{u.name}</ItemTitle>
            <ItemDescription>{u.role}</ItemDescription>
          </ItemContent>
          <ItemActions>
            <Button variant="ghost" size="sm">
              管理
            </Button>
          </ItemActions>
        </Item>
      ))}
    </ItemGroup>
  );
};

export default App;
