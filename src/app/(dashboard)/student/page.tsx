import type { Metadata } from "next";
import React from "react";
import Announcement from "@/components/Announcement";
import EventCalender from "@/components/EventCalender";
import BigCalender from "@/components/BigCalender";

export const metadata: Metadata = {
  title: " Student | Dashborad",
  description: "This is the student dashboard",
};

const StudentPage = () => {
  return (
    <div className="p-4 flex gap-4 flex-col xl:flex-row">
      {/* LEFt SIDE */}
      <div className="w-full lg:w-2/3 ">
        <div className="h-full bg-white p-4 rounded-md">
          <h1 className="text-xl font-semibold">Schedule (Master-1-wic)</h1>
          <BigCalender/>
        </div>
      </div>
      {/* RIGHT SIDE */}
      <div className="w-full xl:w-1/3 flex flex-col gap-8  rounded-full">
        <EventCalender />
        <Announcement />
      </div>
    </div>
  );
};

export default StudentPage;
