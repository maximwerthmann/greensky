import { Separator } from "./ui/separator";


export default function AuthSeparator() {
    return (
        <div className="flex items-center justify-center relative h-4">
            <Separator/>
            <span className="h-full px-4 bg-background uppercase absolute text-xs text-muted-foreground">or continue with</span>
        </div>
    )
}