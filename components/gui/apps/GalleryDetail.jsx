"use client";
import React from "react";
import { motion } from "framer-motion";
const GalleryDetail = () => {
  return (
    <motion.div
      layoutId="gallery-page"
      className="rounded-3xl bg-black w-full h-full absolute inset-0 overflow-hidden"
    >
      <div className="p-10 text-white">
        <h1 className="text-3xl font-bold">Gallery</h1>
        <p className="mt-4">This is a Gallery</p>
      </div>
    </motion.div>
  );
};

export default GalleryDetail;
