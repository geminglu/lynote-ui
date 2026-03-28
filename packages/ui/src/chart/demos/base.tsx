import { ChartContainer, ChartTooltip, ChartTooltipContent } from "lynote-ui";
import { Bar, BarChart, CartesianGrid, XAxis, YAxis } from "recharts";

const chartData = [
  { name: "一月", value: 400 },
  { name: "二月", value: 300 },
  { name: "三月", value: 200 },
  { name: "四月", value: 278 },
  { name: "五月", value: 189 },
];

const chartConfig = {
  value: {
    label: "数值",
    color: "hsl(var(--chart-1))",
  },
};

const App: React.FC = () => {
  return (
    <ChartContainer config={chartConfig}>
      <BarChart data={chartData}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <ChartTooltip content={<ChartTooltipContent />} />
        <Bar dataKey="value" fill="var(--color-value)" />
      </BarChart>
    </ChartContainer>
  );
};

export default App;
