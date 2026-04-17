import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function PrescriptionPage() {
  return (
    <div className="flex-1 flex w-full relative min-h-screen">
      
      {/* LEFT: FIXED PROFILE SUMMARY */}
      <div className="hidden lg:flex w-1/3 bg-background border-r border-border flex-col p-12 text-foreground sticky top-0 h-screen overflow-y-auto">
        <div className="font-heading text-3xl font-bold tracking-tight mb-12">
          AYURSAGE
        </div>

        <div className="mb-12">
          <div className="font-mono text-xs uppercase tracking-widest text-accent mb-2">
            Subject Profile
          </div>
          <h2 className="font-heading text-2xl">
            Vata Dominant + Urban Stress
          </h2>
        </div>

        <div className="space-y-8 flex-1">
          <div>
            <div className="font-mono text-[10px] uppercase text-muted-foreground mb-1">Baseline State</div>
            <div className="font-mono text-sm border-l-2 border-accent pl-4">Tight & Dry. Hydration deficient.</div>
          </div>
          <div>
            <div className="font-mono text-[10px] uppercase text-muted-foreground mb-1">Primary Stressor</div>
            <div className="font-mono text-sm border-l-2 border-accent pl-4">Pollution Commute. High oxidation.</div>
          </div>
          <div>
            <div className="font-mono text-[10px] uppercase text-muted-foreground mb-1">Constraint</div>
            <div className="font-mono text-sm border-l-2 border-accent pl-4">3 Minutes. Focused system.</div>
          </div>
        </div>

        <div className="mt-12 font-mono text-xs uppercase text-muted-foreground border-t border-border pt-4">
          Session ID: F8A9B2C4
        </div>
      </div>

      {/* RIGHT: THE PROTOCOL */}
      <div className="flex-1 bg-primary text-primary-foreground p-6 md:p-12 lg:p-24 overflow-y-auto">
        <div className="max-w-2xl mx-auto">
          <div className="mb-16">
            <div className="font-mono text-xs uppercase text-accent mb-4 tracking-widest">
               Diagnostic Engine Output
            </div>
            <h1 className="font-heading text-5xl mb-6 leading-tight">The Prescribed Protocol</h1>
            <p className="font-sans text-lg text-primary-foreground/80 border-l-4 border-accent pl-6 py-2">
               Based on your input, we have formulated a 2-step system designed to rapidly inject lipids back into the barrier while neutralizing free-radicals from your commute.
            </p>
          </div>

          <div className="space-y-12 mb-32">
             
             {/* PRODUCT 1 */}
             <div className="border border-primary-foreground/20 p-8 grid grid-cols-1 md:grid-cols-2 gap-8 items-center hover:border-accent transition-colors bg-background/5">
                <div className="aspect-square bg-background flex items-center justify-center font-mono text-xs text-muted-foreground uppercase border border-border relative overflow-hidden">
                   <Image 
                     src="/syndet_bar.png" 
                     alt="Syndet Bar 01" 
                     fill 
                     className="object-cover" 
                   />
                </div>
                <div>
                   <div className="font-mono text-[10px] text-accent uppercase tracking-widest mb-2">Step 01: Purify</div>
                   <h3 className="font-heading text-2xl mb-2">Syndet Bar 01</h3>
                   <div className="font-mono text-xs mb-4 text-primary-foreground/60">100% Curcuminoids • pH 5.5</div>
                   <p className="font-sans text-sm text-primary-foreground/80 mb-6">
                     Unlike traditional soaps that strip your already dry Vata skin, this bar operates at a perfectly acidic 5.5 pH to preserve your acid mantle, while neutralizing surface soot.
                   </p>
                   <div className="font-mono text-sm tracking-widest">$32.00</div>
                </div>
             </div>

             {/* PRODUCT 2 */}
             <div className="border border-primary-foreground/20 p-8 grid grid-cols-1 md:grid-cols-2 gap-8 items-center hover:border-accent transition-colors bg-background/5">
                <div className="aspect-square bg-background flex items-center justify-center font-mono text-xs text-muted-foreground uppercase border border-border relative overflow-hidden">
                   <Image 
                     src="/serum.png" 
                     alt="Antioxidant Fraction Serum" 
                     fill 
                     className="object-cover" 
                   />
                </div>
                <div>
                   <div className="font-mono text-[10px] text-accent uppercase tracking-widest mb-2">Step 02: Treat</div>
                   <h3 className="font-heading text-2xl mb-2">Antioxidant Fraction Serum</h3>
                   <div className="font-mono text-xs mb-4 text-primary-foreground/60">40% EGCG • pH 4.8</div>
                   <p className="font-sans text-sm text-primary-foreground/80 mb-6">
                     Engineered specifically for your urban commute. High-density antioxidant fractions arrest free-radical damage instantly. Absorbs under 60 seconds.
                   </p>
                   <div className="font-mono text-sm tracking-widest">$85.00</div>
                </div>
             </div>

          </div>

          {/* STICKY CTA CONTAINER */}
          <div className="fixed bottom-0 left-0 w-full lg:static lg:bg-transparent lg:p-0 bg-primary/90 backdrop-blur-md border-t border-primary-foreground/20 lg:border-none p-6 z-40">
             <div className="max-w-2xl lg:ml-0 mx-auto flex flex-col sm:flex-row items-center justify-between gap-6">
                <div className="text-center sm:text-left">
                   <div className="font-mono text-xs uppercase text-primary-foreground/60 mb-1">Total Regimen</div>
                   <div className="font-mono text-xl tracking-widest">$117.00</div>
                </div>
                <Button size="lg" className="w-full sm:w-auto font-mono uppercase tracking-widest bg-accent text-accent-foreground hover:bg-white hover:text-primary rounded-none h-14 px-12 transition-all">
                  Add Protocol To Cart
                </Button>
             </div>
          </div>

        </div>
      </div>
      
    </div>
  );
}
