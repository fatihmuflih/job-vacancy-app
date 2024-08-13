import React from "react";
import { CardApply } from "../Fragment/CardApply";
import { CardDetail } from "../Fragment/CardDetail";
import { NavbarClient } from "../Fragment/NavbarClient";
import { FooterClient } from "../Fragment/FooterClient";

export const DetailJobLayout = () => {
  return (
    <>
      <NavbarClient />
      <div className="hidden lg:block lg:h-[350px] bg-[#635BFF] w-full"></div>
      <section className="w-full min-h-screen pt-24 bg-[#F9F9F9] pb-16 lg:pt-0">
        <div className="container mx-auto lg:flex justify-between px-4 lg:px-8">
          <CardDetail />
          <CardApply />
        </div>
      </section>
      <FooterClient />
    </>
  );
};
