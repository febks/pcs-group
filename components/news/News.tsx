'use client'
import React, { useState } from 'react';
import { CAROUSEL, DEFAULT_COLOR, PRIMARY_COLOR } from '../propertiesConstant';
import Image from 'next/image';

const News = () => {
  const [active, setActive] = useState<number>(1);
  const [currentIndex, setCurrentIndex] = useState<string>("")
  const Profile = require("../../public/static/images/profile.jpeg");

  const carousel = (index: number) => {
    if (active === 1 && index === 0) {
      setCurrentIndex("100%");
      setActive(index);
    } else if (active === 1 && index === 1) {
      setCurrentIndex("0%");
      setActive(index);
    } else if (active === 1 && index === 2) {
      setCurrentIndex("-100%");
      setActive(index);
    } else if (active === 2 && index === 0) {
      setCurrentIndex("100%");
      setActive(index);
    } else if (active === 2 && index === 1) {
      setCurrentIndex("0%");
      setActive(index);
    } else if (active === 2 && index === 2) {
      setCurrentIndex("-100%");
      setActive(index);
    } else if (active === 0 && index === 0) {
      setCurrentIndex("100%");
      setActive(index);
    } else if (active === 0 && index === 1) {
      setCurrentIndex("0%");
      setActive(index);
    } else {
      setCurrentIndex("-100%");
      setActive(index);
    }
  }

  return (
    <div>
      <div className="px-5 font-bold">PCS News</div>
      <div className="flex flex-row gap-2 justify-center flex-nowrap overflow-hidden pt-2 pb-2">
        {CAROUSEL.map((item, index) => (
          <div key={index} style={{
            transform: `translate(${currentIndex})`
          }} className="w-full h-full min-w-[90%] py-4 px-4 md:px-6 shadow-[0_3px_8px_rgba(0,0,0,0.35)] gap-4 rounded-md bg-white transition ease-in-out flex flex-col justify-between">
            <div className="flex justify-between">
              <div className="flex w-[50%] justify-start gap-4 items-center">
                <div className="h-9 w-9 relative overflow-hidden rounded-[50%] drop-shadow-md">
                  <Image
                    style={{
                      display: "inline",
                      margin: "0 auto",
                      height: "100%",
                      width: "auto",
                      objectFit: "cover"
                    }}
                    src={Profile}
                    alt={"card"}
                  />
                </div>
                <div className="text-sm font-bold text-primary">{item.name}</div>
              </div>
              <div className="flex flex-col text-end font-medium text-xs gap-[1px]">
                <div>{item.day}</div>
                <div>{item.date}</div>
              </div>
            </div>
            <div className="px-4 pb-3 text-justify text-xs font-medium flex flex-col gap-[1px]">
              {item.description}<br />
              {item.description_2}<br />
              {item.description_3}<br />
              {item.description_4}
            </div>
          </div>
        ))}
      </div>
      <div className="flex flex-row gap-1 justify-center">
        <div onClick={() => carousel(0)} style={{
          backgroundColor: `${active === 0 ? PRIMARY_COLOR : DEFAULT_COLOR}`
        }} className="w-3 h-3 overflow-hidden rounded-[50%] bg-default_grey hover:bg-primary cursor-pointer"></div>
        <div onClick={() => carousel(1)} style={{
          backgroundColor: `${active === 1 ? PRIMARY_COLOR : DEFAULT_COLOR}`
        }} className="w-3 h-3 overflow-hidden rounded-[50%] bg-default_grey hover:bg-primary cursor-pointer"></div>
        <div onClick={() => carousel(2)} style={{
          backgroundColor: `${active === 2 ? PRIMARY_COLOR : DEFAULT_COLOR}`
        }} className="w-3 h-3 overflow-hidden rounded-[50%] bg-default_grey hover:bg-primary cursor-pointer"></div>
      </div>
    </div>
  )
}

export default News;