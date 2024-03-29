import * as React from "react";
import { Magnetic } from "@/extras";
import { Navbar } from "@/components";
import myIcon from ".../public/images/personal/harman_icon.png";
import Image from "next/image";
import useMultiRef from "@/hooks/useMultiRef";
import { queries } from "@/constant/contact";
import { FormEvent, useEffect, useState } from "react";
import { socials } from "@/constant/footer";
import Link from "next/link";
import axios from "axios";
import { motion } from "framer-motion";
import { Loader } from "@/extras/Loader";

export default function Home() {
  const [currentTime, setCurrentTime] = useState<string>("");
  useEffect(() => {
    const time = new Date().toLocaleString().split(",")[1];
    setCurrentTime(time);
  }, []);

  const { ref, getRef } = useMultiRef<HTMLInputElement>([
    "name",
    "email",
    "service",
    "message",
  ]);

  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [status, setStatus] = useState<
    "idle" | "success" | "error" | "empty" | "invalid"
  >("idle");
  const notification = {
    idle: "Send It",
    success: "Success !",
    error: "Error !",
    empty: "Empty fields !",
    invalid: "Invalid email !",
  };
  useEffect(() => {
    if (status !== "idle") {
      setTimeout(() => {
        setStatus("idle");
      }, 3000);
    }
  }, [status]);

  const submit = async (e: FormEvent) => {
    e.preventDefault();
    const name = getRef("name").ref?.value;
    const email = getRef("email").ref?.value;
    const service = getRef("service").ref?.value;
    const message = getRef("message").ref?.value;

    if (!name || !email || !service || !message) {
      setStatus("empty");
      return;
    }
    if (!emailValidator(email)) {
      setStatus("invalid");
      return;
    }

    setIsLoading(true);
    setStatus("idle");
    try {
      await axios.post(
        "/api/contact",
        { name, email, service, message },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      clear();
      setStatus("success");
    } catch (err) {
      console.log(err);
      setStatus("error");
    } finally {
      setIsLoading(false);
    }
  };

  const clear = () => {
    const name = getRef("name").ref;
    const email = getRef("email").ref;
    const service = getRef("service").ref;
    const message = getRef("message").ref;
    if (name && email && service && message) {
      name.value = "";
      email.value = "";
      service.value = "";
      message.value = "";
    }
  };

  const emailValidator = (email: string) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  return (
    <div className="w-full h-full bg-[#1c1d20] text-white relative">
      <Navbar mode="secondary" />
      <div className="flex flex-col items-center font-manrope ">
        <div className="w-full sm:w-2/3 px-6">
          <header className="w-full grid sm:grid-cols-[70%,20%] justify-between items-end py-20 sm:pb-32">
            <h1 className="xs:flex xs:flex-col text-[clamp(2.5em,5vw,6em)] leading-[1.2em] tracking-tight xs:whitespace-nowrap">
              <span>Let&rsquo;s connect to </span>
              <span>Build Something</span>
            </h1>
            <Image
              src={myIcon}
              alt="harman singh"
              className="hidden sm:inline size-[4rem] sm:size-[6rem] rounded-full object-cover mr-6"
            />
            <div className="sm:hidden flex flex-col gap-4 mt-8">
              <span className="text-gray-100/30 font-medium text-xs">
                CONTACT DETAILS
              </span>
              <span>singhharmandhindsa@gmail.com</span>
              <span>+917087332775</span>
            </div>
          </header>

          <main className="w-full sm:grid sm:grid-cols-[70%,20%] justify-between">
            <section>
              <form onSubmit={submit} noValidate>
                {queries.map(({ ques, placeholder, type, label }, idx) => (
                  <div key={idx}>
                    <hr className="border-gray-50/30" />
                    <div className="flex gap-10 my-10">
                      <span className="text-gray-100/30">0{idx + 1}</span>
                      <div className="w-full text-xl sm:text-2xl">
                        <div className="mb-5">{ques}</div>
                        <input
                          className="w-full sm:w-4/5 bg-transparent placeholder:text-gray-50/30 outline-none"
                          placeholder={placeholder}
                          type={type}
                          ref={(ele) => {
                            const refObj = getRef(label);
                            if (refObj) ref.current[refObj.idx] = ele;
                          }}
                        />
                      </div>
                    </div>
                  </div>
                ))}

                {/* Send Message */}
                <span className="inline-block border-t border-gray-50/30 w-full my-32 ss:my-40 relative">
                  <button
                    type="submit"
                    disabled={status != "idle" || isLoading}
                    className="absolute top-1/2 -translate-y-1/2 right-0 -translate-x-[10%] sm:-translate-x-1/2 cursor-pointer"
                  >
                    <Magnetic
                      className="bg-[#455ce9] size-[clamp(9rem,14vw,12rem)] flex rounded-full overflow-hidden"
                      xFactor={0.5}
                      yFactor={0.5}
                    >
                      <Magnetic
                        className="m-auto w-full h-full"
                        xFactor={0.1}
                        yFactor={0.1}
                      >
                        <motion.span
                          className="w-full h-full flex justify-center items-center text-white text-lg"
                          animate={{
                            opacity: [0, 1],
                            transition: { duration: 0.5 },
                          }}
                          key={status}
                        >
                          {isLoading ? <Loader /> : notification[status]}
                        </motion.span>
                      </Magnetic>
                    </Magnetic>
                  </button>
                </span>
              </form>
            </section>
            <section className="hidden sm:flex flex-col gap-20">
              <div className="flex flex-col gap-4">
                <span className="text-gray-100/30 font-medium text-xs">
                  CONTACT DETAILS
                </span>
                <span>singhharmandhindsa@gmail.com</span>
                <span>+917087332775</span>
              </div>
              <div className="flex sm:text-[17px] flex-col gap-4">
                <span className="text-gray-100/30 font-medium text-xs">
                  SOCIALS
                </span>
                {socials.map(({ title, link }, idx) => (
                  <Link key={idx} href={link}>
                    <Magnetic
                      xFactor={0.3}
                      yFactor={0.3}
                      className="group cursor-pointer"
                    >
                      <span className="relative">
                        {title}
                        <div className="absolute bottom-0 border-t border-white w-0 group-hover:w-full transition-all duration-500"></div>
                      </span>
                    </Magnetic>
                  </Link>
                ))}
              </div>
            </section>
          </main>
        </div>
      </div>
      <footer>
        <div className="p-6 sm:p-10">
          <div className="ss:hidden">
            <div className="text-gray-400 text-[11px] font-semibold">
              SOCIALS
            </div>
            <div className="mt-3 text-white/95 flex gap-6">
              {socials.map(({ title, link }, idx) => (
                <Link key={idx} href={link}>
                  <span>{title}</span>
                </Link>
              ))}
            </div>
          </div>
          <hr className="ss:hidden my-4 sm:my-8 border border-gray-100/25" />

          <div className="flex gap-8">
            <div>
              <div className="text-gray-400 text-[11px] font-semibold">
                VERSION
              </div>
              <div className="mt-3 text-white/95 sm:text-[17px] whitespace-nowrap">
                2024 © Edition
              </div>
            </div>
            <div className="ml-auto ss:ml-0">
              <div className="text-gray-400 text-[11px] font-semibold">
                LOCAL TIME
              </div>
              <div className="mt-3 text-white/95 sm:text-[17px] whitespace-nowrap">
                {currentTime}
              </div>
            </div>
            <div className="hidden ss:block ml-auto">
              <div className="text-gray-400 text-[11px] font-semibold">
                SOCIALS
              </div>
              <div className="mt-3 text-white/95 sm:text-[17px] flex gap-6">
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
          </div>
        </div>
      </footer>
    </div>
  );
}
