"use client";
import React from "react";
import TeamCard from "./TeamCard";

// Team Data
const teamMembers = [
  {
    name: "Dr. Shola Usha Rani",
    role: "Faculty Coordinator",
    description: "Backbone of Android Club, playing a crucial role in bringing our vision to life.",
    avatar: "/team/shola maam.jpg",
    instagram: "https://instagram.com/denisha",
    linkedin: "https://www.linkedin.com/in/dr-shola-usharani-86b7a1a5/",
  },
  {
    name: "Aditi Babu",
    role: "Secretary",
    description: "The bridge between chaos and clarity - keeping everything organised, on track and on time.",
    avatar: "/team/Aditi Babu.jpeg.jpg",
    instagram: "https://www.instagram.com/aditiibabu/",
    linkedin: "https://www.linkedin.com/in/aditi-babu-920444293/",
  },
  {
    name: "Naman Jain",
    role: "General Secretary",
    description: "With foresight in mind and finesse in every move, they steer the ship through every groove.",
    avatar: "/team/Naman.jpg",
    instagram: "https://www.instagram.com/krazzyy.naman/",
    linkedin: "https://www.linkedin.com/in/naman-jain-17b19730b/",
  },
  {
    name: "Aayush Tripathi",
    role: "General Secretary",
    description: "Strategic minds with unstoppable drive, they keep the club's spirit alive.",
    avatar: "/team/Aayush.jpg",
    instagram: "https://www.instagram.com/the_atp_world/",
    linkedin: "https://linkedin.com/in/zaramanager",
  },
  {
    name: "Aarav Kohli",
    role: "Operations Head",
    description: "Making sure everything runs like a well-oiled machine — always on it, always reliable.",
    avatar: "/team/Aarav.jpg",
    instagram: "https://www.instagram.com/aarav.kohli/",
    linkedin: "https://www.linkedin.com/in/aaravkohli/",
  },
  {
    name: "Aditi Pandey",
    role: "Operations Head",
    description: "The one who keeps it all together — calm, quick, and quietly running the show.",
    avatar: "/team/Aditi Pandaey.jpg",
    instagram: "https://www.instagram.com/aditipandey8305/",
    linkedin: "https://www.linkedin.com/in/aditi-pandey-009900298/",
  },
  {
    name: "Jefrey Jose",
    role: "Managment Head",
    description: "He’s the brain behind the plans, turning 'what if' into 'what’s next' with style.",
    avatar: "/team/Jeffrey.jpg",
    instagram: "https://www.instagram.com/_dj.jose_/",
    linkedin: "https://www.linkedin.com/in/jefrey-jose-228284219/",
  },
  {
    name: "Palak Ramani",
    role: "Technical Head",
    description: "Turning coffee into code and chaos into clean logic — always two steps ahead of bugs.",
    avatar: "/team/Palak.jpg",
    instagram: "https://www.instagram.com/_palak_ramani_/",
    linkedin: "https://www.linkedin.com/in/palak-ramani-a3b147286/",
  },
  {
    name: "Krishna Sharma K",
    role: "Technical Head",
    description: "From late-night builds to last-minute fixes, he’s the go-to brain when things need to just work.",
    avatar: "/team/Krishna.jpg",
    instagram: "https://www.instagram.com/krishna_sharma_k_05/",
    linkedin: "https://www.linkedin.com/in/krishna-sharma-k/",
  },
  {
    name: "Vaishnavi",
    role: "Content and SM Head",
    description: "She weaves words with wit and heart — the voice behind the posts and the stories that stick.",
    avatar: "/team/Vaishnavi.jpg",
    instagram: "https://www.instagram.com/__vaishnavi.m/",
    linkedin: "https://www.linkedin.com/in/vaishnavi-muthukumar-65b19728b/",
  },
  {
    name: "Anusriya",
    role: "Design Head",
    description: "She turns ideas into visuals and vision into vibe — the one making everything look effortlessly iconic.",
    avatar: "/team/Anushriya.jpg",
    instagram: "#",
    linkedin: "https://www.linkedin.com/in/anusriya-sridhar/",
  },
  {
    name: "Vaishnav S P",
    role: "Sponsorship and Marketing Head",
    description: "The voice that sells the vision — with strategy in mind and confidence in every pitch.",
    avatar: "/team/Vaishnav.jpg",
    instagram: "https://www.instagram.com/vaish.nav_s.p_/",
    linkedin: "#",
  },
  {
    name: "Dipyaman Chakraborty",
    role: "Sponsorship and Marketing Head",
    description: "He’s the connector and closer — turning conversations into collaborations with ease.",
    avatar: "/team/Dipyaman.jpg",
    instagram: "https://www.instagram.com/diipyaman/",
    linkedin: "https://www.linkedin.com/in/dipyaman-chakraborty/",
  },
];

// Desired Order
const orderedRoles = [
  "Faculty Coordinator",
  "Secretary",
  "General Secretary",
  "Operations Head",
  "Managment Head",
  "Technical Head",
  "Content and SM Head",
  "Design Head",
  "Sponsorship and Marketing Head",
];

// Group members by role
const groupedTeamMembers = orderedRoles.map((role) => ({
  role,
  members: teamMembers.filter((member) => member.role === role),
}));

// Component
export default function TeamsDetail() {
  return (
    <div className="absolute inset-0 bg-black text-white overflow-y-auto rounded-3xl p-6 sm:p-10 custom-scrollbar">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold">Our Team</h1>
        <p className="text-gray-400 mt-2">Meet the minds behind the club.</p>
      </div>

      <div className="space-y-20 pb-12">
        {groupedTeamMembers.map(({ role, members }) =>
          members.length > 0 ? (
            <section key={role} className="w-full flex flex-col items-center">
              <h2 className="text-2xl font-semibold text-green-400 mb-8 text-center">
                {role}
              </h2>
              <div
                className={`flex flex-wrap justify-center gap-8 ${
                  members.length === 1 ? "max-w-md" : "max-w-6xl"
                } w-full`}
              >
                {members.map((member, idx) => (
                  <TeamCard key={idx} {...member} />
                ))}
              </div>
            </section>
          ) : null
        )}
      </div>
    </div>
  );
}
