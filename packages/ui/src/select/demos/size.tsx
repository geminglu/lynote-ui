import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "lynote-ui";

const App: React.FC = () => {
  const items = [
    { value: "apple", label: "苹果" },
    { value: "banana", label: "香蕉" },
    { value: "orange", label: "橙子" },
  ];
  return (
    <div className="flex flex-col gap-4">
      <Select items={items}>
        <SelectTrigger size="sm" className="w-[180px]">
          <SelectValue placeholder="小尺寸" />
        </SelectTrigger>
        <SelectContent>
          {items.map((item) => (
            <SelectItem value={item.value}>{item.label}</SelectItem>
          ))}
        </SelectContent>
      </Select>

      <Select items={items}>
        <SelectTrigger size="default" className="w-[180px]">
          <SelectValue placeholder="默认尺寸" />
        </SelectTrigger>
        <SelectContent>
          {items.map((item) => (
            <SelectItem value={item.value}>{item.label}</SelectItem>
          ))}
        </SelectContent>
      </Select>
    </div>
  );
};

export default App;
