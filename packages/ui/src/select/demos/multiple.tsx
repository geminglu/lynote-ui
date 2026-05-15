import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "lynote-ui";
import { Badge } from "../../badge";
import { Tooltip, TooltipContent, TooltipTrigger } from "../../tooltip";

const App: React.FC = () => {
  const items = [
    { value: "apple", label: "苹果" },
    { value: "banana", label: "香蕉" },
    { value: "orange", label: "橙子" },
    { value: "pear", label: "梨" },
    { value: "pineapple", label: "菠萝" },
    { value: "strawberry", label: "草莓" },
    { value: "watermelon", label: "西瓜" },
    { value: "peach", label: "桃子" },
    { value: "cherry", label: "樱桃" },
    { value: "mango", label: "芒果" },
    { value: "kiwi", label: "猕猴桃" },
  ];

  return (
    <div className="flex flex-col gap-4">
      <Select multiple items={items}>
        <SelectTrigger className="w-[220px]">
          <SelectValue placeholder="选择多个选项" />
        </SelectTrigger>
        <SelectContent>
          {items.map((item) => (
            <SelectItem key={item.value} value={item.value}>
              {item.label}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>

      <Select multiple items={items}>
        <SelectTrigger className="w-[220px]">
          <SelectValue
            placeholder="自定义折叠展示"
            renderOverflow={({ hiddenCount }) => (
              <span className="text-muted-foreground shrink-0 text-xs">
                还有 {hiddenCount} 项
              </span>
            )}
          />
        </SelectTrigger>
        <SelectContent>
          {items.map((item) => (
            <SelectItem key={item.value} value={item.value}>
              {item.label}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>

      <Select multiple items={items}>
        <SelectTrigger className="w-[220px]">
          <SelectValue
            placeholder="自定义折叠展示"
            renderOverflow={({ hiddenValues }) => (
              <Tooltip>
                <TooltipTrigger
                  render={<Badge variant="secondary">Hover Me</Badge>}
                />
                <TooltipContent>
                  {hiddenValues.map((item) => {
                    const option = item as (typeof items)[number];

                    return <span key={`${option.value}`}>{option.label}</span>;
                  })}
                </TooltipContent>
              </Tooltip>
            )}
          />
        </SelectTrigger>
        <SelectContent>
          {items.map((item) => (
            <SelectItem key={item.value} value={item.value}>
              {item.label}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>

      <Select multiple items={items}>
        <SelectTrigger className="w-[220px]">
          <SelectValue>
            {(items) => {
              if (items.length === 0) {
                return (
                  <span className="text-muted-foreground">自定义折叠展示</span>
                );
              }
              return items.map((item: string, i: number) => (
                <span key={`${item}`}>
                  {item}
                  {i < items.length - 1 ? ", " : ""}
                </span>
              ));
            }}
          </SelectValue>
        </SelectTrigger>
        <SelectContent>
          {items.map((item) => (
            <SelectItem key={item.value} value={item.value}>
              {item.label}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </div>
  );
};

export default App;
