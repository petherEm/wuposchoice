import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";

import Sidebar from "@/components/Sidebar";
import Navbar from "@/components/Navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "WUPOS | Receiver Choice",
  description: "WUPOS | Receiver Choice",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <main className="">
          <Navbar />
          {children}
        </main>
      </body>
    </html>
  );
}
