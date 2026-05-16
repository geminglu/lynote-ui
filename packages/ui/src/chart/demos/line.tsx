import { CartesianGrid, Line, LineChart, XAxis, YAxis } from "recharts";

import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "lynote-ui/chart";

const chartData = [
  { month: "1月", revenue: 4000, cost: 2400 },
  { month: "2月", revenue: 3000, cost: 1398 },
  { month: "3月", revenue: 2000, cost: 9800 },
  { month: "4月", revenue: 2780, cost: 3908 },
  { month: "5月", revenue: 1890, cost: 4800 },
  { month: "6月", revenue: 2390, cost: 3800 },
];

const chartConfig = {
  revenue: { label: "收入", color: "hsl(var(--chart-1))" },
  cost: { label: "成本", color: "hsl(var(--chart-2))" },
};

const App: React.FC = () => {
  return (
    <ChartContainer config={chartConfig}>
      <LineChart data={chartData}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="month" />
        <YAxis />
        <ChartTooltip content={<ChartTooltipContent />} />
        <Line
          type="monotone"
          dataKey="revenue"
          stroke="var(--color-revenue)"
          strokeWidth={2}
        />
        <Line
          type="monotone"
          dataKey="cost"
          stroke="var(--color-cost)"
          strokeWidth={2}
        />
      </LineChart>
    </ChartContainer>
  );
};

export default App;
