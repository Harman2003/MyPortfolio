import gane from ".../public/images/projects/gane.png";
import certify from ".../public/images/projects/certify.png";
import fbhelpdesk from ".../public/images/projects/fbhelpdesk.png";
import { StaticImageData } from "next/image";
export type Projects = {
  id: string;
  title: string;
  label: string;
  link: string;
  img: StaticImageData | string;
  bgcolor:string
};

export const projects: Projects[] = [
  {
    id: "gane_project",
    title: "GANE",
    label: "Development & Blockchain",
    link: "https://gane.solutions",
    img: gane,
    bgcolor: "#efecec",
  },
  {
    id: "certify_project",
    title: "Certify",
    label: "Development & Blockchain",
    link: "https://certifier.vercel.app",
    img: certify,
    bgcolor: "#292b2b",
  },
  {
    id: "helpdesk_project",
    title: "FB Helpdesk",
    label: "Development & Websockets",
    link: "https://github.com/Harman2003/fB-Helpdesk",
    img: fbhelpdesk,
    bgcolor: "#d8e7e8",
  },
  // {
  //   id: "fabric_project",
  //   title: "CODERACE",
  //   label: "Design & Development",
  //   link: "",
  //   img: gane,
  //   bgcolor: "#d8e7e8",
  // },
  // {
  //   id: "typeracer_project",
  //   title: "Typeracer",
  //   label: "Design & Development",
  //   link: "",
  //   img: gane,
  //   bgcolor: "#f0ffe6",
  // },
];
