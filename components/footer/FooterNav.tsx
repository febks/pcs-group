import React from "react";
import { AttendanceIcon, CheckoutIcon, FormIcon, HomeIcon, SettingIcon } from "@/public/static/Icons";

const FooterNav = () => {
  return (
    <div className="
      text-primary
      px-8
      py-2
      fixed
      bottom-0
      w-full
      flex
      flex-row
      shadow-[0_5px_15px_rgba(0,0,0,0.35)]
      justify-between
      h-14
      bg-white
      z-30
      ">
      <div className="
        cursor-pointer
        h-max
        w-max
        text-xs
        flex
        flex-col
        items-center
        text-default_grey 
        hover:text-primary
        hover:font-bold"
      >
        <HomeIcon />
        <div>Home</div>
      </div>
      <div className="
        cursor-pointer
        h-max
        w-10
        text-xs
        flex
        flex-col
        items-center
        text-default_grey 
        hover:text-primary
        hover:font-bold"
      >
        <AttendanceIcon />
        <div>Attendance</div>
      </div>
      <div className="
        cursor-pointer
        h-max
        w-max
        text-xs
        flex
        flex-col
        items-center
        font-bold"
      >
        <div className="h-max w-max p-4 bg-primary rounded-[50%] mt-[-35px] drop-shadow-sm">
          <div className="text-white">
            <CheckoutIcon />
          </div>
        </div>
        <div>Check Out</div>
      </div>
      <div className="
        cursor-pointer
        h-max
        w-max
        text-xs
        flex
        flex-col
        items-center
        text-default_grey 
        hover:text-primary
        hover:font-bold"
      >
        <FormIcon />
        <div>Form</div>
      </div>
      <div className="
        cursor-pointer
        h-max
        w-max
        text-xs
        flex
        flex-col
        items-center
        text-default_grey 
        hover:text-primary
        hover:font-bold"
      >
        <SettingIcon />
        <div>Setting</div>
      </div>
    </div>
  )
}

export default FooterNav;