import { TableComponent } from "@/components/table-component/table-component";
import { HttpClient } from "@/lib/http-client";
import { useQuery } from "@tanstack/react-query";


export function BoardComponent() {

  const BoardQuery = useQuery({ 
    queryKey: ['board'], 
    queryFn: async () => {
      const res = await HttpClient.get('/board')
      return res.data
    },
  })


  function data() {

  }


  return (
    <div>
      <p className="text-4xl"> Boards </p>
      <div className="pt-8">
        <div className="w-full flex-nowrap">
          
        </div>


        <TableComponent data={BoardQuery.data}/>
      </div>
    </div>
  )
}
