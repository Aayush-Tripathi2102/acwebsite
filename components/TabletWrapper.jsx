import React from "react";

const TabletWrapper = ({ children }) => {
  return (
    <div className="min-h-screen min-w-screen flex items-center justify-center bg-[#191919]">
      <div
        className="
          m-4 sm:m-0
          h-[82vh] w-[85vw] sm:h-[85vh] sm:w-[70vw]
          bg-black border-2 sm:border-4 rounded-[53px] border-tablet-border 
          flex items-center justify-center p-1 sm:p-4 
          shadow-[0_12px_20px_rgba(0,0,0,0.9)]
        "
      >
        <div
          className="
            h-full w-full bg-black rounded-[45px] sm:rounded-[36px] 
            border-[3px] sm:border-[6px] border-black
            shadow-[inset_0_6px_12px_rgba(0,0,0,0.9)]
          "
        >
          <div className="bg-background h-full w-full border-0 rounded-[45px] sm:rounded-[36px] p-4 sm:p-4">
            {children}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TabletWrapper;
