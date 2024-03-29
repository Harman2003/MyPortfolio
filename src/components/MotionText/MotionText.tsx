import React, { useEffect, useLayoutEffect, useRef, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { offset } from "@/utils/offset";
import { isMobile } from "@/utils/isMobile";
interface MotionTextProps {
  text: string;
  x: number;
  parent: { width: number; left: number };
}
export const MotionText: React.FC<MotionTextProps> = ({ text, x, parent }) => {
  const ref = useRef<HTMLSpanElement>(null);
  const [left, setLeft] = useState<number>(0);

  useEffect(() => {
    if (ref.current) {
      const left = ref.current.getBoundingClientRect().left;
      setLeft(left);
    }
  }, []);

  let position = 0;
  if (ref.current) {
    const width = ref.current.getBoundingClientRect().width;
    if (-1 * x < left - parent.left) {
      position = x;
    } else {
      position = x + parent.width;
    }
  }

  return (
    <>
      <motion.span
        ref={ref}
        style={{ translateX: position, transition: "ease" }}
        className="whitespace-pre"
      >
        {text}
      </motion.span>
    </>
  );
};
