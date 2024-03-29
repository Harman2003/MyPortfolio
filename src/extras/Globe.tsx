import GlobeIcon from ".../public/assets/globe1.json";
import { motion } from "framer-motion";
import Lottie from "lottie-react";

export const Globe = () => {
  return (
    <motion.div
      animate={{ rotate: [0, 25, 0, -25, 0] }}
      transition={{
        duration: 8,
        repeat: Infinity,
        ease: "easeIn",
        repeatDelay: 0,
      }}
      className="flex items-center justify-center rounded-full p-1 relative aspect-square h-20"
    >
      <Lottie
        animationData={GlobeIcon}
        loop={true}
        className="absolute w-40 h-40"
      />
    </motion.div>
  );
}