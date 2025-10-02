interface BoardColumnProps {
  id: number,
  title: String
  //issues: IssueCardProps[]
}

export function BoardColumn({
  id,
  title
}: BoardColumnProps) {
  return (
    <div key={id} className="bg-gray-200">
      <div className="pt-2 pb-2">
        <p className="font-bold"> {title} </p>
      </div>
    </div>
  )
}