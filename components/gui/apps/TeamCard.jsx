"use client";
import Image from "next/image";
import { FaInstagram, FaLinkedin } from "react-icons/fa";

export default function TeamCard({
  name,
  role,
  description,
  avatar,
  instagram,
  linkedin,
}) {
  return (
    <div className="relative bg-[#1e1e1e]/80 backdrop-blur-md h-80 rounded-3xl p-6 pb-4 w-64 border border-gray-700 shadow-md transition-all duration-300 flex flex-col items-center justify-center text-white hover:shadow-[0_0_20px_#00ff88] overflow-hidden group">
      {/* Social Icons */}
      <div className="absolute top-4 right-4 z-30 flex gap-3">
        {instagram && (
          <a
            href={instagram}
            target="_blank"
            rel="noopener noreferrer"
            className="transform hover:scale-110 transition-transform"
          >
            <FaInstagram className="text-white/80 hover:text-pink-400 text-lg transition-colors" />
          </a>
        )}
        {linkedin && (
          <a
            href={linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="transform hover:scale-110 transition-transform"
          >
            <FaLinkedin className="text-white/80 hover:text-blue-400 text-lg transition-colors" />
          </a>
        )}
      </div>

      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src={avatar}
          alt={name}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-110"
        />
      </div>

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent z-10" />

      {/* Content */}
      <div className="relative z-20 flex flex-col justify-end h-full w-full">
        {/* Name */}
        <h3 className="text-xl font-bold tracking-wide mb-1">{name}</h3>

        {/* Description */}
        <p className="text-sm text-gray-200/90 leading-relaxed">
          {description}
        </p>
      </div>
    </div>
  );
}
