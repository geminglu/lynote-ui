"use client";

import {
  keepPreviousData,
  QueryClient,
  QueryClientProvider,
  useQuery,
} from "@tanstack/react-query";
import type {
  ColumnDef,
  ColumnFiltersState,
  PaginationState,
  SortingState,
} from "@tanstack/react-table";
import { Badge } from "lynote-ui/badge";
import { DataTable, DataTableToolbar } from "lynote-ui/table";
import { useMemo, useState } from "react";

type Product = {
  id: number;
  name: string;
  category: "电子" | "服饰" | "食品" | "图书";
  stock: number;
  price: number;
};

const categories: Product["category"][] = ["电子", "服饰", "食品", "图书"];
const dataset: Product[] = Array.from({ length: 320 }).map((_, index) => ({
  id: index + 1,
  name: `商品 ${index + 1}`,
  category: categories[index % categories.length],
  stock: (index * 17) % 200,
  price: 9.9 + ((index * 7) % 990),
}));

type ListQuery = {
  pageIndex: number;
  pageSize: number;
  category?: string;
  keyword?: string;
  sortBy?: string;
  sortDesc?: boolean;
};

/**
 * 模拟分页 / 筛选 / 排序的远端查询
 */
async function fetchProducts(query: ListQuery) {
  await new Promise((resolve) => setTimeout(resolve, 350));
  let list = dataset;
  if (query.category) list = list.filter((p) => p.category === query.category);
  if (query.keyword) {
    const k = query.keyword.toLowerCase();
    list = list.filter((p) => p.name.toLowerCase().includes(k));
  }
  if (query.sortBy) {
    list = [...list].sort((a, b) => {
      const av = a[query.sortBy as keyof Product];
      const bv = b[query.sortBy as keyof Product];
      const result = av > bv ? 1 : av < bv ? -1 : 0;
      return query.sortDesc ? -result : result;
    });
  }
  return {
    rows: list.slice(
      query.pageIndex * query.pageSize,
      (query.pageIndex + 1) * query.pageSize,
    ),
    total: list.length,
  };
}

const columns: ColumnDef<Product>[] = [
  { accessorKey: "id", header: "ID", size: 60 },
  { accessorKey: "name", header: "名称" },
  {
    accessorKey: "category",
    header: "分类",
    filterFn: "equals",
    cell: ({ row }) => (
      <Badge variant="secondary">{row.original.category}</Badge>
    ),
  },
  { accessorKey: "stock", header: "库存" },
  {
    accessorKey: "price",
    header: () => <div className="text-right">价格</div>,
    cell: ({ row }) => (
      <div className="text-right font-medium">
        ¥{row.original.price.toFixed(2)}
      </div>
    ),
  },
];

function ProductsTable() {
  const [pagination, setPagination] = useState<PaginationState>({
    pageIndex: 0,
    pageSize: 10,
  });
  const [sorting, setSorting] = useState<SortingState>([]);
  const [columnFilters, setColumnFilters] = useState<ColumnFiltersState>([]);
  const [globalFilter, setGlobalFilter] = useState("");

  const category = columnFilters.find((filter) => filter.id === "category")
    ?.value as string | undefined;

  const query = useQuery({
    queryKey: ["products", pagination, sorting, category, globalFilter],
    queryFn: () =>
      fetchProducts({
        pageIndex: pagination.pageIndex,
        pageSize: pagination.pageSize,
        sortBy: sorting[0]?.id,
        sortDesc: sorting[0]?.desc,
        category,
        keyword: globalFilter,
      }),
    placeholderData: keepPreviousData,
  });

  const pageCount = useMemo(
    () => Math.ceil((query.data?.total ?? 0) / pagination.pageSize),
    [query.data?.total, pagination.pageSize],
  );

  return (
    <DataTable
      columns={columns}
      data={query.data?.rows ?? []}
      loading={query.isFetching && !query.data}
      state={{ pagination, sorting, columnFilters, globalFilter }}
      onStateChange={{
        onPaginationChange: setPagination,
        onSortingChange: setSorting,
        onColumnFiltersChange: setColumnFilters,
        onGlobalFilterChange: setGlobalFilter,
      }}
      features={{ globalFilter: true, columnVisibility: false }}
      renderToolbar={(table) => (
        <DataTableToolbar
          table={table}
          searchPlaceholder="搜索商品名称..."
          showViewOptions={false}
        />
      )}
      tableOptions={{
        manualPagination: true,
        manualFiltering: true,
        manualSorting: true,
        pageCount,
        rowCount: query.data?.total,
      }}
    />
  );
}

const client = new QueryClient({
  defaultOptions: { queries: { staleTime: 30_000 } },
});

const App = () => (
  <QueryClientProvider client={client}>
    <ProductsTable />
  </QueryClientProvider>
);

export default App;
