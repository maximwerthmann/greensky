import { Button } from "@/components/ui/button";

export default function Providers() {
    return (
        <div className="flex flex-col space-y-2">
            <Button variant={'secondary'} className="w-full">Google</Button>
            <Button variant={'secondary'} className="w-full">Microsoft</Button>
        </div>
    )
}