import { FileTextIcon, FolderIcon, ImageIcon } from "lucide-react";

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
    <ItemGroup className="w-full max-w-md">
      <Item variant="outline">
        <ItemMedia variant="icon">
          <FolderIcon />
        </ItemMedia>
        <ItemContent>
          <ItemTitle>项目文档</ItemTitle>
          <ItemDescription>12 个文件 · 上次更新于 3 天前</ItemDescription>
        </ItemContent>
      </Item>
      <Item variant="outline">
        <ItemMedia variant="icon">
          <FileTextIcon />
        </ItemMedia>
        <ItemContent>
          <ItemTitle>README.md</ItemTitle>
          <ItemDescription>2.3 KB · Markdown</ItemDescription>
        </ItemContent>
      </Item>
      <Item variant="outline">
        <ItemMedia variant="icon">
          <ImageIcon />
        </ItemMedia>
        <ItemContent>
          <ItemTitle>screenshot.png</ItemTitle>
          <ItemDescription>1024 × 768 · PNG</ItemDescription>
        </ItemContent>
      </Item>
    </ItemGroup>
  );
};

export default App;
