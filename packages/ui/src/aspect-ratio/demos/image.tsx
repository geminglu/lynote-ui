import { AspectRatio } from "lynote-ui/aspect-ratio";

const App: React.FC = () => {
  return (
    <div className="w-full max-w-md">
      <AspectRatio ratio={16 / 9} className="overflow-hidden rounded-lg border">
        <img
          src="https://images.unsplash.com/photo-1599566150163-29194dcaad36"
          alt="人像示例"
          className="size-full object-cover"
        />
      </AspectRatio>
    </div>
  );
};

export default App;
