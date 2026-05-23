"use client";

import type { ColumnDef } from "@tanstack/react-table";
import { DataTable, DataTableToolbar } from "lynote-ui/table";

type Row = {
  id: number;
  name: string;
  email: string;
  amount: number;
  city: string;
};

const cities = ["北京", "上海", "广州", "深圳", "杭州", "成都", "南京", "苏州"];

const data: Row[] = Array.from({ length: 10_000 }).map((_, index) => ({
  id: index + 1,
  name: `用户 ${index + 1}`,
  email: `user_${index + 1}@example.com`,
  amount: Math.floor(Math.random() * 100000) / 100,
  city: cities[index % cities.length],
}));

const columns: ColumnDef<Row>[] = [
  { accessorKey: "id", header: "ID", size: 80 },
  { accessorKey: "name", header: "姓名", size: 160 },
  { accessorKey: "email", header: "邮箱", size: 280 },
  { accessorKey: "city", header: "城市", size: 120 },
  {
    accessorKey: "amount",
    header: "金额",
    size: 140,
    cell: ({ row }) => (
      <span className="font-medium">¥{row.original.amount.toFixed(2)}</span>
    ),
  },
];

/**
 * 行虚拟滚动:`virtual` 开启后只渲染可视区域行
 *
 * 传对象可自定义 `estimateRowHeight` / `maxHeight` / `overscan`
 * 开启后自动关闭分页
 */
const App = () => (
  <DataTable
    columns={columns}
    data={data}
    virtual={{ estimateRowHeight: 36, maxHeight: 420, overscan: 12 }}
    features={{ columnVisibility: false }}
    renderToolbar={(table) => (
      <DataTableToolbar
        table={table}
        searchColumnId="name"
        searchPlaceholder="搜索姓名..."
        showViewOptions={false}
      />
    )}
  />
);

export default App;
