import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "lynote-ui";

const App: React.FC = () => {
  const items = [
    {
      value: {
        id: "standard",
        name: "Standard",
        duration: "Delivers in 4-6 business days",
        price: "$4.99",
      },
      label: "苹果",
    },
    {
      value: {
        id: "express",
        name: "Express",
        duration: "Delivers in 2-3 business days",
        price: "$9.99",
      },
      label: "香蕉",
    },
    {
      value: {
        id: "overnight",
        name: "Overnight",
        duration: "Delivers next business day",
        price: "$19.99",
      },
      label: "橙子",
    },
  ];
  return (
    <Select items={items}>
      <SelectTrigger className="h-14! w-[300px]">
        <SelectValue placeholder="选择一个选项">
          {(value) => {
            if (!value)
              return (
                <span className="text-muted-foreground">选择一个选项</span>
              );
            return (
              <div className="flex flex-col">
                <p>{value?.name}</p>
                <p className="text-muted-foreground">
                  {value?.duration} ({value?.price})
                </p>
              </div>
            );
          }}
        </SelectValue>
      </SelectTrigger>
      <SelectContent>
        {items.map((item) => (
          <SelectItem key={item.value.id} value={item.value}>
            <div className="flex flex-col">
              <span>{item.value.name}</span>
              <span className="text-muted-foreground">
                {item.value.duration} ({item.value.price})
              </span>
            </div>
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
};

export default App;
