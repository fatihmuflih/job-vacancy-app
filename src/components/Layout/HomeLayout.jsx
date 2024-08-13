import React from "react";
import { Jobs } from "../Fragment/Jobs";
import { Hero } from "../Fragment/Hero";
import { SetupAlert } from "../Fragment/SetupAlert";
import { JobPartner } from "../Fragment/JobPartner";
import { NavbarClient } from "../Fragment/NavbarClient";
import { FooterClient } from "../Fragment/FooterClient";
import { GettingStarted } from "../Fragment/GettingStarted";

export const HomeLayout = () => {
  return (
    <>
      <NavbarClient />
      <Hero />
      <JobPartner />
      <GettingStarted />
      <Jobs />
      <SetupAlert />
      <FooterClient />
    </>
  );
};
