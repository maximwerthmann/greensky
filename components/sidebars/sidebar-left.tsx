"use client";

import {
  LucideBell,
  LucideBookmark,
  LucideHash,
  LucideHome,
  LucideList,
  LucideMessageCircle,
  LucideMessageCircleReply,
  LucidePackageOpen,
  LucideSearch,
  LucideSettings,
  LucideUser,
} from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Button } from "../ui/button";
import { Avatar, AvatarFallback } from "../ui/avatar";

const NavigationLinks = [
  {
    title: "Home",
    href: "/home",
    icon: LucideHome,
  },
  {
    title: "Feeds",
    href: "/feeds",
    icon: LucideHash,
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
    title: "Bookmarks",
    href: "/bookmarks",
    icon: LucideBookmark,
  },
  {
    title: "Messages",
    href: "/messages",
    icon: LucideMessageCircle,
  },
  {
    title: "Lists",
    href: "/lists",
    icon: LucideList,
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
              >
                <Button variant={isActive ? 'accent' : 'ghost'} className="justify-start px-4 w-full">
                  <span>
                  <item.icon />
                  </span>
                <span>
                  {item.title}
                </span>
                </Button>
              </Link>
            );
          })}
        </div>
        <Button size={'lg'}>Post</Button>
      </div>
    </div>
  );
}
