"use client";

import AppSection from "@/components/gui/AppSection";
import SearchBar from "@/components/gui/SearchBar";
import Terminal from "@/components/terminal/Terminal";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import useIsLargeScreen from "@/hooks/useIsLargeScreen"; // import the hook
import StatusBar from "@/components/gui/StatusBar";
const currentTime = new Date().toLocaleTimeString([], {
  hour: "2-digit",
  minute: "2-digit",
});
export default function Home() {
  return (
    <>
      <StatusBar />
      <div className="h-full w-full p-2 flex flex-col justify-center overflow-hidden pb-10">
        <div className="grid grid-cols-2 grid-rows-8 lg:grid-cols-5 lg:grid-rows-5 gap-2 w-full h-full">
          {/* Search Bar */}
          <div className="col-span-2 row-span-1 lg:col-span-3 lg:col-start-3 lg:row-span-1 h-full w-full flex items-center justify-center">
            <SearchBar />
          </div>

          {/* Terminal */}
          <div className="col-span-2 row-span-3 row-start-2 lg:col-span-2 lg:row-span-5 lg:row-start-1   p-4">
            <Terminal />
          </div>

          {/* App Section */}
          <div className="col-span-2 row-span-4 row-start-5 lg:col-span-3 lg:col-start-3 lg:row-span-4 lg:row-start-2">
            <AppSection />
          </div>
        </div>
      </div>
    </>
  );
}
