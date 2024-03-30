import * as React from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Magnetic } from "@/extras";
import GlobeIcon from ".../public/assets/globe1.json";
import { Footer, Navbar, RoundedBulge } from "@/components";
import myphoto from ".../public/images/personal/harman_original.jpeg";
import Image from "next/image";
import Lottie from "lottie-react";
import { GoDownload } from "react-icons/go";

export default function Home() {

  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, (val)=>(`-${20*(1-val)}%`));
  return (
    <>
      <Navbar mode="primary" />
      <main>
        <div className="bg-white relative z-10 font-manrope">
          <div className="px-4 xs:px-10 sm:px-20 md:px-40">
            <h1 className="mt-16 xs:flex xs:flex-col text-[clamp(2.5em,6vw,6em)] leading-[1.2em] tracking-tight">
              <span>Making projects thrive </span>
              <span>in digital world</span>
            </h1>

            {/* Separator*/}
            <span className="inline-block border w-full my-20 ss:my-28 relative">
              <div className="absolute top-1/2 -translate-y-1/2 right-0 -translate-x-[10%] sm:-translate-x-1/2 cursor-pointer">
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
                      {/* Rotating Globe */}
                      <motion.div
                        animate={{ rotate: [0, 25, 0, -25, 0] }}
                        transition={{
                          duration: 8,
                          repeat: Infinity,
                          ease: "easeIn",
                          repeatDelay: 0,
                        }}
                        className="flex items-center justify-center rounded-full p-1 aspect-square"
                      >
                        <Lottie
                          animationData={GlobeIcon}
                          loop={true}
                          className="size-40 md:size-52"
                        />
                      </motion.div>
                    </span>
                  </Magnetic>
                </Magnetic>
              </div>
            </span>

            {/* About Me */}
            <div className="grid md:grid-cols-[30%,70%] gap-10">
              <div className="flex flex-col gap-5 max-w-[600px]">
                <span>
                  I&rsquo;m a 3rd year B.Tech undergraduate at PEC, Chandigarh &
                  an enthusiastic full stack web developer. With each project, I
                  push my work to new horizons, always putting quality and
                  growth first.
                </span>
                <a
                  href="https://drive.google.com/uc?export=download&id=1mZJ8ezIQhgXybIUGKSaMRpOawwZEATXJ"
                  className="text-blue-600 group w-fit"
                >
                  <span className="w-fit flex gap-2 items-center">

                  <GoDownload />
                  My Resume
                  </span>
                <div className="border-t border-blue-600 w-0 group-hover:w-full transition-all duration-500"></div>
                </a>
                <span className="text-gray-400">Always Exploring...</span>
              </div>
              <div className="bg-black overflow-hidden h-[80%]">
                <motion.div className="w-full h-full" style={{ y: y }}>
                  <Image src={myphoto} alt="harman singh" priority />
                </motion.div>
              </div>
            </div>
          </div>
        </div>
        <RoundedBulge />
      </main>
      <Footer />
    </>
  );
}
