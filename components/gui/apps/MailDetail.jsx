"use client";
import React from "react";
import { motion } from "framer-motion";

export default function MailDetail() {
  return (
    <motion.div
      layoutId="mail-page"
      className="absolute inset-0 bg-gradient-to-br from-black via-gray-900 to-black text-white overflow-y-auto rounded-3xl p-6 sm:p-10"
    >
      {/* Subtle moving gradient background */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-tr from-green-900/20 via-transparent to-emerald-900/20 animate-pulse"></div>

      {/* Header */}
      <div className="mb-10 text-center">
        <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-green-400 to-emerald-500 bg-clip-text text-transparent drop-shadow-lg">
          Mail Us
        </h1>
        <div className="w-24 h-1 bg-green-400 mx-auto mt-4 rounded-full shadow-lg shadow-green-500/30"></div>
        <p className="text-gray-300 mt-4 md:text-lg max-w-xl mx-auto">
          Got a question, suggestion, or want to collaborate? Fill out the form
          below and we’ll get back to you!
        </p>
      </div>

      {/* Contact Form in glass card */}
      <div className="max-w-2xl mx-auto bg-white/5 backdrop-blur-xl p-8 rounded-2xl border border-white/10 shadow-xl">
        <form className="flex flex-col gap-6">
          <div>
            <label className="block mb-2 text-sm font-semibold text-gray-200">
              Your Name
            </label>
            <input
              type="text"
              placeholder="Enter your name"
              className="w-full p-3 rounded-lg bg-gray-800/70 text-white border border-gray-700 focus:outline-none focus:ring-2 focus:ring-green-500"
            />
          </div>

          <div>
            <label className="block mb-2 text-sm font-semibold text-gray-200">
              Your Email
            </label>
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full p-3 rounded-lg bg-gray-800/70 text-white border border-gray-700 focus:outline-none focus:ring-2 focus:ring-green-500"
            />
          </div>

          <div>
            <label className="block mb-2 text-sm font-semibold text-gray-200">
              Message
            </label>
            <textarea
              rows={5}
              placeholder="Write your message..."
              className="w-full p-3 rounded-lg bg-gray-800/70 text-white border border-gray-700 focus:outline-none focus:ring-2 focus:ring-green-500"
            />
          </div>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.97 }}
            type="submit"
            className="self-start px-8 py-3 bg-green-500 hover:bg-green-600 text-black font-semibold rounded-lg transition shadow-lg shadow-green-500/20"
          >
            Send Message
          </motion.button>
        </form>
      </div>

      {/* Hide scrollbar */}
      <style jsx global>{`
        ::-webkit-scrollbar {
          width: 0px;
          background: transparent;
        }
        * {
          scrollbar-width: none;
        }
      `}</style>
    </motion.div>
  );
}
