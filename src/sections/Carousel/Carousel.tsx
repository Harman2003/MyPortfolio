import React, { useRef } from "react";
import { carousel } from "@/constant/carousel";
import CarouselCard from "@/components/CarouselCard/CarouselCard";
import { motion, useScroll, useTransform } from "framer-motion";
import { tw } from "@/utils/tw";
const Carousel = () => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const posX = useTransform(scrollYProgress, [0, 1], [-50, 50]);
  const negX = useTransform(scrollYProgress, [0, 1], [50, -50]);
  return (
    <div
      ref={ref}
      className="hidden md:flex flex-col overflow-x-hidden items-center gap-10 py-20 relative bg-white z-10"
    >
      {carousel.map((row, idx) => (
        <motion.div
          className={tw("w-fit flex gap-10")}
          key={idx}
          style={{ x: idx % 2 ? negX : posX }}
        >
          {row.map(({ id, src, type, bgcolor }) => (
            <CarouselCard src={src} bgcolor={bgcolor} type={type} key={id} />
          ))}
        </motion.div>
      ))}
    </div>
  );
};

export default Carousel;
