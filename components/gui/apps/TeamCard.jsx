"use client";
import { FaGithub, FaLinkedin } from "react-icons/fa";

export default function TeamCard({ name, role, description, avatar, github, linkedin }) {
  return (
    <div className="bg-[#1e1e1e] rounded-3xl p-6 w-72 shadow-xl hover:scale-105 transition-transform duration-300 flex flex-col items-center text-white">
      <p className="text-lg font-semibold mb-2">{role}</p>
      <img
        src={avatar}
        alt={name}
        className="w-24 h-24 rounded-full object-cover mb-4 border-2 border-green-400"
      />
      <h3 className="text-xl font-bold">{name}</h3>
      <p className="text-sm text-gray-300 mt-2 text-center">{description}</p>
      <div className="flex gap-4 mt-4">
        {github && (
          <a href={github} target="_blank" rel="noopener noreferrer">
            <FaGithub className="text-white hover:text-gray-400 text-xl" />
          </a>
        )}
        {linkedin && (
          <a href={linkedin} target="_blank" rel="noopener noreferrer">
            <FaLinkedin className="text-white hover:text-blue-400 text-xl" />
          </a>
        )}
      </div>
    </div>
  );
}
