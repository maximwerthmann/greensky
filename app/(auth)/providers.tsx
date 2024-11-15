import { Button } from "@/components/ui/button";
import { Twitter } from "lucide-react";
import Image from "next/image";
import Link from "next/link";



export default function Providers() {
    return (
        <div className="flex flex-col space-y-2">
            <Button variant={'secondary'} className="w-full">Google</Button>
            <Button variant={'secondary'} className="w-full">Microsoft</Button>
        </div>
    )
}