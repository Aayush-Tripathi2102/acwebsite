"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { useQuery } from "@tanstack/react-query";
import { FetchEventDetails } from "@/utils/service";
import { useRouter } from "next/navigation";

// --- New Skeleton Card Component ---
const SkeletonCard = () => (
  <div className="relative pb-[66.66%] rounded-xl overflow-hidden shadow-md bg-gray-800 animate-pulse"></div>
);
// --- End New Skeleton Card Component ---

export default function PastEventsPage() {
  let { data, isLoading } = useQuery({
    queryKey: ["pastEvents"],
    queryFn: FetchEventDetails,
  });

  const router = useRouter();

  const handleOpen = (event) => {
    router.push(`/past-events/${event.event_id}`);
  };

  // This line is for testing scrollability by duplicating data
  // In a real application, you'd probably paginate or load more data
  data = [...(data || []), ...(data || []), ...(data || []), ...(data || [])];

  console.log(data);

  return (
    <div className="bg-gray-950 p-6 overflow-y-scroll max-h-screen scrollbar-hide pb-10">
      <div className="text-center mb-10">
        <h1 className="text-green-300 text-4xl font-bold">Past Events</h1>
        <p className="text-green-200 mt-2">
          Explore our successful events and their highlights.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {isLoading ? (
          // --- Loading State: Render Skeleton Cards ---
          <>
            {Array.from({ length: 9 }).map(
              (
                _,
                i // Render 9 skeleton cards (adjust as needed)
              ) => (
                <SkeletonCard key={i} />
              )
            )}
          </>
        ) : (
          // --- Data Loaded: Render Actual Event Cards ---
          data?.map((event, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              whileHover={{ scale: 1.02 }}
              className="relative pb-[66.66%] rounded-xl overflow-hidden shadow-md cursor-pointer group"
              onClick={() => handleOpen(event)}
            >
              {event.event_images?.[0]?.image_url ? (
                <Image
                  src={event.event_images[0].image_url}
                  alt={event.title || "event image"}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="absolute inset-0 object-cover group-hover:scale-105 transition-transform duration-500"
                />
              ) : (
                <div className="absolute inset-0 flex items-center justify-center bg-gray-700">
                  <p className="text-gray-400 text-lg">No Image Available</p>
                </div>
              )}

              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent z-10" />

              <div className="absolute bottom-0 z-20 p-4 text-white">
                <h2 className="text-xl font-bold">{event.title}</h2>
                <p className="text-sm text-gray-200">{event.event_date}</p>
              </div>
            </motion.div>
          ))
        )}
      </div>
    </div>
  );
}
