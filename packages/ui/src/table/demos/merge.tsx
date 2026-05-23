"use client";

import type { ColumnDef } from "@tanstack/react-table";
import { DataTable } from "lynote-ui/table";

type SalesRow = {
  region: "华东" | "华南" | "华北";
  city: string;
  product: string;
  sales: number;
  orders: number;
  /** 末行做汇总,通过 colSpan 横跨前 3 列 */
  isTotal?: boolean;
};

const baseRows: SalesRow[] = [
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
  { region: "华北", city: "北京", product: "iPhone", sales: 20000, orders: 42 },
];

const data: SalesRow[] = [
  ...baseRows,
  {
    region: "华北",
    city: "",
    product: "",
    sales: baseRows.reduce((sum, row) => sum + row.sales, 0),
    orders: baseRows.reduce((sum, row) => sum + row.orders, 0),
    isTotal: true,
  },
];

const columns: ColumnDef<SalesRow>[] = [
  // 父级表头(colSpan):TanStack 嵌套 columns 即可,DataTable 已自动支持
  {
    id: "location",
    header: "归属地",
    columns: [
      {
        accessorKey: "region",
        header: "区域",
        meta: {
          /**
           * 行合并 + 末行总计跨列:
           *  - 总计行 region 列横跨 3 列(region/city/product)
           *  - 其它行按 region 自动合并,但不与总计行合并
           */
          rowSpan: ({ row, rows, rowIndex, value }) => {
            if (row.original.isTotal) return 1;
            const prev = rows[rowIndex - 1]?.original;
            if (prev && !prev.isTotal && prev.region === value) return 0;
            let span = 1;
            for (let i = rowIndex + 1; i < rows.length; i += 1) {
              const next = rows[i].original;
              if (!next.isTotal && next.region === value) span += 1;
              else break;
            }
            return span;
          },
          colSpan: ({ row }) => (row.original.isTotal ? 3 : 1),
        },
        cell: ({ row }) =>
          row.original.isTotal ? (
            <span className="font-semibold">总计</span>
          ) : (
            <span className="font-medium">{row.original.region}</span>
          ),
      },
      {
        accessorKey: "city",
        header: "城市",
        meta: {
          /** 城市仅在同 region 内合并 */
          rowSpan: true,
          rowSpanParent: "region",
        },
      },
    ],
  },
  // 父级表头:销售明细(colSpan via 嵌套 columns)
  {
    id: "detail",
    header: () => <div className="text-center">销售明细</div>,
    columns: [
      { accessorKey: "product", header: "商品" },
      {
        accessorKey: "sales",
        header: () => <div className="text-right">销售额</div>,
        cell: ({ row }) => (
          <div
            className={
              row.original.isTotal ? "text-right font-semibold" : "text-right"
            }
          >
            ¥{row.original.sales.toLocaleString()}
          </div>
        ),
      },
      {
        accessorKey: "orders",
        header: () => <div className="text-right">订单数</div>,
        cell: ({ row }) => (
          <div
            className={
              row.original.isTotal ? "text-right font-semibold" : "text-right"
            }
          >
            {row.original.orders}
          </div>
        ),
      },
    ],
  },
];

const App = () => (
  <DataTable
    columns={columns}
    data={data}
    features={{
      pagination: false,
      sorting: false,
      filtering: false,
      columnVisibility: false,
    }}
  />
);

export default App;
