"use client";

import type { ColumnDef } from "@tanstack/react-table";
import { Button } from "lynote-ui/button";
import { DataTable, type DataTableHandle } from "lynote-ui/table";
import { useRef, useState } from "react";

type User = {
  id: string;
  name: string;
  role: "admin" | "editor" | "viewer";
  visits: number;
};

const data: User[] = Array.from({ length: 28 }, (_, i) => ({
  id: `u-${i + 1}`,
  name: `用户 ${i + 1}`,
  role: (["admin", "editor", "viewer"] as const)[i % 3],
  visits: Math.floor(Math.random() * 200),
}));

const columns: ColumnDef<User>[] = [
  { accessorKey: "id", header: "ID" },
  { accessorKey: "name", header: "姓名" },
  { accessorKey: "role", header: "角色" },
  {
    accessorKey: "visits",
    header: () => <div className="text-right">访问数</div>,
    cell: ({ row }) => (
      <div className="text-right tabular-nums">{row.original.visits}</div>
    ),
  },
];

/**
 * 通过 `ref` 拿到底层 TanStack `table` 实例,执行命令式操作:
 * 跳页、清空筛选 / 选择 / 排序、导出当前可见行等
 */
const App = () => {
  const tableRef = useRef<DataTableHandle<User>>(null);
  const [selectionInfo, setSelectionInfo] = useState<string>("");

  return (
    <div className="flex flex-col gap-3">
      <div className="flex flex-wrap gap-2">
        <Button
          variant="outline"
          size="sm"
          onClick={() => tableRef.current?.setPageIndex(0)}
        >
          跳到首页
        </Button>
        <Button
          variant="outline"
          size="sm"
          onClick={() =>
            tableRef.current?.setPageIndex(
              (tableRef.current?.getPageCount() ?? 1) - 1,
            )
          }
        >
          跳到末页
        </Button>
        <Button
          variant="outline"
          size="sm"
          onClick={() => tableRef.current?.toggleAllRowsSelected(true)}
        >
          全选所有行
        </Button>
        <Button
          variant="outline"
          size="sm"
          onClick={() => tableRef.current?.resetRowSelection()}
        >
          清空选择
        </Button>
        <Button
          variant="outline"
          size="sm"
          onClick={() => tableRef.current?.resetSorting()}
        >
          清空排序
        </Button>
        <Button
          variant="secondary"
          size="sm"
          onClick={() => {
            const selected =
              tableRef.current
                ?.getSelectedRowModel()
                .rows.map((r) => r.original.id) ?? [];
            setSelectionInfo(
              selected.length
                ? `已选 ${selected.length} 行:${selected.join(", ")}`
                : "尚未选择任何行",
            );
          }}
        >
          读取选中行
        </Button>
      </div>
      {selectionInfo && (
        <div className="text-muted-foreground text-xs">{selectionInfo}</div>
      )}
      <DataTable
        ref={tableRef}
        columns={columns}
        data={data}
        features={{ rowSelection: true, sorting: true }}
        tableOptions={{ getRowId: (row) => row.id }}
        initialState={{ pagination: { pageIndex: 0, pageSize: 5 } }}
      />
    </div>
  );
};

export default App;
