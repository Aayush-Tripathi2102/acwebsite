"use client";

import { motion } from "framer-motion";

const Page = () => {
  return (
    <motion.div
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      exit={{ scale: 0, opacity: 0 }}
      transition={{
        duration: 1,
        ease: [0.22, 1, 0.36, 1], // natural spring-like ease
      }}
      className="flex items-center justify-center h-full "
    >
      <div className="text-3xl font-semibold text-white">Hello</div>
    </motion.div>
  );
};

export default Page;
