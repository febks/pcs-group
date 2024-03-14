import { NotificationIcon } from "@/public/static/Icons";
import React from "react";

interface IHeadbar {
  handleOpenNotif: (e: any) => void;
}

const Headbar: React.FC<IHeadbar> = ({ handleOpenNotif }) => {
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
    z-30
    "
    >
      <div className="cursor-pointer">
        KerjaYuk!
      </div>
      <div className="p-1 text-black hover:text-primary flex cursor-pointer" onClick={handleOpenNotif}>
        <NotificationIcon />
        <div className="h-1.5 w-1.5 bg-primary rounded-[50%] ml-[-10px] mt-[7px]"> </div>
      </div>
    </div>
  )
}

export default Headbar;