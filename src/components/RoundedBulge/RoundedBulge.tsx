import { useScroll, useTransform, motion } from "framer-motion";
import React, { useRef } from "react";

export const RoundedBulge = () => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const yParent = useTransform(scrollYProgress, [0, 1], [100, 0]);
  const yChild = useTransform(scrollYProgress, [0, 1], [750, 0]);

  return (
    <div ref={ref} className="">
      <motion.div
        className="bg-transparent w-full relative overflow-hidden"
        style={{ height: yParent }}
      >
        <motion.div
          className="absolute bottom-0 right-1/2 translate-x-1/2 w-[260vw] sm:w-[150vw] h-[750px] bg-white shadow-lg rounded-b-[50%] z-10"
          style={{ height: yChild }}
        />
      </motion.div>
    </div>
  );
};
