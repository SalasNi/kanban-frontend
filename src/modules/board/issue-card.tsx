import { Card, CardHeader, CardTitle } from "@/components/ui/card"

interface IssueCardProps {
  id: number,
  title: string
}


export function IssueCard({
  id,
  title
}: IssueCardProps){

  return(
    <Card key={id}>
      <CardHeader>
        <CardTitle>{title}</CardTitle>
      </CardHeader>
      {/*<CardContent>
        <p>Card Content</p>
      </CardContent>
      <CardFooter>
        <p>Card Footer</p>
      </CardFooter>
      */}
    </Card>
  )
}