"use client";
import React from "react";
import { motion } from "framer-motion";
import { FiSearch } from "react-icons/fi";

export default function SearchDetail() {
  return (
    <motion.div
      layoutId="search-container"
      className="absolute inset-0 w-full h-full bg-black p-6 border rounded-2xl border-black"
    >
      <motion.div
        layoutId="search-box"
        className="flex items-center bg-white/10 border border-white/20 rounded-2xl px-4 py-3 w-full"
      >
        <motion.div layoutId="search-icon" className="text-white mr-2">
          <FiSearch className="text-xl" />
        </motion.div>
        <motion.input
          layoutId="search-input"
          type="text"
          placeholder="Search..."
          className="bg-transparent w-full text-white placeholder-white/60 outline-none text-base"
          autoFocus
        />
      </motion.div>
    </motion.div>
  );
}
