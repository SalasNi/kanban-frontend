import { TableComponent } from "@/components/table-component/table-component";


export function BoardsComponent() {
  return (
    <div>
      <p className="text-4xl"> Boards </p>
      <div className="pt-8">
        <TableComponent data={[]}/>
      </div>
    </div>
  )
}
