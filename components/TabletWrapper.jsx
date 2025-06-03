import React from "react";
import GestureBackButton from "./GestureBackButton";

const TabletWrapper = ({ children }) => {
  return (
    <div className="h-screen w-screen flex items-center justify-center bg-[#191919] overflow-hidden">
      <div
        className="
          m-4 sm:m-0
          h-[82vh] w-[90vw] sm:h-[85vh] sm:w-[70vw]
          bg-black border-[3px] sm:border-[6px] border-tablet-border
          rounded-[36px] sm:rounded-[48px]
          flex items-center justify-center p-[6px] sm:p-4
          shadow-[0_12px_20px_rgba(0,0,0,0.9)]
        "
      >
        <div
          className="
            h-full w-full bg-black rounded-[28px] sm:rounded-[40px]
            border-[2px] sm:border-[4px] border-black
            shadow-[inset_0_6px_12px_rgba(0,0,0,0.9)]
          "
        >
          <div
            className="
            bg-background h-full w-full
            border-0 rounded-[24px] sm:rounded-[36px]
            p-3 sm:p-5 relative
          "
          >
            {children}
            <GestureBackButton />
          </div>
        </div>
      </div>
    </div>
  );
};

export default TabletWrapper;
