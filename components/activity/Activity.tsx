'use client'
import { ClockIcon, HourIcon, SmallCheckoutIcon } from "@/public/static/Icons";
import React from "react";

const Activity = () => {
  return (
    <div className="px-8 py-6 flex flex-col">
      <div className="font-bold">{"Today's activity"}</div>
      <div className="flex justify-between pl-4 pt-2">
        <div className="flex flex-col gap-1 items-center">
          <div className="text-primary">
            <ClockIcon />
          </div>
          <div className="text-sm font-bold">08:30</div>
          <div className="font-normal text-sm">Check In</div>
        </div>
        <div className="flex flex-col gap-[2px] items-center">
          <div className="text-primary">
            <SmallCheckoutIcon />
          </div>
          <div className="text-m font-bold text-primary">03:30:30</div>
          <div className="font-normal text-sm">Working Hours</div>
        </div>
        <div className="flex flex-col gap-1 items-center">
          <div className="text-primary">
            <HourIcon />
          </div>
          <div className="text-sm font-bold">--:--</div>
          <div className="font-normal text-sm">Check Out</div>
        </div>
      </div>
    </div>
  )
}

export default Activity;