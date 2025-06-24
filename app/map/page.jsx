"use client";
import React from "react";
import { motion } from "framer-motion";
const Map = () => {
  return (
    <motion.div className="w-full h-full bg-black" layoutId="map-page">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3890.041020390602!2d80.15073452489061!3d12.84062583746284!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a5259af8e491f67%3A0x944b42131b757d2d!2sVellore%20Institute%20of%20Technology%20-%20Chennai!5e0!3m2!1sen!2sin!4v1750778470605!5m2!1sen!2sin"
        width="800"
        height="600"
        loading="lazy"
        className="w-full h-full pb-6"
      ></iframe>
    </motion.div>
  );
};

export default Map;
