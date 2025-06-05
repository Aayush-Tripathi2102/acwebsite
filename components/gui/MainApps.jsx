"use-client";
import Link from "next/link";
import React from "react";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";
const Apps = [
  {
    src: "/gui/InstagramIcon.png",
    alt: "Instagram",
    href: "https://instagram.com",
  },
  {
    src: "/gui/LinkedInIcon.png",
    alt: "LinkedIn",
    href: "https://linkedin.com",
  },
  {
    src: "/gui/AboutIcon.png",
    alt: "About",
    href: "/about",
    layoutId: "about-page",
  },
  {
    src: "/gui/MailIcon.png",
    alt: "Mail",
    href: "/mail",
    layoutId: "mail-page",
  },
  {
    src: "/gui/GalleryIcon.png",
    alt: "Gallery",
    href: "/gallery",
    layoutId: "gallery-page",
  },
  {
    src: "/gui/TeamsIcon.png",
    alt: "Teams",
    href: "/teams",
    layoutId: "team-page",
  },
  { src: "/gui/EmptyIcon.png", alt: "Empty 1", href: "#", layoutId: "" },
  { src: "/gui/EmptyIcon.png", alt: "Empty 2", href: "#", layoutId: "" },
];

const MainApps = () => {
  const router = useRouter();
  return (
    <div className="w-full h-full p-4">
      <div className="grid grid-cols-4 sm:grid-cols-4 gap-4 place-items-center h-full w-full">
        {Apps.map((icon, i) => (
          <div
            key={i}
            className="w-16 h-16 flex items-center justify-center p-3 md:p-0 transition-transform duration-200 ease-in-out hover:scale-105 active:scale-95 hover:shadow-md cursor-pointer rounded-xl"
          >
            <motion.img
              transition={{
                duration: 0.15,
                type: "linear",
                stiffness: 100,
                damping: 25,
              }}
              layoutId={icon.layoutId}
              onClick={() => router.push(icon.href)}
              src={icon.src}
              alt={icon.alt}
              className="w-12 h-12 object-contain cursor-pointer"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default MainApps;
