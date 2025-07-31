"use client";
import React from "react";
import { motion } from "framer-motion";

export default function MailDetail() {
  return (
    <motion.div
      layoutId="mail-page"
      className="absolute inset-0 bg-gradient-to-b from-black via-gray-900 to-black text-white overflow-y-auto rounded-3xl p-6 sm:p-10"
    >
      {/* Header */}
      <div className="mb-10 text-center">
        <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-green-400 to-emerald-500 bg-clip-text text-transparent">
          Mail Us
        </h1>
        <div className="w-24 h-1 bg-green-400 mx-auto mt-4 rounded-full"></div>
        <p className="text-gray-300 mt-4 md:text-lg max-w-xl mx-auto">
          Got a question, suggestion, or want to collaborate? Fill out the form
          below and we’ll get back to you!
        </p>
      </div>

      {/* Contact Form */}
      <form className="max-w-2xl mx-auto flex flex-col gap-6">
        <div>
          <label className="block mb-2 text-sm font-semibold">Your Name</label>
          <input
            type="text"
            placeholder="Enter your name"
            className="w-full p-3 rounded-lg bg-gray-900 text-white border border-gray-700 focus:outline-none focus:ring-2 focus:ring-green-500"
          />
        </div>

        <div>
          <label className="block mb-2 text-sm font-semibold">Your Email</label>
          <input
            type="email"
            placeholder="Enter your email"
            className="w-full p-3 rounded-lg bg-gray-900 text-white border border-gray-700 focus:outline-none focus:ring-2 focus:ring-green-500"
          />
        </div>

        <div>
          <label className="block mb-2 text-sm font-semibold">Message</label>
          <textarea
            rows={5}
            placeholder="Write your message..."
            className="w-full p-3 rounded-lg bg-gray-900 text-white border border-gray-700 focus:outline-none focus:ring-2 focus:ring-green-500"
          />
        </div>

        <button
          type="submit"
          className="self-start px-6 py-3 bg-green-500 hover:bg-green-600 text-black font-semibold rounded-lg transition"
        >
          Send Message
        </button>
      </form>

      {/* Hide scrollbar */}
      <style jsx global>{`
        ::-webkit-scrollbar {
          width: 0px;
          background: transparent;
        }
        * {
          scrollbar-width: none; /* Firefox */
        }
      `}</style>
    </motion.div>
  );
}
