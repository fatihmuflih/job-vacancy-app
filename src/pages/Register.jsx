import React from "react";
import Register from "../assets/images/Register.png";
import { AuthLayout } from "../components/Layout/AuthLayouts";
import { FormRegister } from "../components/Fragment/FormRegister";

export const RegisterPage = () => {
  return (
    <AuthLayout
      type="register"
      title="Create account! 🤩"
      subtitle="Holla! Please enter your details"
      background={Register}
    >
      <FormRegister />
    </AuthLayout>
  );
};
