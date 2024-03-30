"use client";
import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Magnetic } from "@/extras";
import Link from "next/link";
import HoverEffect from "../HoverEffect/HoverEffect";
import { socials } from "@/constant/footer";
import { useDimension } from "@/hooks/useWidth";

export const Footer: React.FC = () => {
  const {width} = useDimension();
  const [currentTime, setCurrentTime] = useState<string>("");
  useEffect(() => {
    const time = new Date().toLocaleString().split(",")[1];
    setCurrentTime(time);
  }, []);

  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "start start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], [-200, 0]);

  return (
    <motion.div
      ref={ref}
      className="min-h-dvh bg-[#1c1d20] w-full flex flex-col justify-between relative"
      style={{ y: width<1060?0:y }}
    >
      <div className="pt-14 flex justify-center">
        <div className="w-full px-6 ss:px-20 md:w-2/3">
          <div className="flex flex-col">
            <span className="text-white  text-[clamp(3rem,6vw,5rem)] leading-[clamp(3rem,4vw,5rem)]">
              <Image
                src="/images/personal/harman_icon.png"
                width={80}
                height={80}
                alt=""
                className="hidden xs:inline size-[clamp(3rem,6vw,5rem)] rounded-full object-cover mr-6"
              />
              Let’s work
            </span>
            <span className="text-white text-[clamp(3rem,6vw,5rem)] leading-[clamp(3rem,4vw,5rem)]">
              together
            </span>
          </div>
          <span className="inline-block border-gray-100/25 border w-full my-20 ss:my-28 relative">
            <Link
              href={"/contact"}
              className="absolute top-1/2 -translate-y-1/2 right-0 -translate-x-[10%] sm:-translate-x-1/2 cursor-pointer"
            >
              <Magnetic
                className="bg-[#455ce9] size-[clamp(9rem,14vw,12rem)] flex rounded-full overflow-hidden"
                xFactor={0.5}
                yFactor={0.5}
              >
                <Magnetic
                  className="m-auto w-full h-full"
                  xFactor={0.1}
                  yFactor={0.1}
                >
                  <span className="w-full h-full flex justify-center items-center text-white text-lg">
                    Get in Touch
                  </span>
                </Magnetic>
              </Magnetic>
            </Link>
          </span>

          <div className="flex flex-col sm:flex-row gap-4">
            <Link href="mailto:singhharmandhindsa@gmail.com">
              <Magnetic
                xFactor={0.1}
                yFactor={0.1}
                className="text-white/95 sm:text-[18px] whitespace-nowrap border border-gray-100/25 rounded-full overflow-hidden"
              >
                <HoverEffect>
                  <div className="px-9 py-[26px]">
                    singhharmandhindsa@gmail.com
                  </div>
                </HoverEffect>
              </Magnetic>
            </Link>

            <Link href="tel:+917087332775" className="">
              <Magnetic
                xFactor={0.1}
                yFactor={0.1}
                className="text-white/95 sm:text-[18px] whitespace-nowrap border border-gray-100/25 rounded-full overflow-hidden"
              >
                <HoverEffect>
                  <div className="px-9 py-[26px]">+91 7087332775</div>
                </HoverEffect>
              </Magnetic>
            </Link>
          </div>
        </div>
      </div>

      <div className="p-6 sm:p-10">
        <div className="ss:hidden">
          <div className="text-gray-400 text-[11px] font-semibold">SOCIALS</div>
          <div className="mt-3 text-white/95 flex gap-6">
            {socials.map(({ title, link }, idx) => (
              <Link key={idx} href={link}>
                <span>{title}</span>
              </Link>
            ))}
          </div>
        </div>
        <hr className="ss:hidden my-4 sm:my-8 border border-gray-100/25" />

        <div className="flex gap-8">
          <div>
            <div className="text-gray-400 text-[11px] font-semibold">
              VERSION
            </div>
            <div className="mt-3 text-white/95 sm:text-[17px] whitespace-nowrap">
              2024 © Edition
            </div>
          </div>
          <div className="ml-auto ss:ml-0">
            <div className="text-gray-400 text-[11px] font-semibold">
              LOCAL TIME
            </div>
            <div className="mt-3 text-white/95 sm:text-[17px] whitespace-nowrap">
              {currentTime}
            </div>
          </div>
          <div className="hidden ss:block ml-auto">
            <div className="text-gray-400 text-[11px] font-semibold">
              SOCIALS
            </div>
            <div className="mt-3 text-white/95 sm:text-[17px] flex gap-6">
              {socials.map(({ title, link }, idx) => (
                <Link key={idx} href={link}>
                  <Magnetic
                    xFactor={0.3}
                    yFactor={0.3}
                    className="group cursor-pointer"
                  >
                    <span>{title}</span>
                    <div className="border-t border-white w-0 group-hover:w-full transition-all duration-500"></div>
                  </Magnetic>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};
