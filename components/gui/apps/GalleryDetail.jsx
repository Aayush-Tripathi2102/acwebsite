"use client";
import React from "react";
import { motion } from "framer-motion";
import { gallaryImages } from "@/constants/gallaryImages";
import Image from "next/image";
const GalleryDetail = () => {
  return (
    <motion.div
      layoutId="gallery-page"
      className="rounded-3xl bg-black w-full h-full absolute inset-0 overflow-y-scroll"
    >
      <div className="px-4 py-10">
        <h1 className="text-4xl md:text-7xl mb-10 font-bold">Memory Lane</h1>

        <div className="columns-1 sm:columns-2 md:columns-3 lg:columns-4 gap-4 space-y-4">
          {gallaryImages.map((src, index) => (
            <div key={index} className="break-inside-avoid">
              <Image
                src={src}
                alt={`Gallery Image ${index + 1}`}
                width={500}
                height={500}
                className="w-full rounded-lg object-cover"
              />
            </div>
          ))}
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
};

export default GalleryDetail;
