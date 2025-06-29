"use client";
import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

export default function AboutDetail() {
  const scrollRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: scrollRef,
    offset: ["start start", "end end"],
  });
  const opacity = useTransform(scrollYProgress, [0, 0.2], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.2], [1, 0.95]);

  return (
    <motion.div
      layoutId="about-page"
      className="absolute inset-0 bg-gradient-to-br from-[#23243a] via-[#1a1b26] to-[#23243a] overflow-y-scroll rounded-[24px] sm:rounded-[36px] p-6 sm:p-10"
    >
      {/* Blurred/gradient background */}
      {/* <div className="absolute inset-0 w-full h-full bg-gradient-to-br from-[#23243a] via-[#1a1b26] to-[#23243a]"></div>
      <div className="absolute top-full left-0 w-full h-full bg-gradient-to-br from-[#23243a] via-[#1a1b26] to-[#23243a]"></div>
      <div className="absolute top-full left-0 bg-[radial-gradient(ellipse_at_60%_40%,rgba(255,255,255,0.08)_0%,transparent_70%)] blur-2xl"></div> */}

      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_60%_40%,rgba(255,255,255,0.08)_0%,transparent_70%)] blur-2xl" />
      <div className="absolute top-full left-0 bg-[radial-gradient(ellipse_at_60%_40%,rgba(255,255,255,0.08)_0%,transparent_70%)] blur-2xl" />
      {/* Glassy nav */}

      {/* Main glassmorphism card */}
      <div className=" z-10 max-w-4xl mx-auto  rounded-3xl bg-white/10 backdrop-blur-md shadow-2xl border border-white/20">
        <div className="flex flex-col gap-8 items-center">
          <img
            src="/gui/logo.png"
            alt="Android Club Logo"
            className="w-24 mb-2"
          />
          <h1
            className="text-5xl md:text-7xl font-bold text-white/90 leading-tight text-center"
            style={{ fontFamily: "OCRAEXT" }}
          >
            Android Club{" "}
            <span className="block text-white/60 font-normal text-3xl md:text-5xl mt-2">
              VIT Chennai
            </span>
          </h1>
          <div className="flex flex-col sm:flex-row gap-4 mb-4">
            <button className="px-5 py-2 rounded-full bg-white/10 border border-white/20 text-white/80 shadow hover:bg-white/20 transition font-medium">
              Available for collaboration
            </button>
            <button className="px-5 py-2 rounded-full bg-white/10 border border-white/20 text-white/80 shadow hover:bg-white/20 transition font-medium">
              Get in touch
            </button>
          </div>
          <p className="text-lg text-white/70 text-center max-w-2xl">
            We are a passionate community of developers, designers, and
            innovators at VIT Chennai. Our mission is to empower students
            through technology, creativity, and collaboration—building
            real-world projects, hosting hackathons, and fostering growth in
            Android, web, and AI/ML domains.
          </p>
        </div>
      </div>

      {/* Stats Section */}
      <div className="relative z-10 max-w-4xl mx-auto mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 px-4">
        <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-8 text-center shadow">
          <span className="text-4xl font-bold text-green-400 mb-2 block">
            50+
          </span>
          <span className="text-white/80 font-medium">Projects</span>
        </div>
        <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-8 text-center shadow">
          <span className="text-4xl font-bold text-green-400 mb-2 block">
            20+
          </span>
          <span className="text-white/80 font-medium">Competitions</span>
        </div>
        <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-8 text-center shadow">
          <span className="text-4xl font-bold text-green-400 mb-2 block">
            30+
          </span>
          <span className="text-white/80 font-medium">Winners</span>
        </div>
      </div>

      {/* About/Features Section */}
      <div className="relative z-10 max-w-5xl mx-auto mt-20 mb-24 grid grid-cols-1 md:grid-cols-2 gap-10 px-4">
        <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-8 shadow flex flex-col gap-4">
          <h2
            className="text-2xl font-bold text-green-400 mb-2"
            style={{ fontFamily: "VCR OSD Mono" }}
          >
            What We Do
          </h2>
          <ul
            className="text-white/80 text-lg space-y-2 list-disc list-inside"
            style={{ fontFamily: "Fira Code" }}
          >
            <li>Workshops, hackathons, and mentorship programs</li>
            <li>Android, web, and AI/ML project development</li>
            <li>Fun events and games for community bonding</li>
            <li>Design, management, and social media initiatives</li>
          </ul>
        </div>
        <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-8 shadow flex flex-col gap-4">
          <h2
            className="text-2xl font-bold text-green-400 mb-2"
            style={{ fontFamily: "VCR OSD Mono" }}
          >
            Our Mission
          </h2>
          <p
            className="text-white/80 text-lg"
            style={{ fontFamily: "Fira Code" }}
          >
            To inspire and empower the next generation of tech leaders by
            providing a platform for learning, collaboration, and innovation. We
            believe in the power of community and strive to make technology
            accessible and exciting for all.
          </p>
        </div>
      </div>

      <style jsx global>{`
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
