import React from "react";
import { Sidebar } from "../Fragment/Sidebar";
import { DataForm } from "../Fragment/DataForm";

export const DataFormLayout = () => {
  return (
    <div>
      <Sidebar />
      <DataForm />
    </div>
  );
};
