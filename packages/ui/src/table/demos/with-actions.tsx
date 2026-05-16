import { MoreHorizontalIcon } from "lucide-react";

import { Badge } from "lynote-ui/badge";
import { Button } from "lynote-ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "lynote-ui/dropdown-menu";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "lynote-ui/table";

const invoices = [
  { id: "INV001", status: "paid", method: "信用卡", amount: "¥250" },
  { id: "INV002", status: "pending", method: "PayPal", amount: "¥150" },
  { id: "INV003", status: "unpaid", method: "银行转账", amount: "¥350" },
  { id: "INV004", status: "paid", method: "信用卡", amount: "¥450" },
];

const statusVariant: Record<string, "default" | "secondary" | "destructive"> = {
  paid: "default",
  pending: "secondary",
  unpaid: "destructive",
};

const App: React.FC = () => {
  return (
    <Table>
      <TableCaption>近期的发票一览</TableCaption>
      <TableHeader>
        <TableRow>
          <TableHead className="w-[100px]">发票号</TableHead>
          <TableHead>状态</TableHead>
          <TableHead>支付方式</TableHead>
          <TableHead className="text-right">金额</TableHead>
          <TableHead className="w-12" />
        </TableRow>
      </TableHeader>
      <TableBody>
        {invoices.map((it) => (
          <TableRow key={it.id}>
            <TableCell className="font-medium">{it.id}</TableCell>
            <TableCell>
              <Badge variant={statusVariant[it.status]}>{it.status}</Badge>
            </TableCell>
            <TableCell>{it.method}</TableCell>
            <TableCell className="text-right">{it.amount}</TableCell>
            <TableCell>
              <DropdownMenu>
                <DropdownMenuTrigger
                  render={
                    <Button variant="ghost" size="icon-sm" aria-label="操作">
                      <MoreHorizontalIcon />
                    </Button>
                  }
                />
                <DropdownMenuContent align="end">
                  <DropdownMenuItem>查看</DropdownMenuItem>
                  <DropdownMenuItem>编辑</DropdownMenuItem>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem variant="destructive">
                    删除
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};

export default App;
