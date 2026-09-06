"use client";

import React, { useState } from "react";
import Link from "next/link";

interface SpaceType {
  id: string;
  name: string;
  desc: string;
}

const spaceOptions: SpaceType[] = [
  { id: "home", name: "Luxury Home / Villa", desc: "Living room, foyer, or master stairwell" },
  { id: "hotel", name: "Hotel / Luxury Resort", desc: "Lobby entrance, reception, or lounge" },
  { id: "restaurant", name: "Restaurant / Bar", desc: "Dining divider, cocktail backdrop" },
  { id: "office", name: "Corporate Headquarters", desc: "Boardroom, executive atrium, reception" },
  { id: "event", name: "Banquet / Wedding Venue", desc: "Stage framing, entrance archways" },
];

const configOptions = [
  { id: "single", name: "Single Statement Pillar", desc: "Minimalist focal point", defaultHeight: "6ft" },
  { id: "pair", name: "Symmetrical Pair (2x)", desc: "Flanking entrances & stages", defaultHeight: "8ft" },
  { id: "cascade", name: "3-Column Cascade Cluster", desc: "Staggered architectural feature", defaultHeight: "Multi" },
];

const finishList = [
  { id: "gold", name: "Champagne Gold" },
  { id: "silver", name: "Mirror Chrome" },
  { id: "rose", name: "Imperial Rose Gold" },
  { id: "black", name: "Matte Black" },
];

export default function PillarCalculator() {
  const [selectedSpace, setSelectedSpace] = useState(spaceOptions[0]);
  const [selectedConfig, setSelectedConfig] = useState(configOptions[0]);
  const [selectedHeight, setSelectedHeight] = useState("6ft");
  const [selectedFinish, setSelectedFinish] = useState(finishList[0]);
  const [includeFish, setIncludeFish] = useState(true);
  const [includeSmartApp, setIncludeSmartApp] = useState(true);

  // Auto-compose WhatsApp message
  const waMessage = encodeURIComponent(
    `Hello Water Bubble Pillar Studio, I just completed a quick project estimate on your website:
• Installation Space: ${selectedSpace.name} (${selectedSpace.desc})
• Configuration: ${selectedConfig.name}
• Planned Height: ${selectedHeight}
• Metallic Finish: ${selectedFinish.name}
• Smart App/Remote Control: ${includeSmartApp ? "Yes" : "Standard"}
• Decorative Floating Fish: ${includeFish ? "Yes" : "No"}

Please share the recommended CAD design, dimensional blueprint, and quotation.`
  );

  return (
    <section id="calculator" className="pt-2 sm:pt-4 pb-12 sm:pb-16 section-charcoal relative overflow-hidden scroll-mt-24">
      <span id="project-calculator" className="sr-only" />
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-[550px] h-[550px] bg-[#36B7C9]/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-[450px] h-[450px] bg-[#C2A062]/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="container-site max-w-[1240px] mx-auto relative z-10">
        
        {/* Title */}
        <div className="flex flex-col items-center justify-center text-center w-full max-w-4xl mx-auto mb-6 sm:mb-8">
          <div className="inline-flex items-center justify-center gap-2 px-3.5 py-1 rounded-full bg-white/[0.04] border border-[#C2A062]/30 text-[#C2A062] text-xs font-bold uppercase tracking-[0.25em] mb-2 mx-auto">
            Interactive Project Planner
          </div>
          <h2 className="heading-serif text-4xl sm:text-5xl lg:text-6xl text-white mb-2 text-center w-full">
            Instant <span className="text-gradient-gold">Bespoke Spec</span> Generator
          </h2>
          <div
            className="w-16 h-0.5 bg-[#C2A062] rounded-full mx-auto"
            style={{ margin: "8px auto 12px auto" }}
          />
          <p className="text-white/70 text-base sm:text-lg max-w-2xl mx-auto text-center" style={{ fontFamily: "Manrope, sans-serif" }}>
            Select your space parameters to generate an instant engineering blueprint summary and direct WhatsApp quote request.
          </p>
        </div>

        {/* ── Calculator Container ── */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Controls (lg: 7 cols) */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* Step 1: Space Type */}
            <div className="p-6 rounded-2xl bg-white/[0.03] border border-white/10">
              <label className="block text-xs uppercase tracking-[0.2em] font-bold text-[#C2A062] mb-3">
                Step 1: Where will this be installed?
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {spaceOptions.map((s) => (
                  <button
                    key={s.id}
                    onClick={() => setSelectedSpace(s)}
                    className={`p-3.5 rounded-xl text-left transition-all border ${
                      selectedSpace.id === s.id
                        ? "bg-[#C2A062]/20 border-[#C2A062] text-white shadow-[0_0_15px_rgba(194,160,98,0.2)]"
                        : "bg-white/[0.02] border-white/10 text-white/70 hover:bg-white/[0.06] hover:text-white"
                    }`}
                  >
                    <div className="font-bold text-sm" style={{ fontFamily: "Manrope, sans-serif" }}>
                      {s.name}
                    </div>
                    <div className="text-[11px] text-white/45 mt-0.5">{s.desc}</div>
                  </button>
                ))}
              </div>
            </div>

            {/* Step 2: Configuration */}
            <div className="p-6 rounded-2xl bg-white/[0.03] border border-white/10">
              <label className="block text-xs uppercase tracking-[0.2em] font-bold text-[#C2A062] mb-3">
                Step 2: Choose Arrangement
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5">
                {configOptions.map((c) => (
                  <button
                    key={c.id}
                    onClick={() => {
                      setSelectedConfig(c);
                      if (c.id === "pair") setSelectedHeight("8ft");
                    }}
                    className={`p-3.5 rounded-xl text-left transition-all border ${
                      selectedConfig.id === c.id
                        ? "bg-[#C2A062]/20 border-[#C2A062] text-white shadow-[0_0_15px_rgba(194,160,98,0.2)]"
                        : "bg-white/[0.02] border-white/10 text-white/70 hover:bg-white/[0.06] hover:text-white"
                    }`}
                  >
                    <div className="font-bold text-sm" style={{ fontFamily: "Manrope, sans-serif" }}>
                      {c.name}
                    </div>
                    <div className="text-[11px] text-white/45 mt-0.5">{c.desc}</div>
                  </button>
                ))}
              </div>
            </div>

            {/* Step 3: Height & Finish */}
            <div className="p-6 rounded-2xl bg-white/[0.03] border border-white/10 grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div>
                <label className="block text-xs uppercase tracking-[0.2em] font-bold text-[#C2A062] mb-3">
                  Pillar Height
                </label>
                <div className="flex gap-2">
                  {["4ft", "6ft", "8ft", "10ft"].map((h) => (
                    <button
                      key={h}
                      onClick={() => setSelectedHeight(h)}
                      className={`flex-1 py-2 rounded-lg text-xs font-bold uppercase transition-all border ${
                        selectedHeight === h
                          ? "bg-[#C2A062] text-[#111820] border-[#C2A062]"
                          : "bg-white/[0.03] border-white/10 text-white/70 hover:text-white"
                      }`}
                    >
                      {h}
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <label className="block text-xs uppercase tracking-[0.2em] font-bold text-[#C2A062] mb-3">
                  Pedestal Finish
                </label>
                <select
                  value={selectedFinish.id}
                  onChange={(e) => {
                    const found = finishList.find((f) => f.id === e.target.value);
                    if (found) setSelectedFinish(found);
                  }}
                  className="w-full py-2.5 px-3 rounded-lg bg-[#111820] border border-white/20 text-white text-xs font-semibold focus:outline-none focus:border-[#C2A062]"
                >
                  {finishList.map((f) => (
                    <option key={f.id} value={f.id}>
                      {f.name}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            {/* Step 4: Add-ons Toggles */}
            <div className="p-6 rounded-2xl bg-white/[0.03] border border-white/10 flex flex-wrap gap-4">
              <label className="flex items-center gap-3 cursor-pointer text-sm text-white/80">
                <input
                  type="checkbox"
                  checked={includeSmartApp}
                  onChange={(e) => setIncludeSmartApp(e.target.checked)}
                  className="w-4 h-4 rounded accent-[#C2A062]"
                />
                <span>Include Smartphone RGB App & Remote Control</span>
              </label>

              <label className="flex items-center gap-3 cursor-pointer text-sm text-white/80">
                <input
                  type="checkbox"
                  checked={includeFish}
                  onChange={(e) => setIncludeFish(e.target.checked)}
                  className="w-4 h-4 rounded accent-[#C2A062]"
                />
                <span>Include Decorative Floating Artificial Fish</span>
              </label>
            </div>

          </div>

          {/* ── Generated Blueprint Summary Card (lg: 5 cols) ── */}
          <div className="lg:col-span-5 p-8 rounded-3xl bg-gradient-to-b from-white/[0.06] to-white/[0.02] border border-[#C2A062]/30 shadow-[0_20px_50px_rgba(0,0,0,0.5)] backdrop-blur-xl">
            <div className="flex items-center justify-between pb-5 border-b border-white/10">
              <div>
                <span className="text-[10px] uppercase tracking-[0.25em] text-[#C2A062] font-bold block">
                  Studio Engineering Blueprint
                </span>
                <h3 className="text-xl text-white font-bold" style={{ fontFamily: "Manrope, sans-serif" }}>
                  Bespoke Setup Summary
                </h3>
              </div>
              <span className="px-3 py-1 rounded-full bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 text-[10px] font-bold uppercase">
                Active Ready
              </span>
            </div>

            {/* Spec lines */}
            <div className="py-6 space-y-3.5 text-xs text-white/80 font-mono">
              <div className="flex justify-between py-1 border-b border-white/5">
                <span className="text-white/50 font-sans">Installation Setting:</span>
                <span className="font-bold text-white text-right">{selectedSpace.name}</span>
              </div>
              <div className="flex justify-between py-1 border-b border-white/5">
                <span className="text-white/50 font-sans">Arrangement:</span>
                <span className="font-bold text-[#C2A062]">{selectedConfig.name}</span>
              </div>
              <div className="flex justify-between py-1 border-b border-white/5">
                <span className="text-white/50 font-sans">Pillar Height:</span>
                <span className="font-bold text-white">{selectedHeight}</span>
              </div>
              <div className="flex justify-between py-1 border-b border-white/5">
                <span className="text-white/50 font-sans">Crown & Base:</span>
                <span className="font-bold text-white">{selectedFinish.name}</span>
              </div>
              <div className="flex justify-between py-1 border-b border-white/5">
                <span className="text-white/50 font-sans">Acoustic Pump:</span>
                <span className="font-bold text-emerald-400">German Diaphragm (&lt;22 dB)</span>
              </div>
              <div className="flex justify-between py-1 border-b border-white/5">
                <span className="text-white/50 font-sans">Electrical:</span>
                <span className="font-bold text-white">12V DC Safe, ~28W Consumption</span>
              </div>
              <div className="flex justify-between py-1 border-b border-white/5">
                <span className="text-white/50 font-sans">Smart Remote:</span>
                <span className="font-bold text-white">{includeSmartApp ? "Included (RGB App)" : "Standard RF"}</span>
              </div>
              <div className="flex justify-between py-1">
                <span className="text-white/50 font-sans">Installation Coverage:</span>
                <span className="font-bold text-white">Pan-India Delivery & Setup</span>
              </div>
            </div>

            {/* Direct WhatsApp Call to Action */}
            <div className="pt-4 border-t border-white/10 space-y-3">
              <Link
                href={`https://wa.me/919834123136?text=${waMessage}`}
                target="_blank"
                rel="noopener noreferrer"
                id="calculator-whatsapp-btn"
                className="w-full inline-flex items-center justify-center gap-2.5 py-4 px-5 rounded-xl bg-gradient-to-r from-[#25D366] to-emerald-600 hover:from-emerald-400 hover:to-emerald-500 text-slate-950 font-extrabold text-sm uppercase tracking-wider transition-all shadow-[0_10px_30px_rgba(37,211,102,0.3)] hover:shadow-[0_15px_40px_rgba(37,211,102,0.5)] hover:-translate-y-0.5"
                style={{ fontFamily: "Manrope, sans-serif" }}
              >
                <svg viewBox="0 0 24 24" className="w-5 h-5 fill-current">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                </svg>
                <span>Request Custom CAD & Pricing</span>
              </Link>
              <p className="text-center text-[11px] text-white/40" style={{ fontFamily: "Manrope, sans-serif" }}>
                Direct consultation with our architectural lighting team
              </p>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
