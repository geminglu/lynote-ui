"use client";

import type { ColumnDef } from "@tanstack/react-table";
import { DataTable, DataTableViewOptions } from "lynote-ui/table";

type SalesRow = {
  region: string;
  city: string;
  product: string;
  sales: number;
  orders: number;
};

const data: SalesRow[] = [
  { region: "华东", city: "上海", product: "iPhone", sales: 12000, orders: 30 },
  {
    region: "华东",
    city: "上海",
    product: "MacBook",
    sales: 28000,
    orders: 14,
  },
  { region: "华东", city: "杭州", product: "iPad", sales: 8000, orders: 22 },
  { region: "华南", city: "深圳", product: "iPhone", sales: 15000, orders: 38 },
  { region: "华南", city: "深圳", product: "AirPods", sales: 5000, orders: 50 },
  {
    region: "华南",
    city: "广州",
    product: "MacBook",
    sales: 32000,
    orders: 16,
  },
];

const currency = new Intl.NumberFormat("zh-CN", {
  style: "currency",
  currency: "CNY",
  maximumFractionDigits: 0,
});

const columns: ColumnDef<SalesRow>[] = [
  {
    accessorKey: "region",
    header: "区域",
    meta: { rowSpan: true },
  },
  {
    accessorKey: "city",
    header: "城市",
    meta: { rowSpan: true, rowSpanParent: "region" },
  },
  { accessorKey: "product", header: "商品" },
  {
    accessorKey: "sales",
    header: () => <div className="text-right">销售额</div>,
    cell: ({ row }) => (
      <div className="text-right font-medium tabular-nums">
        {currency.format(row.original.sales)}
      </div>
    ),
  },
  {
    accessorKey: "orders",
    header: () => <div className="text-right">订单数</div>,
    cell: ({ row }) => (
      <div className="text-right tabular-nums">{row.original.orders}</div>
    ),
  },
];

/**
 * 单元格合并 + 列显隐:通过 `视图` 隐藏 `区域` 列时,`城市` 列基于父字段的合并条件
 * 也会随之更新 —— 验证 `cellSpans` 在列显隐变化后能正确重算
 */
const App = () => (
  <DataTable
    columns={columns}
    data={data}
    bordered
    features={{ pagination: false }}
    renderToolbar={(table) => (
      <div className="flex justify-end py-3">
        <DataTableViewOptions table={table} />
      </div>
    )}
  />
);

export default App;
