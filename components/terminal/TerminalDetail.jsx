import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

export default function TerminalDetail() {
  return (
    <motion.div
      layoutId="terminal-card"
      className="rounded-3xl bg-black w-full h-full py-[53px] absolute inset-0 overflow-hidden"
    >
      <div className="pl-[50px] top-[30px] scale-[0.5] origin-top-left flex">
        {/* Left Side: ASCII Android + Terminal UI */}
        <div>
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

          <div className="leading-none mt-15">
            <div className="terminal-text text-[20px]">
              <p>Welcome Android Club VITC’s Terminal Interface</p>
              <p className="mt-[-12px]">Type ‘help’ to see available commands.</p>
            </div>
            <div className="terminal-text mt-8 text-[20px]">
              <p>&gt;&gt;&gt; Boot sequence initialized...</p>
              <p className="mt-[-12px]">&gt;&gt;&gt; Environment loaded. Ready for commands.</p>
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
              />
              <div className="absolute left-[40px] top-[40px] w-[20px] h-[45px] bg-terminal-primary"></div>
            </div>

            {/* Path Pill */}
            <div className="flex items-center bg-[#1a1a2e] rounded-full px-10 py-1 text-[28px] text-vcr text-terminal-primary w-fit">
              <Image
                src="/terminal/bugdroid icon.png"
                alt="Droid Icon"
                width={30}
                height={30}
                className="mr-3"
              />
              <span className="mr-8">user x</span>
              <div className="w-9 h-9 rotate-45 bg-[#1a1a2e] border-t border-r border-gray-400"></div>
              <span className="ml-10">home ~</span>
            </div>
          </div>
        </div>

        {/* Right Side: userx@androidclubmachine + colors */}
        <div className="ml-[100px] mt-[40px] text-[20px] text-terminal-vcr text-vcr">
          <p>
            <span className="text-[25px] text-terminal-primary">userx@androidclubmachine</span>
          </p>

          <div className="border-t border-gray-400 w-[550px] mt-2 mb-2"></div>

          <div className="border-t border-gray-400 w-[550px] mt-70 mb-2"></div>

          <div className="flex items-center gap-4">
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
          </div>

          <div className="border-t border-gray-400 w-[550px] mt-2"></div>
        </div>
      </div>
    </motion.div>
  );
}
