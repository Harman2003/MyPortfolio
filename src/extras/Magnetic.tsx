import React, {MouseEvent, useState } from "react";
import { motion } from "framer-motion";
import { useRef } from "react";
interface MagneticProps{
  className?:string
  children: React.ReactNode;
  xFactor?: number;
  yFactor?: number;
}

export const Magnetic: React.FC<MagneticProps> = ({className, xFactor=0.5, yFactor=0.5, children }) => {
  const ref = useRef<HTMLDivElement>(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const move = (e: MouseEvent<HTMLDivElement>) => {
    if (!ref.current) return;
    const { clientX, clientY } = e;
    const { width, height, top, left } = ref.current.getBoundingClientRect();
    const x = clientX - (left + width / 2);
    const y = clientY - (top + height / 2);
    setPosition({ x: x * xFactor, y: y * yFactor });
  };
  const leave = (e: MouseEvent<HTMLDivElement>) => {
    setPosition({ x: 0, y: 0 });
  };
  const { x, y } = position;
  // console.log(x,y)
  return (
    <motion.div
      onMouseMove={move}
      onMouseLeave={leave}
      ref={ref}
      whileHover={{ x, y, transition: { duration:0.2}}}
      transition={{ type: "spring", stiffness: 100, damping: 5, mass: 0.5}}
      className={className}
    >
      {children}
    </motion.div>
  );
};
