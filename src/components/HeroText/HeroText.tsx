import React, {
  useEffect,
  useRef,
  useState,
} from "react";
import {
  motion,
  useMotionValueEvent,
  useScroll,
  useTransform,
} from "framer-motion";
import { MotionText } from "../MotionText/MotionText";
import { speedFactor } from "@/utils/speed";
import { isMobile } from "@/utils/isMobile";

export interface TextAnimationProps {
  x: number;
  direction: number;
}

export const HeroText = ({ text }: { text: string[] }) => {
  const textRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll();
  const yProgress = useTransform(
    scrollYProgress,
    [0, 1],
    [0,  -0.4*innerWidth]
  );
  const [animateProps, setAnimateProps] = useState<TextAnimationProps>({
    x: 0,
    direction: -1,
  });

  const handleResize = () => {
    setAnimateProps((prev) => ({ ...prev, x: 0 }));
  };
  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    const direction = scrollYProgress.getVelocity() > 0 ? -1 : 1;
    setAnimateProps((prev) => ({ ...prev, direction: direction }));
  });

  useEffect(() => {
    requestAnimationFrame(animate);

    //-- below causes issue in mobile view as height changes when scroll due to chrome top navbar which cause reset in herotext
    // window.addEventListener("resize", handleResize);
    // return () => window.removeEventListener("resize", handleResize);
  },[]);

  const animate = () => {
    setAnimateProps(({ x, direction }) => {
      const range = textRef.current?.clientWidth || 1000;
      if (x > 0) return { x: -1 * range, direction };
      if (x < -1 * range) return { x: 0, direction };
      return { x: x + speedFactor(innerWidth) * direction, direction };
    });
    requestAnimationFrame(animate);
  }

  return (
    <div className="relative">
      <motion.div
        className="flex items-center overflow-hidden text-white font-manrope text-[max(9em,14vw)] font-medium whitespace-nowrap"
        animate={{ translateX: isMobile() ? 0 : yProgress.getPrevious() }}
        transition={{
          type: "tween",
          ease: "easeOut",
        }}
        ref={textRef}
      >
        {text.map((character, index) => (
          <MotionText
            key={index}
            text={character}
            x={animateProps.x}
            parent={{
              width: textRef.current?.getBoundingClientRect().width || 0,
              left: textRef.current?.getBoundingClientRect().left || 0,
            }}
          />
        ))}
      </motion.div>
    </div>
  );
};
