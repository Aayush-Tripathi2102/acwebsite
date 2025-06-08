import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { ChevronRight } from "lucide-react";

export default function TerminalDetail() {
  return (
    <motion.div
      layoutId="terminal-card"
      className="rounded-3xl bg-black w-full h-full py-[53px] absolute inset-0 overflow-hidden"
    >
      <div className="pl-[50px] top-[30px] scale-[0.5] origin-top-left flex">
        {/* Left Side: ASCII Android + Terminal UI */}
        <div>
          <div className="relative">
            <pre
              className="text-terminal-primary text-[5px] relative"
              style={{
                willChange: "transform, opacity",
                textShadow: `
      0 0 10px var(--terminal-primary),
      0 0 10px var(--terminal-primary),
      0 0 10px var(--terminal-primary),
      0 0 40px var(--terminal-primary)
    `,
              }}
            >
              <div className="w-[250px] absolute left-1/6 top-1/6 translate-x-[-30%] h-[200px] rounded-full bg-[var(--terminal-primary)] opacity-25 blur-[75px]"></div>
              {`                        /                                                       
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
`}
            </pre>
          </div>

          <div className="leading-none mt-15">
            <div className="terminal-text text-[20px]">
              <p className="whitespace-nowrap">
                Welcome Android Club VITC’s Terminal Interface
              </p>
              <p className="mt-[-12px]">
                Type ‘help’ to see available commands.
              </p>
            </div>
            <div className="terminal-text mt-8 text-[20px]">
              <p className="whitespace-nowrap">
                &gt;&gt;&gt; Boot sequence initialized...
              </p>
              <p className="mt-[-12px]">
                &gt;&gt;&gt; Environment loaded. Ready for commands.
              </p>
            </div>
          </div>

          {/* Wire + Cursor + Path Pill */}
          <div className="relative flex items-start mt-10">
            {/* Grey Wire + Green Cursor */}
            <div className="absolute left-[-40px] top-[30px]">
              <Image
                src="/terminal/grey-wire.png"
                alt="Wire"
                width={40}
                height={40}
                className="z-0"
              />
              <div className="absolute left-[40px] top-[40px] w-[20px] h-[45px] bg-terminal-primary shadow-[0_0_20px_4px_var(--terminal-primary)] rounded-sm z-10" />
              <input
                type="text"
                className="bg-transparent border-none outline-none caret-white text-white placeholder-transparent w-full"
                autoFocus
              />
            </div>

            {/* Path Pill */}
            <div className="flex items-center bg-[#1a1a2e] rounded-full px-3 sm:px-6 py-2 text-[20px] text-vcr text-terminal-primary w-fit shadow-md border border-gray-600">
              {/* Android Icon + user x */}
              <div className="flex items-center">
                <Image
                  src="/terminal/bugdroid icon.png"
                  alt="Droid Icon"
                  width={26}
                  height={26}
                  className="mr-2"
                />
                <span className="mr-4">user x</span>
              </div>

              {/* Arrow separator */}
              {/* <div className="mx-1 sm:mx-2 rotate-45 w-5 h-5 border-t border-r border-terminal-primary bg-[#1a1a2e]" /> */}
              <svg
                width="14"
                height="50"
                viewBox="0 0 14 23"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="scale-y-150"
              >
                <path
                  d="M1.04927 1L12.5474 12.0874L1.04927 22.3536"
                  stroke="#8C8F98"
                />
              </svg>

              {/* home ~ */}
              <span className="ml-4">home ~</span>
            </div>
          </div>
        </div>

        {/* Right Side: userx@androidclubmachine + colors */}
        <div className="hidden md:inline-block ml-[100px] mt-[40px] text-[20px] text-terminal-vcr text-vcr">
          <p>
            <span className="text-[25px] text-terminal-primary">
              userx@androidclubmachine
            </span>
          </p>

          <div className="border-t border-gray-400 w-[550px] mt-2 mb-2"></div>

          {/* <div className="border-t border-gray-400 w-[550px] mt-70 mb-2"></div> */}

          {/* <div className="flex items-center gap-4">
            <span className="text-terminal-primary text-[25px]">colors:</span>
            <div className="flex gap-3">
              <div
                className="w-4 h-4 rounded-full"
                style={{ backgroundColor: "#1EFF00" }}
              ></div>
              <div
                className="w-4 h-4 rounded-full"
                style={{ backgroundColor: "#181D31" }}
              ></div>
              <div
                className="w-4 h-4 rounded-full"
                style={{ backgroundColor: "#8C8F98" }}
              ></div>
              <div
                className="w-4 h-4 rounded-full"
                style={{ backgroundColor: "#1EFF00" }}
              ></div>
              <div
                className="w-4 h-4 rounded-full"
                style={{ backgroundColor: "#181D31" }}
              ></div>
              <div
                className="w-4 h-4 rounded-full"
                style={{ backgroundColor: "#8C8F98" }}
              ></div>
            </div>
          </div> */}

          {/* <div className="border-t border-gray-400 w-[550px] mt-2"></div> */}
        </div>
      </div>
    </motion.div>
  );
}