import React from "react";
import GestureBackButton from "./GestureBackButton";
import VantaBackground from "./VantaBackground";

const TabletWrapper = ({ children }) => {
  return (
    <div className="h-screen w-screen flex items-center justify-center overflow-hidden">
      <VantaBackground />
      <div className="relative m-4 sm:m-0 h-[82vh] w-[90vw] sm:h-[85vh] sm:w-[70vw] bg-black border-[6px] border-tablet-border rounded-[48px] flex items-center justify-center p-1 sm:p-4 shadow-[0_12px_20px_rgba(0,0,0,0.9)]">
        <div className="h-full w-full bg-black rounded-[40px] border-[4px] border-black shadow-[inset_0_6px_12px_rgba(0,0,0,0.9)] relative">
          {/* Camera notch - now properly within the bezel */}

          <div className="absolute -top-[7px] left-1/2 transform -translate-x-1/2 z-20">
            <div className="w-20 h-2  rounded-b-lg mx-auto relative -top-[3px]">
              <div className="absolute top-[23px] sm:-top-[0px] left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-3 h-3 bg-gray-800 rounded-full flex items-center justify-center">
                <div className="w-3 h-3 bg-gray-900 rounded-full border border-gray-700"></div>
              </div>
            </div>
          </div>

          <div className="h-full w-full rounded-[36px] relative overflow-hidden">
            <div
              className="absolute inset-0"
              style={{
                backgroundImage: "url(/deviceBg.png)", 
                backgroundPosition: "center",
                filter: "blur(2px)",
              }}
            />
            <div
              className="absolute inset-0"
              style={{ backgroundColor: "rgba(0, 0, 10, 0.7)" }}
            />
            <div className="relative h-full w-full">
              {children}
              <GestureBackButton />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TabletWrapper;
