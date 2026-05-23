"use client";

import type { ColumnDef } from "@tanstack/react-table";
import { Badge } from "lynote-ui/badge";
import { DataTable } from "lynote-ui/table";

type Product = {
  id: string;
  name: string;
  category: string;
  stock: number;
  price: number;
  status: "in_stock" | "low_stock" | "out_of_stock";
};

const data: Product[] = [
  {
    id: "p001",
    name: "MacBook Pro 14",
    category: "笔记本",
    stock: 128,
    price: 14999,
    status: "in_stock",
  },
  {
    id: "p002",
    name: "iPad Air",
    category: "平板",
    stock: 36,
    price: 4599,
    status: "in_stock",
  },
  {
    id: "p003",
    name: "AirPods Pro 2",
    category: "音频",
    stock: 8,
    price: 1899,
    status: "low_stock",
  },
  {
    id: "p004",
    name: "Magic Keyboard",
    category: "配件",
    stock: 0,
    price: 799,
    status: "out_of_stock",
  },
  {
    id: "p005",
    name: "Studio Display",
    category: "显示器",
    stock: 14,
    price: 11499,
    status: "in_stock",
  },
];

const statusMap: Record<
  Product["status"],
  { label: string; variant: "default" | "secondary" | "destructive" }
> = {
  in_stock: { label: "有货", variant: "default" },
  low_stock: { label: "库存紧张", variant: "secondary" },
  out_of_stock: { label: "缺货", variant: "destructive" },
};

const columns: ColumnDef<Product>[] = [
  { accessorKey: "name", header: "商品名称" },
  { accessorKey: "category", header: "类目" },
  {
    accessorKey: "stock",
    header: () => <div className="text-right">库存</div>,
    cell: ({ row }) => <div className="text-right">{row.original.stock}</div>,
  },
  {
    accessorKey: "price",
    header: () => <div className="text-right">单价</div>,
    cell: ({ row }) => (
      <div className="text-right font-medium">
        {new Intl.NumberFormat("zh-CN", {
          style: "currency",
          currency: "CNY",
        }).format(row.original.price)}
      </div>
    ),
  },
  {
    accessorKey: "status",
    header: "状态",
    cell: ({ row }) => {
      const { label, variant } = statusMap[row.original.status];
      return <Badge variant={variant}>{label}</Badge>;
    },
  },
];

/**
 * 通过 `bordered` 开启纵向单元格分隔线
 *
 * - 默认仅有横向分隔线,视觉更轻
 * - 数据密集 / 数字列较多的场景开启 `bordered`,扫读对齐更清晰
 */
const App = () => (
  <div className="flex flex-col gap-6">
    <section className="flex flex-col gap-2">
      <h4 className="text-foreground text-sm font-medium">默认(无纵向边框)</h4>
      <DataTable
        columns={columns}
        data={data}
        features={{ pagination: false, columnVisibility: false }}
      />
    </section>
    <section className="flex flex-col gap-2">
      <h4 className="text-foreground text-sm font-medium">bordered</h4>
      <DataTable
        columns={columns}
        data={data}
        bordered
        features={{ pagination: false, columnVisibility: false }}
      />
    </section>
  </div>
);

export default App;
