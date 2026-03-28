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
      <Select disabled>
        <SelectTrigger className="w-[180px]">
          <SelectValue placeholder="禁用状态" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="apple">苹果</SelectItem>
          <SelectItem value="banana">香蕉</SelectItem>
          <SelectItem value="orange">橙子</SelectItem>
        </SelectContent>
      </Select>
      <Select>
        <SelectTrigger className="w-[180px]">
          <SelectValue placeholder="正常状态" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="apple">苹果</SelectItem>
          <SelectItem value="banana" disabled>
            香蕉（禁用）
          </SelectItem>
          <SelectItem value="orange">橙子</SelectItem>
        </SelectContent>
      </Select>
    </div>
  );
};

export default App;
