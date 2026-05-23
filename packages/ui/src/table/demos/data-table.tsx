"use client";

import type { ColumnDef } from "@tanstack/react-table";
import { MoreHorizontalIcon } from "lucide-react";
import { Button } from "lynote-ui/button";
import { Checkbox } from "lynote-ui/checkbox";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "lynote-ui/dropdown-menu";
import { DataTable, DataTableToolbar } from "lynote-ui/table";

type Payment = {
  id: string;
  amount: number;
  status: "pending" | "processing" | "success" | "failed";
  email: string;
};

const data: Payment[] = [
  { id: "728ed52f", amount: 100, status: "pending", email: "m@example.com" },
  {
    id: "728ed52g",
    amount: 200,
    status: "processing",
    email: "m2@example.com",
  },
  { id: "728ed52h", amount: 300, status: "success", email: "m3@example.com" },
  { id: "728ed52i", amount: 400, status: "failed", email: "m4@example.com" },
  { id: "728ed52j", amount: 500, status: "pending", email: "m5@example.com" },
  {
    id: "728ed52k",
    amount: 600,
    status: "processing",
    email: "m6@example.com",
  },
  { id: "728ed52l", amount: 700, status: "success", email: "m7@example.com" },
  { id: "728ed52m", amount: 800, status: "failed", email: "m8@example.com" },
  { id: "728ed52n", amount: 900, status: "pending", email: "m9@example.com" },
  { id: "728ed52o", amount: 1000, status: "success", email: "m10@example.com" },
  { id: "728ed52p", amount: 1100, status: "failed", email: "m11@example.com" },
];

const columns: ColumnDef<Payment>[] = [
  {
    id: "select",
    enableSorting: false,
    enableHiding: false,
    header: ({ table }) => (
      <Checkbox
        checked={
          !!(
            table.getIsAllPageRowsSelected() ||
            (table.getIsSomePageRowsSelected() && "indeterminate")
          )
        }
        onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
        aria-label="全选"
      />
    ),
    cell: ({ row }) => (
      <Checkbox
        checked={row.getIsSelected()}
        onCheckedChange={(value) => row.toggleSelected(!!value)}
        aria-label="选择此行"
      />
    ),
  },
  { accessorKey: "status", header: "状态" },
  { accessorKey: "email", header: "邮箱" },
  {
    accessorKey: "amount",
    header: () => <div className="text-right">金额</div>,
    cell: ({ row }) => {
      const amount = parseFloat(row.getValue("amount"));
      const formatted = new Intl.NumberFormat("zh-CN", {
        style: "currency",
        currency: "CNY",
      }).format(amount);
      return <div className="text-right font-medium">{formatted}</div>;
    },
  },
  {
    id: "actions",
    header: "操作",
    enableSorting: false,
    enableHiding: false,
    cell: ({ row }) => (
      <DropdownMenu>
        <DropdownMenuTrigger
          render={
            <Button variant="ghost" size="icon-sm" aria-label="打开菜单">
              <MoreHorizontalIcon />
            </Button>
          }
        />
        <DropdownMenuContent align="end">
          <DropdownMenuItem
            onClick={() => navigator.clipboard.writeText(row.original.id)}
          >
            复制订单 ID
          </DropdownMenuItem>
          <DropdownMenuSeparator />
          <DropdownMenuItem>查看客户</DropdownMenuItem>
          <DropdownMenuItem>查看订单详情</DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    ),
  },
];

const App = () => (
  <DataTable
    columns={columns}
    data={data}
    features={{
      rowSelection: true,
      sorting: true,
      filtering: true,
      pagination: true,
      columnVisibility: true,
    }}
    initialState={{ pagination: { pageIndex: 0, pageSize: 5 } }}
    renderToolbar={(table) => (
      <DataTableToolbar
        table={table}
        searchColumnId="email"
        searchPlaceholder="搜索邮箱..."
      />
    )}
  />
);

export default App;
