import React, { useState } from "react";
import { Magnetic } from "@/extras/Magnetic";
import { navLinks } from "@/constant/navlinks";
import Link from "next/link";
import { tw } from "@/utils/tw";
import { Sidebar } from "../Sidebar/Sidebar";
import {
  AnimatePresence,
  motion,
  useMotionValueEvent,
  useScroll,
} from "framer-motion";
import { SidebarButton } from "../SidebarButton/SidebarButton";

export const Navbar: React.FC<{ mode: "primary" | "secondary" }> = ({
  mode,
}) => {
  const [sidebarOpen, setSidebarOpen] = useState<boolean>(false);
  const [isScrollDown, setIsScrollDown] = useState<boolean>(false);
  const toggle = () => setSidebarOpen((prev) => !prev);
  const open = () => setSidebarOpen(true);
  const close = () => setSidebarOpen(false);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (value) => {
    if (value > 300) {
      setIsScrollDown(true);
    } else {
      setIsScrollDown(false);
    }
  });

  return (
    <nav
      className={tw(
        mode === "primary" ? "text-black" : "text-white",
        "font-manrope flex items-center justify-between py-4 pr-3 ss:p-6 font-semibold text-base ss:text-lg z-[99] relative"
      )}
    >
      <Link href={"/"}>
        <Magnetic>
          <div className="m-3 flex gap-1 group cursor-pointer">
            <span className="group-hover:animate-rotate">©</span>
            <div className="overflow-hidden">
              <span className="inline-block sm:group-hover:-translate-x-[72px] transition-transform delay-150 duration-500">
                <span className="whitespace-pre">Code By </span>
                <span className="relative">
                  <span className="whitespace-pre">Harman </span>
                  <span className="absolute top-0 right-0 translate-x-full">
                    Singh
                  </span>
                </span>
              </span>
            </div>
          </div>
        </Magnetic>
      </Link>

      {/* desktop-view */}
      <ul className="ss:flex hidden gap-3">
        {navLinks.slice(1).map(({ id, link, title }) => (
          <Magnetic key={id}>
            <li className="m-3 relative group">
              <Link href={link}>{title}</Link>
              <span
                className={tw(
                  mode === "primary" ? "bg-black" : "bg-white",
                  "invisible scale-0 group-hover:scale-100 group-hover:visible w-[7px] h-[7px] rounded-full absolute -bottom-5 right-1/2 translate-x-1/2 transition-all duration-300"
                )}
              />
            </li>
          </Magnetic>
        ))}
      </ul>

      {/* mobile-view */}
      <Magnetic className="ss:hidden cursor-pointer">
        <span className="flex items-center" onClick={open}>
          <span
            className={tw(
              mode === "primary" ? "bg-black" : "bg-white",
              "inline-block mr-2 size-[6px] rounded-full"
            )}
          />
          <span>Menu</span>
        </span>
      </Magnetic>
      <AnimatePresence>
        {sidebarOpen && <Sidebar close={close} />}
      </AnimatePresence>
      <AnimatePresence>
        {(sidebarOpen || isScrollDown) && (
          <SidebarButton isOpen={sidebarOpen} toggle={toggle} />
        )}
      </AnimatePresence>
    </nav>
  );
};
