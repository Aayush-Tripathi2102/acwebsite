"use client";

import { useEffect, useState } from "react";

export default function Lockscreen() {
  // --- State Management ---
  const [unlockState, setUnlockState] = useState("locked");
  const [isUnlocking, setIsUnlocking] = useState(false);
  const [shouldRender, setShouldRender] = useState(true);
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);
  const [currentTime, setCurrentTime] = useState("");
  const [currentDate, setCurrentDate] = useState("");

  // Effect to unmount the component after the fade-out animation
  useEffect(() => {
    if (isUnlocking) {
      const timer = setTimeout(() => setShouldRender(false), 500);
      return () => clearTimeout(timer);
    }
  }, [isUnlocking]);

  // Effect for updating time
  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      const timeString = now
        .toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })
        .replace(" ", "\u00A0");
      setCurrentTime(timeString);
      setCurrentDate(
        now.toLocaleDateString(undefined, {
          weekday: "long",
          month: "long",
          day: "numeric",
        })
      );
    };
    const intervalId = setInterval(updateTime, 1000);
    updateTime();
    return () => clearInterval(intervalId);
  }, []);

  const handleInitialClick = () => {
    if (unlockState === "locked") setUnlockState("prompting");
  };

  const handlePasswordSubmit = () => {
    if (password === "1234") {
      setIsUnlocking(true);
    } else {
      setError(true);
      setPassword("");
      setTimeout(() => setError(false), 800);
    }
  };

  useEffect(() => {
    if (password.length == 4) handlePasswordSubmit();
  });

  const handleKeyPress = (key) => {
    if (isUnlocking) return; // Prevent input during exit animation

    // Clear error on new key press
    if (error) setError(false);

    if (key === "backspace") {
      setPassword((prev) => prev.slice(0, -1));
    } else if (password.length < 4) {
      // Set a max password length
      setPassword((prev) => prev + key);
    }
  };

  if (!shouldRender) return null;

  return (
    <div
      className={`absolute inset-0 z-40 overflow-hidden bg-cover bg-center transition-opacity duration-500 ${
        isUnlocking ? "opacity-0" : "opacity-100"
      }`}
      style={{ backgroundImage: "url(/deviceBg.png)" }}
    >
      <div className="absolute inset-0 bg-black/70"></div>

      {/* View 1: Time, Date, and Initial Prompt */}
      <div
        onClick={handleInitialClick}
        className={`absolute inset-0 z-20 flex cursor-pointer flex-col items-center justify-between p-12 text-white transition-transform duration-500 ease-in-out ${
          unlockState === "prompting" ? "-translate-y-full" : "translate-y-0"
        }`}
      >
        <div className="flex flex-col items-center text-center mt-5">
          <h1 className="text-6xl md:text-8xl font-bold tracking-tight">
            {currentTime}
          </h1>
          <p className="text-xl md:text-xl font-medium">{currentDate}</p>
        </div>
        <div className="flex flex-col items-center gap-2 animate-pulse">
          <img
            src="/fingerprint.svg"
            alt="Fingerprint Icon"
            className="h-12 w-12 opacity-80"
            style={{ filter: "invert(1) brightness(2)" }}
          />
          <p className="text-sm font-light">Tap to unlock</p>
        </div>
      </div>

      {/* View 2: Password Prompt with Keypad */}
      <div
        className={`absolute inset-0 z-10 flex flex-col items-center justify-end md:mb-5 md:justify-center px-4 sm:px-8 py-6 sm:py-12 text-white transition-opacity duration-500 ease-in-out ${
          unlockState === "prompting"
            ? "opacity-100"
            : "opacity-0 pointer-events-none"
        }`}
      >
        <div
          className={`flex flex-col items-center gap-6 sm:gap-8 mb-5 ${
            error ? "animate-shake" : ""
          }`}
        >
          <h2 className="text-lg sm:text-xl font-medium">Enter Password</h2>

          {/* Password Display Dots */}
          <div className="flex h-6 sm:h-8 items-center justify-center gap-2 sm:gap-3">
            {Array(4)
              .fill(0)
              .map((_, i) => (
                <div
                  key={i}
                  className={`h-2.5 w-2.5 sm:h-3 sm:w-3 rounded-full border border-white/50 transition-colors ${
                    password.length > i ? "bg-white/70" : ""
                  }`}
                ></div>
              ))}
          </div>

          {/* Keypad Grid */}
          <div className="grid grid-cols-3 gap-2 sm:gap-4">
            {["1", "2", "3", "4", "5", "6", "7", "8", "9"].map((digit) => (
              <button
                key={digit}
                onClick={() => handleKeyPress(digit)}
                className="h-16 w-16 lg:h-20 lg:w-20 rounded-full bg-white/10 text-lg sm:text-2xl lg:text-3xl font-light transition-colors hover:bg-white/20"
              >
                {digit}
              </button>
            ))}

            {/* Bottom Row */}
            <button
              onClick={() => handleKeyPress("backspace")}
              className="h-16 w-16 lg:h-20 lg:w-20 rounded-full text-lg sm:text-2xl lg:text-3xl font-light transition-colors hover:bg-white/20 flex items-center justify-center"
            >
              <img
                src="/clear.svg"
                alt="Clear Icon"
                className="w-4 h-4 sm:w-6 sm:h-6 lg:w-8 lg:h-8 opacity-80"
                style={{ filter: "invert(1) brightness(2)" }}
              />
            </button>

            <button
              onClick={() => handleKeyPress("0")}
              className="h-16 w-16 lg:h-20 lg:w-20 rounded-full bg-white/10 text-lg sm:text-2xl lg:text-3xl font-light transition-colors hover:bg-white/20"
            >
              0
            </button>

            <button
              onClick={handlePasswordSubmit}
              className="h-16 w-16 lg:h-20 lg:w-20 rounded-full text-sm sm:text-base lg:text-xl font-medium text-green-300 transition-colors hover:bg-white/20 flex items-center justify-center"
            >
              OK
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
