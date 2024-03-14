'use client'
import FooterNav from "@/components/footer/FooterNav";
import Headbar from "../components/headbar/Headbar";
import React from "react";
import ProfileCard from "@/components/card/ProfileCard";
import Activity from "@/components/activity/Activity";
import Online from "@/components/online/Online";
import News from "@/components/news/News";

export default function Home() {
  return (
    <div>
      <Headbar />
      <div className="text-black flex flex-col justify-between">
        <ProfileCard /> {/* card */}
        <Activity /> {/* activity */}
        <News /> {/* News */}
        <Online /> {/* Online */}
      </div>
      <FooterNav />
    </div>
  );
}
