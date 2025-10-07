import { Button } from "@/components/ui/button";
import { Menu, type LucideProps } from "lucide-react";
import { UserMenu } from "./user-menu";

export interface NavbarProps {
  title: string;
  items: NavbarItem[];
  height: number;
  setMenuOpen: (value: boolean) => void;
  menuStatus: boolean;
}

export interface NavbarItem {
  name: string;
  href: string;
  icon: React.ComponentType<LucideProps>;
}

export function Navbar({ title, items, height, setMenuOpen, menuStatus }: NavbarProps) {
  return (
    <div
      className={`w-full border h-${height} p-4 justify-between flex items-center fixed`}
    >
      <div className="flex">
        <Button
          onClick={() => setMenuOpen(!menuStatus)}
          variant="ghost"
          size="icon"
          className="mr-4"
        >
          <Menu />
        </Button>
        <h1 className="text-2xl font-bold">{title}</h1>
      </div>

      <div className="flex items-center">
        {items.map((item) => (
          <Button key={item.name} className="px-4">
            <item.icon /> {item.name}
          </Button>
        ))}
      </div>

      <div className="flex items-end ">
        <UserMenu />
      </div>
    </div>
  );
}
