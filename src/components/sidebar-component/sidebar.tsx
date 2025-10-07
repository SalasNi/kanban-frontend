import { Settings, SquareKanban } from "lucide-react";
import { MenuItem } from "./menu-item";

export interface SidebarProps {
  marginTop: number;
  opened?: boolean;
  mobile: boolean;
}

export function Sidebar({ marginTop, opened, mobile }: SidebarProps) {
  function behavior(): string {
    if (mobile) {
      return "mt-0 w-full";
    }

    return `w-${opened} ? 64 : 12`;
  }

  return (
    <div className={`mt-${marginTop} fixed transition-all w-64 border-r h-full p-4`}>
      <div className="flex flex-col">
        <MenuItem key={1} name="Board" link="/board" icon={SquareKanban} />
        <MenuItem key={2} name="Settings" link="/settings" icon={Settings} />
      </div>
    </div>
  );
}
