import { TableComponent } from "@/components/table-component/table-component";
import { HttpClient } from "@/lib/http-client";
import { useQuery } from "@tanstack/react-query";
import { data } from "./data-fake";
import { BoardColumn } from "./board-column";


interface BoardComponentProps {
  id: number,
  name: string
}


export function BoardComponent() {

  const BoardQuery = useQuery({
    queryKey: ['board'],
    queryFn: async () => {
      const res = await HttpClient.get('/board')
      return res.data
    },
  })


  return (
    <div>
      <p className="text-4xl">         
        Board
      </p>
      <div className="pt-8 overflow-x-auto min-w-full">
        <div className="flex space-x-4">
          {data.map(d => (
            <BoardColumn id={d.id} title={d.title} issues={d.issues} />
          ))}
        </div>
      </div>
    </div>
  )
}
