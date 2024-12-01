import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { LucideUser } from "lucide-react";

export default function Page() {
  return (
    <Tabs defaultValue="posts" className="flex flex-col">
      <section className="flex flex-col space-y-2 border-b">
        <div className="flex flex-col relative pb-12">
          <div className="w-full h-36 bg-secondary" />

          <Avatar className="h-24 w-24 border-background border absolute left-4 bottom-0">
            <AvatarFallback>
              <LucideUser size={36} />
            </AvatarFallback>
          </Avatar>
          <div className="flex absolute right-4 bottom-0 items-center space-x-2">
            <Button>Edit profile</Button>
          </div>

        </div>
        <div className="flex flex-col space-y-4 px-4">
          <div className="flex flex-col">
            <span className="text-lg font-bold leading-tight">Firstname Lastname</span>
            <span className="text-muted-foreground leading-tight">@username</span>
          </div>
          <TabsList>
            <TabsTrigger className="flex-1" value="posts">Posts</TabsTrigger>
            <TabsTrigger className="flex-1" value="replies">Replies</TabsTrigger>
            <TabsTrigger className="flex-1" value="media">Media</TabsTrigger>
            <TabsTrigger className="flex-1" value="likes">Likes</TabsTrigger>
        </TabsList>
        </div>
      </section>
    </Tabs>
  );
}
