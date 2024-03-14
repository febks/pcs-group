'use client'
import Image from 'next/image';
import React from 'react';
import { LIST_PROFILE } from '../propertiesConstant';

const Online = () => {
  const imageGenerator = (namespace: string) => {
    const profile = require(`../../public/static/images/profile.jpeg`)
    return (
      <div className="w-11 h-11 sm:h-16 sm:w-16 relative overflow-hidden rounded-[50%] bg-white flex items-center justify-center">
        <div className="w-9 h-9 sm:h-14 sm:w-14 relative overflow-hidden rounded-[50%] drop-shadow-md">
          <Image
            style={{
              display: "inline",
              margin: "0 auto",
              height: "100%",
              width: "auto",
              objectFit: "cover"
            }}
            src={profile}
            alt={namespace}
          />
        </div>
      </div>
    )
  }
  return (
    <div className="flex flex-col px-5">
      <div className="font-bold">Online</div>
      <div className="bg-white drop rounded-xl flex py-4 px-2 sm:px-6 mt-3 shadow-[0_3px_8px_rgba(0,0,0,0.35)] justify-center">
        {LIST_PROFILE.map((item, index) => (
          <div key={index} className="flex flex-col items-center" 
          style={{ 
            zIndex: index + 1,
            marginLeft: `${index !== 0 && "-9px"}`
          }}>
            {imageGenerator(item.name)}
            <div className="text-[10px] sm:text-sm font-bold">{item.name}</div>
            <div className="text-[8px] sm:text-xs font-light">{item.loc}</div>
          </div>
        ))}
        <div className="w-9 h-9 sm:h-14 sm:w-14 ml-[-8px] mt-[5px] relative overflow-hidden flex items-center text-center rounded-[50%] drop-shadow-md bg-primary text-xs sm:text-m font-bold text-white">
          10 more
        </div>
      </div>
    </div>
  )
}

export default Online;