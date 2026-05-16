import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "lynote-ui/select";

const timezones = {
  亚洲: [
    "Asia/Shanghai",
    "Asia/Tokyo",
    "Asia/Seoul",
    "Asia/Singapore",
    "Asia/Bangkok",
    "Asia/Dubai",
    "Asia/Kolkata",
  ],
  欧洲: [
    "Europe/London",
    "Europe/Paris",
    "Europe/Berlin",
    "Europe/Madrid",
    "Europe/Rome",
    "Europe/Moscow",
  ],
  美洲: [
    "America/New_York",
    "America/Chicago",
    "America/Denver",
    "America/Los_Angeles",
    "America/Toronto",
    "America/Vancouver",
    "America/Sao_Paulo",
  ],
};

const App: React.FC = () => {
  return (
    <Select>
      <SelectTrigger className="w-[260px]">
        <SelectValue placeholder="选择时区" />
      </SelectTrigger>
      <SelectContent className="max-h-64">
        {Object.entries(timezones).map(([region, list]) => (
          <SelectGroup key={region}>
            <SelectLabel>{region}</SelectLabel>
            {list.map((tz) => (
              <SelectItem key={tz} value={tz}>
                {tz}
              </SelectItem>
            ))}
          </SelectGroup>
        ))}
      </SelectContent>
    </Select>
  );
};

export default App;
