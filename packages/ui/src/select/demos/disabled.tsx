import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "lynote-ui";

const App: React.FC = () => {
  const items1 = [
    { value: "apple", label: "苹果" },
    { value: "banana", label: "香蕉" },
    { value: "orange", label: "橙子" },
  ];
  const items2 = [
    { value: "apple", label: "苹果" },
    { value: "banana", label: "香蕉" },
    { value: "orange", label: "橙子", disabled: true },
  ];
  return (
    <div className="flex flex-col gap-4">
      <Select items={items1} disabled>
        <SelectTrigger className="w-[180px]">
          <SelectValue placeholder="禁用状态" />
        </SelectTrigger>
        <SelectContent>
          {items1.map((item) => (
            <SelectItem key={item.value} value={item.value}>
              {item.label}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>

      <Select items={items2}>
        <SelectTrigger className="w-[180px]">
          <SelectValue placeholder="正常状态" />
        </SelectTrigger>
        <SelectContent>
          {items2.map((item) => (
            <SelectItem
              key={item.value}
              value={item.value}
              disabled={item.disabled}
            >
              {item.label}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </div>
  );
};

export default App;
