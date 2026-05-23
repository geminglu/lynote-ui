"use client";

import type { ColumnDef, PaginationState } from "@tanstack/react-table";
import { DataTable } from "lynote-ui/table";
import { useState } from "react";

type Log = {
  id: number;
  level: "info" | "warn" | "error";
  message: string;
  timestamp: string;
};

const levels: Log["level"][] = ["info", "warn", "error"];
const data: Log[] = Array.from({ length: 137 }).map((_, index) => ({
  id: index + 1,
  level: levels[index % 3],
  message: `应用日志 #${index + 1}`,
  timestamp: new Date(2026, 0, 1, index % 24, index % 60).toISOString(),
}));

const columns: ColumnDef<Log>[] = [
  { accessorKey: "id", header: "#", size: 60 },
  { accessorKey: "level", header: "等级", size: 80 },
  { accessorKey: "message", header: "消息" },
  { accessorKey: "timestamp", header: "时间" },
];

/**
 * 受控分页:外部持有 pageIndex / pageSize,可被路由或其他来源驱动
 */
const App = () => {
  const [pagination, setPagination] = useState<PaginationState>({
    pageIndex: 0,
    pageSize: 10,
  });

  return (
    <div className="flex flex-col gap-3">
      <div className="text-muted-foreground text-sm">
        当前页码:{pagination.pageIndex + 1},每页 {pagination.pageSize} 条
      </div>
      <DataTable
        columns={columns}
        data={data}
        state={{ pagination }}
        onStateChange={{ onPaginationChange: setPagination }}
        pageSizeOptions={[5, 10, 20, 50]}
        features={{ columnVisibility: false, sorting: false, filtering: false }}
      />
    </div>
  );
};

export default App;
