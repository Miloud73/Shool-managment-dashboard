import type { Metadata } from "next";
import React from "react";
export const metadata: Metadata = {
  title: "Teacher | dashborad",
  description: "This is the teacher dashboard",
};

const TeacherPage = () => {
  return (
    <div>
      <h1>teacher Dashboard</h1>
      <p>Welcome to the teacher dashboard!</p>
    </div>
  );
};

export default TeacherPage;
