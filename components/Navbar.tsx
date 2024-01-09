import Image from "next/image";
import Link from "next/link";

import { Button } from "@/components/ui/button";

import { Menu } from "lucide-react";
import MobileSidebar from "./MobileSidebar";

const Navbar = async () => {
  return (
    <nav className="flex items-center p-4 bg-black z-50 h-20 w-full">
      <div className="flex items-center">
        <MobileSidebar />
        <Link href="/">
          <Image src="/logo.svg" width="300" height="100" alt="logo" />
        </Link>

        <div className="ml-4 text-white w-[700px]">
          <h1 className="font-bold text-lg">Welcome, PIOTR MACIEJEWSKI</h1>
          <h2 className="text-[9px]">Last log in: 20/04/2023</h2>
          <h3 className="text-[9px]">Coded by Piotr</h3>
        </div>
      </div>

      <div className="flex w-full justify-end text-white underline">Logout</div>
    </nav>
  );
};

export default Navbar;
