import { NotificationIcon } from "@/public/static/Icons";
import React from "react";

const Headbar = () => {
  return (
    <div className="
    text-primary 
    p-5 
    bg-white 
    text-lg 
    font-extrabold
    font-sans
    pt-6
    flex
    flex-row
    justify-between
    top-0
    sticky
    z-50
    "
    >
      <div className="cursor-pointer">
        KerjaYuk!
      </div>
      <div className="p-1 text-black hover:text-primary flex cursor-pointer">
        <NotificationIcon />
        <div className="h-1.5 w-1.5 bg-primary rounded-[50%] ml-[-10px] mt-[7px]"> </div>
      </div>
    </div>
  )
}

export default Headbar;