import { SidebarProvider } from "@/components/ui/sidebar";
import { Outlet } from "@tanstack/react-router";
import { TanStackRouterDevtools } from "@tanstack/react-router-devtools";
import { DashboardSidebar } from "./dashboard-sidebar";
import { useState } from "react";
import { Navbar } from "./navbar";


export function Dashboard() {
  const [opened, setOpened] = useState(true);

  return (
    <div>
      <Navbar title="Kanban" items={[]} />
      <div className="p-4 md:p-8 w-full">
        <Outlet />
        <TanStackRouterDevtools />
      </div>
    </div>
  );
}
