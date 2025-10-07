import { Button } from "@/components/ui/button";
import { BellRing, User } from "lucide-react";

export function UserMenu() {
  return (
    <div>
      <Button variant="ghost" size="icon" aria-label="Notifications" >
        <BellRing />
      </Button>
      <Button variant="ghost" size="icon" aria-label="Submit">
        <User />
      </Button>
    </div>
    
  );
}
