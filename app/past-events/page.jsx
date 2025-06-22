"use client";
import React from "react";
import { motion } from "framer-motion";
const PastEvents = () => {
  return (
    <motion.div
      layoutId="past-events-page"
      className="w-full h-full bg-black p-4 flex items-center justify-center"
    >
      Past Events
    </motion.div>
  );
};

export default PastEvents;
