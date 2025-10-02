import { Outlet } from "@tanstack/react-router";
import { TanStackRouterDevtools } from "@tanstack/react-router-devtools";


export function Dashboard () {
  return (
    <>
      <div>
        <h1>Dashboard Layout</h1>
        <Outlet />
        <TanStackRouterDevtools />
      </div>
    </>
  )
}