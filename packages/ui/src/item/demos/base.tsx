import {
  Item,
  ItemContent,
  ItemDescription,
  ItemGroup,
  ItemTitle,
} from "lynote-ui";

const App: React.FC = () => {
  return (
    <ItemGroup className="w-full max-w-md">
      <Item>
        <ItemContent>
          <ItemTitle>项目 1</ItemTitle>
          <ItemDescription>这是第一个项目的描述</ItemDescription>
        </ItemContent>
      </Item>
      <Item>
        <ItemContent>
          <ItemTitle>项目 2</ItemTitle>
          <ItemDescription>这是第二个项目的描述</ItemDescription>
        </ItemContent>
      </Item>
      <Item>
        <ItemContent>
          <ItemTitle>项目 3</ItemTitle>
          <ItemDescription>这是第三个项目的描述</ItemDescription>
        </ItemContent>
      </Item>
    </ItemGroup>
  );
};

export default App;
