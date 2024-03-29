"use client";
import React, { useEffect, useState } from "react";

export const Loader = () => {
  const [dots, setDots] = useState<number>(0);
  useEffect(() => {
      const timer = setInterval(() => {
      setDots((prev) => ++prev%4);
    }, 1000);
    return () => window.clearInterval(timer);
  }, []);
  return (
    <span>
      Loading
      {Array.from({ length: dots }).map((val,idx) => (
        <span key={idx}>.</span>
      ))}
    </span>
  );
};
