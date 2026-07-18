import { Item, ItemContent, ItemGroup, ItemTitle } from "lynote-ui";

const App: React.FC = () => {
  return (
    <div className="flex flex-col gap-6">
      <ItemGroup size="xs">
        <Item variant="muted" size="xs">
          <ItemContent>
            <ItemTitle>xs 尺寸</ItemTitle>
          </ItemContent>
        </Item>
      </ItemGroup>
      <ItemGroup size="sm">
        <Item variant="muted" size="sm">
          <ItemContent>
            <ItemTitle>sm 尺寸</ItemTitle>
          </ItemContent>
        </Item>
      </ItemGroup>
      <ItemGroup>
        <Item variant="muted">
          <ItemContent>
            <ItemTitle>default 尺寸</ItemTitle>
          </ItemContent>
        </Item>
      </ItemGroup>
      <ItemGroup size="lg">
        <Item variant="muted" size="lg">
          <ItemContent>
            <ItemTitle>lg 尺寸</ItemTitle>
          </ItemContent>
        </Item>
      </ItemGroup>
    </div>
  );
};

export default App;
