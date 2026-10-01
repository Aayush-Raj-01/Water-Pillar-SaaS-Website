"use client";

import React from "react";

const stats = [
  {
    num: "250+",
    label: "Projects Completed",
    sub: "Pan-India residential & commercial",
  },
  {
    num: "All India",
    label: "Pan-India Presence",
    sub: "Delivery & setup in any city or state",
  },
  {
    num: "100%",
    label: "Cast Acrylic",
    sub: "Crystal optical transparency",
  },
  {
    num: "<22 dB",
    label: "Silent Mechanism",
    sub: "German diaphragm air pumps",
  },
  {
    num: "4.9 ★",
    label: "Client Rating",
    sub: "Architects & luxury homeowners",
  },
];

export default function StatsBar() {
  return (
    <section id="luxury-stats-bar" className="relative z-20 bg-[#141d27] border-y border-[#C2A062]/25 py-8 overflow-hidden shadow-2xl">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#C2A062]/60 to-transparent" />
      
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 sm:gap-8 items-center divide-y md:divide-y-0 md:divide-x divide-white/10">
          {stats.map((item, idx) => (
            <div
              key={idx}
              className={`flex flex-col items-center text-center ${idx > 0 ? "pt-4 md:pt-0 md:pl-6" : ""}`}
            >
              <span
                className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-wide text-gradient-gold leading-none mb-1.5"
                style={{ fontFamily: "BebasNeue, serif" }}
              >
                {item.num}
              </span>
              <span className="text-xs sm:text-sm font-bold uppercase tracking-wider text-white">
                {item.label}
              </span>
              <span className="text-[11px] text-white/50 tracking-wide mt-0.5">
                {item.sub}
              </span>
            </div>
          ))}
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#C2A062]/40 to-transparent" />
    </section>
  );
}
