import { MenuItem } from "@/components/sidebar-component/menu-item";
import { Button } from "@/components/ui/button";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandItem,
  CommandList,
} from "@/components/ui/command";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import { HttpClient } from "@/lib/http-client";
import type { Board } from "@/models/board";
import { useQuery } from "@tanstack/react-query";
import { Link } from "@tanstack/react-router";
import {
  CheckIcon,
  ChevronsUpDownIcon,
  Settings,
  SquareKanban,
} from "lucide-react";
import { useState } from "react";

interface DashBoardSidebarProps {
  setOpened: React.Dispatch<React.SetStateAction<boolean>>;
  marginTop: number;
}

async function fetchBoards(): Promise<Board[]> {
  const res = await HttpClient.get("/board");
  return res.data;
}

export function DashboardSidebar({ marginTop = 16 }: DashBoardSidebarProps) {
  const { data, status } = useQuery({
    queryKey: ["board"],
    queryFn: fetchBoards,
  });

  const [open, setOpen] = useState(false);
  const [value, setValue] = useState<Board>();
  const [currentValue, setCurrentValue] = useState<Board>();

  return (
    <Sidebar className={`mt-${marginTop}`}>
      <SidebarContent>
        <SidebarGroup>
          <div className="flex">
            <Popover open={open} onOpenChange={setOpen}>
              <PopoverTrigger asChild>
                <Button
                  variant="outline"
                  role="combobox"
                  aria-expanded={open}
                  className="w-full justify-between"
                >
                  {value?.name}
                  <ChevronsUpDownIcon className="ml-2 h-4 w-4 shrink-0 opacity-50" />
                </Button>
              </PopoverTrigger>

              <PopoverContent>
                <Command>
                  <CommandList>
                    <CommandEmpty>No boards available</CommandEmpty>
                    <CommandGroup>
                      {data?.map((board) => (
                        <CommandItem
                          key={board.id}
                          value={board.name}
                          onSelect={(currentValue) => {
                            setCurrentValue(board);
                            setOpen(false);
                          }}
                        >
                          <CheckIcon />
                          {board.name}
                        </CommandItem>
                      ))}
                    </CommandGroup>
                  </CommandList>
                </Command>
              </PopoverContent>
            </Popover>
          </div>

          <SidebarGroupContent className="pt-4">
            <SidebarMenu>
              <MenuItem
                key={1}
                name="Board"
                link="/board"
                icon={SquareKanban}
              />
              <MenuItem
                key={2}
                name="Settings"
                link="/settings"
                icon={Settings}
              />
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
}
