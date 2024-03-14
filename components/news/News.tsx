'use client'
import React, { useEffect, useState } from 'react';
import { CAROUSEL, DEFAULT_COLOR, PRIMARY_COLOR } from '../propertiesConstant';

const News = () => {
  const [active, setActive] = useState<number>(1);
  const [currentIndex, setCurrentIndex] = useState<string>("")

  const carousel = (index: number) => {
    if (active === 1 && index === 0) {
      setCurrentIndex("100%");
      setActive(index);
    } else if (active === 1 && index === 2) {
      setCurrentIndex("-100%");
      setActive(index);
    } else if (active === 2 && index === 1) {
      setCurrentIndex("0%");
      setActive(index);
    } else if (active === 2 && index === 0) {
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
      <div className="flex flex-col px-5 font-bold">PCS News</div>
      <div className="flex flex-row gap-2 justify-center text-center mt-2 mb-4 flex-nowrap overflow-hidden">
        {CAROUSEL.map((item, index) => (
          <div key={index} style={{
            transform: `translate(${currentIndex})`
          }} className="w-full h-16 min-w-[90%] rounded-md bg-primary transition ease-in-out">
            <div>test</div>
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