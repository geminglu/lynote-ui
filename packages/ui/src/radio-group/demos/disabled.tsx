import { Label, RadioGroup, RadioGroupItem } from "lynote-ui";

const App: React.FC = () => {
  return (
    <div className="flex flex-col gap-4">
      <RadioGroup defaultValue="option-one" disabled>
        <div className="flex items-center gap-2">
          <RadioGroupItem value="option-one" id="disabled-option-one" />
          <Label htmlFor="disabled-option-one">禁用整个组</Label>
        </div>
        <div className="flex items-center gap-2">
          <RadioGroupItem value="option-two" id="disabled-option-two" />
          <Label htmlFor="disabled-option-two">禁用整个组</Label>
        </div>
      </RadioGroup>
      <RadioGroup defaultValue="option-one">
        <div className="flex items-center gap-2">
          <RadioGroupItem value="option-one" id="item-disabled-option-one" />
          <Label htmlFor="item-disabled-option-one">正常选项</Label>
        </div>
        <div className="flex items-center gap-2">
          <RadioGroupItem
            value="option-two"
            id="item-disabled-option-two"
            disabled
          />
          <Label htmlFor="item-disabled-option-two">禁用单个选项</Label>
        </div>
      </RadioGroup>
    </div>
  );
};

export default App;
