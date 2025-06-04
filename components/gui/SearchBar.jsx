import React from "react";
import { FiSearch } from "react-icons/fi";

const SearchBar = ({ setIsOpen }) => {
  return (
    <div className="relative w-full  mx-2">
      {/* Search Icon */}
      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
        <FiSearch className="h-5 w-5 text-gray-400" />
      </div>

      {/* Input Field */}
      <input
        onFocus={() => setIsOpen(true)}
        onBlur={() => setIsOpen(false)}
        type="text"
        placeholder="Search..."
        className="block w-full pl-10 pr-4 py-3 border border-gray-300 rounded-2xl
                 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 
                 transition-all duration-200 ease-in-out
                 text-gray-700 placeholder-white
                 sm:text-sm md:text-base bg-[#21242F] h-9 lg:h-12"
      />
    </div>
  );
};

export default SearchBar;
