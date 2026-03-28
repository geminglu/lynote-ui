import { ScrollArea } from "lynote-ui";

const App: React.FC = () => {
  return (
    <ScrollArea className="h-72 w-48 rounded-md border p-4">
      <div className="space-y-2">
        {Array.from({ length: 20 }).map((_, i) => (
          <div key={i} className="text-sm">
            项目 {i + 1}
          </div>
        ))}
      </div>
    </ScrollArea>
  );
};

export default App;
