"use client";
import { useEffect, useState } from "react";

export const useDimension = () => {
  const [dimension, setDimension] = useState({ width: 0, height: 0 });
  const handleResize = () => {
    const { innerWidth, innerHeight } = window;
    setDimension({ width: innerWidth, height: innerHeight });
  };

  useEffect(() => {
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  return dimension;
};
