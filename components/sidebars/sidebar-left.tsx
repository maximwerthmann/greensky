"use client";

import {
  LucideBell,
  LucideHome,
  LucideMessageCircle,
  LucideMessageCircleReply,
  LucideSearch,
  LucideSettings,
  LucideUser,
} from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Button } from "../ui/button";
import { Avatar, AvatarFallback } from "../ui/avatar";
import { ModeToggle } from "../mode-toggle";

const NavigationLinks = [
  {
    title: "Home",
    href: "/home",
    icon: LucideHome,
  },
  {
    title: "Search",
    href: "/search",
    icon: LucideSearch,
  },
  {
    title: "Notifications",
    href: "/notifications",
    icon: LucideBell,
  },
  {
    title: "Messages",
    href: "/messages",
    icon: LucideMessageCircle,
  },
  {
    title: "Profile",
    href: "/profile",
    icon: LucideUser,
  },
  {
    title: "Settings",
    href: "/settings",
    icon: LucideSettings,
  },
];

export default function SidebarLeft() {
  const pathname = usePathname();
  return (
    <div className="sticky top-0 h-screen hidden lg:flex p-4 w-64">
      <div className="flex flex-col space-y-4 w-full">
        <Avatar className="h-14 w-14">
            <AvatarFallback>MW</AvatarFallback>
        </Avatar>
        <div className="flex flex-col space-y-1">
          {NavigationLinks.map((item) => {
            const isActive = pathname == item.href;
            return (
              <Link
                href={item.href}
                key={item.title}
                className={`flex items-center space-x-4 hover:bg-secondary h-10 rounded-md px-4 transition-transform duration-500 ${
                  isActive ? "bg-secondary" : ""
                }`}
              >
                <item.icon size={20} />
                <span>
                  {item.title}
                </span>
              </Link>
            );
          })}
        </div>
        <Button className="h-10 text-base">Post</Button>
      </div>
    </div>
  );
}
