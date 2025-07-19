"use client";
import React from "react";
import { motion } from "framer-motion";
import { Briefcase, Github, Users, Code } from "lucide-react";

const designers = [
  {
    name: "Denisha Madhura",
    portfolio:
      "https://www.linkedin.com/in/denisha-madhura-5384a331b?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
  },
  {
    name: "Nithish Kannan M",
    portfolio: "https://www.linkedin.com/in/nithish-kannan-m/",
  },
];

const developers = [
  {
    name: "Vishal Prabhu",
    github: "Vishal-770",
  },
  {
    name: "Rahul Chowdhary",
    github: "dinoCodes2005",
  },
  {
    name: "Adarsh kumar mishra",
    github: "CodeX-266",
  },
  {
    name: "Divyansha Agarwal",
    github: "Divyansha-Ag",
  },
];

const RowCard = ({ name, link, icon, linkLabel }) => (
  <div className="w-full flex flex-col sm:flex-row items-center justify-between bg-gradient-to-r from-gray-900 to-gray-800 border border-gray-700 rounded-2xl shadow-lg px-4 sm:px-6 py-4 sm:py-5 mb-4 hover:border-green-400 transition-all group gap-3 sm:gap-0">
    <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-4 w-full sm:w-auto">
      <div className="w-12 h-12 flex items-center justify-center rounded-full bg-gray-800 border border-gray-700 group-hover:bg-green-950 transition-all mb-2 sm:mb-0">
        {icon}
      </div>
      <span className="text-lg sm:text-xl font-semibold text-green-100 text-center sm:text-left">
        {name}
      </span>
    </div>
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className="flex items-center gap-2 text-green-400 hover:text-green-300 text-base sm:text-lg font-medium px-3 py-2 rounded-lg transition-colors group-hover:bg-gray-900 mt-2 sm:mt-0"
    >
      {linkLabel}
    </a>
  </div>
);

const Contributors = () => {
  return (
    <motion.div
      layoutId="contributors-page"
      className="w-full h-full bg-gray-950 p-2 sm:p-4 md:p-8 overflow-y-auto scrollbar-hide"
    >
      <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-green-300 text-center mb-8 sm:mb-12 tracking-tight drop-shadow-lg flex items-center justify-center gap-2 sm:gap-3">
        <Users className="inline-block w-8 h-8 sm:w-10 sm:h-10 text-green-400" />{" "}
        Contributors
      </h1>
      <div className="max-w-xl sm:max-w-2xl md:max-w-3xl mx-auto">
        {/* Designers Section */}
        <section className="mb-8 sm:mb-12">
          <div className="flex items-center gap-2 sm:gap-3 mb-4 sm:mb-6">
            <Briefcase className="w-6 h-6 sm:w-7 sm:h-7 text-green-300" />
            <h2 className="text-lg sm:text-2xl font-semibold text-green-200 tracking-tight">
              Designers
            </h2>
          </div>
          <div>
            {designers.map((designer, idx) => (
              <RowCard
                key={idx}
                name={designer.name}
                link={designer.portfolio}
                icon={<Briefcase className="w-7 h-7 text-green-400" />}
                linkLabel={
                  <span className="flex items-center gap-1">
                    Portfolio{" "}
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-5 h-5"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M14 3h7m0 0v7m0-7L10 14m-7 7h7a2 2 0 002-2v-7"
                      />
                    </svg>
                  </span>
                }
              />
            ))}
          </div>
        </section>
        <div className="border-t border-gray-800 mb-8 sm:mb-12"></div>
        {/* Developers Section */}
        <section>
          <div className="flex items-center gap-2 sm:gap-3 mb-4 sm:mb-6">
            <Code className="w-6 h-6 sm:w-7 sm:h-7 text-green-300" />
            <h2 className="text-lg sm:text-2xl font-semibold text-green-200 tracking-tight">
              Developers
            </h2>
          </div>
          <div>
            {developers.map((dev, idx) => (
              <RowCard
                key={idx}
                name={dev.name}
                link={`https://github.com/${dev.github}`}
                icon={<Github className="w-7 h-7 text-green-400" />}
                linkLabel={
                  <span className="flex items-center gap-1">
                    GitHub <Github className="w-5 h-5" />
                  </span>
                }
              />
            ))}
          </div>
        </section>
      </div>
      <div className="h-10"></div>
    </motion.div>
  );
};

export default Contributors;
