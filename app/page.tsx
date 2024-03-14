'use client'
import FooterNav from "@/components/footer/FooterNav";
import Headbar from "../components/headbar/Headbar";
import React from "react";
import ProfileCard from "@/components/card/ProfileCard";
import Activity from "@/components/activity/Activity";

export default function Home() {
  return (
    <div>
      <Headbar />
      <div className="text-black max-h-screen overflow-y-auto">
        {/* card */}
        <ProfileCard />

        {/* activity */}
        <Activity />
      </div>

      {/* <div className="md:hidden"> */}
        <FooterNav />
      {/* </div> */}
    </div>
  );
}
