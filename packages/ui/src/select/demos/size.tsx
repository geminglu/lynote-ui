import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "lynote-ui";

const App: React.FC = () => {
  return (
    <div className="flex flex-col gap-4">
      <Select>
        <SelectTrigger size="sm" className="w-[180px]">
          <SelectValue placeholder="小尺寸" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="apple">苹果</SelectItem>
          <SelectItem value="banana">香蕉</SelectItem>
          <SelectItem value="orange">橙子</SelectItem>
        </SelectContent>
      </Select>
      <Select>
        <SelectTrigger size="default" className="w-[180px]">
          <SelectValue placeholder="默认尺寸" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="apple">苹果</SelectItem>
          <SelectItem value="banana">香蕉</SelectItem>
          <SelectItem value="orange">橙子</SelectItem>
        </SelectContent>
      </Select>
    </div>
  );
};

export default App;
