"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";

// A mock array for the quiz flow
const STEPS = [
  {
    gate: 1,
    title: "Determine Baseline (Prakriti)",
    question: "How would you classify your baseline skin state before any products?",
    options: [
      { id: "vata", label: "A. Tight & Dry", desc: "Prone to dehydration, fine lines, feels uncomfortable." },
      { id: "pitta", label: "B. Red & Reactive", desc: "Flushes easily, breaks out in heat, sensitive to touch." },
      { id: "kapha", label: "C. Oily & Congested", desc: "Thick feeling, enlarged pores, prone to deep congestion." },
    ]
  },
  {
    gate: 2,
    title: "Identify Primary Stressor (Vikriti)",
    question: "What environmental or lifestyle factor impacts you the most?",
    options: [
      { id: "pollution", label: "A. Urban Commute", desc: "Heavy smog, soot, rapid oxidation." },
      { id: "blue_light", label: "B. Heavy Screen Time", desc: "8+ hours in front of monitors, circadian disruption." },
      { id: "cortisol", label: "C. Chronic Stress", desc: "High cortisol spikes, poor sleep, sudden breakouts." },
    ]
  },
  {
    gate: 3,
    title: "Select Time Constraint",
    question: "How much time are you willing to dedicate to a protocol?",
    options: [
      { id: "60s", label: "60 Seconds", desc: "Just give me the single most impactful active." },
      { id: "3m", label: "3 Minutes", desc: "A focused, 2-step protocol for targeted repair." },
      { id: "5m", label: "5+ Minutes", desc: "The full system, including scalp and barrier maintenance." },
    ]
  }
];

export default function RoutineBuilderPage() {
  const [currentStep, setCurrentStep] = useState(0);
  const [answers, setAnswers] = useState<Record<string, string>>({});
  const [isCalculating, setIsCalculating] = useState(false);

  const handleSelect = (optionId: string) => {
    setAnswers(prev => ({ ...prev, [STEPS[currentStep].gate]: optionId }));
    
    // Auto-advance
    setTimeout(() => {
      if (currentStep < STEPS.length - 1) {
        setCurrentStep(prev => prev + 1);
      } else {
        processResults();
      }
    }, 400); // 400ms delay to show the selected state
  };

  const processResults = () => {
    setIsCalculating(true);
    // Simulate API logic matrix delay
    setTimeout(() => {
      setIsCalculating(false);
      window.location.href = '/routine-builder/results';
    }, 2000);
  };

  if (isCalculating) {
    return (
      <div className="flex-1 flex flex-col items-center justify-center">
        <div className="flex items-center space-x-4 mb-8">
           <span className="relative flex h-6 w-6">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75"></span>
              <span className="relative inline-flex rounded-full h-6 w-6 bg-accent"></span>
           </span>
        </div>
        <div className="font-mono text-sm uppercase tracking-widest text-accent animate-pulse">
           Calculating Protocol Matrix...
        </div>
      </div>
    );
  }

  const step = STEPS[currentStep];

  return (
    <div className="flex-1 flex flex-col relative p-6 md:p-12 max-w-4xl mx-auto w-full">
      <div className="mb-12 flex justify-between items-end border-b border-primary-foreground/30 pb-4 mt-8">
        <div>
          <h1 className="font-heading text-3xl font-bold">The Diagnostic Engine</h1>
        </div>
        <div className="font-mono text-xs uppercase tracking-widest text-accent">
          Step 0{currentStep + 1} / 0{STEPS.length}
        </div>
      </div>

      <div className="mb-12">
        <div className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground mb-4">
          Data Input Required
        </div>
        <h2 className="font-heading text-4xl mb-4 leading-tight">{step.question}</h2>
      </div>

      <div className="space-y-4 flex-1">
        {step.options.map((opt) => {
          const isSelected = answers[step.gate] === opt.id;
          return (
            <button
              key={opt.id}
              onClick={() => handleSelect(opt.id)}
              className={`w-full text-left p-6 border transition-all duration-200 group flex flex-col justify-center
                ${isSelected 
                  ? 'border-accent bg-accent/10 shadow-[inset_4px_0_0_0_#7D8471]' 
                  : 'border-primary-foreground/20 hover:border-accent hover:bg-primary-foreground/5'
                }`}
            >
              <div className="font-mono text-lg font-bold mb-2 group-hover:text-accent transition-colors">
                {opt.label}
              </div>
              <div className="font-sans text-sm text-primary-foreground/70">
                {opt.desc}
              </div>
            </button>
          )
        })}
      </div>
      
      <div className="mt-auto pt-12 flex justify-between items-center opacity-50">
        <button 
          disabled={currentStep === 0}
          onClick={() => setCurrentStep(prev => prev - 1)}
          className="font-mono text-xs uppercase tracking-widest hover:text-accent disabled:opacity-20"
        >
          &larr; Amend Previous
        </button>
        <div className="font-mono text-[10px] tracking-widest">
           AYURSAGE SYSTEM // V 1.4
        </div>
      </div>
    </div>
  );
}
