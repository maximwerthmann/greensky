"use client";

import {
  LucideCheck,
    LucideCloud,
  LucideCompass,
  LucideFlame,
  LucideHash,
  LucideIcon,
  LucideImage,
  LucideMinus,
  LucidePlus,
  LucideSparkle,
  LucideSparkles,
  LucideTelescope,
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
import { ReactElement, useState } from "react";
import { Script } from "vm";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "../ui/dialog";
import { boolean } from "zod";

const Feeds = [
  {
    title: "Following",
    id: "following",
    icon: LucideUsers,
  },
  {
    title: "Discover",
    id: "discover",
    icon: LucideCompass,
  },
  {
    title: "For-You",
    id: "for-you",
    icon: LucideSparkles,
  },
];

const MoreFeeds = [
    {
      title: "Telescope",
      id: "telescope",
      icon: LucideTelescope,
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

interface FeedSelectProps {
  icon: LucideIcon;
  children: any;
  active: boolean;
  onClick: any;
}

function FeedSelect(props:FeedSelectProps) {
  return (
    <button onClick={props.onClick} className="flex items-center space-x-2 w-full group">
      <div className={`${props.active ? 'bg-secondary group-hover:bg-secondary/80' : 'border'} h-9 w-9 shadow-sm group-hover:bg-secondary transition-colors flex items-center justify-center rounded-lg`}>
        <props.icon size ={16} />
      </div>
      <span className={`${props.active ? 'text-foreground' : 'text-muted-foreground'} group-hover:text-foreground transition-colors text-sm`}>
        {props.children}
      </span>
    </button>
  )
}

function FollowSuggestionAdd() {
    const [Following, setFollowing] = useState(Boolean);
  return (
    <Button onClick={() => setFollowing(!Following)} variant={Following ? 'secondary' : 'outline'} size={'icon'}>
    {Following == false ? <LucidePlus/> : <LucideCheck/>}
  </Button>
  )
}

interface FeedDialogProps {
  children: ReactElement;
}

function FeedDialog(props:FeedDialogProps) {
  const [Feed, setFeed] = useState("following");

  function AddFeed() {
    const [Selected, setSelected] = useState(false);
    return (
      <Button onClick={() => setSelected(!Selected)} size={'icon'} variant={'outline'} className={Selected ? 'bg-secondary' : ''}>
      {Selected ? <LucideMinus/> : <LucidePlus/>}
    </Button>
    )
  }

  return (
    <Dialog>
      <DialogTrigger asChild className="w-full">
        {props.children}
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Feeds</DialogTitle>
        </DialogHeader>
        <div className="flex flex-col space-y-4">
        <div className="flex flex-col space-y-2">
        {Feeds.map((feed) => {
              return (
                <FeedSelect key={feed.id} onClick={() => setFeed(feed.id)} active={Feed == feed.id} icon={feed.icon}>{feed.title}</FeedSelect>
              );
            })}
            
        </div>
        <Separator/>
        <div className="flex flex-col space-y-2">
          {MoreFeeds.map((feed) => {
              return (
                <div key={feed.id} className="flex items-center justify-between">
                <FeedSelect key={feed.id} onClick={() => setFeed(feed.id)} active={Feed == feed.id} icon={feed.icon}>{feed.title}</FeedSelect>
                <AddFeed/>
              </div>
              );
            })}
            
        </div>
        </div>
      </DialogContent>
    </Dialog>
  )
}

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
            className="pl-8"
            placeholder="Search..."
          />
        </div>
        <ModeToggle/>
        </div>
        <Card>
          <CardHeader>
            <CardTitle>
              <span>Feeds</span>
            </CardTitle>
          </CardHeader>
          <CardContent className="flex flex-col space-y-4">
            <div className="flex flex-col space-y-2">
            {Feeds.map((feed) => {
              return (
                <FeedSelect key={feed.id} onClick={() => setFeed(feed.id)} active={Feed == feed.id} icon={feed.icon}>{feed.title}</FeedSelect>
              );
            })}
            </div>
            <Separator/>
            <div className="flex flex-col space-y-2">
            {MoreFeeds.map((feed) => {
              const isActive = Feed == feed.id;
              return (
                <FeedSelect key={feed.id} onClick={() => setFeed(feed.id)} active={Feed == feed.id} icon={feed.icon}>{feed.title}</FeedSelect>
              );
            })}
            </div>

          </CardContent>
          <CardFooter>
            <FeedDialog>
            <Button variant={'secondary'} className="w-full">Explore Feeds</Button>
            </FeedDialog>
          </CardFooter>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Who to follow</CardTitle>
          </CardHeader>
          <CardContent className="flex flex-col space-y-4">

          {SuggestedUsers.map((user) => {
              return (
                
                <Link
                  href={user.url}
                  key={user.username}
                  className={`flex items-center justify-between group`}
                >
                    <div className="flex items-center space-x-2">
                    <Avatar className="h-12 w-12">
                        <AvatarFallback><LucideUser size={16}/></AvatarFallback>
                    </Avatar>
                    <div className="flex flex-col">
                        <span className="leading-tight text-base transition-colors">{user.name}</span>
                        <span className="leading-tight text-muted-foreground text-sm">@{user.username}</span>
                    </div>
                    </div>
                    <FollowSuggestionAdd/>
                </Link>
              );
            })}
          </CardContent>
          <CardFooter>
            <Button variant={'secondary'} className="w-full">View More</Button>
          </CardFooter>
        </Card>
      </div>
    </div>
  );
}
