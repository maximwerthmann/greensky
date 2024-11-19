import { Button } from "@/components/ui/button";
import { LucideArrowUp, LucideHash } from "lucide-react";

export default function Page() {
    return (
        <div className="flex flex-col">
            <header className="w-full p-4 flex items-center space-x-4 border-b sticky top-0">
            <Button variant={'outline'} size={'icon'}>
                        <LucideHash/>
                    </Button>
                <div className="flex-1 flex items-center justify-center">
                    <span className="text-lg font-bold">GreenSky</span>
                </div>
                <Button variant={'outline'} size={'icon'}>
                        <LucideArrowUp/>
                    </Button>
            </header>
        </div>
    )
}