import { LucideBookmark, LucideHeart, LucideMessageCircle, LucideMessageSquare, LucideRepeat, LucideSave, LucideUser } from "lucide-react";
import { Avatar, AvatarFallback } from "./ui/avatar";
import { Button } from "./ui/button";

export default function Post() {
  return (
    <div className="flex space-x-2 p-4 border-b">
      <Avatar className="h-12 w-12">
        <AvatarFallback>
          <LucideUser />
        </AvatarFallback>
      </Avatar>
      <div className="flex flex-col space-y-2">
        <div className="flex flex-col">
          <span className="leading-tight">Firstname Lastname</span>
          <span className="text-sm text-muted-foreground leading-tight">
            @username
          </span>
        </div>
        <div>
          <p className="leading-snug">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Animi
            quibusdam placeat voluptatibus incidunt, iure quod dicta rerum eius
            doloribus ipsam illum quas. Corrupti sint officiis doloremque
            aliquid. Voluptate, ab aut.
          </p>
        </div>
      </div>
    </div>
  );
}
