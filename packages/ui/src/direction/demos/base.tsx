import { DirectionProvider, useDirection } from "lynote-ui";

function DirectionPreview() {
  const direction = useDirection();

  return (
    <div className="rounded-lg border p-4 text-sm">
      <p>当前方向：{direction}</p>
      <p className="mt-2">هذا النص用于展示 RTL 容器中的排版方向。</p>
    </div>
  );
}

const App: React.FC = () => {
  return (
    <DirectionProvider dir="rtl">
      <DirectionPreview />
    </DirectionProvider>
  );
};

export default App;
