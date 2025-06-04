import React from "react";
import { motion } from "motion/react";
import Link from "next/link";

const MainApps = () => {
  const imagePaths = [
    "/gui/InstagramIcon.png",
    "/gui/EmptyIcon.png",
    "/gui/EmptyIcon.png",
    "/gui/LinkedInIcon.png",
    "/gui/AboutIcon.png",
    "/gui/MailIcon.png",
    "/gui/GalleryIcon.png",
    "/gui/TeamsIcon.png",
  ];

  return (
    <div className="flex justify-center items-center h-full w-full">
      <div className="grid grid-cols-4 w-full">
        {imagePaths.map((path, index) => (
          <div
            key={index}
            className="w-full aspect-square flex items-center justify-center bg-transparent xl:p-7 lg:p-4 md:p-8 sm:p-6 p-3 "
          >
            <Link href="/about">
              <img
                src={path}
                alt={`App ${index + 1}`}
                className="w-3/4 h-3/4 object-contain hover-"
              />
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MainApps;
