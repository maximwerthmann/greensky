import { ModeToggle } from "@/components/mode-toggle";
import Post from "@/components/post";
import { Button } from "@/components/ui/button";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { LucideArrowUp } from "lucide-react";

export default function Page() {
    return (
        <Tabs defaultValue="following" className="flex flex-col">
            <header className="w-full flex items-center space-x-4 space-x-2 border-b h-14 px-4 bg-background z-20 sticky top-0">
                <ModeToggle/>
                <TabsList className="flex-1 justify-start">
                    <TabsTrigger value="following">Following</TabsTrigger>
                    <TabsTrigger value="discover">Discover</TabsTrigger>
                    <TabsTrigger value="trending">Trending</TabsTrigger>
                </TabsList>
                <Button variant={'outline'} size={'icon'}>
                    <LucideArrowUp/>
                </Button>

            </header>
            <Post/>
            <Post/>
            <Post/>
            <Post/>
            <Post/>
            <Post/>
            <Post/>
            <Post/>
            <Post/>
            <Post/>
        </Tabs>
    )
}