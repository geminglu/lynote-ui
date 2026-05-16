import { CheckCircle2Icon } from "lucide-react";

import {
  Item,
  ItemContent,
  ItemDescription,
  ItemGroup,
  ItemMedia,
  ItemTitle,
} from "lynote-ui/item";

const App: React.FC = () => {
  return (
    <div className="flex w-full max-w-md flex-col gap-4">
      <ItemGroup>
        <Item size="xs" variant="muted">
          <ItemMedia variant="icon">
            <CheckCircle2Icon />
          </ItemMedia>
          <ItemContent>
            <ItemTitle>极小尺寸 (xs)</ItemTitle>
          </ItemContent>
        </Item>
        <Item size="sm" variant="muted">
          <ItemMedia variant="icon">
            <CheckCircle2Icon />
          </ItemMedia>
          <ItemContent>
            <ItemTitle>小尺寸 (sm)</ItemTitle>
            <ItemDescription>用于密集列表</ItemDescription>
          </ItemContent>
        </Item>
        <Item size="default" variant="muted">
          <ItemMedia variant="icon">
            <CheckCircle2Icon />
          </ItemMedia>
          <ItemContent>
            <ItemTitle>默认尺寸</ItemTitle>
            <ItemDescription>一般业务列表</ItemDescription>
          </ItemContent>
        </Item>
      </ItemGroup>
    </div>
  );
};

export default App;
