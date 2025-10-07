import { Button } from "@/components/ui/button";
import { BellRing, Sun, User } from "lucide-react";

export function UserMenu() {
  return (
    <div>
      <Button variant="ghost" size="icon" >
        <Sun />
      </Button>
      <Button variant="ghost" size="icon">
        <BellRing />
      </Button>
      <Button variant="ghost" size="icon">
        <User />
      </Button>
    </div>
    
  );
}
