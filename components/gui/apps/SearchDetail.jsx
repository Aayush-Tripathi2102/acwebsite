"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";

// Icons
import { RiInstagramFill } from "react-icons/ri";
import {
  AiFillLinkedin,
  AiOutlineInfoCircle,
  AiOutlineMail,
} from "react-icons/ai";
import { HiUserGroup } from "react-icons/hi";
import { VscTerminal } from "react-icons/vsc";
import { BsImages } from "react-icons/bs";
import { FiSearch } from "react-icons/fi";
import { motion } from "framer-motion";

// App data with real paths
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
    alt: "Team",
    href: "/teams",
    layoutId: "team-page",
  },
  {
    src: "/gui/EventsIcon1.png",
    alt: "Past Events",
    href: "/past-events",
    layoutId: "past-events-page",
  },
  {
    src: "/gui/EventsIcon.png",
    alt: "New Events",
    href: "/upcomming-events",
    layoutId: "upcomming-events-page",
  },
  {
    src: "/gui/CamerIcon.png",
    alt: "Camera",
    href: "/camera",
    layoutId: "camera-page",
  },
  {
    src: "/gui/GithubIcon.png",
    alt: "GitHub",
    href: "https://github.com/Android-Club-VITC/",
    layoutId: "",
  },
  {
    src: "/gui/ContributorsIcon.png",
    alt: "contributors",
    href: "/contributors",
    layoutId: "contributors-page",
  },
  {
    src: "/gui/TerminalIcon.png",
    alt: "ADB",
    href: "/terminal",
    layoutId: "",
  },
];

export default function SearchDetail() {
  const [query, setQuery] = useState("");
  const router = useRouter();

  const filteredApps = Apps.filter((app) =>
    app.alt.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <motion.div
      layoutId="search-container"
      className="min-h-screen backdrop-saturate-150 text-white p-6 sm:p-10"
    >
      <div className="max-w-xl mx-auto text-center">
        <h1 className="text-3xl font-bold mb-4">Search Applications</h1>
        <input
          type="text"
          placeholder="Type app name (e.g., Gallery, Team)..."
          className="w-full px-4 py-2 rounded-lg bg-[#1e1e1e] text-white border border-gray-600 focus:outline-none focus:border-green-400"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
      </div>

      {/* <div className="mt-8 flex flex-col items-center gap-4">
        {filteredApps.length > 0 ? (
          filteredApps.map((app, index) => (
            <div
              key={index}
              onClick={() => {
                if (app.path && app.path !== "#") {
                  router.push(app.path);
                }
              }}
              className="w-full max-w-md px-6 py-4 rounded-lg bg-[#2a2a2a] hover:bg-[#333] transition-colors cursor-pointer flex items-center gap-4 border border-gray-700"
            >
              <span className="text-2xl">{app.icon}</span>
              <span className="text-lg font-medium">{app.name}</span>
            </div>
          ))
        ) : (
          <p className="text-gray-400">No matching apps found.</p>
        )}
      </div> */}
      <div className="w-full h-full p-4 flex flex-col mt-8">
        <div className="grid grid-cols-4 gap-2 lg:gap-6 place-items-center w-full">
          {filteredApps.length > 0 ? (
            filteredApps.map((icon, i) => (
              <div
                key={i}
                className="w-full mt-16 sm:mt-0 flex flex-col items-center justify-center 
              max-w-[64px] sm:max-w-[72px] lg:max-w-[90px] 
              transition-transform duration-200 ease-in-out 
              hover:scale-105 active:scale-95 cursor-pointer rounded-xl"
                onClick={() => router.push(icon.href)}
              >
                <motion.img
                  src={icon.src}
                  alt={icon.alt}
                  layoutId={icon.layoutId}
                  transition={{
                    duration: 0.15,
                    type: "linear",
                    stiffness: 100,
                    damping: 1125,
                  }}
                  className="w-8 h-8 sm:w-9 sm:h-9 lg:w-12 lg:h-12 object-contain"
                />
                <p className="text-[10px] text-center pt-1">{icon.alt}</p>
              </div>
            ))
          ) : (
            <p className="text-gray-400">No matching apps found.</p>
          )}
        </div>
      </div>
    </motion.div>
  );
}
