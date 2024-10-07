import type { Metadata } from "next";
import React from "react";
export const metadata: Metadata = {
  title: " Student | Dashborad",
  description: "This is the student dashboard",
};

const StudentPage = () => {
  return (
    <div>
      <h1>Student Dashboard</h1>
      <p>Welcome to the student dashboard!</p>
    </div>
  );
};

export default StudentPage;
