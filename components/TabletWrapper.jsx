import React from "react";

const TabletWrapper = ({ children }) => {
  return (
    <div className="min-h-screen min-w-screen flex items-center justify-center bg-[#191919]">
      <div
        className="
          h-[90vh] w-[90vw] bg-black border-4 rounded-2xl border-tablet-border 
          flex items-center justify-center p-4 
          shadow-[0_12px_20px_rgba(0,0,0,0.9)]
        "
      >
        <div
          className="
            h-full w-full bg-black rounded-xl border-[6px] border-black
            shadow-[inset_0_6px_12px_rgba(0,0,0,0.9)]
          "
        >
          <div className="bg-white h-full w-full border-0 rounded-2xl p-2">
            {children}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TabletWrapper;
