"use client";

import React from "react";

import TerminalDetail from "@/components/terminal/TerminalDetail";

export default function page() {
  return (
    <div>
      <audio src="/sounds/terminalClick.mp3" autoPlay preload="auto" />
      <TerminalDetail />
    </div>
  );
}
