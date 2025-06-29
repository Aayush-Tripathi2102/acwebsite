"use client";
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { CiWifiOn, CiBatteryFull } from "react-icons/ci";
import { FaVolumeUp } from "react-icons/fa";
import {
  FaWhatsapp,
  FaInstagram,
  FaBell,
  FaBluetooth,
  FaMoon,
  FaPlane,
  FaLock,
  FaSun,
} from "react-icons/fa6";
import { PiCellSignalHigh } from "react-icons/pi";
import { MdDarkMode } from "react-icons/md";
import dayjs from "dayjs";
import Image from "next/image";

const StatusBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [currentTime, setCurrentTime] = useState(() => {
    const now = new Date();
    return now.toLocaleTimeString([], {
      hour: "2-digit",
      minute: "2-digit",
      hour12: false,
    });
  });
  const [currentDate, setCurrentDate] = useState(() =>
    dayjs().format("MMMM D, YYYY")
  );

  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date();
      setCurrentTime(
        now.toLocaleTimeString([], {
          hour: "2-digit",
          minute: "2-digit",
          hour12: false,
        })
      );
      setCurrentDate(dayjs().format("MMMM D, YYYY"));
    }, 1000 * 60);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative z-50">
      {/* Collapsed Bar */}
      <div
        className="w-full h-6 px-4 pt-1 text-xs sm:text-sm flex justify-between items-center bg-transparent cursor-pointer backdrop-blur-md shadow-lg"
        onClick={() => setIsOpen((prev) => !prev)}
      >
        <div className="flex items-center gap-2 leading-none justify-center">
          <span className="ml-2 mt-[2px]">{currentTime}</span>
          <FaBell className="text-white text-sm sm:text-base" />
        </div>

        <div className="flex gap-1 items-center text-base sm:text-lg leading-none">
          <CiWifiOn />
          <div>
            <p className="text-[6px] font-semibold">Vo</p>
            <p className="text-[6px] font-semibold">LTE</p>
          </div>
          <PiCellSignalHigh />
          <p className="text-xs">96%</p>
          <CiBatteryFull />
        </div>
      </div>

      {/* Expanded Panel */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="absolute left-0 top-6 w-full bg-black backdrop-blur-xl px-4 py-4 text-xs sm:text-sm rounded-b-xl shadow-lg z-50 text-white "
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -3 }}
            transition={{ duration: 0.2 }}
          >
            {/* Info Row */}
            <div className="flex justify-between items-center mb-3">
              <div className="flex flex-col">
                <span className="text-white/80">🔔 3 New Notifications</span>
                <span className="text-white/60">{currentDate} | 🌤️ 32°C</span>
              </div>
              <div className="text-right">
                <span className="text-white/60">🔋 Battery: 96%</span>
              </div>
            </div>

            {/* Quick Toggles */}
            <div className="grid grid-cols-4 sm:grid-cols-6 gap-3 text-center text-white/90 mb-4">
              <div className="bg-white/10 p-3 rounded-lg flex flex-col items-center">
                <CiWifiOn className="text-xl" />
                <span className="text-xs mt-1">Wi-Fi</span>
              </div>
              <div className="bg-white/10 p-3 rounded-lg flex flex-col items-center">
                <FaBluetooth className="text-xl" />
                <span className="text-xs mt-1">Bluetooth</span>
              </div>
              <div className="bg-white/10 p-3 rounded-lg flex flex-col items-center">
                <FaPlane className="text-xl" />
                <span className="text-xs mt-1">Airplane</span>
              </div>
              <div className="bg-white/10 p-3 rounded-lg flex flex-col items-center">
                <FaMoon className="text-xl" />
                <span className="text-xs mt-1">DND</span>
              </div>
              <div className="bg-white/10 p-3 rounded-lg flex flex-col items-center">
                <FaLock className="text-xl" />
                <span className="text-xs mt-1">Lock</span>
              </div>
              <div className="bg-white/10 p-3 rounded-lg flex flex-col items-center">
                <MdDarkMode className="text-xl" />
                <span className="text-xs mt-1">Dark Mode</span>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default StatusBar;
