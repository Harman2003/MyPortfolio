import React from 'react'
import { motion, useAnimate } from 'framer-motion';
import { tw } from '@/utils/tw';
export const SidebarButton: React.FC<{ isOpen: boolean; toggle: () => void }> = ({ isOpen, toggle }) => {
    const [scope, animate] = useAnimate();
    const onHoverStart = () => {
      animate(scope.current, { y: ["100%", "25%"] }, { duration: 0.4 });
    };
    const onHoverEnd = () => {
      animate(scope.current, { y: "-100%" }, { duration: 0.4 });
    };

  return (
    <motion.button
      initial={{ scale: 0 }}
      animate={{
        scale: 1,
        background: isOpen ? "#455ce9" : "#1c1d20",
      }}
      exit={{ scale: 0 }}
      transition={{ duration: 0.3 }}
      className={tw(
        !isOpen && "border border-gray-50/30",
        "hidden sm:block fixed z-[99] top-5 right-5 size-20 p-6 rounded-full overflow-hidden"
      )}
          onClick={toggle}
          onHoverStart={onHoverStart}
          onHoverEnd={onHoverEnd}
    >
      <motion.hr
        className="border-gray-50/50 mb-2"
        animate={{
          rotate: isOpen ? "45deg" : "0",
          y: isOpen ? 4 : 0,
        }}
      />
      <motion.hr
        className="border-gray-50/50"
        animate={{
          rotate: isOpen ? "-45deg" : "0",
          y: isOpen ? -4 : 0,
        }}
          />
          
          {/* hover-effect */}
      <motion.div
        ref={scope}
        className="absolute left-0 bottom-0 -z-10 w-full h-[200%] bg-[#455ce9] rounded-full"
        initial={{ y: "100%" }}
      />
    </motion.button>
  );
}
