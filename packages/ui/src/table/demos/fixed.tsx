"use client";

import type { ColumnDef } from "@tanstack/react-table";
import { MoreHorizontalIcon } from "lucide-react";
import { Button } from "lynote-ui/button";
import { Checkbox } from "lynote-ui/checkbox";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "lynote-ui/dropdown-menu";
import { DataTable, DataTableToolbar } from "lynote-ui/table";

type Payment = {
  id: string;
  amount: number;
  status: "pending" | "processing" | "success" | "failed";
  email: string;
  name: { first: string; last: string };
};

const data: Payment[] = Array.from({ length: 30 }).map((_, index) => ({
  id: `id-${index.toString().padStart(4, "0")}`,
  amount: 100 + index * 33,
  status: (["pending", "processing", "success", "failed"] as const)[index % 4],
  email: `customer${index}@example.com`,
  name: {
    first: ["张", "李", "王", "赵", "刘"][index % 5],
    last: ["三", "四", "五", "六", "七"][index % 5],
  },
}));

const columns: ColumnDef<Payment>[] = [
  {
    id: "select",
    size: 48,
    enableSorting: false,
    enableHiding: false,
    header: ({ table }) => (
      <Checkbox
        checked={
          table.getIsAllPageRowsSelected() ||
          (table.getIsSomePageRowsSelected() && "indeterminate")
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
  {
    header: "姓名",
    columns: [
      { accessorKey: "name.first", id: "first", header: "姓" },
      { accessorKey: "name.last", id: "last", header: "名" },
    ],
  },
  { accessorKey: "email", header: "邮箱", size: 260 },
  { accessorKey: "status", header: "状态", size: 160 },
  {
    accessorKey: "amount",
    header: () => <div className="text-right">金额</div>,
    size: 180,
    cell: ({ row }) => (
      <div className="text-right font-medium">
        ¥{parseFloat(row.getValue("amount")).toFixed(2)}
      </div>
    ),
  },
  {
    id: "actions",
    header: "操作",
    size: 80,
    enableSorting: false,
    enableHiding: false,
    cell: () => (
      <DropdownMenu>
        <DropdownMenuTrigger
          render={
            <Button variant="ghost" size="icon-sm">
              <MoreHorizontalIcon />
            </Button>
          }
        />
        <DropdownMenuContent align="end">
          <DropdownMenuItem>查看</DropdownMenuItem>
          <DropdownMenuItem>编辑</DropdownMenuItem>
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
      columnPinning: true,
      columnResizing: true,
      columnOrdering: true,
    }}
    initialState={{
      columnPinning: { left: ["select"], right: ["actions"] },
    }}
    renderToolbar={(table) => (
      <DataTableToolbar
        table={table}
        searchColumnId="email"
        searchPlaceholder="搜索邮箱..."
        enableColumnOrdering
        enableColumnPinning
      />
    )}
  />
);

export default App;
