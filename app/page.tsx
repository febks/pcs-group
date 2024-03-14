'use client'
import React, { useState } from "react";
import FooterNav from "../components/footer/FooterNav";
import Headbar from "../components/headbar/Headbar";
import ProfileCard from "../components/card/ProfileCard";
import Activity from "../components/activity/Activity";
import Online from "../components/online/Online";
import News from "../components/news/News";
import Notification from "../components/notification/Notification";

export default function Home() {
  const [openNotif, setOpenNotif] = useState<boolean>(false);
  return (
    <>
      {openNotif ? (
        <Notification handleClose={() => setOpenNotif(false)} />
      ) : (
        <div>
          <Headbar handleOpenNotif={() => setOpenNotif(!openNotif)} />
          <div className="text-black flex flex-col justify-between">
            <ProfileCard /> {/* card */}
            <Activity /> {/* activity */}
            <News /> {/* News */}
            <Online /> {/* Online */}
          </div>
          <FooterNav />
        </div>
      )}
    </>
  );
}
