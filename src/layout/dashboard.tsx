import { SidebarProvider } from "@/components/ui/sidebar";
import { Outlet } from "@tanstack/react-router";
import { TanStackRouterDevtools } from "@tanstack/react-router-devtools";
import { DashboardSidebar } from "./dashboard-sidebar";


export function Dashboard() {
  return (
    <>
      <SidebarProvider open={true}>
        <DashboardSidebar />
        <main className="p-4 md:p-8 w-full">
          <Outlet />
          <TanStackRouterDevtools />
        </main>
      </SidebarProvider>
    </>
  )
}