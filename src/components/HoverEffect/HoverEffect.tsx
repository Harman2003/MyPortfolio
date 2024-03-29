import { motion, useAnimate } from "framer-motion";
import React, { ReactNode } from "react";

const HoverEffect = ({ children }: { children: ReactNode }) => {
  const [scope, animate] = useAnimate();
  const onHoverStart = () => {
    animate(scope.current, { y: ["100%", "15%"] }, { duration: 0.4 });
  };
  const onHoverEnd = () => {
    animate(scope.current, { y: "-100%" }, { duration: 0.4 });
  };
  return (
    <motion.div
      className="relative w-full h-full overflow-hidden"
      onHoverStart={onHoverStart}
      onHoverEnd={onHoverEnd}
    >
      <motion.div
        ref={scope}
        className="absolute bottom-0 -z-10 w-[120%] h-[150%] bg-[#455ce9] rounded-[50%]"
        initial={{ y: "100%" }}
        style={{left:"50%", translateX:"-50%"}}
      />
      {children}
    </motion.div>
  );
};

export default HoverEffect;
