import Image from "next/image";
import React from "react";

const Announcement = () => {
  return (
    <div className="bg-white p-4 rounded-md">
      <div className="flex items-center justify-between">
        <h1 className="text-lg font-semibold">Announcements</h1>
        <span className="text-xs text-gray-400">View all</span>
        <Image src="/moreDark.png" alt="moreDark icon" width={20} height={20} />
      </div>
      <div className="bg-lamaSkyLight rounded-md p-4">
        <div className="flex items-center justify-between">
          <h2 className="font-medium">Lorem ipsum dolor sit</h2>
          <span className="text-xs text-gray-400 bg-white rounded-md px-1 py-1">
            2025-01-01
          </span>
        </div>
        <p className="text-sm text-gray-400 mt-1">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum,
          expedita. Rerum, quidem facilis?
        </p>
      </div>
    </div>
  );
};

export default Announcement;
