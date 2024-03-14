'use client'
import { ArrowRightSmallIcon, BackIcon, CheckSmallIcon, CloseSmallIcon } from "@/public/static/Icons";
import React from "react";
import { LIGHT_BLUE_COLOR, LIST_NOTIF } from "../propertiesConstant";
import Image from "next/image";

interface INotif {
  handleClose: (e: any) => void;
}

const HTMLContent = (html: any) => {
  return (
    <div dangerouslySetInnerHTML={{ __html: html.html }} />
  )
}

const Notification: React.FC<INotif> = ({ handleClose }) => {
  const Coin = require("../../public/static/images/coin.png");
  const Pil = require("../../public/static/images/pil.png");
  const Watch = require("../../public/static/images/watch.png");
  return (
    <div style={{
      transform: "translate(0%)"
    }} className="absolute h-full w-full bg-white z-40 transition ease-in-out">
      <div className="sticky top-0 bg-white p-6 flex gap-2 items-center shadow-[0_3px_8px_rgba(0,0,0,0.35)] z-50">
        <div onClick={handleClose} className="text-black cursor-pointer"><BackIcon /></div>
        <div className="text-primary font-bold text-lg">Notification</div>
      </div>
      <div className="flex flex-col gap-0 overflow-y-auto max-h-screen mb-96 bg-white">
        {LIST_NOTIF.map((item, index) => (
          <div key={index} className="text-black flex flex-row gap-4 py-2 px-4" style={{ backgroundColor: item.read ? "white" : LIGHT_BLUE_COLOR }}>
            <div className="w-max flex flex-row">
              <div className="flex items-center h-12 w-12 relative overflow-hidden rounded-md drop-shadow-md bg-primary">
                <Image
                  style={{
                    display: "inline",
                    margin: "0 auto",
                    height: "30px",
                    width: "30px",
                    objectFit: "cover"
                  }}
                  src={
                    item.type === "Reimbursement"
                      ? Coin
                      : item.type === "Sickness"
                        ? Pil
                        : Watch
                  }
                  alt={"card"}
                />
              </div>
              <div className="pt-10 ml-[-10px]">
                <div className="h-max w-max p-[1px] relative overflow-hidden rounded-[50%] text-white" 
                  style={{ background: item.status === "ok" ? "green" : item.status === "reject" ? "red" : "blue" }}
                >
                  {item.status === "ok"
                    ? <CheckSmallIcon />
                    : item.status === "reject"
                      ? <CloseSmallIcon />
                      : <ArrowRightSmallIcon />
                  }
                </div>
              </div>
            </div>
            <div className="flex flex-col w-full">
              <div className="flex justify-between">
                <div className="text-sm font-bold">{item.type}</div>
                <div className="text-xs font-medium text-default_grey">{item.date}</div>
              </div>
              <div className="text-sm text-start">
                <HTMLContent html={item.description} />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Notification;