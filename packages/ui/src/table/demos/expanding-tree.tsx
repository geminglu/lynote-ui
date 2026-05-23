"use client";

import type { ColumnDef } from "@tanstack/react-table";
import { Badge } from "lynote-ui/badge";
import { DataTable, RowExpandToggle } from "lynote-ui/table";

type Department = {
  id: string;
  name: string;
  head: string;
  members: number;
  budget: number;
  subRows?: Department[];
};

const data: Department[] = [
  {
    id: "tech",
    name: "技术中心",
    head: "李拓",
    members: 86,
    budget: 1200_0000,
    subRows: [
      {
        id: "tech-frontend",
        name: "前端组",
        head: "周南",
        members: 18,
        budget: 280_0000,
        subRows: [
          {
            id: "tech-frontend-web",
            name: "Web 平台",
            head: "陈玥",
            members: 9,
            budget: 150_0000,
          },
          {
            id: "tech-frontend-app",
            name: "App 平台",
            head: "顾远",
            members: 9,
            budget: 130_0000,
          },
        ],
      },
      {
        id: "tech-backend",
        name: "后端组",
        head: "莫白",
        members: 32,
        budget: 520_0000,
      },
      {
        id: "tech-data",
        name: "数据组",
        head: "韩青",
        members: 14,
        budget: 220_0000,
      },
    ],
  },
  {
    id: "product",
    name: "产品中心",
    head: "苏溯",
    members: 22,
    budget: 360_0000,
    subRows: [
      {
        id: "product-b2b",
        name: "B 端产品",
        head: "唐雪",
        members: 10,
        budget: 180_0000,
      },
      {
        id: "product-b2c",
        name: "C 端产品",
        head: "葛远",
        members: 12,
        budget: 180_0000,
      },
    ],
  },
  {
    id: "ops",
    name: "运营中心",
    head: "孟夏",
    members: 16,
    budget: 240_0000,
  },
];

const currency = new Intl.NumberFormat("zh-CN", {
  style: "currency",
  currency: "CNY",
  maximumFractionDigits: 0,
});

const columns: ColumnDef<Department>[] = [
  {
    accessorKey: "name",
    header: "部门",
    cell: ({ row }) => (
      <div className="flex items-center gap-1">
        <RowExpandToggle row={row} placeholder />
        <span className="font-medium">{row.original.name}</span>
      </div>
    ),
  },
  { accessorKey: "head", header: "负责人" },
  {
    accessorKey: "members",
    header: () => <div className="text-right">人数</div>,
    cell: ({ row }) => (
      <div className="text-right tabular-nums">{row.original.members}</div>
    ),
  },
  {
    accessorKey: "budget",
    header: () => <div className="text-right">年度预算</div>,
    cell: ({ row }) => (
      <div className="text-right font-medium tabular-nums">
        {currency.format(row.original.budget)}
      </div>
    ),
  },
  {
    id: "depth",
    header: "层级",
    cell: ({ row }) => <Badge variant="outline">L{row.depth + 1}</Badge>,
  },
];

/**
 * 嵌套树:`features.expanding = true` + `tableOptions.getSubRows`,
 * 在 cell 内用 `<RowExpandToggle row={row} />` 提供展开按钮
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
    initialState={{ expanded: true }}
    tableOptions={{
      getRowId: (row) => row.id,
      getSubRows: (row) => row.subRows,
    }}
  />
);

export default App;
