import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Link from "next/link";
import Image from "next/image";
import Menu from "@/components/Menu";
import Navbar from "@/components/Navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "School Management Dashboard",
  description: "School Management System",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="relative flex" >
          {/* left */}
          <div className="w-[14%] md:w-[8%] lg:w-[16%] xl:w-[14%] p-4 h-screen">
            <Link href="/" className="flex item-center justify-content lg:justify-start gap-2">
              <Image src="/logo.png" alt="logo" width={32} height={32}/>
              <span className="hidden lg:block mt-2 ">UDL-univ</span>
            </Link>
            <Menu/>
          </div>
          {/* right */}
          <div className="w-[86%] md:w-[92%] xl:w-[86%] bg-[#F7F8FA] overflow-scroll flex flex-col">
            <Navbar/>  
          </div>
        </div>
        {children}
        </body>
    </html>
  );
}