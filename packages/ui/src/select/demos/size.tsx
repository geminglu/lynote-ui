import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "lynote-ui";

const App: React.FC = () => {
  return (
    <div className="flex flex-col gap-3">
      <Select>
        <SelectTrigger size="xs" className="w-[180px]">
          <SelectValue placeholder="xs 尺寸" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="1">选项一</SelectItem>
          <SelectItem value="2">选项二</SelectItem>
        </SelectContent>
      </Select>
      <Select>
        <SelectTrigger size="sm" className="w-[180px]">
          <SelectValue placeholder="sm 尺寸" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="1">选项一</SelectItem>
          <SelectItem value="2">选项二</SelectItem>
        </SelectContent>
      </Select>
      <Select>
        <SelectTrigger className="w-[180px]">
          <SelectValue placeholder="default 尺寸" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="1">选项一</SelectItem>
          <SelectItem value="2">选项二</SelectItem>
        </SelectContent>
      </Select>
      <Select>
        <SelectTrigger size="lg" className="w-[180px]">
          <SelectValue placeholder="lg 尺寸" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="1">选项一</SelectItem>
          <SelectItem value="2">选项二</SelectItem>
        </SelectContent>
      </Select>
    </div>
  );
};

export default App;
