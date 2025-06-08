"use client";
import { FaInstagram, FaLinkedin } from "react-icons/fa";

export default function TeamCard({ name, role, description, avatar, instagram, linkedin }) {
  return (
    <div className="bg-[#1e1e1e]/80 backdrop-blur-md rounded-3xl p-6 w-72 shadow-2xl hover:scale-105 hover:rotate-1 transition-all duration-300 flex flex-col items-center text-white border border-gray-700">
      {/* Role */}
      <p className="text-base font-semibold text-green-400 mb-3">{role}</p>

      {/* Larger and distinct Avatar */}
      <div className="w-32 h-32 rounded-full overflow-hidden border-4 border-green-400 shadow-lg mb-4">
        <img
          src={avatar}
          alt={name}
          className="w-full h-full object-cover"
        />
      </div>

      {/* Smaller Name */}
      <h3 className="text-lg font-semibold">{name}</h3>

      {/* Smaller Description */}
      <p className="text-xs text-gray-300 mt-1 text-center">{description}</p>

      {/* Social Icons */}
      <div className="flex gap-4 mt-4">
        {instagram && (
          <a href={instagram} target="_blank" rel="noopener noreferrer">
            <FaInstagram className="text-white hover:text-pink-400 text-xl transition-colors" />
          </a>
        )}
        {linkedin && (
          <a href={linkedin} target="_blank" rel="noopener noreferrer">
            <FaLinkedin className="text-white hover:text-blue-400 text-xl transition-colors" />
          </a>
        )}
      </div>
    </div>
  );
}
