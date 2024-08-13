import React from "react";
import { Sidebar } from "../Fragment/Sidebar";
import { Dashboard } from "../Fragment/Dashboard";

export const DashboardLayout = () => {
  return (
    <div>
      <Sidebar />
      <Dashboard />
    </div>
  );
};
