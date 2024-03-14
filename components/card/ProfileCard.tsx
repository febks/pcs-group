'use client'
import Image from "next/image";
import React from "react";
import style from "./Profile.module.css";

const ProfileCard = () => {
  const profile = require("../../public/static/images/profile.jpeg");
  return (
    <div className="px-5 flex flex-col gap-2">
      <div>Hi, Good Morning!</div>
      <div className="
      rounded-xl
      w-full
      h-max
      bg-gradient-to-r
      from-primary
      from-40%
      to-purple
      p-4
      flex
      flex-col
      text-white
      gap-4
      shadow-md
    ">
        <div className="flex flex-row justify-between">
          <div className="flex gap-8">
            <div className="w-16 h-16 relative overflow-hidden rounded-[50%] drop-shadow-md">
              <Image className={style.profileCard} alt="profile" src={profile} />
            </div>
            <div className="flex flex-col gap-0">
              <div className="font-bold">Tabay</div>
              <div className="font-extralight text-xs italic">UI/UX Designer</div>
            </div>
          </div>
          <div className="text-end flex flex-col gap-0 pt-[4px]">
            <div className="font-extralight text-xs italic">Member since</div>
            <div className="font-bold">01 Juni 2021</div>
          </div>
        </div>
        <div className="flex flex-col">
          <div className="font-extralight text-xs">Location</div>
          <div className="flex justify-between">
            <div className="font-bold">Kantor Sahid</div>
            <div className="font-extralight text-xs self-center italic">ICO</div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProfileCard;