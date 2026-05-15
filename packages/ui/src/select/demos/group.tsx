import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "lynote-ui";

const App: React.FC = () => {
  const items = [
    {
      value: "fruit",
      label: "水果",
      items: [
        { value: "apple", label: "苹果" },
        { value: "banana", label: "香蕉" },
        { value: "orange", label: "橙子" },
      ],
    },
    {
      value: "vegetable",
      label: "蔬菜",
      items: [
        { value: "carrot", label: "胡萝卜" },
        { value: "tomato", label: "西红柿" },
        { value: "potato", label: "土豆" },
      ],
    },
  ];

  return (
    <Select items={items}>
      <SelectTrigger className="w-[180px]">
        <SelectValue placeholder="选择水果" />
      </SelectTrigger>
      <SelectContent>
        {items.map((item) => (
          <>
            <SelectGroup key={item.value}>
              <SelectLabel>{item.label}</SelectLabel>
              {item.items.map((item) => (
                <SelectItem key={item.value} value={item.value}>
                  {item.label}
                </SelectItem>
              ))}
            </SelectGroup>
          </>
        ))}
      </SelectContent>
    </Select>
  );
};

export default App;
