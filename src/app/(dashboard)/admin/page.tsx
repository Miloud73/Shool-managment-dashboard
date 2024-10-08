import CountCharts from "@/components/CountCharts";
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
          <UserCard type="admin"/>
          <UserCard type="teacher"/>
          <UserCard type="staff"/>
        </div>
        <div className="flex gap-4 flex-col lg:flex-row pt-4">
          <div className="w-full lg:w-1/3 h-[450px]">
            <CountCharts />

          </div>
          <div className="w-full lg:w-2/3 h-[450px] flex flex-col gap-8">

          </div>

        </div>
        <div className=""></div>
      </div>
      {/* RIGHT SIDE */}
      <div className="w-full lg:w-1/3 ">RIGHT</div>
     
    </div>
  );
};

export default AdminPage;
