import React from "react";
import { Sidebar } from "../Fragment/Sidebar";
import { ListJobs } from "../Fragment/ListJobs";

export const ListJobsLayout = () => {
  return (
    <div>
      <Sidebar />
      <ListJobs />
    </div>
  );
};
