import React from "react";
import MainApps from "./MainApps";

const AppSection = () => {
  return (
    <div className="grid grid-cols-5 grid-rows-8 h-full">
      {/* div2 - Shows FIRST on mobile, SECOND on desktop */}
      <div className="col-span-5 row-span-3 lg:row-span-3 lg:row-start-6 border-2 border-black bg-white p-4">
        2
      </div>

      {/* div1 - Shows SECOND on mobile, FIRST on desktop */}
      <div className="col-span-5 row-span-5 lg:row-start-1 bg-transparent h-full w-full">
        <MainApps />
      </div>
    </div>
  );
};

export default AppSection;
