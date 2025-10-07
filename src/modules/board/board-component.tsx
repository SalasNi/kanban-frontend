import { HttpClient } from "@/lib/http-client";
import { useQuery } from "@tanstack/react-query";
import { data } from "./data-fake";
import { BoardColumn } from "./board-column";
import { ScrollArea } from "@radix-ui/react-scroll-area";
import { Input } from "@/components/ui/input";
import { Settings, Share2 } from "lucide-react";
import { Button } from "@/components/ui/button";

interface BoardComponentProps {
  id: number;
  name: string;
}

export function BoardComponent({ id, name = "Board" }: BoardComponentProps) {
  const BoardQuery = useQuery({
    queryKey: ["board"],
    queryFn: async () => {
      const res = await HttpClient.get("/board");
      return res.data;
    },
  });

  return (
    <div key={id}>
      <div className="flex justify-between space-x-4 w-full items-center">
        <p className="text-3xl">{name}</p>

        <div className="items-center">

        </div>

        <div className="items-end">
          <Button variant={"ghost"} size={"icon"}>
            <Share2 />
          </Button>

          <Button variant={"ghost"} size={"icon"}>
            <Settings />
          </Button>
        </div>
      </div>

      <Input className="w-48 mt-4" type="search" placeholder={"Search..."} />

      <ScrollArea className="overflow-x-auto w-full">
        <div className="pt-8">
          <div className="flex space-x-4">
            {data.map((d) => (
              <BoardColumn id={d.id} title={d.title} issues={d.issues} />
            ))}
          </div>
        </div>
      </ScrollArea>
    </div>
  );
}
