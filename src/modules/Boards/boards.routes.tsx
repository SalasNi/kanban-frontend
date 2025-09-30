import { rootRoute } from "@/main";
import { createRoute } from "@tanstack/react-router";
import { BoardsComponent } from "./boards-component";


const BoardIndex = createRoute({
  getParentRoute: () => rootRoute,
  path: '/boards',
  component: BoardsComponent,
})


export const BoardRoutes = [
  BoardIndex
]