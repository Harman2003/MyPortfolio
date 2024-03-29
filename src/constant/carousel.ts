import certify from ".../public/images/carousel/certify.png";
import gane from ".../public/images/carousel/gane.png";
import insta from ".../public/images/carousel/insta.jpg";
import dope from ".../public/images/carousel/dope.jpg";
import { StaticImageData } from "next/image";

type Projects = {
  id: string;
  src: StaticImageData | string;
  type:"img" | "video"
  bgcolor: string;
};

export const carousel: Projects[][] = [
  [
    {
      id: "insta_carousel",
      src: insta,
      type: "img",
      bgcolor: "#e6e6e6",
    },
    {
      id: "powertrain_carousel",
      src: "videos/video-1.mp4",
      type: "video",
      bgcolor: "#c5c8c9",
    },
    {
      id: "gane_carousel",
      src: gane,
      type: "img",
      bgcolor: "#f0f0f0",
    },
    {
      id: "dane_carousel",
      src: "videos/video-2.mp4",
      type: "video",
      bgcolor: "#292b2b",
    },
  ],
  [
    {
      id: "startpont_carousel",
      src: "videos/video-3.mp4",
      type: "video",
      bgcolor: "#d8e7e8",
    },
    {
      id: "certify_carousel",
      src: certify,
      type: "img",
      bgcolor: "#ede3e1",
    },
    {
      id: "nature_carousel",
      src: "videos/video-4.mp4",
      type: "video",
      bgcolor: "#dbd1ca",
    },
    {
      id: "dope_carousel",
      src: dope,
      type: "img",
      bgcolor: "#c2c2c2",
    },
  ],
];
