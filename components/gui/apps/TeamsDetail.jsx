"use client";
import React from "react";
import { motion } from "framer-motion";
import TeamCard from "./TeamCard";

const teamMembers = [
  {
    name: "Denisha",
    role: "Design",
    description: "Creative designer passionate about UI/UX and storytelling.",
    avatar: "https://ui-avatars.com/api/?name=Denisha",
    github: "https://github.com/denisha",
    linkedin: "https://linkedin.com/in/denisha",
  },
  {
    name: "Alex",
    role: "Frontend Dev",
    description: "Focused on building interactive and high-performance UIs.",
    avatar: "https://ui-avatars.com/api/?name=Alex",
    github: "https://github.com/alexdev",
    linkedin: "https://linkedin.com/in/alexdev",
  },
  {
    name: "Priya",
    role: "Backend Dev",
    description: "Loves working on scalable APIs and clean code architecture.",
    avatar: "https://ui-avatars.com/api/?name=Priya",
    github: "https://github.com/priyadev",
    linkedin: "https://linkedin.com/in/priyadev",
  },
];

export default function TeamsDetail() {
  return (
    <motion.div
      layoutId="team-page"
      className="rounded-3xl bg-black w-full h-full absolute inset-0 overflow-y-auto"
    >
      <div className="p-10 text-white">
        <h1 className="text-3xl font-bold">Our Team</h1>
        <p className="mt-4 mb-8 text-gray-400">Meet the creative minds behind the club.</p>

        <div className="flex flex-wrap justify-center gap-10">
          {teamMembers.map((member, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <TeamCard {...member} />
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  );
}
