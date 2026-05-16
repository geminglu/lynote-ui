import { AspectRatio } from "lynote-ui/aspect-ratio";

const ratios: [string, number][] = [
  ["1 : 1", 1],
  ["4 : 3", 4 / 3],
  ["16 : 9", 16 / 9],
  ["21 : 9", 21 / 9],
];

const App: React.FC = () => {
  return (
    <div className="grid w-full max-w-2xl grid-cols-2 gap-3 sm:grid-cols-4">
      {ratios.map(([label, ratio]) => (
        <div key={label} className="flex flex-col gap-2">
          <AspectRatio
            ratio={ratio}
            className="bg-muted flex items-center justify-center rounded-md text-sm font-medium"
          >
            {label}
          </AspectRatio>
        </div>
      ))}
    </div>
  );
};

export default App;
