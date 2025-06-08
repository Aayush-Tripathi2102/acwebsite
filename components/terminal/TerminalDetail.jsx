"use client";
import React, { useState, useRef, useEffect } from "react";
import { useForm } from "react-hook-form";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";

export default function TerminalDetail() {
  const router = useRouter();
  const [logs, setLogs] = useState([
    {
      type: "ascii",
      content: `                        /                                                       
                        //                             /* .                     
                         //  (                        /.                        
                        /  //        //////*        //                            
                            /////////////////////////                           
                     (   ///////////////////////////////                        
                      /////////////////////////////////////                     
                    ///////,  *///////////////////   ////////                   
                  /////////    ///////////////////    /////////                 
                 ///////////////////////////////////////////////                
                ////////////////////////////////////////////////*               
                /////////////////////////////////////////////////               
                *************************************************           ,   
 &  ////////    /////////////////////////////////////////////////    ///////,   
   //////////   /////////////////////////////////////////////////  ,//////////  
  ,///////////  /////////////////////////////////////////////////  ///////////  
  ,///////////  /////////////////////////////////////////////////  ///////////  
  ,///////////  /////////////////////////////////////////////////  ///////////  
  ,///////////  /////////////////////////////////////////////////  ///////////  
  ,///////////  /////////////////////////////////////////////////  ///////////  
  ,///////////  /////////////////////////////////////////////////  ///////////  
  ,///////////  /////////////////////////////////////////////////  ///////////  
  ,///////////  /////////////////////////////////////////////////  ///////////  
  ,//////////*  /////////////////////////////////////////////////  ///////////  
   //////////   /////////////////////////////////////////////////   /////////*  
  #   ,//,   (  /////////////////////////////////////////////////  .   *//.     
             &  /////////////////////////////////////////////////               
                /////////////////////////////////////////////////               
                  /////////////////////////////////////////////                 
                          ///////////       ///////////                         
                          ///////////       ///////////                         
                          ///////////       ///////////                         
                          ///////////       ///////////                         
                          ///////////       ///////////                         
                          //////////* .     ///////////                         
                           ////////           ///////*                          
`,
    },
    {
      type: "output",
      content: "Welcome to Android Club VITC's Terminal Interface",
    },
    { type: "output", content: "Type 'help' to see available commands" },
    { type: "output", content: "" },
    { type: "output", content: ">>> Boot sequence initialized..." },
    { type: "output", content: ">>> Environment loaded. Ready for commands." },
  ]);
  const [startTime, setStartTime] = useState();
  useEffect(() => {
    setStartTime(Date.now);
  }, []);

  const [prevCommands, setPrevCommands] = useState([]);
  const [historyIndex, setHistoryIndex] = useState(-1);
  const { register, handleSubmit, reset, setFocus, setValue } = useForm();
  const logsEndRef = useRef(null);

  useEffect(() => {
    logsEndRef.current?.scrollIntoView({ behavior: "smooth" });
    setFocus("command");
  }, [logs, setFocus]);

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
        return [
          { type: "output", content: "Available commands:" },
          { type: "output", content: "  projects - see our projects" },
          { type: "output", content: "  about    - learn about us" },
          { type: "output", content: "  social   - view our social media" },
          { type: "output", content: "  clear    - clear the terminal" },
          { type: "output", content: "  help     - show this help message" },
          { type: "output", content: "  join     - how to join Android Club" },
          { type: "output", content: "  quote    - get a random tech quote" },
        ];
      case "projects":
        return [
          { type: "output", content: "Our Projects:" },
          { type: "output", content: "  - React App" },
          { type: "output", content: "  - Node.js API" },
          { type: "output", content: "  - Next.js Website" },
        ];
      case "about":
        return [
          { type: "output", content: "About Us:" },
          {
            type: "output",
            content:
              "  We are a team of developers passionate about building web applications.",
          },
          {
            type: "output",
            content:
              "  Our mission is to create user-friendly and efficient software solutions.",
          },
          {
            type: "output",
            content: "  We believe in continuous learning and improvement.",
          },
        ];
      case "social":
        return [
          { type: "output", content: "Our Socials:" },
          { type: "output", content: "  Twitter: @ourteam" },
          { type: "output", content: "  GitHub: github.com/ourteam" },
          {
            type: "output",
            content: "  LinkedIn: linkedin.com/company/ourteam",
          },
        ];
      case "join":
        return [
          { type: "output", content: "Join Android Club VITC:" },
          {
            type: "output",
            content:
              "We welcome all students passionate about Android development and technology!",
          },
          {
            type: "output",
            content: "How to join:",
          },
          {
            type: "output",
            content:
              "- Start by participating in our club events, workshops, and hackathons — this will give you a glimpse into what we do and how we work as a community.",
          },
          {
            type: "output",
            content:
              "- Follow us on our social media handles to stay updated — keep an eye out for when we open our recruitment forms.",
          },
          {
            type: "output",
            content:
              "- When the recruitment form goes live, fill it out thoughtfully! Tell us about your background in tech and the fields you’re most excited about.",
          },
          {
            type: "output",
            content:
              "- If shortlisted, you'll be invited for an interview — this is your chance to interact with our team leads and showcase your skills, passion, and creativity.",
          },
          {
            type: "output",
            content:
              "Stay curious, keep building — and we hope to see you in the club soon! 🚀🤖",
          },
        ];
      case "quote":
        const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
        return [{ type: "output", content: randomQuote }];
      case "cls":
      case "clear":
        setLogs((prev) => prev.slice(0, 1));
        return null;
      case "exit":
        return [{ type: "output", content: "logout..." }];
      case "date":
        return [{ type: "output", content: new Date().toString() }];
      case "pwd":
        return [{ type: "output", content: "Home/" }];
      case "history":
        return prevCommands.map((cmd, idx) => ({
          type: "output",
          content: `${cmd.command}`,
        }));
      case "uptime": {
        const now = Date.now();
        let diff = Math.floor((now - startTime) / 1000);

        const hours = Math.floor(diff / 3600);
        diff %= 3600;
        const minutes = Math.floor(diff / 60);
        const seconds = diff % 60;

        let uptimeStr = "up ";

        if (hours > 0) uptimeStr += `${hours} hour${hours > 1 ? "s" : ""}, `;
        if (minutes > 0)
          uptimeStr += `${minutes} minute${minutes > 1 ? "s" : ""}, `;

        uptimeStr += `${seconds} second${seconds !== 1 ? "s" : ""}`;

        return [{ type: "output", content: uptimeStr }];
      }
      default:
        if (command) {
          return [
            {
              type: "output",
              content: `'${command}' is not recognized as a valid command.`,
            },
            { type: "output", content: "Type 'help' for available commands." },
          ];
        }
        return null;
    }
  };

  const onSubmit = async (data) => {
    setHistoryIndex(prevCommands.length + 1);
    setPrevCommands([...prevCommands, data]);
    const raw = data.command?.trim();
    if (raw == "exit") {
      setTimeout(() => {
        router.push("/");
      }, [1000]);
    }
    if (!raw) {
      reset();
      return;
    }

    const command = raw.toLowerCase();

    setLogs((prev) => [...prev, { type: "output", content: `>>> ${command}` }]);

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
      className="rounded-3xl bg-black w-full h-full absolute inset-0 m-auto overflow-hidden shadow-2xl terminal-input"
    >
      <div className="h-full w-full overflow-y-auto p-4 font-mono text-[3px] text-[var(--terminal-primary)] scrollbar-hide">
        {logs.map((log, i) => (
          <div
            key={i}
            className={`
              terminal-text
              ${
                log.type === "ascii"
                  ? "text-[4px] leading-[5px] my-4"
                  : "leading-tight"
              }
              whitespace-pre-wrap break-words
            `}
            style={
              log.type === "ascii"
                ? {
                    textShadow: `
                      0 0 10px var(--terminal-primary),
                      0 0 10px var(--terminal-primary),
                      0 0 10px var(--terminal-primary),
                      0 0 40px var(--terminal-primary)
                    `,
                  }
                : {}
            }
          >
            {log.content}
          </div>
        ))}

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
    </motion.div>
  );
}
