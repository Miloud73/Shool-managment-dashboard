"use client";
import React, { PureComponent } from "react";
import Image from "next/image";
import {
  RadialBarChart,
  RadialBar,
  Legend,
  ResponsiveContainer,
} from "recharts";

const data = [
  {
    name: "Total",
    count: 106,
    fill: "white",
  },
  {
    name: "Boys",
    count: 53,
    fill: "#C3EBFA",
  },
  {
    name: "Girls",
    count: 53,
    fill: "#FAE27C",
  },
];

const CountCharts = () => {
  return (
    <div className="bg-white rounded-xl w-full h-[350px] p-4">
      <div className="flex justify-between items-center">
        <h1 className="text-lg font-semibold">Students</h1>
        <Image src="/moreDark.png" alt="moreDark icon" width={20} height={20} />
      </div>
      <div className="relative w-full h-[50%]">
        <ResponsiveContainer>
          <RadialBarChart
            cx="50%"
            cy="50%"
            innerRadius="40%"
            outerRadius="100%"
            barSize={32}
            data={data}
          >
            <RadialBar background dataKey="count" />
          </RadialBarChart>
        </ResponsiveContainer>
        <Image
          src="/maleFemale.png"
          alt=""
          width={50}
          height={50}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
        />
      </div>
      <div className="flex justify-center gap-16">
        <div className="flex flex-col gap-1">
          <div className="w-5 h-5 bg-lamaSky rounded-full">
            <h1 className="relative right-2 font-bold pt-6">1,234</h1>
            <h2 className="text-xs text-gray-300 relative right-3">
              {" "}
              Boys[55%]
            </h2>
          </div>
        </div>
        <div className="flex flex-col gap-1">
          <div className="w-5 h-5 bg-lamaYellow rounded-full ">
            <h1 className="font-bold pt-6 relative right-2">1,234</h1>
            <h2 className="text-xs text-gray-300 relative right-3">
              {" "}
              Girls[45%]
            </h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CountCharts;
