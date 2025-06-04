import React from "react";

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
  { src: "/gui/AboutIcon.png", alt: "About", href: "/about" },
  { src: "/gui/MailIcon.png", alt: "Mail", href: "/about" },
  { src: "/gui/GalleryIcon.png", alt: "Gallery", href: "/about" },
  { src: "/gui/TeamsIcon.png", alt: "Teams", href: "/about" },
  { src: "/gui/EmptyIcon.png", alt: "Empty 1", href: "/about" },
  { src: "/gui/EmptyIcon.png", alt: "Empty 2", href: "/about" },
];

const MainApps = () => {
  return (
    <div className="w-full h-full p-4">
      <div className="grid grid-cols-4 sm:grid-cols-4 gap-4 place-items-center h-full w-full">
        {Apps.map((icon, i) => (
          <a
            key={i}
            href={icon.href}
            className="w-16 h-16 flex items-center justify-center p-3 md:p-0 transition-transform duration-200 ease-in-out hover:scale-105 active:scale-95 hover:shadow-md cursor-pointer rounded-xl"
            target={icon.href.startsWith("http") ? "_blank" : "_parent"}
            rel={
              icon.href.startsWith("http") ? "noopener noreferrer" : undefined
            }
          >
            <img
              src={icon.src}
              alt={icon.alt}
              className="w-12 h-12 object-contain cursor-pointer"
            />
          </a>
        ))}
      </div>
    </div>
  );
};

export default MainApps;
