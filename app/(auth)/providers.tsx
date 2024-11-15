import { Button } from "@/components/ui/button";
import { BsGoogle, BsMicrosoft, BsDiscord, BsTwitterX } from "react-icons/bs"

export default function Providers() {
    return (
        <div className="flex items-center justify-evenly">
            <Button size={'icon'} variant={'secondary'} className="p-6">
                <BsGoogle/>
            </Button>
            <Button size={'icon'} variant={'secondary'} className="p-6">
                <BsMicrosoft/>
            </Button>
            <Button size={'icon'} variant={'secondary'} className="p-6">
                <BsDiscord/>
            </Button>
            <Button size={'icon'} variant={'secondary'} className="p-6">
                <BsTwitterX/>
            </Button>
        </div>
    )
}