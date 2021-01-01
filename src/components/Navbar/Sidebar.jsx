import React from "react";
//
// Icons
//
// import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
// import * as IoIcons from "react-icons/io";
import * as SiIcons from "react-icons/si";
import * as FcIcons from "react-icons/fc";

export const Sidebar = [
  {
    title: "Home",
    path: "/",
    icon: <AiIcons.AiFillHome />,
    cName: "nav-text",
  },
  {
    title: "Sobre Mí",
    path: "#sobre_mi",
    icon: <SiIcons.SiAboutDotMe />,
    cName: "nav-text",
  },
  {
    title: "Experiencia",
    path: "#experiencia",
    icon: <FcIcons.FcTimeline />,
    cName: "nav-text",
  },
  {
    title: "Contacto",
    path: "#contacto",
    icon: <FcIcons.FcBusinessContact />,
    cName: "nav-text",
  },
];
