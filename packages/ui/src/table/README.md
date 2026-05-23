---
category: Components
title: Table 表格
subtitle: Table 表格
demo:
  cols: 1
group:
  title: 数据展示
  order: 1
nav: 组件
toc: content
background: #111
compact: true
---

Table 提供两层封装:

1. **基础组件**(`Table` / `TableHeader` / `TableBody` / `TableRow` / `TableHead` / `TableCell` …):仅样式封装,语义化原生 `<table>`。
2. **`DataTable`**:基于 `@tanstack/react-table` 的全功能数据表格。开箱即用排序、筛选、分页、行选择、列显隐 / 拖拽 / 固定 / 调宽等能力,内部按功能开关组装。

## 特性

- **语义化原生表格**:`<table>` + `<thead>` + `<tbody>`,读屏器友好。
- **结构化子组件**:`TableHeader` / `TableBody` / `TableFooter` / `TableRow` / `TableHead` / `TableCell` / `TableCaption`。
- **`DataTable` 一体化**:配置 `columns` + `data` + `features` 即可,默认不渲染工具栏。
- **工具栏完全外置**:通过 `renderToolbar(table)` 回调拿到表格实例,用 `DataTableToolbar` / `DataTableViewOptions` 自由组合;也可放到 DataTable 之外的页面任意位置。
- **细粒度组合**:`DataTableToolbar` / `DataTableColumnHeader` / `DataTableViewOptions` / `DataTablePagination` 可单独使用。
- **可控 / 非可控**:`state` + `onStateChange` 完全可控,`initialState` 兜底默认值。
- **固定列阴影**:横向滚动时自动出现 sticky 阴影。
- **列拖拽 / 固定 / 调宽**:由 `@dnd-kit` 与 TanStack 直接驱动,内置 UI 即可使用。

## 何时使用

- 数据密集的列表(订单、用户列表、日志)。
- 需要排序 / 筛选 / 分页 / 列管理的后台数据表。
- 需要左右固定列的宽表(`DataTable`)。

## 何时不使用

- 卡片型数据展示——使用 `Card`。
- 简单列表——使用 `Item` + `ItemGroup`。
- 大数据量(>10k 行)——配合虚拟滚动方案(`@tanstack/react-virtual`)。

## 导入

```ts | pure
// 基础表格
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "lynote-ui/table";

// 数据表格
import {
  DataTable,
  DataTableColumnHeader,
  DataTablePagination,
  DataTableToolbar,
  DataTableViewOptions,
  useDataTable,
} from "lynote-ui/table";
```

## 组件结构

```tsx | pure
<Table>
  <TableCaption />
  <TableHeader>
    <TableRow>
      <TableHead />
    </TableRow>
  </TableHeader>
  <TableBody>
    <TableRow>
      <TableCell />
    </TableRow>
  </TableBody>
  <TableFooter />
</Table>
```

## 代码演示

<code src="./demos/base.tsx">基本用法</code>

<code src="./demos/with-actions.tsx" description="带状态徽标 + 行操作菜单 + 标题区的完整业务表格。">业务示例</code>

<code src="./demos/merge.tsx" description="表头 / 表体 / 表尾 合并:`colSpan` + `rowSpan`,适合分组明细 / 汇总场景。">合并行 / 合并列</code>

<code src="./demos/merge-visibility.tsx" description="合并 + 列显隐:隐藏父字段列后,子字段的合并条件正确随之更新。">合并 × 列显隐</code>

<code src="./demos/data-table.tsx" description="使用 `DataTable` 一行配置即可获得排序 / 筛选 / 分页 / 行选择 / 列显隐。">数据表格</code>

<code src="./demos/fixed.tsx" description="左右固定列 + 列拖拽 + 列宽调整 + 多级表头。">固定列 / 列管理</code>

<code src="./demos/filters.tsx" description="工具栏内嵌区域 / 状态下拉筛选,通过 `toolbarExtra` 配合 `column.setFilterValue`。">列筛选</code>

<code src="./demos/selection.tsx" description="行选择:多选 / 单选 / 行级禁用,受控的 `rowSelection`。">行选择</code>

<code src="./demos/row-dnd.tsx" description="`features.rowDnd` 开启行拖拽排序,默认自动追加手柄列,也可用 `<RowDragHandle />` 手动放到任意列。">行拖拽排序</code>

<code src="./demos/expanding-tree.tsx" description="`features.expanding` + `tableOptions.getSubRows`,通过 `<RowExpandToggle />` 展开子行,自动按 `row.depth` 缩进。">嵌套树展开</code>

<code src="./demos/expanding-panel.tsx" description="`expandedRowRender` 在每行下方渲染自定义详情面板;`getRowCanExpand` 决定哪些行可展开。">展开行面板</code>

<code src="./demos/pagination.tsx" description="完全受控的分页:外部持有 pageIndex / pageSize,可与路由或 URL 同步。">受控分页</code>

<code src="./demos/server-pagination.tsx" description="`tableOptions.manualPagination + pageCount + rowCount` 接管分页和排序,后端返回当前页数据。">服务端分页</code>

<code src="./demos/react-query.tsx" description="`@tanstack/react-query` 驱动数据请求,`keepPreviousData` 实现切页不闪烁。">React Query 集成</code>

<code src="./demos/virtual.tsx" description="`virtual` 一行开启行虚拟滚动,1 万条数据丝滑滚动。">行虚拟滚动</code>

<code src="./demos/bordered.tsx" description="`bordered` 开启纵向单元格分隔线,适合数据密集型表格。">边框样式</code>

<code src="./demos/imperative-ref.tsx" description="通过 `ref` 拿到底层 TanStack table 实例,命令式跳页 / 全选 / 清空 / 读取选中行。">命令式 ref</code>

## 最佳实践

- **`TableCaption` 提供标题**:有助于读屏器与 SEO。
- **行操作放在最后一列**:固定到右侧(`columnPinning.right`),并通过 `size` 控制列宽。
- **数字列右对齐**:`className="text-right"`,便于数据对齐扫读。
- **`DataTable` 复杂场景**:用 `state` + `onStateChange` 接管,自行管理副作用(如 URL 同步、远端查询)。

## API

### 基础组件

所有基础组件都是对原生 `<table>` / `<thead>` / `<tbody>` / `<tr>` / `<th>` / `<td>` 元素的样式封装,完整支持原生属性。

| 组件         | 包装的元素  |
| ------------ | ----------- |
| Table        | `<table>`   |
| TableHeader  | `<thead>`   |
| TableBody    | `<tbody>`   |
| TableFooter  | `<tfoot>`   |
| TableRow     | `<tr>`      |
| TableHead    | `<th>`      |
| TableCell    | `<td>`      |
| TableCaption | `<caption>` |

### DataTable

| 属性              | 说明                                                                                                                                        | 类型                                 | 默认值              |
| ----------------- | ------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------ | ------------------- |
| columns           | 列定义(TanStack ColumnDef)                                                                                                                  | `ColumnDef<TData, TValue>[]`         | -                   |
| data              | 数据源                                                                                                                                      | `TData[]`                            | -                   |
| features          | 功能开关集合,见下表                                                                                                                         | `DataTableFeatures`                  | 见下表              |
| state             | 完全受控的表格状态                                                                                                                          | `DataTableState`                     | -                   |
| initialState      | 非受控初始状态                                                                                                                              | `DataTableState`                     | -                   |
| onStateChange     | 各类状态变更回调                                                                                                                            | `DataTableStateHandlers`             | -                   |
| loading           | 加载中,显示 Skeleton 占位                                                                                                                   | `boolean`                            | `false`             |
| renderToolbar     | 自定义工具栏渲染函数,接收 `table` 实例;不传则不渲染工具栏。搜索 / 视图请在内部用 `DataTableToolbar` / `DataTableViewOptions` 自行组合       | `(table) => ReactNode`               | -                   |
| renderPagination  | 自定义分页区域                                                                                                                              | `(table) => ReactNode`               | 内置分页            |
| empty             | 空数据占位                                                                                                                                  | `ReactNode`                          | `"暂无数据"`        |
| pageSizeOptions   | 每页可选数量                                                                                                                                | `number[]`                           | `[10,20,30,50,100]` |
| onRowClick        | 行点击回调                                                                                                                                  | `(row: TData) => void`               | -                   |
| onRowOrderChange  | 行拖拽完成,接收重排后的完整 `data`                                                                                                          | `(nextData, info) => void`           | -                   |
| rowDndHandle      | 行拖拽手柄安放方式;`"auto"` 自动追加一列,`"manual"` 由用户在 cell 中放 `<RowDragHandle />`                                                  | `"auto" \| "manual"`                 | `"auto"`            |
| expandedRowRender | 行展开面板渲染函数;返回节点将在该行下方跨满全列渲染;需 `features.expanding = true`                                                          | `(row) => ReactNode`                 | -                   |
| className         | 外层 className                                                                                                                              | `string`                             | -                   |
| tableClassName    | 表格滚动容器 className                                                                                                                      | `string`                             | -                   |
| bordered          | 是否显示纵向边框(单元格分隔线)                                                                                                              | `boolean`                            | `false`             |
| tableOptions      | 透传至 TanStack `useReactTable` 的额外配置;服务端模式用 `manualPagination` / `pageCount` / `rowCount` / `manualSorting` / `manualFiltering` | `Partial<TableOptions<TData>>`       | -                   |
| virtual           | 开启行虚拟滚动。`true` 使用默认配置;传对象自定义 `estimateRowHeight` / `maxHeight` / `overscan`。开启后会自动关闭分页                       | `boolean \| DataTableVirtualOptions` | `false`             |

### 单元格合并(column.meta)

`DataTable` 通过 `ColumnDef.meta` 描述合并行为(已对 `@tanstack/react-table` 的 `ColumnMeta` 进行了类型增强,直接写 `meta` 字段即可)。

| 字段          | 说明                                                                                       | 类型                                |
| ------------- | ------------------------------------------------------------------------------------------ | ----------------------------------- |
| rowSpan       | `true` / `"auto"` 自动合并连续相同值;函数形式返回显式 `rowSpan`,`0` 表示该格不渲染         | `true \| "auto" \| (ctx) => number` |
| rowSpanParent | 仅当父字段同时相同才允许行合并(如 city 在同 region 下才合并),仅 `rowSpan` 为 `true` 时生效 | `string`                            |
| colSpan       | 单元格按行内容跨列;函数返回 `colSpan`,被跨过的兄弟列自动跳过渲染                           | `(ctx) => number`                   |

> 表头列合并(grouped headers)通过 TanStack 原生嵌套 `columns: [...]` 表达,`DataTable` 已经按 `header.colSpan` 与 `isPlaceholder` 正确渲染。

### DataTableVirtualOptions

| 字段              | 说明                           | 默认值 |
| ----------------- | ------------------------------ | ------ |
| estimateRowHeight | 估计的行高(px)                 | `36`   |
| maxHeight         | 滚动容器高度(`number` 视为 px) | `480`  |
| overscan          | 视口外预渲染行数               | `10`   |

> 虚拟滚动采用 grid 布局,列固定 / 多级表头暂不兼容。

### DataTableFeatures

| 字段             | 说明                      | 默认值  |
| ---------------- | ------------------------- | ------- |
| sorting          | 启用排序                  | `true`  |
| multiSort        | 启用多列同时排序          | `false` |
| filtering        | 启用列筛选                | `true`  |
| globalFilter     | 启用全局搜索              | `false` |
| pagination       | 启用分页                  | `true`  |
| rowSelection     | 启用行多选                | `false` |
| columnVisibility | 启用列显隐控制            | `true`  |
| columnOrdering   | 启用列拖拽排序            | `false` |
| columnPinning    | 启用列固定(左 / 右)       | `false` |
| columnResizing   | 启用列宽拖拽调整          | `false` |
| rowDnd           | 启用行拖拽排序            | `false` |
| expanding        | 启用行展开(嵌套树 / 面板) | `false` |

### 命令式 ref

`DataTable` 通过 `ref` 直接暴露底层 TanStack `table` 实例(类型别名 `DataTableHandle<TData>`),
可以在组件外部调用 `setPageIndex` / `resetSorting` / `toggleAllRowsSelected` / `getSelectedRowModel` 等任意 TanStack API。

```tsx | pure
import { DataTable, type DataTableHandle } from "lynote-ui/table";
import { useRef } from "react";

const tableRef = useRef<DataTableHandle<User>>(null);

<Button onClick={() => tableRef.current?.resetRowSelection()}>清空选择</Button>
<DataTable ref={tableRef} columns={columns} data={data} />;
```

### useDataTable

```ts | pure
const { table } = useDataTable({
  data,
  columns,
  features,
  state,
  initialState,
  onStateChange,
});
```

返回 TanStack 表格实例,可单独配合 `DataTableToolbar` / `DataTableColumnHeader` / `DataTablePagination` 等组件自行组合 UI。

### 子组件

| 组件                  | 用途                                                                             |
| --------------------- | -------------------------------------------------------------------------------- |
| DataTableToolbar      | 工具栏:搜索框 + 视图配置 + 自定义扩展                                            |
| DataTableViewOptions  | 列显隐 / 拖拽 / 固定 设置面板(下拉菜单)                                          |
| DataTableColumnHeader | 表头单元格,封装排序、列宽拖拽、固定列阴影                                        |
| DataTablePagination   | 分页栏:总行数 / 每页数量 / 页码跳转                                              |
| DataTableVirtualBody  | 行虚拟滚动表格主体(grid 布局),也可单独使用                                       |
| RowDragHandle         | 行拖拽手柄(GripVertical 按钮);通过 context 自动接入所在行的 sortable             |
| RowExpandToggle       | 行展开切换按钮(ChevronRight/Down);自动按 `row.depth` 缩进,可用 `indent={0}` 关闭 |
