"use client";
import React, { useState, useCallback, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { gallaryImages } from "@/constants/gallaryImages";
import Image from "next/image";

const GalleryDetail = () => {
  const [selectedImg, setSelectedImg] = useState(null);

  // Close modal on ESC
  useEffect(() => {
    if (!selectedImg) return;
    const handleKeyDown = (e) => {
      if (e.key === "Escape") setSelectedImg(null);
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [selectedImg]);

  // Prevent background scroll when modal is open
  useEffect(() => {
    if (selectedImg) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [selectedImg]);

  const handleOverlayClick = useCallback((e) => {
    if (e.target === e.currentTarget) setSelectedImg(null);
  }, []);

  return (
    <motion.div
      layoutId="gallery-page"
      className="rounded-3xl bg-black w-full h-full absolute inset-0 overflow-y-scroll"
    >
      <div className="px-4 py-10">
        <h1 className="text-4xl md:text-7xl mb-10 font-bold">Memory Lane</h1>
        <p className="text-lg md:text-xl mb-10 text-gray-400">
          Celebrating 10 years of excellence, Android Club has journeyed through
          a decade of innovation, passion, and unforgettable memories. This
          gallery captures the moments that shaped who we are today.
        </p>

        <div className="columns-1 sm:columns-2 md:columns-3 lg:columns-4 gap-4 space-y-4">
          {gallaryImages.map((src, index) => (
            <div
              key={index}
              className="break-inside-avoid cursor-pointer"
              onClick={() => setSelectedImg(src)}
            >
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
      <AnimatePresence>
        {selectedImg && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={handleOverlayClick}
          >
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
              className="max-w-3xl w-full max-h-[90vh] flex items-center justify-center"
            >
              <Image
                src={selectedImg}
                alt="Full Screen Gallery Image"
                width={1200}
                height={900}
                className="rounded-xl object-contain w-full h-full max-h-[90vh] shadow-2xl"
                priority
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
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
