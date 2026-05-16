import { InboxIcon } from "lucide-react";

import {
  Item,
  ItemContent,
  ItemDescription,
  ItemMedia,
  ItemTitle,
} from "lynote-ui/item";

export default function App() {
  return (
    <div className="flex w-full max-w-md flex-col gap-6">
      <Item>
        <ItemMedia variant="icon">
          <InboxIcon />
        </ItemMedia>
        <ItemContent>
          <ItemTitle>默认变体</ItemTitle>
          <ItemDescription>透明背景，无边框。</ItemDescription>
        </ItemContent>
      </Item>
      <Item variant="outline">
        <ItemMedia variant="icon">
          <InboxIcon />
        </ItemMedia>
        <ItemContent>
          <ItemTitle>轮廓变体</ItemTitle>
          <ItemDescription>轮廓样式，有可见边框。</ItemDescription>
        </ItemContent>
      </Item>
      <Item variant="muted">
        <ItemMedia variant="icon">
          <InboxIcon />
        </ItemMedia>
        <ItemContent>
          <ItemTitle>静音变体</ItemTitle>
          <ItemDescription>静音背景，用于次要内容。</ItemDescription>
        </ItemContent>
      </Item>
    </div>
  );
}
