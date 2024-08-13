import React from "react";
import { CardProfile } from "../Fragment/CardProfile";
import { Sidebar } from "../Fragment/Sidebar";

export const ProfileLayout = () => {
  return (
    <div>
      <Sidebar />
      <CardProfile />
    </div>
  );
};
