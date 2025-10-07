import { rootRoute } from "@/main";
import { createRoute } from "@tanstack/react-router";
import { BoardComponent } from "./board-component";

const BoardIndex = createRoute({
  getParentRoute: () => rootRoute,
  path: "/board",
  component: BoardComponent,
});

export const BoardRoutes = [BoardIndex];
