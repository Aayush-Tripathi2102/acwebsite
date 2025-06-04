"use client";

import AppSection from "@/components/gui/AppSection";
import SearchBar from "@/components/gui/SearchBar";
import Terminal from "@/components/terminal/Terminal";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import useIsLargeScreen from "@/hooks/useIsLargeScreen"; // import the hook

export default function Home() {
  const [isOpen, setIsOpen] = useState(false);
  const isLargeScreen = useIsLargeScreen(); // get screen size

  const transitionSettings = {
    duration: 0.4,
    ease: "easeInOut",
  };

  const searchOnlyAnimation = {
    initial: {
      scale: 0.9,
      opacity: 0,
      x: isLargeScreen ? 100 : 0,
    },
    animate: {
      scale: 1,
      opacity: 1,
      x: 0,
    },
    exit: {
      scale: 0.9,
      opacity: 0,
      x: isLargeScreen ? 100 : 0,
    },
  };

  return (
    <div className="h-full w-full p-2 flex justify-center overflow-hidden">
      <AnimatePresence mode="wait">
        {isOpen ? (
          <motion.div
            key="searchOnly"
            {...searchOnlyAnimation}
            transition={transitionSettings}
            className="w-full max-w-2xl"
          >
            <SearchBar setIsOpen={setIsOpen} />
          </motion.div>
        ) : (
          <motion.div
            key="fullLayout"
            initial={{ scale: 0.95, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.95, opacity: 0 }}
            transition={transitionSettings}
            className="grid grid-cols-2 grid-rows-8 lg:grid-cols-5 lg:grid-rows-5 gap-2 w-full h-full"
          >
            {/* Search Bar */}
            <div className="col-span-2 row-span-1 lg:col-span-3 lg:col-start-3 lg:row-span-1 h-full w-full flex items-center justify-center">
              <SearchBar setIsOpen={setIsOpen} />
            </div>

            {/* Terminal */}
            <div className="col-span-2 row-span-3 row-start-2 lg:col-span-2 lg:row-span-5 lg:row-start-1">
              <Terminal />
            </div>

            {/* App Section */}
            <div className="col-span-2 row-span-4 row-start-5 lg:col-span-3 lg:col-start-3 lg:row-span-4 lg:row-start-2">
              <AppSection />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
