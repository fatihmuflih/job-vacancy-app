import React from "react";
import Login from "../assets/images/Login.png";
import { FormLogin } from "../components/Fragment/FormLogin";
import { AuthLayout } from "../components/Layout/AuthLayouts";

export const LoginPage = () => {
  return (
    <AuthLayout
      type="login"
      title="Welcome back 👋"
      subtitle="Welcome back! Please enter your details"
      background={Login}
    >
      <FormLogin />
    </AuthLayout>
  );
};
