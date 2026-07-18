import { Label, RadioGroup, RadioGroupItem } from "lynote-ui";

const App: React.FC = () => {
  return (
    <div className="flex flex-col gap-6">
      <RadioGroup defaultValue="1">
        <div className="flex items-center gap-2">
          <RadioGroupItem id="r-xs-1" size="xs" value="1" />
          <Label htmlFor="r-xs-1">xs - 选项一</Label>
        </div>
        <div className="flex items-center gap-2">
          <RadioGroupItem id="r-xs-2" size="xs" value="2" />
          <Label htmlFor="r-xs-2">xs - 选项二</Label>
        </div>
      </RadioGroup>
      <RadioGroup defaultValue="1">
        <div className="flex items-center gap-2">
          <RadioGroupItem id="r-sm-1" size="sm" value="1" />
          <Label htmlFor="r-sm-1">sm - 选项一</Label>
        </div>
        <div className="flex items-center gap-2">
          <RadioGroupItem id="r-sm-2" size="sm" value="2" />
          <Label htmlFor="r-sm-2">sm - 选项二</Label>
        </div>
      </RadioGroup>
      <RadioGroup defaultValue="1">
        <div className="flex items-center gap-2">
          <RadioGroupItem id="r-def-1" size="default" value="1" />
          <Label htmlFor="r-def-1">default - 选项一</Label>
        </div>
        <div className="flex items-center gap-2">
          <RadioGroupItem id="r-def-2" size="default" value="2" />
          <Label htmlFor="r-def-2">default - 选项二</Label>
        </div>
      </RadioGroup>
      <RadioGroup defaultValue="1">
        <div className="flex items-center gap-2">
          <RadioGroupItem id="r-lg-1" size="lg" value="1" />
          <Label htmlFor="r-lg-1">lg - 选项一</Label>
        </div>
        <div className="flex items-center gap-2">
          <RadioGroupItem id="r-lg-2" size="lg" value="2" />
          <Label htmlFor="r-lg-2">lg - 选项二</Label>
        </div>
      </RadioGroup>
    </div>
  );
};

export default App;
