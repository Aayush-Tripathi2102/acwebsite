"use client";

import { motion } from "framer-motion";

const Page = () => {
  return (
    <motion.div
      initial={{ scale: 0, opacity: 0, y: -1000 }}
      animate={{ scale: 1, opacity: 1, y: 0 }}
      exit={{ scale: 0, opacity: 0, y: 1000 }}
      transition={{
        duration: 0.6,
        ease: [0.22, 1, 0.36, 1],
      }}
      className="flex flex-col items-center justify-center h-full"
    >
      <div className="text-3xl font-semibold text-white">Hello</div>
      <div className="text-3xl font-semibold text-white">Hello</div>
      <div className="text-3xl font-semibold text-white">Hello</div>
      <div className="text-3xl font-semibold text-white">Hello</div>
    </motion.div>
  );
};

export default Page;
