"use client";

import React, { useState } from "react";
import { usePathname, useRouter } from "next/navigation";
import { motion } from "framer-motion";

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
      className="rounded-3xl bg-black h-full py-[30px] md:py-[53px] relative overflow-hidden"
      onClick={() => router.push("/terminal")}
    >
      <div className="flex flex-wrap relative gap-2 md:gap-5 px-[20px] md:px-[40px]">
        <div className="absolute inset-0 bg-terminal-primary blur-3xl opacity-40"></div>
        <pre
          className="text-terminal-primary text-[3px] md:text-[5px]"
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
          className="text-terminal-primary text-[3px] md:text-[5px]"
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
          className="text-terminal-primary text-[3px] md:text-[5px]"
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

      <h1 className="terminal-text text-[10px] md:text-[13px] font-[400px] px-[23px] mt-[10px] md:mt-[30px]">
        Hello it’s good to have you here
      </h1>
    </motion.div>
  );
};

export default Terminal;
