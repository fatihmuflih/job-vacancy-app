import React from "react";
import Cookies from "js-cookie";
import { useNavigate } from "react-router-dom";
import { Button } from "../components/Element/Button";
import { DashboardLayout } from "../components/Layout/DashboardLayout";

export const Dashboard = () => {
  const navigate = useNavigate();
  const handleLogout = () => {
    Cookies.remove("token");
    navigate("/login");
  };

  return <DashboardLayout />;
};
