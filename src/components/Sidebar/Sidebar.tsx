import { navLinks } from "@/constant/navlinks";
import { Magnetic } from "@/extras";
import { motion } from "framer-motion";
import { tw } from "@/utils/tw";
import Link from "next/link";
import React from "react";
import { socials } from "@/constant/footer";

export const Sidebar: React.FC<{ close: () => void }> = ({ close }) => {
  return (
    <div className="fixed top-0 left-0 w-screen h-dvh">
      {/* Sidebar Section */}
      <motion.div
        className={tw(
          "absolute top-0 right-0 z-[100]",
          "bg-[#1c1d20] text-white font-normal",
          "size-full max-w-[560px] pt-28 p-8 xs:p-20 sm:p-24"
        )}
        initial={{ x: "calc(100% + 100px)" }}
        animate={{ x: "0%" }}
        exit={{ x: "calc(100% + 100px)" }}
        transition={{ ease: "easeInOut", duration: 0.5 }}
      >
        {/* Rounded Bulge */}
        <motion.div
          className="bg-transparent h-full absolute top-0 left-0 -translate-x-full overflow-hidden"
          initial={{ width: 100 }}
          animate={{ width: 0 }}
          exit={{ width: 100 }}
          transition={{ ease: "easeInOut", duration: 0.5 }}
        >
          <motion.div
            className="absolute left-0 top-1/2 -translate-y-1/2 h-[260vh] sm:h-[150vh] bg-[#1c1d20] rounded-l-[50%] z-10"
            initial={{ width: 750 }}
            animate={{ width: 0 }}
            exit={{ width: 750 }}
            transition={{ ease: "easeInOut", duration: 0.5 }}
          />
        </motion.div>
        {/* Content */}
        <div className="flex flex-col h-full">
          <span className="text-gray-50/30 text-sm">Navigation</span>
          <hr className="border-gray-50/30 my-8" />
          <ul className="flex flex-col gap-6 sm:gap-8 py-5">
            {navLinks.map(({ id, title, link }) => (
              <Link href={link} key={id}>
                <li className="w-fit relative group">
                  <span className="text-[clamp(2.5rem,4vw,5rem)]">{title}</span>
                  <span
                    className={tw(
                      "hidden xs:block bg-white size-3 rounded-full",
                      "invisible scale-0 group-hover:scale-100 group-hover:visible",
                      "absolute top-1/2 -translate-y-1/2 -left-10 transition-all duration-300"
                    )}
                  />
                </li>
              </Link>
            ))}
          </ul>
          <div className="mt-auto text-gray-400 text-[11px] font-semibold">
            SOCIALS
          </div>
          <div className="mt-2 text-white/95 text-sm sm:text-base flex gap-6">
            {socials.map(({ title, link }, idx) => (
              <Link key={idx} href={link}>
                <Magnetic
                  xFactor={0.3}
                  yFactor={0.3}
                  className="group cursor-pointer"
                >
                  <span>{title}</span>
                  <div className="border-t border-white w-0 group-hover:w-full transition-all duration-500"></div>
                </Magnetic>
              </Link>
            ))}
          </div>
        </div>
      </motion.div>

      {/* background shade */}
      <motion.div
        className="absolute top-0 w-full h-full bg-black/30 z-[99]"
        onClick={close}
        exit={{ opacity: 0 }}
      />
    </div>
  );
};
