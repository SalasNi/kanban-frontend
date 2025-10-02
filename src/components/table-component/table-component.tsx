import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"


interface TableProps {
  data: any[]
}

export function TableComponent(props: TableProps) {
  return (
     <div className="overflow-hidden rounded-md border">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>
              Id
            </TableHead>
            <TableHead>
              Name
            </TableHead>
          </TableRow>
        </TableHeader>

        <TableBody>
          <TableRow>
            <TableCell>
              No results.
            </TableCell>
            <TableCell>
              No results.
            </TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </div>
  )
}