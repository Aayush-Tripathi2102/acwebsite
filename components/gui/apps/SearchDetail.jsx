"use client";
import React from "react";
import { motion } from "framer-motion";
import { FiSearch } from "react-icons/fi"; // React icon for search

export default function SearchDetail() {
  return (
    <motion.div
      layoutId="search-page"
      className="rounded-3xl bg-black w-full h-full absolute inset-0 overflow-hidden"
    >
      <div className="w-full px-6 pt-6">
        <div className="flex items-center bg-white/10 border border-white/20 rounded-full px-4 py-2 w-full">
          <FiSearch className="text-white text-xl mr-2" />
          <input
            type="text"
            placeholder="Search..."
            className="bg-transparent w-full text-white placeholder-white/60 outline-none"
          />
        </div>
      </div>
    </motion.div>
  );
}
