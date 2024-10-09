"use client";

import Image from "next/image";
import React, { PureComponent } from "react";
import {
  BarChart,
  Bar,
  Rectangle,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const data = [
  {
    name: "Sun",
    present: 60,
    absent: 40,
    amt: 2210,
  },
  {
    name: "Mon",
    present: 65,
    absent: 35,
    amt: 2290,
  },
  {
    name: "Tue",
    present: 55,
    absent: 45,
    amt: 2000,
  },
  {
    name: "Wed",
    present: 70,
    absent: 30,
    amt: 2181,
  },
  {
    name: "Thu",
    present: 80,
    absent: 20,
    amt: 2500,
  },
];

const AttendenceCharts = () => {
  return (
    <div className="bg-white rounded-xl w-full h-[75%] p-4">
      <div className="flex justify-between items-center">
        <h1 className="text-lg font-semibold">Attendence</h1>
        <Image src="/moreDark.png" alt="moreDark icon" width={20} height={20} />
      </div>
      <div className="relative w-full h-full top-2 right-6">
        <ResponsiveContainer width="100%" height="90%">
          <BarChart
            width={500}
            height={300}
            data={data}
            margin={{
              top: 5,
              right: 30,
              left: 20,
              bottom: 5,
            }}
          >
            <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#ddd"/>
            <XAxis dataKey="name" axisLine={false} tickLine={false}/>
            <YAxis axisLine={false}/>
            <Tooltip />
            <Legend />
            <Bar
              dataKey="absent"
              fill="#C3EBFA"
              legendType="circle"
              radius={[10,10,0,0]}
            />
            <Bar
              dataKey="present"
              fill="#FAE27C"
              legendType="circle"
              radius={[10,10,0,0]}
            />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default AttendenceCharts;
