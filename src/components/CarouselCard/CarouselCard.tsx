import React from "react";
import Image, { StaticImageData } from "next/image";

export interface CarouselCardProps {
  src: string | StaticImageData;
  bgcolor: string;
  type: "img" | "video";
}

const CarouselCard: React.FC<CarouselCardProps> = ({ bgcolor, src, type }) => {
  return (
    <div className="px-6 py-10" style={{ backgroundColor: bgcolor }}>
      {type === "img" && (
        <Image
          src={src}
          alt="project-img"
          className="w-[clamp(420px,26vw,500px)] min-w-[clamp(400px,26vw,500px)] h-[35vh] min-h-[220px] object-cover"
        />
      )}

      {type === "video" && (
        <video
          muted
          autoPlay
          loop
          preload="auto"
          className="w-[clamp(400px,26vw,500px)] min-w-[clamp(400px,26vw,500px)] h-[35vh] min-h-[220px] object-cover"
        >
          <source src={src + ""} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      )}
    </div>
  );
};

export default CarouselCard;
