"use client";
import Image from "next/image";
import { useParams, useRouter } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowLeft } from "lucide-react";
import { useEffect } from "react";
import { useQuery } from "@tanstack/react-query";
import { FetchEvent } from "@/utils/service";

// Skeleton Loader Component (simplified)
const EventDetailsSkeleton = () => (
  <div className="w-full h-full bg-gray-950 p-4 sm:p-6 md:p-10 scrollbar-thin scrollbar-thumb-gray-800 scrollbar-track-gray-900 overflow-y-scroll max-h-screen scrollbar-hide mb-5">
    {/* Back button is NOT part of the skeleton, it's always present */}
    {/* This h1 for the title is fine as a general page loader */}
    <div className="h-8 bg-gray-800 rounded w-1/2 mx-auto mb-8 mt-10" />

    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 max-w-5xl mx-auto">
      {/* Left Card Skeleton: Main Info & Details */}
      <div className="bg-gray-900 border border-gray-800 flex flex-col rounded-xl h-auto relative overflow-hidden">
        {/* Image Placeholder */}
        <div className="relative w-full aspect-video bg-gray-800" />
        <div className="mt-4 p-4 pb-6">
          {/* Title Placeholder */}
          <div className="h-10 bg-gray-700 rounded w-3/4 mb-2" />
          {/* Date Placeholder */}
          <div className="h-6 bg-gray-700 rounded w-1/2" />
          {/* Details Grid Placeholders */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-y-2 mt-4">
            {[...Array(6)].map((_, i) => (
              <div key={i} className="h-5 bg-gray-700 rounded w-4/5 mb-1" />
            ))}
          </div>
        </div>
      </div>

      {/* Right Card Skeleton: Gallery */}
      <div className="bg-gray-900 border border-gray-800 rounded-xl h-auto overflow-hidden flex flex-col p-6">
        {/* Gallery Header Placeholder - optional, removed as per request for minimal skeleton */}
        {/* <div className="h-8 bg-gray-700 rounded w-1/3 mb-4" /> */}
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
          {[...Array(6)].map((_, i) => (
            <div
              key={i}
              className="relative w-full pb-[75%] rounded-lg overflow-hidden bg-gray-700"
            />
          ))}
        </div>
      </div>
    </div>
  </div>
);

export default function Page() {
  const { event: eventId } = useParams();
  const router = useRouter();
  const { data, isLoading, isError } = useQuery({
    queryKey: ["event", eventId],
    queryFn: () => FetchEvent(eventId),
    enabled: !!eventId,
  });

  useEffect(() => {
    console.log("Event ID from URL:", eventId);
  }, [eventId]);

  if (isLoading) {
    return (
      <>
        {/* The back button is rendered outside the skeleton when loading */}
        <ArrowLeft
          onClick={() => {
            router.push("/past-events");
          }}
          className="absolute top-14 left-4 text-gray-100 w-8 h-8 sm:w-10 sm:h-10 rounded-full hover:bg-gray-800 p-2 cursor-pointer z-50"
        />
        <EventDetailsSkeleton />
      </>
    );
  }

  if (isError) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-gray-950 text-red-400 text-xl">
        Failed to load event details. Please try again.
      </div>
    );
  }

  if (!data) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-gray-950 text-gray-400 text-xl">
        Event not found or no data available.
      </div>
    );
  }

  const eventDetails = data;

  console.log("Event Details:", eventDetails);

  const formatDate = (dateString) => {
    if (!dateString) return "N/A";
    const options = { year: "numeric", month: "long", day: "numeric" };
    return new Date(dateString).toLocaleDateString(undefined, options);
  };

  const formatTime = (timeString) => {
    if (!timeString) return "N/A";
    const [hours, minutes] = timeString.split(":");
    let h = parseInt(hours, 10);
    const ampm = h >= 12 ? "pm" : "am";
    h = h % 12;
    h = h ? h : 12;
    return `${h}:${minutes} ${ampm}`;
  };

  return (
    <motion.div
      layoutId={eventId}
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.2, ease: "easeOut" }}
      className="w-full h-full bg-gray-950 p-4 sm:p-6 md:p-10 scrollbar-thin scrollbar-thumb-gray-800 scrollbar-track-gray-900 overflow-y-scroll max-h-screen scrollbar-hide mb-5"
    >
      <ArrowLeft
        onClick={() => {
          router.push("/past-events");
        }}
        className="absolute top-14 left-4 text-gray-100 w-8 h-8 sm:w-10 sm:h-10 rounded-full hover:bg-gray-800 p-2 cursor-pointer z-50"
      />
      <h1 className="text-2xl md:text-3xl font-bold text-center text-green-300 mb-8 mt-10">
        Event Details
      </h1>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 max-w-5xl mx-auto">
        {/* Left Card: Main Info & Details */}
        <div className="bg-gray-900 border border-gray-800 flex flex-col rounded-xl h-auto relative overflow-hidden">
          {/* Main Event Image with Overlay */}
          <div className="relative w-full aspect-video">
            {eventDetails.event_images?.[0]?.image_url ? (
              <Image
                src={eventDetails.event_images[0].image_url}
                alt={eventDetails.title || "Event Banner"}
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover"
                priority
              />
            ) : (
              <div className="absolute inset-0 flex items-center justify-center bg-gray-700">
                <p className="text-gray-400 text-lg">No Image Available</p>
              </div>
            )}
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent z-10" />

            <div className="absolute bottom-4 left-4 sm:left-6 z-20 text-white">
              <h2 className="text-3xl md:text-5xl font-bold mb-1">
                {eventDetails.title || "Event Title"}
              </h2>
              <p className="text-xl">{formatDate(eventDetails.event_date)}</p>
            </div>
          </div>

          {/* Details Section */}
          <div className="mt-4 text-base grid grid-cols-1 md:grid-cols-2 gap-y-2 p-4 pb-6 text-gray-300">
            <div>
              <p className="mb-1">
                <span className="font-semibold text-gray-100">Time:</span>{" "}
                {formatTime(eventDetails.time)}
              </p>
              <p className="mb-1">
                <span className="font-semibold text-gray-100">Venue:</span>{" "}
                {eventDetails.venue || "N/A"} ({eventDetails.type || "N/A"})
              </p>
              <p className="mb-1">
                <span className="font-semibold text-gray-100">Winners:</span>{" "}
                {eventDetails.winner || "Not Announced Yet"}
              </p>
              <p className="mb-1">
                <span className="font-semibold text-gray-100">Runner Up:</span>{" "}
                {eventDetails.runner_up || "N/A"}
              </p>
            </div>
            <div>
              <p className="mb-1">
                <span className="font-semibold text-gray-100">Faculty:</span>{" "}
                {eventDetails.faculty || "N/A"}
              </p>
              <p className="mb-1">
                <span className="font-semibold text-gray-100">
                  Student Coordinator:
                </span>{" "}
                {eventDetails.student_coordinator || "N/A"}
              </p>
              <p className="mb-1">
                <span className="font-semibold text-gray-100">
                  Participants:
                </span>{" "}
                {eventDetails.participants || "N/A"}
              </p>
            </div>
          </div>
        </div>

        {/* Right Card: Only Gallery */}
        <motion.div className="bg-gray-900 border border-gray-800 rounded-xl h-auto overflow-hidden flex flex-col p-6">
          {/* Event Gallery */}
          {eventDetails.event_images && eventDetails.event_images.length > 0 ? (
            <div>
              <h2 className="text-2xl font-bold mb-4 text-green-300">
                Gallery
              </h2>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                {eventDetails.event_images.map((img, index) => (
                  <div
                    key={index}
                    className="relative w-full pb-[75%] rounded-lg overflow-hidden"
                  >
                    <Image
                      src={img.image_url}
                      alt={`${eventDetails.title} image ${index + 1}`}
                      fill
                      sizes="(max-width: 768px) 50vw, (max-width: 1200px) 33vw, 25vw"
                      className="object-cover"
                    />
                  </div>
                ))}
              </div>
            </div>
          ) : (
            <div className="flex items-center justify-center h-full text-gray-400 text-lg">
              No gallery images available.
            </div>
          )}
        </motion.div>
      </div>
    </motion.div>
  );
}
