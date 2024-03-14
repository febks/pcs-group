'use client'
import FooterNav from "@/components/footer/FooterNav";
import Headbar from "../components/headbar/Headbar";
import React from "react";
import ProfileCard from "@/components/card/ProfileCard";
import Activity from "@/components/activity/Activity";
import Online from "@/components/online/Online";

export default function Home() {
  return (
    <div>
      <Headbar />
      <div className="text-black flex flex-col justify-between">
        {/* card */}
        <ProfileCard />

        {/* activity */}
        <Activity />

        {/* Online */}
        <Online />
      </div>
      {/* <div className="md:hidden"> */}
        <FooterNav />
      {/* </div> */}
    </div>
  );
}
