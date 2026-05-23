"use client";

import type { ColumnDef } from "@tanstack/react-table";
import { Badge } from "lynote-ui/badge";
import { DataTable, RowDragHandle } from "lynote-ui/table";
import { useState } from "react";

type Task = {
  id: string;
  title: string;
  status: "todo" | "doing" | "done";
  priority: "low" | "mid" | "high";
};

const initialData: Task[] = [
  { id: "t1", title: "梳理需求文档", status: "done", priority: "high" },
  { id: "t2", title: "搭建脚手架", status: "done", priority: "high" },
  { id: "t3", title: "实现登录页", status: "doing", priority: "high" },
  { id: "t4", title: "对接订单接口", status: "doing", priority: "mid" },
  { id: "t5", title: "编写单元测试", status: "todo", priority: "mid" },
  { id: "t6", title: "性能优化", status: "todo", priority: "low" },
];

const priorityColor: Record<
  Task["priority"],
  "default" | "secondary" | "destructive"
> = {
  high: "destructive",
  mid: "default",
  low: "secondary",
};

/**
 * 行拖拽排序:`features.rowDnd = true`
 *
 *  - 默认在最左侧自动追加一列拖拽手柄
 *  - 也可自行在任意列里使用 `<RowDragHandle />`,这里第二个表格演示了把手柄挂在 "标题" 列前
 *  - 必须传 `tableOptions.getRowId` 提供稳定的行 id;`onRowOrderChange` 接住重排后的完整数据
 */
const App = () => {
  const [autoData, setAutoData] = useState(initialData);
  const [customData, setCustomData] = useState(initialData);

  const sharedColumns: ColumnDef<Task>[] = [
    { accessorKey: "title", header: "标题" },
    {
      accessorKey: "status",
      header: "状态",
      cell: ({ row }) => <Badge variant="outline">{row.original.status}</Badge>,
    },
    {
      accessorKey: "priority",
      header: "优先级",
      cell: ({ row }) => (
        <Badge variant={priorityColor[row.original.priority]}>
          {row.original.priority}
        </Badge>
      ),
    },
  ];

  /** 自定义手柄:把 RowDragHandle 放进自己的 cell 里(此时仍开启 rowDnd) */
  const customColumns: ColumnDef<Task>[] = [
    {
      id: "drag",
      size: 60,
      header: "",
      enableSorting: false,
      enableHiding: false,
      cell: () => (
        <div className="flex justify-center">
          <RowDragHandle className="text-foreground" />
        </div>
      ),
    },
    ...sharedColumns,
  ];

  return (
    <div className="flex flex-col gap-6">
      <section className="flex flex-col gap-2">
        <h4 className="text-foreground text-sm font-medium">
          默认手柄(自动追加列)
        </h4>
        <DataTable
          columns={sharedColumns}
          data={autoData}
          features={{
            rowDnd: true,
            pagination: false,
            columnVisibility: false,
          }}
          tableOptions={{ getRowId: (row) => row.id }}
          onRowOrderChange={(next) => setAutoData(next)}
        />
      </section>
      <section className="flex flex-col gap-2">
        <h4 className="text-foreground text-sm font-medium">
          自定义手柄列(把 `RowDragHandle` 放进自己的列)
        </h4>
        <DataTable
          columns={customColumns}
          data={customData}
          features={{
            rowDnd: true,
            pagination: false,
            columnVisibility: false,
          }}
          rowDndHandle="manual"
          tableOptions={{ getRowId: (row) => row.id }}
          onRowOrderChange={(next) => setCustomData(next)}
        />
      </section>
    </div>
  );
};

export default App;
