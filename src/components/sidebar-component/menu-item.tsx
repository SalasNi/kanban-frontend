import type { LucideProps } from "lucide-react";
import { SidebarMenuButton, SidebarMenuItem } from "../ui/sidebar";
import { Link, useLocation } from "@tanstack/react-router";
import { Button } from "../ui/button";

interface MenuItemProps {
  key: number;
  name: string;
  link: string;
  icon: React.ComponentType<LucideProps>;
}

export function MenuItem({ key, name, link, icon: Icon }: MenuItemProps) {
  function Active(): boolean {
    const location = useLocation();
    return location.pathname === link;
  }

  return (
    <div key={key}>
      <Link to={link}>
        <Button
          size={"lg"}
          variant={Active() ? "secondary" : "ghost"}
          className="w-full justify-start"
        >
          <Icon /> {name}
        </Button>
      </Link>
    </div>
  );
}
