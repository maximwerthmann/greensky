"use client";

import {
  LucideCheck,
    LucideCloud,
  LucideFlame,
  LucideHash,
  LucideImage,
  LucidePlus,
  LucideSparkle,
  LucideSparkles,
  LucideUser,
  LucideUsers,
  SearchIcon,
} from "lucide-react";
import { Input } from "../ui/input";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "../ui/card";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Avatar, AvatarFallback } from "../ui/avatar";
import { Button } from "../ui/button";
import { Separator } from "../ui/separator";
import { ModeToggle } from "../mode-toggle";
import { useState } from "react";

const Feeds = [
  {
    title: "Following",
    id: "following",
    icon: LucideUsers,
  },
  {
    title: "Discover",
    id: "discover",
    icon: LucideFlame,
  },
  {
    title: "For You",
    id: "for-you",
    icon: LucideSparkles,
  },
];

const MoreFeeds = [
    {
      title: "A custom feed",
      id: "cloud",
      icon: LucideCloud,
    },
    {
      title: "Another custom feed",
      id: "images",
      icon: LucideImage,
    },
  ];

const SuggestedUsers = [
  {
    name: "Firstname Lastname",
    username: "username",
    url: ""
  },
  {
    name: "Firstname Lastname",
    username: "username",
    url: ""
  },
  {
    name: "Firstname Lastname",
    username: "username",
    url: ""
  },
  {
    name: "Firstname Lastname",
    username: "username",
    url: ""
  },
  {
    name: "Firstname Lastname",
    username: "username",
    url: ""
  },
];

export default function SidebarRight() {
  const [Feed, setFeed] = useState("following");
  const pathname = usePathname();
  return (
    <div className="sticky top-0 h-screen hidden lg:flex p-4 w-80">
      <div className="flex flex-col space-y-4 w-full">
        <div className="flex w-full space-x-2">
        <div className="flex flex-1 items-center relative">
          <SearchIcon size={16} className="absolute left-2.5" />
          <Input
            className="pl-8 rounded-md"
            placeholder="Search..."
          />
        </div>
        <ModeToggle/>
        </div>
        <Card>
          <CardHeader>
            <CardTitle>Feeds</CardTitle>
          </CardHeader>
          <CardContent className="flex flex-col space-y-4">
            <div className="flex flex-col space-y-2">
            {Feeds.map((feed) => {
              const isActive = Feed == feed.id;
              return (
                <button
                onClick={() => setFeed(feed.id)}
                  key={feed.id}
                  className={`flex items-center space-x-4 rounded-md text-sm group hover:text-foreground/80 transition-colors ${
                    isActive ? "text-foreground" : "text-muted-foreground"
                  }`}
                >
                  <div className={`rounded-md h-9 w-9 flex group-hover:border-foreground/25 items-center justify-center border text-foreground transition-colors ${
                    isActive ? "bg-secondary" : ""
                  }`}>
                    <feed.icon size={16} />
                  </div>
                  <span>{feed.title}</span>
                </button>
              );
            })}
            </div>
            <Separator/>
            <div className="flex flex-col space-y-2">
            {MoreFeeds.map((feed) => {
              const isActive = Feed == feed.id;
              return (
                <button
                onClick={() => setFeed(feed.id)}
                  key={feed.id}
                  className={`flex items-center space-x-4 rounded-md text-sm group hover:text-foreground/80 transition-colors ${
                    isActive ? "text-foreground" : "text-muted-foreground"
                  }`}
                >
                  <div className={`rounded-md h-9 w-9 flex group-hover:border-foreground/25 items-center justify-center border text-foreground transition-colors ${
                    isActive ? "bg-secondary" : ""
                  }`}>
                    <feed.icon size={16} />
                  </div>
                  <span>{feed.title}</span>
                </button>
              );
            })}
            </div>

          </CardContent>
          <CardFooter>
            <Button variant={'outline'} className="w-full">More Feeds</Button>
          </CardFooter>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Who to follow</CardTitle>
          </CardHeader>
          <CardContent className="flex flex-col space-y-4">

          {SuggestedUsers.map((user) => {
              const [Following, setFollowing] = useState(Boolean);
              return (
                
                <Link
                  href={user.url}
                  key={user.username}
                  className={`flex items-center justify-between group`}
                >
                    <div className="flex items-center space-x-2">
                    <Avatar>
                        <AvatarFallback><LucideUser size={16}/></AvatarFallback>
                    </Avatar>
                    <div className="flex flex-col text-sm">
                        <span className="leading-tight group-hover:text-foreground/80 transition-colors">{user.name}</span>
                        <span className="leading-tight text-muted-foreground">@{user.username}</span>
                    </div>
                    </div>

                    <Button onClick={() => setFollowing(!Following)} variant={Following == false ? 'outline' : 'secondary'} size={'icon'}>
                      {Following == false ? <LucidePlus/> : <LucideCheck/>}
                    </Button>
                </Link>
              );
            })}
          </CardContent>
          <CardFooter>
            <Button variant={'outline'} className="w-full">View More</Button>
          </CardFooter>
        </Card>
      </div>
    </div>
  );
}
