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
  joinCommandOutput,
  eventsCommandOutput,
  quotesList,
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
  const [pwd, setPwd] = useState("Home");
  const [specs, setSpecs] = useState(null);

  useEffect(() => {
    function getSpecs() {
      const canvas = document.createElement("canvas");
      const gl =
        canvas.getContext("webgl") || canvas.getContext("experimental-webgl");
      const debugInfo = gl?.getExtension("WEBGL_debug_renderer_info");

      const data = {
        OS: "Android 14 (Rooted, obviously)",
        UserAgent:
          "Dalvik/2.1.0 (Linux; U; Android 14; Pixel Club Edition Build/ANDROIDCLUB2025)",
        CPU_Cores: 8,
        RAM_GB: 12,
        Screen: "2400x1080 AMOLED (Notch-free, unlike *some*)",
        GPU: "Adreno 740 (can run Doom and your fridge)",
        Battery: "96% (because Androids know how to manage power)",
        ClubAccess: "Verified Android Enthusiast",
        Note: "iOS tried joining but couldn’t find the back button",
      };

      setSpecs(data);
    }
    getSpecs();
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
    }, 500);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    logsEndRef.current?.scrollIntoView({ behavior: "smooth" });
    setFocus("command");
  }, [logs, visibleStartCommands, setFocus]);

  const [notification, setNotification] = useState(null);

  const executeCommand = (command) => {
    // Handle echo commands
    if (command.startsWith("notification ")) {
      const msg = command.slice(13);
      setNotification(msg); // trigger notification
      setTimeout(() => setNotification(null), 2000); // remove after 2s
      return [{ type: "output", content: msg }];
    }

    if (command.startsWith("echo ")) {
      const msg = command.slice(5);
      return [{ type: "output", content: msg }];
    }

    // Prevent destructive commands
    if (command.includes("rm -rf")) {
      return [
        {
          type: "output",
          content:
            "Hold up! That command could wipe everything out. Let's not do that here! ;)",
        },
      ];
    }

    // If command starts with "start ", handle project descriptions
    if (command.startsWith("start ")) {
      const projectName = command.slice(6).trim();
      switch (projectName) {
        case "react app":
          return [
            {
              type: "output",
              content: "description of React App yet to be added.",
            },
          ];
        case "node.js api":
          return [
            {
              type: "output",
              content: "description of API yet to be added.",
            },
          ];
        case "next.js website":
          return [
            {
              type: "output",
              content: "description of website yet to be added.",
            },
          ];
        default:
          return InvalidCommandOutput(command);
      }
    }

    // Process known commands via a switch-case
    switch (command) {
      case "help":
        return helpCommandOutput;
      case "ls":
        return pwd === "projects"
          ? projectsCommandOutput
          : pwd === "Home"
          ? homeLsOutput
          : emptyDir;
      case "cd projects":
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
      case "clear":
      case "cls":
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
      case "quote":
        const randomIndex = Math.floor(Math.random() * quotesList.length);
        return [{ type: "output", content: quotesList[randomIndex] }];
      case "join":
        return joinCommandOutput;
      case "events":
        return eventsCommandOutput;
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
      if (!prevCommands.length) return;
      setHistoryIndex((prev) => {
        const newIndex = Math.max(prev - 1, 0);
        setValue("command", prevCommands[newIndex]?.command || "");
        return newIndex;
      });
    } else if (e.key === "ArrowDown") {
      e.preventDefault();
      if (!prevCommands.length) return;
      setHistoryIndex((prev) => {
        const newIndex = Math.min(prev + 1, prevCommands.length);
        setValue("command", prevCommands[newIndex]?.command || "");
        return newIndex;
      });
    }
  };

  const linkMap = {
    instagram: "https://www.instagram.com/androidvitc/",
    linkedin: "https://www.linkedin.com/company/android-club-vitc/",
  };

  return (
    <motion.div
      layoutId="terminal-card"
      className="rounded-3xl bg-black w-full h-full flex absolute inset-0 m-auto overflow-hidden shadow-2xl terminal-input"
    >
      {notification && (
        <div className="fixed top-24 left-1/2 w-1/4 transform -translate-x-1/2 z-50">
          <div className="animate-slideFade backdrop-blur-md bg-black/60 border border-green-500 text-green-300 px-6 py-3 rounded-2xl shadow-2xl text-sm font-semibold flex items-center space-x-2">
            <svg
              className="w-4 h-4 text-green-400"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path d="M9 2a7 7 0 100 14A7 7 0 009 2zm1 10H8v-1h2v1zm0-2H8V6h2v4z" />
            </svg>
            <span>{notification}</span>
          </div>
        </div>
      )}

      {/* Scrollable wrapper for both left and right */}
      <div className="flex w-full h-full overflow-y-auto scrollbar-hide">
        {/* LEFT PANE */}
        <div className="w-full p-4 text-[1px] text-[var(--terminal-primary)]">
          <div className="flex items-center sm:justify-center w-full">
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
            <div className="w-4/6  pl-10 text-[1px] text-[var(--terminal-primary)] hidden lg:block">
              <pre
                style={{
                  textShadow: `
              0 0 10px var(--terminal-primary),
              0 0 40px var(--terminal-primary)
            `,
                }}
                className="bg-black text-terminal-primary p-4 rounded-lg text-wrap md:text-[8px] lg:text-xs"
              >
                {!specs
                  ? "Fetching system specs..."
                  : Object.entries(specs)
                      .map(([key, val]) => `${key}: ${val}\n`)
                      .join("")}
              </pre>
            </div>
          </div>

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

          {logs.map((log, i) => (
            <div
              key={i}
              className="terminal-text leading-tight text-[13px] md:text-[17px] whitespace-pre-wrap break-words"
            >
              {pwd === "Home" &&
              typeof logs[i - 1]?.content === "string" &&
              logs[i - 1].content.toLowerCase().includes(">>> ls") &&
              typeof log.content === "string"
                ? log.content.split(" ").map((item, index) =>
                    linkMap[item] ? (
                      <a
                        key={index}
                        href={linkMap[item]}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="underline text-blue-400 hover:text-blue-600 mx-1"
                      >
                        {item}
                      </a>
                    ) : (
                      <span key={index} className="mx-1">
                        {item}
                      </span>
                    )
                  )
                : log?.content}
            </div>
          ))}

          <form
            onSubmit={handleSubmit(onSubmit)}
            className="flex items-center mt-2 terminal-text"
          >
            <span className="mr-1 text-[13px] md:text-[17px]">{">>>"} </span>
            <span className="text-[13px] md:text-[17px]">
              {pwd == "Home" ? "/" : pwd + "/"}
            </span>
            <input
              {...register("command")}
              className="bg-transparent flex-grow outline-none text-[13px] md:text-[17px] caret-[var(--terminal-primary)] terminal-text selection:text-white"
              autoComplete="off"
              spellCheck="false"
              onKeyDown={handleKeyDown}
            />
          </form>

          <div ref={logsEndRef} />
        </div>

        {/* RIGHT PANE */}
      </div>
    </motion.div>
  );
}
