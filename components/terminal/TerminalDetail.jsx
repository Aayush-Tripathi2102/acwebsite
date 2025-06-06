"use client";
import React, { useState, useRef, useEffect } from "react";
import { useForm } from "react-hook-form";
import { motion } from "framer-motion";

export default function TerminalDetail() {
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

  const { register, handleSubmit, reset, setFocus } = useForm();
  const logsEndRef = useRef(null);

  useEffect(() => {
    logsEndRef.current?.scrollIntoView({ behavior: "smooth" });
    setFocus("command");
  }, [logs, setFocus]);

  const executeCommand = (command) => {
    switch (command) {
      case "help":
        return [
          { type: "output", content: "Available commands:" },
          { type: "output", content: "  projects - see our projects" },
          { type: "output", content: "  about    - learn about us" },
          { type: "output", content: "  social   - view our social media" },
          { type: "output", content: "  clear    - clear the terminal" },
          { type: "output", content: "  help     - show this help message" },
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
      case "cls":
      case "clear":
        setLogs((prev) => prev.slice(0, 1)); // keep ASCII art
        return null;
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

  const onSubmit = (data) => {
    const raw = data.command?.trim();
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

  return (
    <motion.div
      layoutId="terminal-card"
      className="rounded-3xl bg-black w-full h-full absolute inset-0 m-auto overflow-hidden shadow-2xl"
    >
      <div className="h-full w-full overflow-y-auto p-4 font-mono text-[11px] text-[var(--terminal-primary)] scrollbar-hide">
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
            className="bg-transparent flex-grow outline-none caret-[var(--terminal-primary)] terminal-text"
            autoComplete="off"
            spellCheck="false"
          />
        </form>

        <div ref={logsEndRef} />
      </div>
    </motion.div>
  );
}
