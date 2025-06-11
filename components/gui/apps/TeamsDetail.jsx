"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import TeamCard from "./TeamCard";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa"; 

const teamMembers = [
  {
    name: "Dr. Shola Usha Rani",
    role: "Faculty Coordinator",
    description: "Backbone of Android Club,playing a crucial role in bringing our vision to life.",
    avatar: "/team/shola maam.jpg",
    instagram: "https://instagram.com/denisha",
    linkedin: "https://www.linkedin.com/in/dr-shola-usharani-86b7a1a5/",
  },
  {
    name: "Aditi Babu",
    role: "Secretary",
    description: "The bridge between chaos and clarity -keeping everything organised,on track and on time.",
    avatar: "/team/Aditi Babu.jpeg.jpg",
    instagram: "https://www.instagram.com/aditiibabu/",
    linkedin: "https://www.linkedin.com/in/aditi-babu-920444293/",
  },
  {
    name: "Naman Jain",
    role: "General Secretary",
    description: "With foresight in mind and finesse in every move, they steer the ship through every groove.",
    avatar: "/team/Naman.jpg",
    instagram: "https://www.instagram.com/krazzyy.naman/",
    linkedin: "https://www.linkedin.com/in/naman-jain-17b19730b/",
  },
  {
    name: "Aayush Tripathi",
    role: "General Secretary",
    description: "Strategic minds with unstoppable drive, they keep the club's spirit alive.",
    avatar: "/team/Aayush.jpg",
    instagram: "https://www.instagram.com/the_atp_world/",
    linkedin: "https://linkedin.com/in/zaramanager",
  },
  {
    name: "Aarav Kohli",
    role: "Operations Head",
    description: "The guy making sure everything runs like a well-oiled machine — always on it, always reliable.",
    avatar: "/team/Aarav.jpg",
    instagram: "https://www.instagram.com/aarav.kohli/",
    linkedin: "https://www.linkedin.com/in/aaravkohli/",
  },
  {
    name: "Aditi Pandey",
    role: "Operations Head",
    description: "The one who keeps it all together — calm, quick, and quietly running the show.",
    avatar: "/team/Aditi Pandaey.jpg",
    instagram: "https://www.instagram.com/aditipandey8305/",
    linkedin: "https://www.linkedin.com/in/aditi-pandey-009900298/",
  },
  {
    name: "Jefrey Jose",
    role: "Managment Head",
    description: "He’s the brain behind the plans, turning “what if” into “what’s next” with style.",
    avatar: "/team/Jeffrey.jpg",
    instagram: "https://www.instagram.com/_dj.jose_/",
    linkedin: "https://www.linkedin.com/in/jefrey-jose-228284219/",
  },
  {
    name: "Palak Ramani",
    role: "Technical Head",
    description: "She’s the one turning coffee into code and chaos into clean logic — always two steps ahead of the bugs.",
    avatar: "/team/Palak.jpg",
    instagram: "https://www.instagram.com/_palak_ramani_/",
    linkedin: "hhttps://www.linkedin.com/in/palak-ramani-a3b147286/",
  },
  {
    name: "Krishna Sharma K",
    role: "Technical Head",
    description: "From late-night builds to last-minute fixes, he’s the go-to brain when things need to just work.",
    avatar: "/team/Krishna.jpg",
    instagram: "https://www.instagram.com/krishna_sharma_k_05/",
    linkedin: "https://www.linkedin.com/in/krishna-sharma-k/",
  },
  {
    name: "Vaishnavi",
    role: "Content and SM Head",
    description: "She weaves words with wit and heart — the voice behind the posts and the stories that stick.",
    avatar: "/team/Vaishnavi.jpg",
    instagram: "https://www.instagram.com/__vaishnavi.m/",
    linkedin: "https://www.linkedin.com/in/vaishnavi-muthukumar-65b19728b/",
  },
  {
    name: "Anusriya",
    role: " Design Head",
    description: "She turns ideas into visuals and vision into vibe — the one making everything look effortlessly iconic.",
    avatar: "/team/Anushriya.jpg",
    instagram: "#",
    linkedin: "https://www.linkedin.com/in/anusriya-sridhar/",
  },
  {
    name: "Vaishnav S P",
    role: "Sponsorship and Managment Head",
    description: "The voice that sells the vision — with strategy in mind and confidence in every pitch.",
    avatar: "/team/Vaishnav.jpg",
    instagram: "https://www.instagram.com/vaish.nav_s.p_/",
    linkedin: "https://www.linkedin.com/in/anusriya-sridhar/",
  },
];

export default function TeamsDetail() {
  const [centerIndex, setCenterIndex] = useState(0);
  const CARD_WIDTH = 280;
  const GAP = 24;
  const OFFSET = (CARD_WIDTH + GAP) * centerIndex;

  const scrollLeft = () => {
    setCenterIndex((prev) => (prev === 0 ? teamMembers.length - 1 : prev - 1));
  };

  const scrollRight = () => {
    setCenterIndex((prev) => (prev + 1) % teamMembers.length);
  };

  return (
    <motion.div
      layoutId="team-page"
      className="rounded-3xl bg-black w-full h-full absolute inset-0 overflow-y-hidden overflow-x-hidden text-white"
    >
      <div className="p-10 text-center select-none">
        <h1 className="text-3xl font-bold">Our Team</h1>
        <p className="mt-4 mb-8 text-gray-400">Meet the minds behind the club.</p>

        {/* Carousel */}
        <div className="relative w-full flex items-center justify-center mt-10 h-[420px]">
          {/* Left Arrow */}
          <button
            onClick={scrollLeft}
            className="absolute left-3 z-10 p-2 bg-black/60 hover:bg-black/80 text-white rounded-full shadow-md transition text-base flex items-center justify-center"
          >
            <FaChevronLeft className="w-4 h-4" />
          </button>

          {/* Scrollable Cards */}
          <div className="overflow-visible w-[90%] max-w-6xl mx-auto">
            <motion.div
              className="flex gap-6 justify-start items-center cursor-grab active:cursor-grabbing"
              animate={{ x: `calc(50% - ${OFFSET + CARD_WIDTH / 2}px)` }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
              drag="x"
              dragConstraints={{ left: -1000, right: 1000 }}
            >
              {teamMembers.map((member, index) => {
                const isCenter = index === centerIndex;
                const scale = isCenter ? "hover:scale-105" : "scale-95";
                const blur = !isCenter ? "blur-sm opacity-60" : "";

                return (
                  <motion.div
                    key={index}
                    className={`transition-all duration-300 ${scale} ${blur}`}
                    style={{ width: `${CARD_WIDTH}px` }}
                  >
                    <TeamCard {...member} />
                  </motion.div>
                );
              })}
            </motion.div>
          </div>

          {/* Right Arrow */}
          <button
            onClick={scrollRight}
            className="absolute right-3 z-10 p-2 bg-black/60 hover:bg-black/80 text-white rounded-full shadow-md transition text-base flex items-center justify-center"
          >
            <FaChevronRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </motion.div>
  );
}
