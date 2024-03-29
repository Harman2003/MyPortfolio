import React, { useRef } from "react";
import {
  motion,
  useMotionValueEvent,
  MotionValue,
  useScroll,
  useTransform,
} from "framer-motion";
import { Magnetic } from "@/extras";
import HoverEffect from "@/components/HoverEffect/HoverEffect";
import Link from "next/link";
import { IntroText, sideIntroText } from "@/constant/intro";
const Intro = () => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [150, 0]);
  return (
    <section
      id="intro-section"
      ref={ref}
      className="font-manrope pt-20 relative"
    >
      <div className="grid sm:grid-cols-[50%,30%] justify-evenly px-4 sm:px-20 relative">
        <p className="sm:max-w-[660px] font-medium text-[clamp(1.5rem,2.5vw,2rem)]">
          {IntroText.split(" ").map((char) => (
            <>
            <span className="inline-block leading-[clamp(1.9rem,4vw,2.5rem)] overflow-hidden">
              <motion.span className="inline-block relative" whileInView={{y:["100%","0%"]}} transition={{duration:0.5}}>{char}</motion.span>
              </span>
              <span>{" "}</span>
            </>
          ))}
        </p>
        <div className="max-w-[60%] sm:max-w-[250px] pt-10 sm:pt-2 relative">
          <p className="text-lg font-semibold text-black/70">
           {sideIntroText}
          </p>
          <div className="hidden sm:block absolute -bottom-36 z-50">
            <AboutButton y={y} />
          </div>
        </div>
        <div className="sm:hidden absolute bottom-0 right-4 translate-y-1/2 z-50">
          <AboutButton y={y} />
        </div>
      </div>
    </section>
  );
};

const AboutButton: React.FC<{ y: MotionValue<number> }> = ({ y }) => {
  return (
    <Link href="/about" className="cursor-pointer rounded-full overflow-hidden">
      <motion.div style={{ y }}>
        <Magnetic
          className="bg-black size-36 flex rounded-full overflow-hidden"
          xFactor={0.5}
          yFactor={0.5}
        >
          <HoverEffect>
          <Magnetic
            className="m-auto w-full h-full"
            xFactor={0.1}
            yFactor={0.1}
          >
            <span className="w-full h-full flex justify-center items-center text-white font-semibold">
              About me
            </span>
          </Magnetic>
          </HoverEffect>
        </Magnetic>
      </motion.div>
    </Link>
  );
};

export default Intro;
