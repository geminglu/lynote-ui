import {
  Avatar,
  AvatarFallback,
  AvatarGroup,
  AvatarGroupCount,
} from "lynote-ui";

const App: React.FC = () => {
  return (
    <AvatarGroup>
      <Avatar>
        <AvatarFallback>王</AvatarFallback>
      </Avatar>
      <Avatar>
        <AvatarFallback>李</AvatarFallback>
      </Avatar>
      <Avatar>
        <AvatarFallback>陈</AvatarFallback>
      </Avatar>
      <AvatarGroupCount>+6</AvatarGroupCount>
    </AvatarGroup>
  );
};

export default App;
