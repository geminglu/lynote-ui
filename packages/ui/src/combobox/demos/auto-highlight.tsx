import {
  Combobox,
  ComboboxContent,
  ComboboxEmpty,
  ComboboxInput,
  ComboboxItem,
  ComboboxList,
} from "lynote-ui";

const commands = [
  "打开控制台",
  "切换主题",
  "新建项目",
  "查看快捷键",
  "导出数据",
];

const App: React.FC = () => {
  return (
    <Combobox items={commands} autoHighlight={true}>
      <ComboboxInput className="w-[260px]" placeholder="搜索命令..." />
      <ComboboxContent>
        <ComboboxEmpty>未找到命令</ComboboxEmpty>
        <ComboboxList>
          {(command) => (
            <ComboboxItem key={command} value={command}>
              {command}
            </ComboboxItem>
          )}
        </ComboboxList>
      </ComboboxContent>
    </Combobox>
  );
};

export default App;
