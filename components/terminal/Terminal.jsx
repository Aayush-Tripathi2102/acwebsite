"use client";

import React, { useState } from "react";
import { usePathname, useRouter } from "next/navigation";
import { motion } from "framer-motion";
import { Typewriter } from "react-simple-typewriter";

const Terminal = () => {
  const router = useRouter();
  const pathname = usePathname();

  const isTerminalRoute = pathname === "/terminal";

  const handleClick = () => {
    if (!isTerminalRoute) {
      router.push("/terminal");
    }
  };

  return (
    <motion.div
      layoutId="terminal-card"
      className="rounded-3xl bg-black h-full cursor-pointer py-[20px] md:py-[53px] relative overflow-hidden w-2/3 lg:w-full"
      onClick={() => router.push("/terminal")}
      whileHover={{ scale: 1.03 }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
    >
      <div className="flex flex-wrap relative gap-2 md:gap-5 px-[20px] md:px-[40px]">
        <div className="absolute inset-0 bg-terminal-primary blur-3xl opacity-40"></div>
        <pre
          className="text-terminal-primary text-[2px] lg:text-[5px]"
          style={{
            willChange: "transform, opacity",
            textShadow: `
          0 0 10px var(--terminal-primary),
          0 0 40px var(--terminal-primary),
        `,
          }}
        >
          {` █████╗ ███╗   ██╗██████╗ ██████╗  ██████╗ ██╗██████╗ 
██╔══██╗████╗  ██║██╔══██╗██╔══██╗██╔═══██╗██║██╔══██╗
███████║██╔██╗ ██║██║  ██║██████╔╝██║   ██║██║██║  ██║
██╔══██║██║╚██╗██║██║  ██║██╔══██╗██║   ██║██║██║  ██║
██║  ██║██║ ╚████║██████╔╝██║  ██║╚██████╔╝██║██████╔╝
╚═╝  ╚═╝╚═╝  ╚═══╝╚═════╝ ╚═╝  ╚═╝ ╚═════╝ ╚═╝╚═════╝ 
                                                      `}
        </pre>
        <pre
          className="text-terminal-primary text-[2px] lg:text-[5px]"
          style={{
            willChange: "transform, opacity",
            textShadow: `
          0 0 10px var(--terminal-primary),
          0 0 40px var(--terminal-primary),
        `,
          }}
        >
          {` ██████╗██╗     ██╗   ██╗██████╗ 
██╔════╝██║     ██║   ██║██╔══██╗
██║     ██║     ██║   ██║██████╔╝
██║     ██║     ██║   ██║██╔══██╗
╚██████╗███████╗╚██████╔╝██████╔╝
 ╚═════╝╚══════╝ ╚═════╝ ╚═════╝ 
                                 `}
        </pre>
        <pre
          className="text-terminal-primary text-[2px] lg:text-[5px]"
          style={{
            willChange: "transform, opacity",
            textShadow: `
          0 0 10px var(--terminal-primary),
          0 0 40px var(--terminal-primary),
        `,
          }}
        >
          {`██╗   ██╗██╗████████╗ ██████╗
██║   ██║██║╚══██╔══╝██╔════╝
██║   ██║██║   ██║   ██║     
╚██╗ ██╔╝██║   ██║   ██║     
 ╚████╔╝ ██║   ██║   ╚██████╗
  ╚═══╝  ╚═╝   ╚═╝    ╚═════╝
                             `}
        </pre>
      </div>

      <h1 className="text-terminal-primary terminal-text text-[10px] md:text-[16px] font-[400] px-[23px] mt-[10px] md:mt-[30px]">
        <Typewriter
          words={[
            "Tap to launch terminal",
            "Access commands here",
            "No hidden commands here. Promise.",
            "Explore the Android Club",
          ]}
          loop={true}
          cursor
          cursorStyle="_"
          typeSpeed={70}
          deleteSpeed={50}
          delaySpeed={1500}
        />
      </h1>
    </motion.div>
  );
};

export default Terminal;
