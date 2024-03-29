"use client";
import React from "react";
import Image from "next/image";
import { Globe } from "@/extras";
import hangerSvg from ".../public/svgs/hanger.svg";

export const Hanger = () => {
  return (
    <div className="w-fit h-fit flex items-center rounded-r-full p-4 pl-0 relative z-50 overflow-hidden">
      <Image src={hangerSvg} alt="hanger" className="absolute top-0 w-full h-full"/>
      <div className="bg-gradient-radial absolute top-0 w-5 h-5 "></div>
      <div className="flex flex-col text-white font-semibold font-manrope mx-11 z-50">
        <span>Located</span>
        <span>in the</span>
        <span>Chandigarh</span>
      </div>
      <div className="">
     <Globe size={160}/>
      </div>
    </div>
  );
};
