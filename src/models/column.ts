import type { Issue } from "./issue";

export interface Column {
  id: number;
  title: string;
  boardId: number;
  issues: Issue[];
}