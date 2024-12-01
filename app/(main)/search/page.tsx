import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { LucideFilter, SearchIcon } from "lucide-react";

export default function Page() {
    return (
        <div className="flex flex-col" defaultValue="all">
            <header className="h-14 space-x-2 sticky top-0 flex items-center px-4 border-b">
            <div className="flex flex-1 items-center relative">
          <SearchIcon size={16} className="absolute left-2.5" />
          <Input
            className="pl-8"
            placeholder="Search..."
          />
        </div>
        <Button size={'icon'} variant={'outline'}>
            <LucideFilter/>
        </Button>
            </header>
        </div>
    )
}