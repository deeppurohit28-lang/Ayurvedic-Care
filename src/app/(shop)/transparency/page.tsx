"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";

export default function TransparencyPortal() {
  const [query, setQuery] = useState("");
  const [state, setState] = useState<"idle" | "loading" | "results">("idle");

  const handleQuery = (e: React.FormEvent) => {
    e.preventDefault();
    if (!query) return;
    setState("loading");
    setTimeout(() => setState("results"), 1500);
  };

  return (
    <div className="flex flex-col min-h-[85vh] bg-primary text-primary-foreground">
      <div className="container mx-auto px-6 h-full flex flex-col pt-32 pb-24">
        
        <div className="max-w-3xl mb-12">
           <h1 className="font-heading text-5xl md:text-7xl font-bold leading-tight mb-6">
             The Transparency Engine
           </h1>
           <p className="font-sans text-xl text-primary-foreground/70 border-l-2 border-accent pl-6">
             Radical transparency is our standard. Enter any product Batch ID to retrieve its molecular data, active concentrations, and purity pass marks directly from our laboratory logs.
           </p>
        </div>

        <form onSubmit={handleQuery} className="max-w-2xl w-full mb-16 relative">
           <div className={`flex flex-col sm:flex-row items-center border ${state === 'idle' ? 'border-primary-foreground/30 focus-within:border-accent' : 'border-accent'} transition-colors bg-background/5 p-1`}>
              <input 
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value.toUpperCase())}
                placeholder="ENTER BATCH ID (e.g. B-4482)..." 
                className="flex-1 bg-transparent border-none outline-none text-primary-foreground font-mono text-lg tracking-widest px-6 py-6 w-full placeholder:text-primary-foreground/20"
                disabled={state === 'loading'}
              />
              <Button 
                type="submit" 
                disabled={state === 'loading' || !query}
                className="rounded-none bg-accent text-accent-foreground hover:bg-white hover:text-primary h-16 px-12 font-mono tracking-widest uppercase w-full sm:w-auto transition-colors"
              >
                {state === 'loading' ? 'Querying...' : 'Fetch CoA'}
              </Button>
           </div>
        </form>

        {state === 'loading' && (
           <div className="flex-1 flex flex-col items-center justify-center opacity-50 py-12">
              <span className="relative flex h-6 w-6 mb-4">
                 <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75"></span>
                 <span className="relative inline-flex rounded-full h-6 w-6 bg-accent"></span>
              </span>
              <div className="font-mono text-xs uppercase tracking-widest animate-pulse">
                Accessing decentralized database...
              </div>
           </div>
        )}

        {state === 'results' && (
           <div className="flex-1 animate-in fade-in slide-in-from-bottom-12 duration-500">
               <div className="border border-border bg-card text-card-foreground p-8 md:p-12 mb-8">
                  <div className="flex flex-col md:flex-row justify-between mb-12 border-b border-border pb-8">
                     <div>
                        <div className="font-mono text-xs text-accent tracking-widest mb-2">CERTIFICATE OF ANALYSIS</div>
                        <h2 className="font-heading text-4xl mb-1">Batch {query || "B-4482"}</h2>
                        <div className="font-mono text-sm text-muted-foreground uppercase tracking-widest">Syndet Bar 01 // Vata Base</div>
                     </div>
                     <div className="mt-6 md:mt-0 text-left md:text-right">
                        <div className="font-mono text-[10px] uppercase text-muted-foreground mb-1">Extraction Date</div>
                        <div className="font-mono text-sm mb-4">OCT 14, 2026</div>
                        <Button variant="outline" className="font-mono text-xs uppercase tracking-widest rounded-none border-border">
                           Download PDF Spec
                        </Button>
                     </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                      <div className="p-6 bg-background border border-border">
                         <div className="font-mono text-[10px] text-muted-foreground uppercase mb-4 tracking-widest">Active Compound</div>
                         <div className="font-heading text-3xl mb-1">Turmerone</div>
                         <div className="font-mono flex justify-between text-sm text-muted-foreground">
                            <span>Target:</span>
                            <span>95.0%</span>
                         </div>
                         <div className="font-mono flex justify-between text-sm text-accent mt-1">
                            <span>Actual:</span>
                            <span>95.4%</span>
                         </div>
                      </div>

                      <div className="p-6 bg-background border border-border">
                         <div className="font-mono text-[10px] text-muted-foreground uppercase mb-4 tracking-widest">pH Validation</div>
                         <div className="font-heading text-4xl font-mono mb-1 mt-1 tracking-tighter">5.52</div>
                         <div className="h-2 w-full bg-muted mt-4 relative">
                            <div className="absolute top-0 left-0 h-full bg-accent w-[55%]"></div>
                         </div>
                      </div>

                      <div className="p-6 bg-background border border-border flex flex-col justify-center items-center text-center">
                         <div className="font-mono text-[10px] text-muted-foreground uppercase mb-4 tracking-widest">Microbial Purity</div>
                         <div className="rounded-full h-16 w-16 border-4 border-accent flex items-center justify-center text-accent mb-2">
                           <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
                         </div>
                         <div className="font-mono text-sm tracking-widest">PASSED</div>
                      </div>
                  </div>
               </div>
           </div>
        )}

      </div>
    </div>
  );
}
