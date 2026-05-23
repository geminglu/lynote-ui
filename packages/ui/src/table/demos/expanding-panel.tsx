"use client";

import type { ColumnDef } from "@tanstack/react-table";
import { Badge } from "lynote-ui/badge";
import { DataTable, RowExpandToggle } from "lynote-ui/table";

type Order = {
  id: string;
  customer: string;
  amount: number;
  status: "paid" | "pending" | "refunded";
  items: { name: string; qty: number; price: number }[];
  remark?: string;
};

const data: Order[] = [
  {
    id: "SO-20260512-001",
    customer: "Acme Co.",
    amount: 4380,
    status: "paid",
    items: [
      { name: "深度访谈", qty: 2, price: 1800 },
      { name: "可用性测试", qty: 1, price: 780 },
    ],
    remark: "客户希望尽快出报告,要求三周内完成。",
  },
  {
    id: "SO-20260513-002",
    customer: "Globex",
    amount: 2200,
    status: "pending",
    items: [{ name: "用户旅程图", qty: 1, price: 2200 }],
  },
  {
    id: "SO-20260514-003",
    customer: "Initech",
    amount: 6600,
    status: "refunded",
    items: [
      { name: "竞品分析", qty: 1, price: 3200 },
      { name: "竞争策略工作坊", qty: 1, price: 3400 },
    ],
    remark: "因方案调整,已全额退款。",
  },
];

const currency = new Intl.NumberFormat("zh-CN", {
  style: "currency",
  currency: "CNY",
});

const statusMap: Record<
  Order["status"],
  { label: string; variant: "default" | "secondary" | "destructive" }
> = {
  paid: { label: "已支付", variant: "default" },
  pending: { label: "待付款", variant: "secondary" },
  refunded: { label: "已退款", variant: "destructive" },
};

const columns: ColumnDef<Order>[] = [
  {
    id: "expander",
    size: 40,
    header: "",
    enableSorting: false,
    enableHiding: false,
    cell: ({ row }) => <RowExpandToggle row={row} placeholder />,
  },
  { accessorKey: "id", header: "订单号" },
  { accessorKey: "customer", header: "客户" },
  {
    accessorKey: "amount",
    header: () => <div className="text-right">金额</div>,
    cell: ({ row }) => (
      <div className="text-right font-medium tabular-nums">
        {currency.format(row.original.amount)}
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
 * 展开面板:在每行下方渲染自定义详情面板
 *
 * - `features.expanding = true` 开启展开能力
 * - 传 `expandedRowRender` 时,内部自动注入 `getRowCanExpand: () => true`(用户也可自行覆盖)
 * - `expandedRowRender` 返回行下方的面板节点
 */
const App = () => (
  <DataTable
    columns={columns}
    data={data}
    features={{
      expanding: true,
      pagination: false,
      columnVisibility: false,
    }}
    tableOptions={{
      getRowId: (row) => row.id,
    }}
    expandedRowRender={(row) => (
      <div className="flex flex-col gap-3 text-sm">
        <div>
          <div className="text-muted-foreground mb-1 text-xs">商品明细</div>
          <table className="w-full">
            <thead className="text-muted-foreground text-xs">
              <tr>
                <th className="py-1 text-left font-normal">名称</th>
                <th className="py-1 text-right font-normal">数量</th>
                <th className="py-1 text-right font-normal">单价</th>
                <th className="py-1 text-right font-normal">小计</th>
              </tr>
            </thead>
            <tbody>
              {row.original.items.map((item) => (
                <tr key={item.name}>
                  <td className="py-1">{item.name}</td>
                  <td className="py-1 text-right tabular-nums">{item.qty}</td>
                  <td className="py-1 text-right tabular-nums">
                    {currency.format(item.price)}
                  </td>
                  <td className="py-1 text-right font-medium tabular-nums">
                    {currency.format(item.qty * item.price)}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        {row.original.remark && (
          <div>
            <div className="text-muted-foreground mb-1 text-xs">备注</div>
            <div>{row.original.remark}</div>
          </div>
        )}
      </div>
    )}
  />
);

export default App;
