import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals-dash.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Dashboard",
  description: "This is the dashboard layout",
};

export default function DashboardLayout({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>) {
  return (
    <div className={inter.className}>
      {children}
    </div>
  );
}
