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
      key="terminal"
      className="rounded-3xl bg-black h-full py-[53px] relative overflow-hidden"
      onClick={() => router.push("/terminal")}
      transition={{ duration: 0.6, ease: "easeInOut" }}
    >
      <div className="w-[300px] absolute left-1/3 translate-x-[-30%] h-[50px] rounded-full bg-[var(--terminal-primary)] opacity-100 blur-[75px]"></div>
      <div className="flex flex-wrap gap-5 px-[40px]">
        <pre
          className="text-terminal-primary text-[5px]"
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
          className="text-terminal-primary text-[5px]"
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
          className="text-terminal-primary text-[5px]"
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

      <h1 className="terminal-text text-[13px] font-[400px] px-[23px] mt-[30px]">
        Hello it’s good to have you here
      </h1>
    </motion.div>
  );
};

export default Terminal;
