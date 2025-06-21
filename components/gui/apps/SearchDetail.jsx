"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";

// Icons
import { RiInstagramFill } from "react-icons/ri";
import { AiFillLinkedin, AiOutlineInfoCircle, AiOutlineMail } from "react-icons/ai";
import { HiUserGroup } from "react-icons/hi";
import { VscTerminal } from "react-icons/vsc";
import { BsImages } from "react-icons/bs";
import { FiSearch } from "react-icons/fi";

// App data with real paths
const apps = [
  {
    name: "About",
    id: "about",
    icon: <AiOutlineInfoCircle className="text-yellow-400" />,
    path: "/about",
  },
  {
    name: "Gallery",
    id: "gallery",
    icon: <BsImages className="text-purple-400" />,
    path: "/gallery",
  },
  {
    name: "Mail",
    id: "mail",
    icon: <AiOutlineMail className="text-red-400" />,
    path: "/mail",
  },
  {
    name: "Team",
    id: "team",
    icon: <HiUserGroup className="text-green-400" />,
    path: "/teams",
  },
  {
    name: "Terminal",
    id: "terminal",
    icon: <VscTerminal className="text-gray-300" />,
    path: "/terminal",
  },
  {
    name: "Search",
    id: "search",
    icon: <FiSearch className="text-white" />,
    path: "#",
  },
  {
    name: "Instagram",
    id: "instagram",
    icon: <RiInstagramFill className="text-pink-500" />,
    path: "/instagram",
  },
  {
    name: "LinkedIn",
    id: "linkedin",
    icon: <AiFillLinkedin className="text-blue-600" />,
    path: "/linkedin",
  },
];

export default function SearchDetail() {
  const [query, setQuery] = useState("");
  const router = useRouter();

  const filteredApps = apps.filter((app) =>
    app.name.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-black/60 backdrop-blur-md backdrop-saturate-150 text-white p-6 sm:p-10">
      <div className="max-w-xl mx-auto text-center">
        <h1 className="text-3xl font-bold mb-4">Search Applications</h1>
        <input
          type="text"
          placeholder="Type app name (e.g., Gallery, Team)..."
          className="w-full px-4 py-2 rounded-lg bg-[#1e1e1e] text-white border border-gray-600 focus:outline-none focus:border-green-400"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
      </div>

      <div className="mt-8 flex flex-col items-center gap-4">
        {filteredApps.length > 0 ? (
          filteredApps.map((app, index) => (
            <div
              key={index}
              onClick={() => {
                if (app.path && app.path !== "#") {
                  router.push(app.path);
                }
              }}
              className="w-full max-w-md px-6 py-4 rounded-lg bg-[#2a2a2a] hover:bg-[#333] transition-colors cursor-pointer flex items-center gap-4 border border-gray-700"
            >
              <span className="text-2xl">{app.icon}</span>
              <span className="text-lg font-medium">{app.name}</span>
            </div>
          ))
        ) : (
          <p className="text-gray-400">No matching apps found.</p>
        )}
      </div>
    </div>
  );
}
