"use client";
import React from "react";
import { motion } from "framer-motion";

export default function MailDetail() {
  return (
    <motion.div
      layoutId="mail-page"
      className="rounded-3xl bg-black w-full h-full absolute inset-0 overflow-hidden"
    >
      <div className="p-10 text-white">
        <h1 className="text-3xl font-bold">Mail Us</h1>
        <p className="mt-4">This is a Mail Page</p>
      </div>
    </motion.div>
  );
}
