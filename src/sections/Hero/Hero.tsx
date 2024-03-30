import { Hanger, RoleText, Navbar } from "@/components";
import { Globe } from "@/extras";
import profile from ".../public/images/personal/harman.png";
import { useDimension } from "@/hooks/useWidth"; 
import Image from "next/image";
import { useRef } from "react";
import { useMotionValueEvent, useScroll } from "framer-motion";
import { ParallaxText } from "@/components/HeroText/ParallaxText";

const Hero = () => {
  const { width } = useDimension();
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ container: ref, offset: ["start start", "end start"] })
  useMotionValueEvent(scrollYProgress, "change", (latest)=>console.log(latest))
  return (
    <section
      id="homepage"
      className="bg-primary h-screen ss:h-[115vh] relative overflow-hidden ss:py-[15vh] flex flex-col justify-end"
      ref={ref}
    >
      <div className="absolute w-full top-0">
        <Navbar mode="secondary" />
      </div>

      <div className="absolute overflow-hidden -top-[5%] w-full h-[110%]">
        <Image
          src={profile}
          className="absolute right-1/2 translate-x-1/2 w-fit min-w-fit h-full"
          alt="harman singh"
          priority
        ></Image>
      </div>
      <div className="absolute flex flex-col ss:flex-col-reverse">
        <div className="w-screen overflow-hidden flex">
          <ParallaxText baseVelocity={2}>Harman Singh — </ParallaxText>
        </div>
        <div className="flex justify-between items-end py-2">
          {width > 620 && <Hanger />}
          <RoleText />
          {width <= 620 && <Globe />}
        </div>
      </div>
      <div className="absolute top-[45%] -translate-y-1/2 right-0"></div>
    </section>
  );
};

export default Hero;
