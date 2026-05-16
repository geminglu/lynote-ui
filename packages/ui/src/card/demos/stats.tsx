import { ArrowDownIcon, ArrowUpIcon } from "lucide-react";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "lynote-ui/card";

const App: React.FC = () => {
  return (
    <div className="grid w-full grid-cols-1 gap-4 sm:grid-cols-3">
      <Card>
        <CardHeader>
          <CardDescription>本月营收</CardDescription>
          <CardTitle className="text-2xl font-semibold">¥45,231</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="text-muted-foreground flex items-center gap-1 text-xs">
            <ArrowUpIcon className="size-3.5 text-emerald-500" />
            <span className="font-medium text-emerald-500">+12.5%</span>
            <span>较上月</span>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardDescription>付费用户</CardDescription>
          <CardTitle className="text-2xl font-semibold">2,340</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="text-muted-foreground flex items-center gap-1 text-xs">
            <ArrowUpIcon className="size-3.5 text-emerald-500" />
            <span className="font-medium text-emerald-500">+5.2%</span>
            <span>较上月</span>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardDescription>本月退款</CardDescription>
          <CardTitle className="text-2xl font-semibold">¥1,250</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="text-muted-foreground flex items-center gap-1 text-xs">
            <ArrowDownIcon className="size-3.5 text-rose-500" />
            <span className="font-medium text-rose-500">-3.1%</span>
            <span>较上月</span>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default App;
