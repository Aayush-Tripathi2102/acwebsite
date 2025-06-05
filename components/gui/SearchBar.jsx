"use client";
import React from "react";
import { FiSearch } from "react-icons/fi";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";

const SearchBar = () => {
  const router = useRouter();

  return (
    <motion.div
      layoutId="search-container"
      className="w-full mx-2 cursor-pointer z-50"
      onClick={() => router.push("/search")}
    >
      <div className="relative w-full">
        <motion.div
          layoutId="search-box"
          className="flex items-center bg-[#21242F] border border-gray-300 rounded-2xl pl-3 pr-4 py-2 h-10"
        >
          <motion.div layoutId="search-icon" className="text-gray-400 mr-2">
            <FiSearch className="h-5 w-5" />
          </motion.div>
          <motion.input
            layoutId="search-input"
            type="text"
            placeholder="Search..."
            className="bg-transparent w-full text-gray-300 placeholder-white outline-none text-sm "
            readOnly // prevent typing before navigation
          />
        </motion.div>
      </div>
    </motion.div>
  );
};

export default SearchBar;
