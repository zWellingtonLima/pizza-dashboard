import { Pagination } from "@/components/pagination";
import { Input } from "@/components/ui/input";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";

import { OrderTableFilters } from "./order-table-filters";
import { OrderTableRow } from "./order-table-row";

export function Orders() {
  return (
    <>
      <title>Pedidos</title>
      <meta name="description" content="Verifique a listagem de pedidos da sua pizzaria" />

      <div className="flex flex-col gap-4">
        <h1 className="text-3xl font-bold tracking-tight">
          Pedidos
        </h1>
        <div className="space-y-2.5">
          <OrderTableFilters />

          <div className="border rounded-md">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead className="w-[64px]"></TableHead>
                  <TableHead className="w-[140px]">Identificador</TableHead>
                  <TableHead className="w-[180px]">Realizado há</TableHead>
                  <TableHead className="w-[140px]">Status</TableHead>
                  <TableHead>Cliente</TableHead>
                  <TableHead className="w-[140px]">Total do pedido</TableHead>
                  <TableHead className="w-[164px]"></TableHead>
                  <TableHead className="w-[132px]"></TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                <OrderTableRow />
              </TableBody>
            </Table>
          </div>

          <Pagination pageIndex={0} perPage={1} totalCount={1}/>
        </div>
      </div>

    </>
  )
}