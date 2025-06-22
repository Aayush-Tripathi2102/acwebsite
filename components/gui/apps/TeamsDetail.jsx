"use client";
import React from "react";
import TeamCard from "./TeamCard";
import { motion } from "framer-motion";

// Team Data
const teamMembers = [
  {
    name: "Dr. Shola Usha Rani",
    role: "Faculty Coordinator",
    description:
      "Backbone of Android Club, playing a crucial role in bringing our vision to life.",
    avatar: "/team/shola maam.jpg",
    instagram: "https://instagram.com/",
    linkedin: "https://www.linkedin.com/in/dr-shola-usharani-86b7a1a5/",
  },
  {
    name: "Aditi Babu",
    role: "Secretary",
    description:
      "The bridge between chaos and clarity - keeping everything organised, on track and on time.",
    avatar: "/team/Aditi Babu.jpeg.jpg",
    instagram: "https://www.instagram.com/aditiibabu/",
    linkedin: "https://www.linkedin.com/in/aditi-babu-920444293/",
  },
  {
    name: "Naman Jain",
    role: "General Secretary",
    description:
      "With foresight in mind and finesse in every move, he steers the ship through every groove.",
    avatar: "/team/Naman.jpg",
    instagram: "https://www.instagram.com/krazzyy.naman/",
    linkedin: "https://www.linkedin.com/in/naman-jain-17b19730b/",
  },
  {
    name: "Aayush Tripathi",
    role: "General Secretary",
    description:
      "Strategic minds with unstoppable drive, he keeps the club's spirit alive.",
    avatar: "/team/Aayush.jpg",
    instagram: "https://www.instagram.com/the_atp_world/",
    linkedin: "https://www.linkedin.com/in/aayush-tripathi-06288b27b/",
  },
  {
    name: "Aarav Kohli",
    role: "Operations Head",
    description:
      "Making sure everything runs like a well-oiled machine — always on it, always reliable.",
    avatar: "/team/Aarav.jpg",
    instagram: "https://www.instagram.com/aarav.kohli/",
    linkedin: "https://www.linkedin.com/in/aaravkohli/",
  },
  {
    name: "Aditi Pandey",
    role: "Operations Head",
    description:
      "The one who keeps it all together — calm, quick, and quietly running the show.",
    avatar: "/team/Aditi Pandaey.jpg",
    instagram: "https://www.instagram.com/aditipandey8305/",
    linkedin: "https://www.linkedin.com/in/aditi-pandey-009900298/",
  },
  {
    name: "Jefrey Jose",
    role: "Managment Head",
    description:
      "He's the brain behind the plans, turning 'what if' into 'what's next' with style.",
    avatar: "/team/Jeffrey.jpg",
    instagram: "https://www.instagram.com/_dj.jose_/",
    linkedin: "https://www.linkedin.com/in/jefrey-jose-228284219/",
  },
  {
    name: "Palak Ramani",
    role: "Technical Head",
    description:
      "Turning coffee into code and chaos into clean logic — always two steps ahead of bugs.",
    avatar: "/team/Palak.jpg",
    instagram: "https://www.instagram.com/_palak_ramani_/",
    linkedin: "https://www.linkedin.com/in/palak-ramani-a3b147286/",
  },
  {
    name: "Krishna Sharma K",
    role: "Technical Head",
    description:
      "From late-night builds to last-minute fixes, he's the go-to brain when things need to just work.",
    avatar: "/team/Krishna.jpg",
    instagram: "https://www.instagram.com/krishna_sharma_k_05/",
    linkedin: "https://www.linkedin.com/in/krishna-sharma-k/",
  },
  {
    name: "Vaishnavi",
    role: "Content and Social Media Head",
    description:
      "She weaves words with wit and heart — the voice behind the posts and the stories that stick.",
    avatar: "/team/Vaishnavi.JPG",
    instagram: "https://www.instagram.com/__vaishnavi.m/",
    linkedin: "https://www.linkedin.com/in/vaishnavi-muthukumar-65b19728b/",
  },
  {
    name: "Anusriya",
    role: "Design Head",
    description:
      "She turns ideas into visuals and vision into vibe — the one making everything look effortlessly iconic.",
    avatar: "/team/Anushriya.jpg",
    instagram: "https://www.instagram.com",
    linkedin: "https://www.linkedin.com/in/anusriya-sridhar/",
  },
  {
    name: "Vaishnav S P",
    role: "Sponsorship and Marketing Head",
    description:
      "The voice that sells the vision — with strategy in mind and confidence in every pitch.",
    avatar: "/team/Vaishnav.jpg",
    instagram: "https://www.instagram.com/vaish.nav_s.p_/",
    linkedin: "https://www.linkedin.com/in/vaishnav-s-p-4526a928a",
  },
  {
    name: "Dipyaman Chakraborty",
    role: "Sponsorship and Marketing Head",
    description:
      "He's the connector and closer — turning conversations into collaborations with ease.",
    avatar: "/team/Dipyaman.jpg",
    instagram: "https://www.instagram.com/diipyaman/",
    linkedin: "https://www.linkedin.com/in/dipyaman-chakraborty/",
  },
];

// Desired Order
const orderedRoles = [
  "Faculty Coordinator",
  "Secretary",
  "General Secretary",
  "Operations Head",
  "Managment Head",
  "Technical Head",
  "Content and Social Media Head",
  "Sponsorship and Marketing Head",
  "Design Head",
];

// Group members by role
const groupedTeamMembers = orderedRoles.map((role) => ({
  role,
  members: teamMembers.filter((member) => member.role === role),
}));

// Component
export default function TeamsDetail() {
  return (
    <motion.div
      layoutId="team-page"
      className="absolute inset-0 bg-gradient-to-b from-black via-gray-900 to-black text-white overflow-y-scroll rounded-3xl p-6 sm:p-10"
    >
      {/* Header Section */}
      <div className="mb-16 text-center">
        <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-green-400 to-emerald-500 bg-clip-text text-transparent">
          Our Team
        </h1>
        <div className="w-24 h-1 bg-green-400 mx-auto mt-4 rounded-full"></div>
        <p className="text-gray-300 mt-4 md:text-lg max-w-2xl mx-auto">
          Meet the brilliant minds behind the club, each bringing their unique
          expertise and passion to create something extraordinary.
        </p>
      </div>

      {/* Team Sections */}
      <div className="space-y-24 pb-12">
        {groupedTeamMembers.map(({ role, members }, sectionIndex) =>
          members.length > 0 ? (
            <section
              key={role}
              className="w-full flex flex-col items-center"
              style={{
                opacity: 0,
                animation: `fadeInUp 0.5s ease-out ${
                  sectionIndex * 0.2
                }s forwards`,
              }}
            >
              <h2 className="text-3xl font-bold text-green-400 mb-12 relative">
                {role}
                <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-16 h-0.5 bg-green-400/50"></div>
              </h2>
              <div className="w-full flex flex-col md:flex-row gap-5 justify-center">
                {members.map((member, idx) => (
                  <div
                    key={idx}
                    style={{
                      opacity: 0,
                      animation: `fadeInUp 0.5s ease-out ${
                        sectionIndex * 0.2 + idx * 0.1
                      }s forwards`,
                    }}
                    className="w-full flex justify-center items-center"
                  >
                    <TeamCard {...member} />
                  </div>
                ))}
              </div>
            </section>
          ) : null
        )}
      </div>

      {/* Add keyframes for animations */}
      <style jsx global>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        ::-webkit-scrollbar {
          width: 8px;
          background: transparent;
        }
        ::-webkit-scrollbar-track {
          background: transparent;
        }
        ::-webkit-scrollbar-thumb {
          background: transparent;
        }
        ::-webkit-scrollbar-thumb:hover {
          background: transparent;
        }
        * {
          scrollbar-width: none;
        }
      `}</style>
    </motion.div>
  );
}
