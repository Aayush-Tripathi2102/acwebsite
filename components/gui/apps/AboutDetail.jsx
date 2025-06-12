"use client";
import React, { useRef } from "react";
import { motion, useScroll } from "framer-motion";

export default function AboutDetail() {
  const scrollRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: scrollRef,
    offset: ["start start", "end end"],
  });

  return (
    <motion.div
      layoutId="about-page"
      className="rounded-3xl bg-black w-full h-full absolute inset-0 overflow-hidden"
    >
      <style jsx global>{`
        ::-webkit-scrollbar {
          width: 8px;
        }
        ::-webkit-scrollbar-track {
          background: #111827;
          border-radius: 10px;
        }
        ::-webkit-scrollbar-thumb {
          background: rgb(26, 27, 26);
          border-radius: 10px;
        }
        ::-webkit-scrollbar-thumb:hover {
          background: rgb(38, 35, 44);
        }
        * {
          scrollbar-width: thin;
          scrollbar-color: rgb(25, 26, 25) #111827;
        }
        @font-face {
          font-family: "OCRAEXT";
          src: url("/font/OCRAEXT.ttf") format("truetype");
          font-weight: normal;
          font-style: normal;
        }
        @font-face {
          font-family: "VCR OSD Mono";
          src: url("/font/VCR_OSD_MONO_1.001.ttf") format("truetype");
          font-weight: normal;
          font-style: normal;
        }
        @font-face {
          font-family: "Fira Code";
          src: url("/font/fira-code.ttf") format("truetype");
          font-weight: normal;
          font-style: normal;
        }
      `}</style>

      <div
        ref={scrollRef}
        className="w-full h-full flex-col overflow-y-auto overflow-x-hidden items-center justify-center bg-[#111827] rounded-[25px]"
      >
        {/* Laptop and Web Dev text - Fixed at top right */}
        <div className="w-full relative">
          <img
            src="/gui/logo.png"
            alt="Android Club Logo"
            className="absolute top-20 left-10 w-[120px]"
          />

          <img
            src="/gui/laptop.png"
            alt="Laptop"
            className="w-[470px] absolute top-0 right-[-22%] mt-30 opacity-25"
          />
          <div className="absolute top-[10%] right-[5%] text-right">
            <h1
              className="text-[36px] tracking-widest text-gray-400 mt-90 mr-[-5%]"
              style={{ fontFamily: "VCR OSD Mono" }}
            >
              Web Dev and Hackathons
            </h1>
          </div>
        </div>

        {/* Bot + Caption + H2 */}
        <div className="w-full flex items-start justify-between px-[5%] mt-[340px]">
          {/* Bot and caption below it */}
          <div className="relative w-[450px] -ml-[170px]">
            <img
              src="/gui/bot.png"
              alt="Bot"
              className="w-full opacity-30 transform -scale-x-100 mt-15"
            />
            <p
              className="text-[36px] w-150 text-gray-400 text-left ml-35"
              style={{ fontFamily: "VCR OSD Mono" }}
            >
              Android Apps and AIML <br /> projects
            </p>
          </div>

          {/* Main heading */}
          <div className="text-center mr-[5%]">
            <h2
              className="text-[80px] text-[#1EFF00] tracking-tighter leading-none mt-30"
              style={{
                fontFamily: "OCRAEXT",
                fontFeatureSettings: '"tnum" on, "lnum" on',
              }}
            >
              Android
              <br />
              Club
              <br />
              VIT
              <br /> CHENNAI
            </h2>
          </div>
        </div>

        <div className="flex justify-center gap-6 mt-20 mb-20 flex-wrap">
          <div
            className="border-4 border-[#1EFF00] px-14 py-8 bg-[#000000] rounded-[20%] text-white text-center flex flex-col items-center"
            style={{ fontFamily: "VCR OSD Mono" }}
          >
            <span className="text-[24px]  mb-2">x+</span>
            <span className="text-[20px]">projects</span>
          </div>

          <div
            className="border-4 border-[#1EFF00] px-10 py-6 rounded-[20%] bg-[#000000] text-white text-center flex flex-col items-center"
            style={{ fontFamily: "VCR OSD Mono" }}
          >
            <span className="text-[24px] mb-2">y+</span>
            <span className="text-[16px]">competitions</span>
          </div>

          <div
            className="border-4 border-[#1EFF00] px-14 py-8 rounded-[20%] bg-[#000000]  text-white text-center flex flex-col items-center"
            style={{ fontFamily: "VCR OSD Mono" }}
          >
            <span className="text-[24px] mb-2">z+</span>
            <span className="text-[20px]">winners</span>
          </div>
        </div>

        {/* Description Paragraph */}
        <div
          className="text-[23px] text-justify text-gray-300 px-2 leading-relaxed"
          style={{ fontFamily: "Fira Code" }}
        >
          <p className="mb-0 ml-10 mr-10">
            Lorem ipsum dolor sit, consectetur adipiscing elit. Pellentesque
            commodo est vel turpis venenatis, ac sollicitudin nulla hendrerit.
            Pellentesque sit amet sapien fringilla, mattis ligula at,
            consectetur ultricies mauris. Nullam quis imperdiet augue. Praesent
            lorem orci, mattis non efficitur id, ultricies vel nibh. Sed
            volutpat lacus vitae gravida viverra. Duis nec tortor vel, egestas
            ullamcorper dui. Curabitur at risus sodales, ultricies velit id,
            sodales justo.
          </p>
          <p className="mb-30 ml-10 mr- mt-6">
            Quisque a neque pretium, dictum tellus vitae, euismod neque. Nulla
            facilisi. Duis tempus erat eu metus aliquet dapibus. Integer a
            tortor vitae velit fermentum luctus. Suspendisse convallis nec urna
            id dapibus. Fusce tincidunt congue sapien, ut ornare ipsum. Vivamus
            sodales feugiat justo in bibendum.
          </p>
        </div>
      </div>
    </motion.div>
  );
}
