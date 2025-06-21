"use client";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";

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
    alt: "Upcomming Events",
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
  { src: "/gui/TerminalIcon.png", alt: "Terminal", href: "#", layoutId: "" },
];

const MainApps = () => {
  const router = useRouter();

  return (
    <div className="w-full min-h-[calc(100vh-100px)] p-4 overflow-y-auto">
      <div className="grid grid-cols-4 gap-2 lg:gap-6 place-items-center w-full">
        {Apps.map((icon, i) => (
          <div
            key={i}
            className="w-full flex flex-col items-center justify-center 
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
        ))}
      </div>
    </div>
  );
};

export default MainApps;
