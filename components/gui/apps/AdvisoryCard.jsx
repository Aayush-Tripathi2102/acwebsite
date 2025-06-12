"use client";
import React from "react";

export default function AdvisoryCard({ members, description }) {
  return (
    <div className="bg-[#1e1e1e]/80 backdrop-blur-md rounded-3xl p-6 w-full max-w-2xl mx-auto text-white border border-gray-700 shadow-xl">
      {/* Heading */}
      <h2 className="text-2xl font-bold text-center text-green-400 mb-4">Advisory Board</h2>

      {/* Members' Images */}
      <div className="flex justify-center gap-6 mb-4 flex-wrap">
        {members.map((member, idx) => (
          <div
            key={idx}
            className="w-24 h-24 rounded-full overflow-hidden border-4 border-green-400 shadow-lg"
          >
            <img
              src={member.avatar}
              alt={`Advisory Member ${idx + 1}`}
              className="w-full h-full object-cover"
            />
          </div>
        ))}
      </div>

      {/* Description */}
      <p className="text-sm text-gray-300 text-center px-4">{description}</p>
    </div>
  );
}
