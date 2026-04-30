import { ScrollArea, ScrollBar } from "lynote-ui";

const tags = [
  "React",
  "TypeScript",
  "Tailwind CSS",
  "Base UI",
  "Vite",
  "Dumi",
  "Storybook",
];

const App: React.FC = () => {
  return (
    <ScrollArea className="w-80 whitespace-nowrap rounded-md border">
      <div className="flex w-max gap-2 p-4">
        {tags.map((tag) => (
          <span key={tag} className="bg-muted rounded-md px-3 py-1 text-sm">
            {tag}
          </span>
        ))}
      </div>
      <ScrollBar orientation="horizontal" />
    </ScrollArea>
  );
};

export default App;
