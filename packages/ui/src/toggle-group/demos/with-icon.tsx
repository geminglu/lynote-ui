import {
  AlignCenterIcon,
  AlignLeftIcon,
  AlignRightIcon,
  LayoutGridIcon,
  ListIcon,
} from "lucide-react";

import { ToggleGroup, ToggleGroupItem } from "lynote-ui/toggle-group";

const App: React.FC = () => {
  return (
    <div className="flex flex-col gap-4">
      <ToggleGroup defaultValue={["left"]}>
        <ToggleGroupItem value="left" aria-label="左对齐">
          <AlignLeftIcon />
        </ToggleGroupItem>
        <ToggleGroupItem value="center" aria-label="居中对齐">
          <AlignCenterIcon />
        </ToggleGroupItem>
        <ToggleGroupItem value="right" aria-label="右对齐">
          <AlignRightIcon />
        </ToggleGroupItem>
      </ToggleGroup>

      <ToggleGroup defaultValue={["list"]} variant="outline">
        <ToggleGroupItem value="list" aria-label="列表视图">
          <ListIcon />
          列表
        </ToggleGroupItem>
        <ToggleGroupItem value="grid" aria-label="网格视图">
          <LayoutGridIcon />
          网格
        </ToggleGroupItem>
      </ToggleGroup>
    </div>
  );
};

export default App;
