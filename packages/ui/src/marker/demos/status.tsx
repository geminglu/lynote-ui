import { Marker, MarkerContent, MarkerIcon } from "lynote-ui/marker";
import { Spinner } from "lynote-ui/spinner";

const App: React.FC = () => {
  return (
    <div className="flex w-full max-w-md flex-col gap-4">
      <Marker role="status">
        <MarkerIcon>
          <Spinner />
        </MarkerIcon>
        <MarkerContent className="shimmer">正在整理对话上下文...</MarkerContent>
      </Marker>
      <Marker role="status" variant="border">
        <MarkerIcon>
          <Spinner />
        </MarkerIcon>
        <MarkerContent>正在运行测试</MarkerContent>
      </Marker>
    </div>
  );
};

export default App;
