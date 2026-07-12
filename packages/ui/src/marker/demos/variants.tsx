import { Marker, MarkerContent } from "lynote-ui/marker";

const App: React.FC = () => {
  return (
    <div className="flex w-full max-w-md flex-col gap-4">
      <Marker>
        <MarkerContent>默认标记用于简短状态或说明</MarkerContent>
      </Marker>
      <Marker variant="border">
        <MarkerContent>带底部边框的状态行</MarkerContent>
      </Marker>
      <Marker variant="separator">
        <MarkerContent>今天</MarkerContent>
      </Marker>
    </div>
  );
};

export default App;
