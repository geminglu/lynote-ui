import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectSeparator,
  SelectTrigger,
  SelectValue,
} from "lynote-ui";

const App: React.FC = () => {
  return (
    <Select>
      <SelectTrigger className="w-[180px]">
        <SelectValue placeholder="选择水果" />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectLabel>水果</SelectLabel>
          <SelectItem value="apple">苹果</SelectItem>
          <SelectItem value="banana">香蕉</SelectItem>
          <SelectItem value="orange">橙子</SelectItem>
        </SelectGroup>
        <SelectSeparator />
        <SelectGroup>
          <SelectLabel>蔬菜</SelectLabel>
          <SelectItem value="carrot">胡萝卜</SelectItem>
          <SelectItem value="tomato">西红柿</SelectItem>
          <SelectItem value="potato">土豆</SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
  );
};

export default App;
