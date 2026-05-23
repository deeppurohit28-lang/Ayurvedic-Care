"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

const GATES = [
  {
    id: "baseline",
    title: "How does your skin feel 30 minutes after washing?",
    description: "This baseline reading dictates your lipid barrier integrity and determines the base carrier oils for your custom routine.",
    options: [
      { id: "Vata", title: "Tight and Dry", icon: "dry", tag: "LIPID_DEFICIENT", desc: "Often feels uncomfortable, potentially flaky. Requires heavy ceramide replenishment." },
      { id: "Pitta", title: "Red and Sensitive", icon: "emergency", tag: "BARRIER_COMPROMISED", desc: "Prone to irritation, heat, or stinging. Requires soothing adaptogens and gentle cleansing." },
      { id: "Kapha", title: "Oily or Congested", icon: "water_drop", tag: "SEBUM_EXCESS", desc: "Noticeable shine or heavy feeling quickly after washing. Requires balancing astringents." },
    ]
  },
  {
    id: "stressor",
    title: "Which environmental stressor do you face daily?",
    description: "We isolate the specific oxidative or behavioral trigger disrupting your cellular turnover.",
    options: [
      { id: "Pollution", title: "Urban Commute", icon: "air", tag: "PM2.5_EXPOSURE", desc: "Constant exposure to exhaust and particulate matter. Demands heavy antioxidant shielding." },
      { id: "Blue Light", title: "Screen Time", icon: "desktop_windows", tag: "HEV_LIGHT_STRESS", desc: "8+ hours in front of screens disrupting circadian skin rhythm. Requires blue-light neutralizing compounds." },
      { id: "Cortisol", title: "Chronic Stress", icon: "psychology", tag: "CORTISOL_OVERLOAD", desc: "High pressure lifestyle triggering inflammatory cascades. Requires potent Ayurvedic adaptogens." },
    ]
  },
  {
    id: "time",
    title: "What is your absolute maximum time commitment?",
    description: "Formulas are engineered for absorption velocities. We refuse to prescribe steps you won't use.",
    options: [
      { id: "60s", title: "60 Seconds", icon: "timer", tag: "ULTRA_RAPID", desc: "I need 1 potent, fast-absorbing active that does the heavy lifting." },
      { id: "3 Min", title: "3 Minutes", icon: "timelapse", tag: "CORE_SYSTEM", desc: "Enough time for a proper foundational cleanse plus targeted serum delivery." },
      { id: "5 Min", title: "5 Minutes", icon: "hourglass_top", tag: "COMPLETE_PROTOCOL", desc: "Full spectrum care including multi-phase dermal and scalp treatment." },
    ]
  }
];

export default function RoutineBuilder() {
  const router = useRouter();
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState({ baseline: "", stressor: "", time: "" });

  const currentGate = GATES[step];
  const progressPercent = ((step) / GATES.length) * 100;

  const handleSelect = (optionId: string) => {
    setAnswers(prev => ({ ...prev, [currentGate.id]: optionId }));
  };

  const handleNext = () => {
    if (!answers[currentGate.id as keyof typeof answers]) return; // prevent next if not selected
    if (step < GATES.length - 1) {
      setStep(step + 1);
    } else {
      // Calculate router push
      const params = new URLSearchParams({
        base: answers.baseline,
        stress: answers.stressor,
        time: answers.time
      });
      router.push(`/routine-builder/results?${params.toString()}`);
    }
  };

  const handlePrev = () => {
    if (step > 0) setStep(step - 1);
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center font-body antialiased relative bg-[#1A1A1A] text-[#F9F9F9] selection:bg-accent selection:text-white pb-[200px]">
      {/* Ambient Shadow for depth without borders */}
      <div className="absolute inset-0 z-0 pointer-events-none" style={{ background: 'radial-gradient(circle at 50% 50%, rgba(249, 249, 249, 0.03) 0%, transparent 60%)' }}></div>
      
      {/* Progress UI */}
      <div className="fixed top-24 left-0 w-full px-8 md:px-24 z-10">
        <div className="max-w-4xl mx-auto flex flex-col gap-4">
          <div className="flex justify-between items-center font-label text-sm tracking-widest uppercase text-[#F9F9F9]/60">
            <span>DIAGNOSTIC PROTOCOL</span>
            <span>STEP 0{step + 1} / 0{GATES.length}</span>
          </div>
          {/* Progress Line */}
          <div className="w-full h-0.5 bg-[#F9F9F9]/10 relative">
            <div 
                className="absolute top-0 left-0 h-full bg-[#7D8471] transition-all duration-1000 ease-in-out" 
                style={{ width: `${progressPercent}%` }}
            ></div>
          </div>
        </div>
      </div>

      {/* Main Content Canvas */}
      <main className="w-full max-w-4xl mx-auto px-8 md:px-0 z-10 pt-32 pb-24 flex flex-col h-full justify-center">
        {/* Question Area */}
        <div className="mb-16 md:mb-24 text-center md:text-left">
          <h1 className="font-headline text-4xl md:text-6xl lg:text-7xl leading-tight text-[#F9F9F9] mb-6">
            {currentGate.title}
          </h1>
          <p className="font-body text-lg text-[#F9F9F9]/70 max-w-2xl">
            {currentGate.description}
          </p>
        </div>

        {/* Tactile Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {currentGate.options.map((opt) => {
            const isSelected = answers[currentGate.id as keyof typeof answers] === opt.id;
            return (
              <button 
                key={opt.id}
                onClick={() => handleSelect(opt.id)}
                className={`group relative p-8 text-left transition-all duration-300 focus:outline-none flex flex-col h-full ${
                  isSelected 
                    ? "bg-[#1A1A1A] border-2 border-[#7D8471]" 
                    : "bg-[#F9F9F9]/5 border border-[#F9F9F9]/10 hover:border-[#7D8471]/50 hover:bg-[#F9F9F9]/10"
                }`}
              >
                <div className={`absolute top-4 right-4 font-label text-[10px] tracking-widest uppercase transition-colors ${
                  isSelected ? "text-[#7D8471]" : "text-[#F9F9F9]/40 group-hover:text-[#7D8471]/70"
                }`}>
                  {opt.tag}
                </div>
                
                <div className={`mb-6 h-12 w-12 flex items-center justify-center rounded-none transition-colors ${
                  isSelected 
                    ? "border border-[#7D8471]/30 bg-[#F9F9F9]/5" 
                    : "border border-[#F9F9F9]/10 group-hover:border-[#7D8471]/30"
                }`}>
                  <span className={`material-symbols-outlined transition-colors ${
                    isSelected ? "text-[#7D8471]" : "text-[#F9F9F9]/50 group-hover:text-[#7D8471]"
                  }`} style={{ fontVariationSettings: "'FILL' 0" }}>
                    {opt.icon}
                  </span>
                </div>
                
                <h3 className={`font-label text-xl tracking-wider uppercase mb-4 transition-colors ${
                  isSelected ? "text-[#F9F9F9]" : "text-[#F9F9F9]/80 group-hover:text-[#F9F9F9]"
                }`}>
                  {opt.title}
                </h3>
                
                <p className={`font-body text-sm leading-relaxed mt-auto transition-colors ${
                  isSelected ? "text-[#F9F9F9]/60" : "text-[#F9F9F9]/50 group-hover:text-[#F9F9F9]/70"
                }`}>
                  {opt.desc}
                </p>
                
                {isSelected && (
                  <div className="absolute bottom-0 left-0 w-full h-1 bg-[#7D8471]"></div>
                )}
              </button>
            )
          })}
        </div>

        {/* Navigation Controls */}
        <div className="mt-20 flex justify-between items-center border-t border-[#F9F9F9]/10 pt-8">
          {step > 0 ? (
            <button onClick={handlePrev} className="font-label text-xs tracking-widest uppercase text-[#F9F9F9]/50 hover:text-[#F9F9F9] transition-colors flex items-center gap-2">
              <span className="material-symbols-outlined text-sm">arrow_back</span>
              PREVIOUS
            </button>
          ) : <div></div>}
          
          <button 
            onClick={handleNext} 
            disabled={!answers[currentGate.id as keyof typeof answers]}
            className={`font-label text-sm tracking-widest uppercase px-12 py-4 transition-colors border-0 flex items-center gap-3 ${
              answers[currentGate.id as keyof typeof answers] 
                ? "bg-[#F9F9F9] text-[#1A1A1A] hover:bg-[#D9D1C1]" 
                : "bg-[#F9F9F9]/20 text-[#1A1A1A] cursor-not-allowed"
            }`}
          >
            CONTINUE PROTOCOL
            <span className="material-symbols-outlined text-sm">arrow_forward</span>
          </button>
        </div>
      </main>
    </div>
  );
}
