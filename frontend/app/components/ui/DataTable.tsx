import {
  flexRender,
  type Table as TanstackTable,
} from "@tanstack/react-table";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSort,
  faSortUp,
  faSortDown,
} from "@fortawesome/free-solid-svg-icons";

/**
 * Props for the DataTable component
 */
export interface DataTableProps<TData> {
  /**
   * Tanstack Table instance
   */
  table: TanstackTable<TData>;
  /**
   * Message to display when no data is available
   */
  emptyMessage?: string;
  /**
   * Optional loading state
   */
  isLoading?: boolean;
  /**
   * Optional className for the table wrapper
   */
  className?: string;
}

/**
 * Reusable DataTable component using Tanstack Table
 * Provides consistent table styling with sorting indicators
 *
 * @example
 * ```tsx
 * const table = useReactTable({
 *   data,
 *   columns,
 *   getCoreRowModel: getCoreRowModel(),
 *   getSortedRowModel: getSortedRowModel(),
 * });
 *
 * <DataTable
 *   table={table}
 *   emptyMessage="No results found"
 * />
 * ```
 */
export function DataTable<TData>({
  table,
  emptyMessage = "No data available",
  isLoading = false,
  className = "",
}: DataTableProps<TData>) {
  if (isLoading) {
    return (
      <div className="flex justify-center py-8">
        <span className="loading loading-spinner loading-lg" />
      </div>
    );
  }

  return (
    <div className={`overflow-x-auto ${className}`}>
      <table className="table table-zebra w-full">
        <thead>
          {table.getHeaderGroups().map((headerGroup) => (
            <tr key={headerGroup.id}>
              {headerGroup.headers.map((header) => (
                <th key={header.id}>
                  {header.isPlaceholder ? null : (
                    <div
                      className={`flex items-center gap-2 ${
                        header.column.getCanSort()
                          ? "cursor-pointer select-none hover:text-black"
                          : ""
                      }`}
                      onClick={header.column.getToggleSortingHandler()}
                    >
                      {flexRender(
                        header.column.columnDef.header,
                        header.getContext()
                      )}
                      {header.column.getCanSort() && (
                        <FontAwesomeIcon
                          icon={
                            header.column.getIsSorted() === "desc"
                              ? faSortDown
                              : header.column.getIsSorted() === "asc"
                              ? faSortUp
                              : faSort
                          }
                          className="w-3 h-3 opacity-50"
                        />
                      )}
                    </div>
                  )}
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody>
          {table.getRowModel().rows.length === 0 ? (
            <tr>
              <td
                colSpan={table.getAllColumns().length}
                className="text-center py-8"
              >
                {emptyMessage}
              </td>
            </tr>
          ) : (
            table.getRowModel().rows.map((row) => (
              <tr key={row.id}>
                {row.getVisibleCells().map((cell) => (
                  <td key={cell.id}>
                    {flexRender(cell.column.columnDef.cell, cell.getContext())}
                  </td>
                ))}
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  );
}

export default DataTable;
