"use client";

import Link from "next/link";
import Image from "next/image";
import { cn } from "@/lib/utils";

import { usePathname } from "next/navigation";

import {
  LayoutDashboard,
  MessageSquare,
  ImageIcon,
  VideoIcon,
  Music,
  Code,
  Settings,
} from "lucide-react";

const routes = [
  {
    label: "Send Money",
    icon: LayoutDashboard,
    href: "/send-money",
    color: "text-slate-100",
  },
  {
    label: "Send Quick Pay",
    icon: MessageSquare,
    href: "/",
    color: "text-slate-100",
  },
  {
    label: "Pick up cash",
    icon: ImageIcon,
    href: "/",
    color: "text-slate-100",
  },
  {
    label: "Country Information",
    icon: VideoIcon,
    href: "/",
    color: "text-slate-100",
  },
  {
    label: "Other Services",
    icon: Music,
    href: "/",
    color: "text-slate-100",
  },
];

const Sidebar = () => {
  const pathname = usePathname();

  return (
    <div className="space-y-4 py-4 flex flex-col h-full bg-[#3a3e47] text-white z-40">
      <div className="px-3 py-2 flex-1">
        <Link href="/dashboard" className="flex items-center pl-3 mb-14">
          {/* <div className="relative w-[200px] h-14 mr-4">
            <Image src="" alt="" fill />
          </div> */}
        </Link>

        <div className="space-y-1">
          {routes.map((route, i) => (
            <Link
              href={route.href}
              key={route.href}
              className={cn(
                "text-sm group flex uppercase p-3 w-full justify-start font-medium cursor-pointer text-white hover:bg-white/10 rounded-lg transition",
                pathname === route.href
                  ? "text-white bg-white/10"
                  : "text-zinc-100"
              )}
            >
              <div className="flex items-center flex-1">
                <route.icon className={cn("h-5 w-5 mr-3", route.color)} />
                {route.label}
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
