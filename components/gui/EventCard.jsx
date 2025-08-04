"use client";

import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Calendar } from "lucide-react";
import Image from "next/image";
import { useRouter } from "next/navigation";

export default function EventCard({ event, index, type }) {
  const router = useRouter();
  return (
    <motion.div
      onClick={() => {
        type === "pastEvents"
          ? router.push(`/past-events/${event.title}`)
          : router.push(`/upcomming-events/`);
      }}
      key={index}
      layoutId={event.title}
      transition={{
        duration: 0.15,
        type: "linear",
        stiffness: 100,
        damping: 1125,
      }}
      className="bg-white border border-gray-200 rounded-xl aspect-[16/9] cursor-pointer hover:shadow-lg hover:border-green-200 transition-all duration-300 group relative overflow-hidden shadow-[5px_5px_10px_rgba(0,0,0,0.2)]"
    >
      <div className="relative w-full h-full">
        <Image
          src={event.image}
          alt="Event"
          fill
          className="object-cover hover:scale-[1.1] transition-all duration-300 ease-in-out hover:brightness-75"
        />
        <div className="absolute top-1/2 left-1/3 translate-x-[-50%] translate-y-[-50%] opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <h1 className="text-3xl font-bold">{event.title}</h1>
          <h1>{event.date}</h1>
        </div>
      </div>
      <h3 className="text-gray-800 font-semibold text-lg mb-1 group-hover:text-green-700 transition-colors">
        {event.title}
      </h3>
      <p className="text-gray-600 text-sm">{event.date}</p>
    </motion.div>
  );
}
