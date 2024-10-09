import Announcement from "@/components/Announcement";
import AttendenceCharts from "@/components/AttendenceCharts";
import CountCharts from "@/components/CountCharts";
import EventCalender from "@/components/EventCalender";
import FinanceCharts from "@/components/FinanceCharts";
import UserCard from "@/components/UserCard";
import type { Metadata } from "next";
import React from "react";
export const metadata: Metadata = {
  title: " Admin | Dashborad",
  description: "This is the teacher dashboard",
};

const AdminPage = () => {
  return (
    <div className="p-4 flex gap-4 flex-col md:flex-row">
      {/* LEFt SIDE */}
      <div className="w-full lg:w-2/3 ">
        <div className="flex gap-4 justify-between flex-wrap">
          <UserCard type="student" />
          <UserCard type="admin" />
          <UserCard type="teacher" />
          <UserCard type="staff" />
        </div>
        <div className="flex gap-4 flex-col lg:flex-row pt-4">
          <div className="relative w-full lg:w-1/3 h-[350px]">
            <CountCharts />
          </div>
          <div className="relative w-full lg:w-2/3 h-[350px] flex flex-col gap-8">
            <AttendenceCharts />
          </div>
        </div>
        <div className="w-full pt-4">
          <FinanceCharts />
        </div>
      </div>
      {/* RIGHT SIDE */}
      <div className="w-full lg:w-1/3 flex flex-col gap-8  rounded-full">
        <EventCalender/>
        <Announcement/>
      </div>
    </div>
  );
};

export default AdminPage;
