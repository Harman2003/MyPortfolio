import { tw } from "@/utils/tw";
import React from "react";
export interface TextProps {
  text: string;
  size?: string | number;
  color?: string;
  lineHeight?: string;
  className?: string;
}
export const Text: React.FC<TextProps> = ({
  text,
  size,
  color = "black",
  lineHeight = "25px",
  className,
}) => {
  return (
    <p
      className={tw(
        "font-manrope leading-[25px] font-normal text-[14px] sm:text-[16px]",
        className
      )}
      style={{ color: color, fontSize: size, lineHeight: lineHeight }}
    >
      {text}
    </p>
  );
};