"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Calendar, Users, Mail, Home, ArrowLeft } from "lucide-react";
import EventCard from "@/components/gui/EventCard";
import { useRouter } from "next/navigation";

const PastEvents = () => {
  const pastEvents = [
    {
      id: 1,
      title: "Event1",
      date: "March 15, 2024",
    },
    {
      id: 2,
      title: "Event2",
      date: "February 28, 2024",
    },
    {
      id: 3,
      title: "Event3",
      date: "January 20, 2024",
    },
    {
      id: 4,
      title: "Event4",
      date: "January 10, 2024",
    },
  ];

  const router = useRouter();

  return (
    <motion.div
      layoutId="past-events-page"
      className="w-full h-full bg-gray-950 relative overflow-y-auto"
    >
      {/* Main Content */}
      <main className="px-4 md:px-6 pb-8 bg-gray-900 min-h-screen mt-6">
        <ArrowLeft
          onClick={() => {
            router.push("/");
          }}
          className="absolute text-gray-100 w-10 h-10 rounded-full hover:bg-gray-800 p-2 cursor-pointer"
        />
        <div className="max-w-6xl mx-auto pt-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-5xl font-bold text-green-300 mb-4">
              Past Events
            </h2>
            <p className="text-green-200 text-lg max-w-2xl mx-auto">
              Explore our collection of successful events that brought together
              amazing people and created unforgettable experiences.
            </p>
          </div>

          {/* Events Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {pastEvents.map((event, index) => (
              <EventCard
                key={event.id}
                event={event}
                index={index}
                type="pastEvents"
                // Optionally pass a prop to EventCard to indicate dark mode
              />
            ))}
          </div>
        </div>
      </main>
    </motion.div>
  );
};

export default PastEvents;
