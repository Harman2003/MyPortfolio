"use client";
import { greetingMap } from "@/utils/greetingMap";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

export const Greeting = () => {
  const path = usePathname();
  const [idx, setIdx] = useState<number>(0);
  const greetingList = greetingMap(path);
  const isVisible = idx < greetingList.length;

  useEffect(() => {
    setIdx(0);
  }, [path]);

  useEffect(() => {
    let timer: any;
    (() => {
      timer = setTimeout(
        () => {
          setIdx((prev) => {
            if (prev < greetingList.length) {
              prev++;
            }
            return prev;
          });
        },
        idx == 0 ? 450 : 125
      );
    })();
    return () => clearTimeout(timer);
  }, [idx]);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          className="fixed top-0 bg-[#1c1d20] w-screen h-screen flex z-[999]"
          exit={{
            y: "-100%",
            transition: { delay: 0.4, duration: 0.5, ease: "easeInOut" },
          }}
        >
          <motion.span initial={{ opacity:0}} whileInView={{opacity:1, transition:{duration:0.2}}} className="m-auto flex items-center">
            <span className="inline-block mr-4 mt-1 size-3 rounded-full bg-white" />
            <span className="text-white text-[clamp(2rem,4vw,4rem)]">
              {greetingList[idx]}
            </span>
          </motion.span>

          <motion.div
            className="bg-transparent w-full absolute bottom-0 translate-y-full overflow-hidden"
            initial={{ height: 100 }}
            exit={{
              height: 0,
              transition: { delay: 0.4, duration: 0.5, ease: "easeInOut" },
            }}
          >
            <motion.div
              className="absolute bottom-0 right-1/2 translate-x-1/2 w-[260vw] sm:w-[150vw] bg-[#1c1d20] shadow-lg rounded-b-[50%] z-50"
              initial={{ height: 750 }}
              exit={{
                height: 0,
                transition: { delay: 0.4, duration: 0.5, ease: "easeInOut" },
              }}
            />
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
