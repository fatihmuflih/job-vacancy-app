import React from "react";
import { UpdateDataForm } from "../Fragment/UpdateDataForm";
import { Sidebar } from "../Fragment/Sidebar";

export const UpdateDataLayout = () => {
  return (
    <div>
      <Sidebar />
      <UpdateDataForm />
    </div>
  );
};
