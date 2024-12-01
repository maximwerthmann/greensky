"use client"

import * as React from "react"
import { LucideMonitor, LucideMoon, LucideSun } from "lucide-react"
import { useTheme } from "next-themes"

import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

export function ModeToggle() {
  const { theme, setTheme } = useTheme()

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" size="icon">
          <LucideSun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
          <LucideMoon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
          <span className="sr-only">Toggle theme</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuLabel>Theme</DropdownMenuLabel>
        <DropdownMenuSeparator/>
        <DropdownMenuItem className={theme == "light" ? '' : 'text-muted-foreground'} onClick={() => setTheme("light")}>
          <LucideSun/>
          <span>Light</span>
        </DropdownMenuItem>
        <DropdownMenuItem className={theme == "dark" ? '' : 'text-muted-foreground'} onClick={() => setTheme("dark")}>
        <LucideMoon/>
        <span>Dark</span>
        </DropdownMenuItem>
        <DropdownMenuItem className={theme == "system" ? '' : 'text-muted-foreground'} onClick={() => setTheme("system")}>
        <LucideMonitor/>
        <span>System</span>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
