"use client";

import type { Column, ColumnDef } from "@tanstack/react-table";
import { Badge } from "lynote-ui/badge";
import { NativeSelect, NativeSelectOption } from "lynote-ui/native-select";
import { DataTable, DataTableToolbar } from "lynote-ui/table";
import { useMemo } from "react";

type Order = {
  id: string;
  customer: string;
  region: "华东" | "华北" | "华南" | "西部";
  status: "pending" | "paid" | "shipped" | "refunded";
  amount: number;
};

const regions = ["华东", "华北", "华南", "西部"] as const;
const statuses = ["pending", "paid", "shipped", "refunded"] as const;
const statusVariant: Record<
  Order["status"],
  "default" | "secondary" | "destructive"
> = {
  pending: "secondary",
  paid: "default",
  shipped: "default",
  refunded: "destructive",
};

const data: Order[] = Array.from({ length: 60 }).map((_, index) => ({
  id: `ORD-${(index + 1).toString().padStart(4, "0")}`,
  customer: ["张三", "李四", "王五", "赵六", "钱七"][index % 5],
  region: regions[index % regions.length],
  status: statuses[index % statuses.length],
  amount: 200 + ((index * 137) % 9000),
}));

/**
 * 列下拉筛选:绑定 column.getFilterValue / setFilterValue
 *
 * `filterFn: "equals"` 让筛选器进行精确匹配
 */
function FacetFilter<TData, TValue>({
  column,
  placeholder,
  options,
}: {
  column: Column<TData, TValue>;
  placeholder: string;
  options: readonly string[];
}) {
  const value = (column.getFilterValue() as string | undefined) ?? "";
  return (
    <NativeSelect
      size="sm"
      value={value}
      onChange={(event) =>
        column.setFilterValue(event.target.value || undefined)
      }
      aria-label={placeholder}
    >
      <NativeSelectOption value="">{placeholder}</NativeSelectOption>
      {options.map((option) => (
        <NativeSelectOption key={option} value={option}>
          {option}
        </NativeSelectOption>
      ))}
    </NativeSelect>
  );
}

const App = () => {
  const columns = useMemo<ColumnDef<Order>[]>(
    () => [
      { accessorKey: "id", header: "订单号", enableColumnFilter: false },
      { accessorKey: "customer", header: "客户", enableColumnFilter: false },
      { accessorKey: "region", header: "区域", filterFn: "equals" },
      {
        accessorKey: "status",
        header: "状态",
        filterFn: "equals",
        cell: ({ row }) => (
          <Badge variant={statusVariant[row.original.status]}>
            {row.original.status}
          </Badge>
        ),
      },
      {
        accessorKey: "amount",
        header: () => <div className="text-right">金额</div>,
        enableColumnFilter: false,
        cell: ({ row }) => (
          <div className="text-right font-medium">
            ¥{row.original.amount.toFixed(2)}
          </div>
        ),
      },
    ],
    [],
  );

  return (
    <DataTable
      columns={columns}
      data={data}
      initialState={{ pagination: { pageIndex: 0, pageSize: 8 } }}
      renderToolbar={(table) => (
        <DataTableToolbar
          table={table}
          searchColumnId="customer"
          searchPlaceholder="按客户搜索..."
          extra={
            <>
              <FacetFilter
                column={table.getColumn("region")!}
                placeholder="全部区域"
                options={regions}
              />
              <FacetFilter
                column={table.getColumn("status")!}
                placeholder="全部状态"
                options={statuses}
              />
            </>
          }
        />
      )}
    />
  );
};

export default App;
