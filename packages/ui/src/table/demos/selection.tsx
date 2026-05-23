"use client";

import type { ColumnDef, RowSelectionState } from "@tanstack/react-table";
import { Badge } from "lynote-ui/badge";
import { Button } from "lynote-ui/button";
import { Checkbox } from "lynote-ui/checkbox";
import { DataTable } from "lynote-ui/table";
import { useMemo, useState } from "react";

type Person = {
  id: string;
  name: string;
  role: "管理员" | "编辑" | "查看者";
  department: string;
  /** 禁止选择的行(例如系统账号) */
  disabled?: boolean;
};

const data: Person[] = [
  { id: "u01", name: "张三", role: "管理员", department: "技术部" },
  {
    id: "u02",
    name: "李四(系统账号)",
    role: "管理员",
    department: "系统",
    disabled: true,
  },
  { id: "u03", name: "王五", role: "编辑", department: "运营部" },
  { id: "u04", name: "赵六", role: "查看者", department: "市场部" },
  {
    id: "u05",
    name: "钱七(已离职)",
    role: "查看者",
    department: "财务部",
    disabled: true,
  },
  { id: "u06", name: "孙八", role: "编辑", department: "运营部" },
  { id: "u07", name: "周九", role: "查看者", department: "市场部" },
];

type Mode = "multi" | "single";

const App = () => {
  /** 受控:外部完全持有 rowSelection,可被 form / 路由驱动 */
  const [rowSelection, setRowSelection] = useState<RowSelectionState>({
    u01: true,
  });
  const [mode, setMode] = useState<Mode>("multi");

  const columns = useMemo<ColumnDef<Person>[]>(
    () => [
      {
        id: "select",
        size: 48,
        enableSorting: false,
        enableHiding: false,
        /** 单选模式不渲染全选 Checkbox */
        header:
          mode === "multi"
            ? ({ table }) => (
                <Checkbox
                  checked={
                    !!(
                      table.getIsAllPageRowsSelected() ||
                      (table.getIsSomePageRowsSelected() && "indeterminate")
                    )
                  }
                  onCheckedChange={(value) =>
                    table.toggleAllPageRowsSelected(!!value)
                  }
                  aria-label="全选"
                />
              )
            : () => null,
        cell: ({ row }) => (
          <Checkbox
            checked={row.getIsSelected()}
            disabled={!row.getCanSelect()}
            onCheckedChange={(value) => row.toggleSelected(!!value)}
            aria-label={`选择 ${row.original.name}`}
          />
        ),
      },
      { accessorKey: "name", header: "姓名" },
      {
        accessorKey: "role",
        header: "角色",
        cell: ({ row }) => (
          <Badge variant="secondary">{row.original.role}</Badge>
        ),
      },
      { accessorKey: "department", header: "部门" },
    ],
    [mode],
  );

  const selectedRows = useMemo(
    () => data.filter((row) => rowSelection[row.id]),
    [rowSelection],
  );

  const switchMode = (next: Mode) => {
    setMode(next);
    setRowSelection({});
  };

  return (
    <div className="flex flex-col gap-3">
      <div className="flex flex-wrap items-center gap-2 text-sm">
        <Button
          size="sm"
          variant={mode === "multi" ? "default" : "outline"}
          onClick={() => switchMode("multi")}
        >
          多选
        </Button>
        <Button
          size="sm"
          variant={mode === "single" ? "default" : "outline"}
          onClick={() => switchMode("single")}
        >
          单选
        </Button>
        <Button
          size="sm"
          variant="ghost"
          onClick={() => setRowSelection({})}
          disabled={selectedRows.length === 0}
        >
          清空
        </Button>
        <div className="text-muted-foreground ml-auto">
          已选{" "}
          <strong className="text-foreground">{selectedRows.length}</strong> 行
          {selectedRows.length > 0 &&
            `:${selectedRows.map((row) => row.name).join("、")}`}
        </div>
      </div>
      <DataTable
        columns={columns}
        data={data}
        features={{
          rowSelection: true,
          pagination: false,
          sorting: false,
          filtering: false,
          columnVisibility: false,
        }}
        state={{ rowSelection }}
        onStateChange={{ onRowSelectionChange: setRowSelection }}
        tableOptions={{
          /** 以 `id` 字段做行键,rowSelection 的 key 就会是稳定的业务 id */
          getRowId: (row) => row.id,
          /** 单选模式下只允许同时选中一行 */
          enableMultiRowSelection: mode === "multi",
          /** 行级禁用:disabled 的行不可选 */
          enableRowSelection: (row) => !row.original.disabled,
        }}
      />
    </div>
  );
};

export default App;
