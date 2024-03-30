import React, { useRef, useState } from "react";
import { MouseEvent } from "react";
import { projects } from "@/constant/projects";
import Image from "next/image";
import {
  AnimatePresence,
  motion,
  useMotionValueEvent,
  useScroll,
} from "framer-motion";
import { tw } from "@/utils/tw";
import { useMousePosition } from "@/hooks/useMousePosition";
import { Magnetic } from "@/extras";
import HoverEffect from "@/components/HoverEffect/HoverEffect";
import Link from "next/link";
const Projects = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const hoverCardRef = useRef<HTMLDivElement>(null);
  const [isHover, setIsHover] = useState<boolean>(false);
  const { clientX, clientY } = useMousePosition();
  const [projectIdx, setProjectIdx] = useState<number>(0);
  const yScroll = projectIdx * -100 + "%";
  const { scrollY } = useScroll();
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const move = () => {
    if (!containerRef.current || !hoverCardRef.current) return;
    const { top, left } = containerRef.current.getBoundingClientRect();
    const x = clientX - left - 200;
    const y = clientY - top - 200;
    setPosition({ x, y });
  };
  const leave = (e: MouseEvent<HTMLDivElement>) => {
    setPosition({ x: 0, y: 0 });
  };

  //move fn will run both on mousemove & scroll
  useMotionValueEvent(scrollY, "change", () => {
    move();
  });

  return (
    <div className="relative z-10 bg-white">
      {/* mobile-view */}
      <div className="md:hidden flex flex-wrap gap-10 ss:gap-5 px-10 pt-60 pb-20">
        {projects.slice(0, 2).map(({ bgcolor, id, img, label, title }) => (
          <div key={id} className="w-full ss:flex-1">
            <div
              className="w-full aspect-square px-6 py-10"
              style={{ backgroundColor: bgcolor }}
            >
              <div className="w-full h-full relative">
                <Image
                  src={img}
                  alt="project-img"
                  className="aspect-auto sm:hover:scale-105 transition-all duration-500 object-contain"
                  fill
                />
              </div>
            </div>
            <div className="mt-4">
              <span className="text-gray-800 text-[32px]">{title}</span>
              <hr className="border my-3" />
              <span className="text-gray-600 font-medium flex justify-between">
                <span>{label}</span>
                <span>{2024}</span>
              </span>
            </div>
          </div>
        ))}
      </div>

      {/* desktop-view */}
      <div
        className="hidden md:block font-manrope pt-60 pb-40 px-32 overflow-x-hidden relative"
        ref={containerRef}
        onMouseMove={move}
        onMouseLeave={leave}
      >
        <div className="text-sm font-light text-gray-500 px-20 pb-6">
          RECENT WORK
        </div>
        <ul
          onMouseOver={() => setIsHover(true)}
          onMouseLeave={(e) => setIsHover(false)}
          className="cursor-pointer"
        >
          {projects.map(({ id, title, label, link }, index) => (
            <Link
              href={link}
              key={id}
              onMouseEnter={() => setProjectIdx(index)}
              target="_blank"
            >
              <li
                className={tw(
                  "group border-t-2 px-20 py-10",
                  index == projects.length - 1 && "border-b-2"
                )}
              >
                <span className="grid grid-cols-[3fr,1fr] items-center">
                  <span
                    className={tw(
                      "font-medium text-[clamp(1.5rem,5vw,6rem)]",
                      "group-hover:-translate-x-2 group-hover:text-gray-300 transition-all duration-300"
                    )}
                  >
                    {title}
                  </span>
                  <span
                    className={tw(
                      "text-lg font-semibold text-black/70",
                      "group-hover:translate-x-2 group-hover:text-gray-200 transition-all duration-300"
                    )}
                  >
                    {label}
                  </span>
                </span>
              </li>
            </Link>
          ))}
        </ul>

        {/*Animative Project Card */}
        <AnimatePresence>
          {isHover && (
            <motion.div
              ref={hoverCardRef}
              className="absolute top-0 left-0 z-50 size-[400px] overflow-hidden pointer-events-none"
              initial={{ scale: 0 }}
              animate={{
                x: position.x,
                y: position.y,
                scale: 1,
              }}
              transition={{
                x: { type: "tween", ease: "backOut", duration: 0.5 },
                y: { type: "tween", ease: "backOut", duration: 0.5 },
                scale: { delay: 0.25, duration: 0.3, ease: "easeOut" },
              }}
              exit={{
                scale: 0,
                transition: { delay: 0, duration: 0.3, ease: "easeOut" },
              }}
            >
              <motion.div
                className="w-full h-full"
                animate={{ y: yScroll }}
                transition={{ duration: 0.5, ease: "easeOut" }}
              >
                {projects.map((item) => (
                  <div key={item.id} className="w-full h-full py-[0.5px]">
                    <div
                      className="w-full h-full px-6 py-20"
                      style={{ backgroundColor: item.bgcolor }}
                    >
                      <div className="w-full h-full relative">
                        <Image
                          src={item.img}
                          alt="project-img"
                          className="aspect-auto object-contain"
                          fill
                        />
                      </div>
                    </div>
                  </div>
                ))}
              </motion.div>

              {/* view button */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 cursor-pointer rounded-full">
                <Magnetic
                  className="bg-[#455ce9] size-20 flex rounded-full overflow-hidden"
                  xFactor={0.5}
                  yFactor={0.5}
                >
                  <Magnetic
                    className="m-auto w-full h-full"
                    xFactor={0.1}
                    yFactor={0.1}
                  >
                    <span className="w-full h-full flex justify-center items-center text-white">
                      View
                    </span>
                  </Magnetic>
                </Magnetic>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* More Work */}
      <motion.div className="flex cursor-pointer pb-20">
        <Magnetic
          className="mx-auto border-2 w-44 h-[74px] flex rounded-full overflow-hidden"
          xFactor={0.5}
          yFactor={0.5}
        >
          <HoverEffect>
            <Magnetic
              className="m-auto w-full h-full"
              xFactor={0.1}
              yFactor={0.1}
            >
              <motion.span
                className="w-full h-full flex justify-center items-center text-gray-700"
                whileHover={{ color: "white" }}
              >
                More Work
              </motion.span>
            </Magnetic>
          </HoverEffect>
        </Magnetic>
      </motion.div>
    </div>
  );
};

export default Projects;
