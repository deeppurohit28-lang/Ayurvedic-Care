"use client";

import Image from 'next/image';
import { useSearchParams } from 'next/navigation';
import { Suspense } from 'react';

// Product Catalog matched from PRD
const CATALOG = {
  "cleanser": {
    name: "Syndet Bar 01",
    ph: "5.5",
    vol: "150ml",
    active: "95% Curcuminoids",
    desc: "A non-foaming, highly substantive emulsion designed for foundational cleanse and free-radical neutralization.",
    mech: "Bypasses compromised barrier to deeply hydrate without stripping essential epidermal lipids.",
    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuD-Ehjc6P4hnDGYep7dObQ08JbJ7wQ_ipJJ0HB39L2oyEpFSHkTTWl_j2bu97GwEQVbGpuZU0x-JMnY4xZtdLq7WI_QNTYvZjLLb7cE2GfAoBWbC4MeHyLZ6Z_ISv3rFnBJBtz7adm6Wvr5aTjVxd3XRCgAANNIYxSUpro-FMvzOhy4q3301XOZ12fVdaGezGjECI3CvwASiOkEfGJ6qnbToYoSvymOrwFQDGKjPKfySViZRQUCLLmfcag6YGBq8ePbz9zhBgp3rcpz",
    icon: "science"
  },
  "barrier": {
    name: "Barrier Reset Serum",
    ph: "5.2",
    vol: "30ml",
    active: "45% Asiaticoside (Gotu Kola)",
    desc: "Targeted explicitly for blue light exposure and barrier repair, sealing in hydration.",
    mech: "Gotu Kola stimulates Type I collagen synthesis, reinforcing structural integrity and patching micro-tears.",
    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuDcIYa65SsM89ByT4IO_uRbl8-BZyTnlDpBNT2a-bR1tNxWV3hGLzbcSJ6zpujZjdzMo2GmG5p_XxqSsvUMUaIQNvUKZ3rC4LdSCNyzcrAns_-Vqgv6gSfQ494gm27pEZp8gNYm2Kp49KTr7f0wzFsv1mTtuCfXCCXoN2H8_BmQsG57h3FCwJjTmYUM-GX-yOYy2TbhIV62JlbGoJrVT0f4mRWCABfm1H-jfpHWhpka_eI1fzcxuCQfAb-3zOUR7pf-1hBMyVuFhD-R",
    icon: "biotech"
  },
  "anti-ox": {
    name: "Antioxidant Fraction Serum",
    ph: "4.8",
    vol: "30ml",
    active: "Ashwagandha Complex",
    desc: "A dense matrix providing extreme oxidative shielding against PM2.5 adhesion and urban particulates.",
    mech: "Reduces cortisol-induced inflammation triggered by environmental stress while neutralizing free radicals.",
    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuBAY8YZ5UOhdWQUsfDPfURYgInzRhHKvOMWjxW_yzScRIG_CO4-qkuh3R6mJzWVXTQ6nHh9AZI7cz108nJJosTpR57jrLKbT5OrxtlxXYgYQgHwJn4ednVQNf7CzFmqGzjxsro103P0aS-sb6RXwQNQNdy2L15YZ3DLPwy2QfAl1UmfxMT540uxqNgKyDrISjRiJhKs02jnihqrVMbL8wp8iCY9mRN13rUPr6A4HLN3A_zb4TYFo8jLLMhQsTqtkP0BPTj_pHZCl2X-",
    icon: "shield"
  },
  "cortisol": {
    name: "Cortisol Modulator Serum",
    ph: "4.5",
    vol: "30ml",
    active: "Tri-Dosha Adaptogens",
    desc: "Focuses on rapid absorption and deep reset for high-pressure lifestyles.",
    mech: "Directly downregulates epidermal stress markers in 60 seconds.",
    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuCvVr18Nay0yUsBmehfJOaDzNME30y-8wx6PzeGju44BdQyJNHehWEEK60-j4Ffcmkvrr_H1HuMvY3ftJy7qNvwKf-edi9zYSvgiHENdYap-sM9hgKhaWykEv8F5ZLP1jo9rVf7w6pM6DuRgiZ5vqv3Hw4av9oIIEoMmOM1kiw9fGsbz06dwpLaq-NYVyjzdLf38RHReKiMTRJ0H1qx6Bt5VhglA6mCrsnyqOLG-3ciEnufP0iJ91vVWuONdH9VxhAt2FHnk-X-VyNL",
    icon: "psychology"
  }
};

function ResultsContent() {
  const searchParams = useSearchParams();
  const base = searchParams.get('base') || 'Vata';
  const stress = searchParams.get('stress') || 'Pollution';
  const time = searchParams.get('time') || '3 Min';

  // Dynamic Content Mapping
  let profileTitle = "";
  let baseDesc = "";
  if (base === 'Vata') {
    profileTitle += "Dry Skin";
    baseDesc = "Elevated Vata dictating need for deep, unctuous nourishment and grounding botanical lipid profiles.";
  } else if (base === 'Pitta') {
    profileTitle += "Reactive Skin";
    baseDesc = "Elevated Pitta dictating need for cooling, soothing botanical profiles.";
  } else {
    profileTitle += "Oily Skin";
    baseDesc = "Elevated Kapha dictating need for astringent, clarifying botanical profiles.";
  }

  let stressDesc = "";
  if (stress === 'Pollution') {
    profileTitle += " + Urban Pollution Stress";
    stressDesc = "High exposure to PM2.5 particulates inducing oxidative stress.";
  } else if (stress === 'Blue Light') {
    profileTitle += " + HEV Light Stress";
    stressDesc = "Chronic screen exposure disrupting circadian skin rhythm.";
  } else {
    profileTitle += " + Chronic Stress";
    stressDesc = "High cortisol overload triggering inflammatory cascades.";
  }

  // Routing Logic
  let system = [];
  if (time === '60s') {
    system = [CATALOG["cortisol"]];
  } else {
    // 3 min +
    system.push(CATALOG["cleanser"]);
    if (stress === 'Pollution') system.push(CATALOG["anti-ox"]);
    else if (stress === 'Blue Light') system.push(CATALOG["barrier"]);
    else system.push(CATALOG["cortisol"]);
  }

  return (
    <>
      <div className="flex-grow flex flex-col md:flex-row w-full max-w-[1920px] mx-auto relative bg-background">
        {/* Left Panel: Sticky Profile Summary */}
        <aside className="w-full md:w-1/3 md:min-h-[calc(100vh-5rem)] bg-surface-container-low p-8 md:p-16 flex flex-col justify-between md:sticky md:top-20 z-10 text-on-surface">
          <div>
            <p className="font-mono text-xs text-outline uppercase tracking-widest mb-4">Diagnostic Profile</p>
            <h1 className="font-headline text-4xl md:text-5xl text-on-surface leading-tight mb-8">{profileTitle}</h1>
            <div className="space-y-6 mt-12">
              <div className="border-b-2 border-primary/10 pb-4">
                <p className="font-mono text-[10px] text-outline uppercase tracking-wider mb-2">Primary Indicator</p>
                <p className="font-body text-sm text-on-surface">Compromised barrier function mapped to {base} imbalances.</p>
              </div>
              <div className="border-b-2 border-primary/10 pb-4">
                <p className="font-mono text-[10px] text-outline uppercase tracking-wider mb-2">Environmental Factor</p>
                <p className="font-body text-sm text-on-surface">{stressDesc}</p>
              </div>
              <div>
                <p className="font-mono text-[10px] text-outline uppercase tracking-wider mb-2">Ayurvedic Dosha Context</p>
                <p className="font-body text-sm text-on-surface">{baseDesc}</p>
              </div>
            </div>
          </div>
          <div className="mt-16 hidden md:block">
            <div className="w-full h-48 relative overflow-hidden">
                <Image fill alt="Clinical setup" className="object-cover grayscale opacity-80" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDhJEi0wxAf7i1pxXcRJxXn0y175J58aq-jLwggoSjOol8b91_nHYb2nOAJmoLsLoPkrMib1piIFOlHy-ixT84Lb_hV41hcTShWzUNIOEzn5Rsq6y2OSOqVIbL1ba_2qTdMFVhEs3V_VESfgmkNEXtTRXrVUXAw4SR12FvEcU1y3jkfMePXJXLNT8U_vi6yuT1yVv8gNVqaP08W2TMmdmECFUSuG09E-pULjTZd_4-bXJ4b-MLZyWVz1bKFtR2_bo5MDKuPWcuZwEhy" />
            </div>
          </div>
        </aside>
        
        {/* Right Panel: Scrollable Prescription */}
        <section className="w-full md:w-2/3 bg-background p-8 md:p-16 pb-32 text-on-surface">
          <div className="max-w-3xl mx-auto">
            <p className="font-mono text-xs text-outline uppercase tracking-widest mb-4 border-b-2 border-primary inline-block pb-1">The Prescription</p>
            <h2 className="font-headline text-3xl md:text-4xl text-on-surface mb-12">Custom {system.length}-Phase Protocol</h2>
            
            {system.map((product, idx) => (
              <div key={idx} className="mb-24 relative group">
                <div className={`flex flex-col ${idx % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} gap-8 items-start`}>
                  <div className="w-full md:w-1/2 relative aspect-[4/5] bg-surface-container-highest">
                    <Image fill alt={product.name} className="object-cover mix-blend-multiply" src={product.img} />
                  </div>
                  <div className="w-full md:w-1/2 flex flex-col">
                    <div className="flex justify-between items-start mb-4">
                      <span className="font-mono text-[10px] text-secondary uppercase tracking-widest px-2 py-1 bg-secondary-container">Phase 0{idx + 1}</span>
                      <span className="font-mono text-[10px] text-outline uppercase tracking-widest">pH: {product.ph} | Vol: {product.vol}</span>
                    </div>
                    <h3 className="font-headline text-2xl text-on-surface mb-2">{product.name}</h3>
                    <p className="font-mono text-xs text-outline uppercase tracking-widest mb-6">{product.active}</p>
                    <p className="font-body text-sm text-on-surface-variant leading-relaxed mb-8">
                        {product.desc}
                    </p>
                    {/* Education Box */}
                    <div className="bg-surface-container-low p-6 border-l-4 border-primary">
                      <h4 className="font-mono text-xs text-on-surface uppercase tracking-widest mb-2 flex items-center gap-2">
                        <span className="material-symbols-outlined text-sm">{product.icon}</span>
                        Clinical Mechanism
                      </h4>
                      <p className="font-body text-sm text-on-surface-variant">
                          {product.mech}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
      
      {/* Floating CTA Bar */}
      <div className="fixed bottom-0 left-0 w-full bg-surface-container-lowest border-t-2 border-primary z-40 shadow-[0_-10px_40px_rgba(0,0,0,0.05)]">
        <div className="max-w-[1920px] mx-auto px-8 py-6 flex flex-col md:flex-row justify-between items-center gap-4 text-on-surface">
          <div className="hidden md:flex flex-col">
            <span className="font-mono text-xs text-on-surface uppercase tracking-widest">Protocol Total: ${(system.length * 68).toFixed(2)}</span>
            <span className="font-body text-[10px] text-on-surface-variant">Includes Custom Formulation + Clinical Guide</span>
          </div>
          <button className="w-full md:w-auto bg-primary text-on-primary font-mono text-sm uppercase tracking-widest px-12 py-4 hover:bg-secondary transition-colors duration-300 flex items-center justify-center gap-3 border border-transparent rounded-none">
              ADD FULL ROUTINE TO CART
              <span className="material-symbols-outlined text-sm">arrow_forward</span>
          </button>
        </div>
      </div>
      
      {/* Spacer for CTA */}
      <div className="h-24 md:h-0"></div>
    </>
  );
}

export default function RoutineResults() {
  return (
    <Suspense fallback={<div className="h-screen w-full bg-[#1A1A1A] flex items-center justify-center font-mono text-[#F9F9F9]">CALCULATING PROTOCOL...</div>}>
      <ResultsContent />
    </Suspense>
  )
}
