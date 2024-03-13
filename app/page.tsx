import FooterNav from "@/components/footer/FooterNav";
import Headbar from "../components/headbar/Headbar";
import React from "react";
import ProfileCard from "@/components/card/ProfileCard";

export default function Home() {
  return (
    <div>
      <Headbar />
      <div className="text-black max-h-screen overflow-y-auto">
        {/* card */}
        <div className="px-5 flex flex-col gap-2">
          <div>Hi, Good Morning!</div>
          <ProfileCard />
        </div>

        {/* activity */}
        <div className="px-8 py-6 flex flex-col">
          <div className="font-bold">Today's activity</div>
          <div className="flex justify-between">
            <div></div>
          </div>
        </div>
      </div>

      {/* <div className="md:hidden"> */}
        <FooterNav />
      {/* </div> */}
    </div>
  );
}
