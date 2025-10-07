import { Outlet } from "@tanstack/react-router";
import { TanStackRouterDevtools } from "@tanstack/react-router-devtools";
import { useState } from "react";
import { Navbar } from "./navbar";
import { Sidebar } from "@/components/sidebar-component/sidebar";
import { useIsMobile } from "@/hooks/use-mobile";

const navbarHeight = 16;

export function Dashboard() {
  const [sidebarOpened, setSidebarOpened] = useState(true);
  const isMobile = useIsMobile();

  return (
    <>
      <Navbar
        title="Kanban"
        items={[]}
        height={navbarHeight}
        setMenuOpen={setSidebarOpened}
        menuStatus={sidebarOpened}
      />

      <Sidebar
        opened={sidebarOpened}
        marginTop={navbarHeight}
        mobile={isMobile}
      />

      {/* Main content */}
      <div className="p-4 md:p-8">
        <div className="ml-64 pt-16">
          <Outlet />
        </div>
      </div>

      <TanStackRouterDevtools />
    </>
  );
}
