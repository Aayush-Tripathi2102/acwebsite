"use client";
import React, { useState, useRef, useEffect } from "react";
import { useForm } from "react-hook-form";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";
import {
  aboutCommandOutput,
  AndroidClubLogo,
  emptyDir,
  helpCommandOutput,
  homeLsOutput,
  InvalidCommandOutput,
  projectsCommandOutput,
  socialCommandOutput,
  StartCommands,
} from "@/constants/Terminalconstant";
import { ProcessTime } from "@/utils/ProcessTime";

export default function TerminalDetail() {
  const router = useRouter();
  const [logs, setLogs] = useState([]);
  const [startTime, setStartTime] = useState();
  const [visibleStartCommands, setVisibleStartCommands] = useState([]);
  const [prevCommands, setPrevCommands] = useState([]);
  const [historyIndex, setHistoryIndex] = useState(-1);
  const { register, handleSubmit, reset, setFocus, setValue } = useForm();
  const logsEndRef = useRef(null);
  const [pwd, setPwd] = useState("");

  const [specs, setSpecs] = useState(null);

  useEffect(() => {
    const canvas = document.createElement("canvas");
    const gl =
      canvas.getContext("webgl") || canvas.getContext("experimental-webgl");
    const debugInfo = gl?.getExtension("WEBGL_debug_renderer_info");

    const data = {
      OS: navigator.platform,
      UserAgent: navigator.userAgent,
      CPU_Cores: navigator.hardwareConcurrency || "Unknown",
      RAM_GB: navigator.deviceMemory || "Unknown",
      Screen: `${screen.width}x${screen.height}`,
      GPU: debugInfo
        ? gl.getParameter(debugInfo.UNMASKED_RENDERER_WEBGL)
        : "Unknown",
    };

    setSpecs(data);
  }, []);

  useEffect(() => {
    setStartTime(Date.now());

    let index = 0;
    const interval = setInterval(() => {
      if (index < StartCommands.length) {
        setVisibleStartCommands((prev) => [...prev, StartCommands[index]]);
        index++;
      } else {
        clearInterval(interval);
      }
    }, 300); // Speed of appearing commands

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    logsEndRef.current?.scrollIntoView({ behavior: "smooth" });
    setFocus("command");
  }, [logs, visibleStartCommands, setFocus]);

  const quotes = [
    "There’s no place like 127.0.0.1. 🏠",
    "Talk is cheap. Show me the code. – Linus Torvalds",
    "I don’t care if it works on your machine! We are not shipping your machine! 😜",
    "To err is human. To really foul things up you need a computer. 🤖",
    "Why do programmers always mix up Halloween and Christmas? Because Oct 31 == Dec 25.",
    "A day without coding is like… just kidding, I have no idea. 💻",
    "Real programmers count from 0.",
    "I'm not lazy, I'm just highly optimized. ⚙️",
    "Weeks of coding can save you hours of planning. 🙃",
    "It compiles? Ship it! 🚢",
    "If debugging is the process of removing bugs, then programming must be the process of putting them in. 🐞",
    "Never trust a computer you can’t throw out a window. – Steve Wozniak",
    "Software and cathedrals are much the same — first we build them, then we pray. 🛐",
    "There are only two hard things in Computer Science: cache invalidation, naming things, and off-by-one errors.",
    "Eat. Sleep. Code. Repeat. ☕",
  ];

  const executeCommand = (command) => {
    if (command.startsWith("echo ")) {
      const output = command.slice(5);
      return [{ type: "output", content: output }];
    }

    if (command.includes("rm -rf")) {
      return [
        {
          type: "output",
          content:
            "Hold up! That command could wipe everything out. Let's not do that here! ;)",
        },
      ];
    }

    switch (command) {
      case "help":
        return helpCommandOutput;
      case "ls":
        switch (dir) {
          case "projects":
            return projectsCommandOutput;
          case "Home":
            return homeLsOutput;
          default:
            return emptyDir;
        }
      case "cd projects":
        if (pwd === "projects") {
          return [
            {
              type: "output",
              content: "fatal error : no directory found",
            },
          ];
        }
        setPwd("projects");
        return;
      case "cd ..":
        setPwd("Home");
        return;
      case "neofetch":
        return [
          {
            type: "output",
            content: `User Agent     : ${navigator.userAgent}`,
          },
          { type: "output", content: `Platform       : ${navigator.platform}` },
          { type: "output", content: `Language       : ${navigator.language}` },
          {
            type: "output",
            content: `Online         : ${navigator.onLine ? "Yes" : "No"}`,
          },
          {
            type: "output",
            content: `Screen Size    : ${window.screen.width}x${window.screen.height}`,
          },
          {
            type: "output",
            content: `Window Size    : ${window.innerWidth}x${window.innerHeight}`,
          },
          {
            type: "output",
            content: `Device Memory  : ${navigator.deviceMemory ?? "N/A"} GB`,
          },
          {
            type: "output",
            content: `CPU Cores      : ${
              navigator.hardwareConcurrency ?? "N/A"
            }`,
          },
        ];

      case "about":
        return aboutCommandOutput;
      case "social":
        return socialCommandOutput;
      case "cls":
      case "clear":
        setLogs([]);
        setVisibleStartCommands([]);
        return null;
      case "exit":
        return [{ type: "output", content: "logout..." }];
      case "date":
        return [{ type: "output", content: new Date().toString() }];
      case "pwd":
        return [{ type: "output", content: pwd + "/" }];
      case "history":
        return prevCommands.map((cmd) => ({
          type: "output",
          content: `${cmd.command}`,
        }));
      case "uptime":
        return [{ type: "output", content: ProcessTime(startTime) }];
      default:
        if (command) {
          return InvalidCommandOutput(command);
        }
        return null;
    }
  };

  const onSubmit = async (data) => {
    setHistoryIndex(prevCommands.length + 1);
    setPrevCommands([...prevCommands, data]);

    const raw = data.command?.trim();
    if (!raw) {
      reset();
      return;
    }

    const command = raw.toLowerCase();

    setLogs((prev) => [...prev, { type: "output", content: `>>> ${command}` }]);

    if (command === "exit") {
      setTimeout(() => {
        router.push("/");
      }, 1000);
    }

    setTimeout(() => {
      const result = executeCommand(command);
      if (result) setLogs((prev) => [...prev, ...result]);
      reset();
    }, 100);
  };

  const handleKeyDown = (e) => {
    if (e.key === "ArrowUp") {
      e.preventDefault();
      if (prevCommands.length === 0) return;

      setHistoryIndex((prevIndex) => {
        const newIndex = Math.max(prevIndex - 1, 0);
        const cmd = prevCommands[newIndex]?.command || "";
        setValue("command", cmd);
        return newIndex;
      });
    } else if (e.key === "ArrowDown") {
      e.preventDefault();
      if (prevCommands.length === 0) return;

      setHistoryIndex((prevIndex) => {
        const newIndex = Math.min(prevIndex + 1, prevCommands.length);
        const cmd = prevCommands[newIndex]?.command || "";
        setValue("command", cmd);
        return newIndex;
      });
    }
  };

  return (
    <motion.div
      layoutId="terminal-card"
      className="rounded-3xl bg-black w-full h-full flex absolute inset-0 m-auto overflow-hidden shadow-2xl terminal-input"
    >
      <div className="h-full w-full md:w-2/3 overflow-y-auto p-4 font-mono text-[1px] text-[var(--terminal-primary)] scrollbar-hide">
        <div
          className="terminal-text text-[4px] leading-[5px] my-4 whitespace-pre-wrap break-words"
          style={{
            textShadow: `
              0 0 10px var(--terminal-primary),
              0 0 10px var(--terminal-primary),
              0 0 10px var(--terminal-primary),
              0 0 40px var(--terminal-primary)
            `,
          }}
        >
          {AndroidClubLogo.content}
        </div>

        {/* Animated Start Commands */}
        {visibleStartCommands.map((log, i) => (
          <motion.div
            key={i}
            className="terminal-text leading-tight text-[13px] md:text-[17px] whitespace-pre-wrap break-words"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3 }}
          >
            {log?.content}
          </motion.div>
        ))}

        {/* Logs after startup */}
        {logs.map((log, i) => (
          <div
            key={i}
            className="terminal-text leading-tight text-[13px] md:text-[17px] whitespace-pre-wrap break-words"
          >
            {log.content}
          </div>
        ))}

        {/* Terminal input */}
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="flex items-center mt-2 terminal-text"
        >
          <span className="mr-1">{">>>"} </span>
          <input
            {...register("command")}
            className="bg-transparent flex-grow outline-none caret-[var(--terminal-primary)] terminal-text selection:text-white"
            autoComplete="off"
            spellCheck="false"
            onKeyDown={handleKeyDown}
          />
        </form>

        <div ref={logsEndRef} />
      </div>
      <div className="h-full hidden right-0 top-0 md:inline-block absolute w-1/3">
        <pre
          style={{
            textShadow: `
              0 0 10px var(--terminal-primary),
              0 0 40px var(--terminal-primary)
            `,
          }}
          className="bg-black text-terminal-primary  p-4 rounded-lg text-wrap md:text-[8px] lg:text-xs"
        >
          {!specs
            ? "Fetching system specs..."
            : Object.entries(specs)
                .map(([key, val]) => `${key}: ${val}\n`)
                .join("")}
        </pre>
      </div>
    </motion.div>
  );
}
