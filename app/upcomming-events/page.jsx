"use client";
import React from "react";
import { motion } from "framer-motion";
import { ArrowLeft } from "lucide-react";
import EventCard from "@/components/gui/EventCard";
import { useRouter } from "next/navigation";
const UpcommingEvents = () => {
  const newEvents = [
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
      layoutId="upcomming-events-page"
      className="w-full h-full bg-white relative overflow-y-auto"
    >
      {/* Main Content */}
      <main className="px-4 md:px-6 pb-8 bg-gray-50 min-h-screen mt-6">
        <ArrowLeft
          onClick={() => {
            router.push("/");
          }}
          className="absolute text-black w-10 h-10 rounded-full hover:bg-gray-100 p-2 cursor-pointer"
        />
        <div className="max-w-6xl mx-auto pt-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-5xl font-bold text-green-950 mb-4">
              Upcoming Events
            </h2>
            <p className="text-green-900 text-lg max-w-2xl mx-auto">
              Explore our collection of successful events that brought together
              amazing people and created unforgettable experiences.
            </p>
          </div>

          {/* Events Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {newEvents.map((event, index) => (
              <EventCard
                key={event.id}
                event={event}
                index={index}
                type="newEvents"
              />
            ))}
          </div>
        </div>
      </main>
    </motion.div>
  );
};

export default UpcommingEvents;
