import { GitBranchIcon, SearchIcon } from "lucide-react";

import { Marker, MarkerContent, MarkerIcon } from "lynote-ui/marker";

const App: React.FC = () => {
  return (
    <div className="flex w-full max-w-md flex-col gap-4">
      <Marker>
        <MarkerIcon>
          <GitBranchIcon />
        </MarkerIcon>
        <MarkerContent>已切换到 feature/chat 分支</MarkerContent>
      </Marker>
      <Marker>
        <MarkerIcon>
          <SearchIcon />
        </MarkerIcon>
        <MarkerContent>已检索 4 个文件</MarkerContent>
      </Marker>
    </div>
  );
};

export default App;
