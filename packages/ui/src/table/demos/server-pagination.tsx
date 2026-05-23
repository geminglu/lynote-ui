"use client";

import type {
  ColumnDef,
  PaginationState,
  SortingState,
} from "@tanstack/react-table";
import { DataTable } from "lynote-ui/table";
import { useEffect, useMemo, useState } from "react";

type User = {
  id: number;
  name: string;
  email: string;
  createdAt: string;
};

/**
 * 模拟一个分页 + 排序的远端接口
 */
async function fetchUsers({
  pageIndex,
  pageSize,
  sortBy,
  sortOrder,
}: {
  pageIndex: number;
  pageSize: number;
  sortBy?: string;
  sortOrder?: "asc" | "desc";
}): Promise<{ rows: User[]; total: number }> {
  const total = 235;
  const all: User[] = Array.from({ length: total }).map((_, index) => ({
    id: index + 1,
    name: `用户 ${index + 1}`,
    email: `user_${index + 1}@example.com`,
    createdAt: new Date(2026, 0, 1 + (index % 28)).toISOString().slice(0, 10),
  }));

  const sorted = sortBy
    ? [...all].sort((a, b) => {
        const av = a[sortBy as keyof User];
        const bv = b[sortBy as keyof User];
        const result = av > bv ? 1 : av < bv ? -1 : 0;
        return sortOrder === "desc" ? -result : result;
      })
    : all;

  await new Promise((resolve) => setTimeout(resolve, 400));
  return {
    rows: sorted.slice(pageIndex * pageSize, (pageIndex + 1) * pageSize),
    total,
  };
}

const columns: ColumnDef<User>[] = [
  { accessorKey: "id", header: "ID", size: 60 },
  { accessorKey: "name", header: "姓名" },
  { accessorKey: "email", header: "邮箱" },
  { accessorKey: "createdAt", header: "注册时间" },
];

/**
 * 服务端分页 + 排序:`tableOptions.manualPagination + pageCount`
 * 配合 `loading` 显示骨架
 */
const App = () => {
  const [pagination, setPagination] = useState<PaginationState>({
    pageIndex: 0,
    pageSize: 10,
  });
  const [sorting, setSorting] = useState<SortingState>([]);
  const [{ rows, total }, setResult] = useState<{
    rows: User[];
    total: number;
  }>({ rows: [], total: 0 });
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    let cancelled = false;
    setLoading(true);
    fetchUsers({
      pageIndex: pagination.pageIndex,
      pageSize: pagination.pageSize,
      sortBy: sorting[0]?.id,
      sortOrder: sorting[0]?.desc ? "desc" : "asc",
    })
      .then((next) => {
        if (!cancelled) setResult(next);
      })
      .finally(() => {
        if (!cancelled) setLoading(false);
      });
    return () => {
      cancelled = true;
    };
  }, [pagination.pageIndex, pagination.pageSize, sorting]);

  const pageCount = useMemo(
    () => Math.ceil(total / pagination.pageSize),
    [total, pagination.pageSize],
  );

  return (
    <DataTable
      columns={columns}
      data={rows}
      loading={loading}
      state={{ pagination, sorting }}
      onStateChange={{
        onPaginationChange: setPagination,
        onSortingChange: setSorting,
      }}
      features={{ filtering: false, columnVisibility: false }}
      tableOptions={{
        manualPagination: true,
        manualSorting: true,
        pageCount,
        rowCount: total,
      }}
    />
  );
};

export default App;
