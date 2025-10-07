import { GripVertical } from "lucide-react";
import { IssueCard } from "./issue-card";

interface BoardColumnProps {
  id: number;
  title: String;
  issues: {
    id: number;
    title: string;
  }[];
}

export function BoardColumn({ id, title, issues }: BoardColumnProps) {
  function CreateIssuesCards() {
    return issues.map((issue) => (
      <IssueCard id={issue.id} title={issue.title} />
    ));
  }

  return (
    <div
      key={id}
      className="p-2 rounded-lg bg-gray-100 w-96 flex-shrink-0 shadow"
    >
      <div className="pt-4 pb-6 pl-1 flex">
        <a href="#">
          <GripVertical />
        </a>

        <p className="font-bold pl-2 "> {title} </p>
      </div>

      {/* Issues container */}
      <div className="">
        {issues.map((issue) => (
          <IssueCard id={issue.id} title={issue.title} />
        ))}
      </div>
    </div>
  );
}
