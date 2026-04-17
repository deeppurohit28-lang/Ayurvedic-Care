import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      
      {/* 1. HERO SECTION */}
      <section className="relative min-h-[90vh] flex items-center bg-card overflow-hidden">
        <div className="container mx-auto px-6 relative z-10 grid grid-cols-1 md:grid-cols-2 gap-12 text-card-foreground">
          <div className="space-y-8 max-w-xl">
            <h1 className="font-heading text-5xl md:text-7xl font-bold leading-tight">
              Ancient Wisdom. <br/>
              <span className="text-accent italic">Modern Results.</span>
            </h1>
            <p className="font-sans text-lg text-muted-foreground leading-relaxed">
              Standardized, bio-active botanical fractions engineered for your specific skin state in a 60-second delivery system. No marketing fluff. Just performance.
            </p>
            <div className="pt-4">
              <Link href="/routine-builder">
                <Button size="lg" className="font-mono uppercase tracking-widest text-sm rounded-none h-14 px-8 bg-primary text-primary-foreground hover:bg-accent hover:text-accent-foreground transition-all duration-200">
                  Enter The Diagnostic Engine &rarr;
                </Button>
              </Link>
            </div>
          </div>
          
          <div className="hidden md:flex flex-col justify-center items-end opacity-20 hover:opacity-100 transition-opacity duration-500 cursor-crosshair">
             {/* Placeholder for macro botanical vs lab extraction */}
             <div className="w-full h-[600px] border border-border flex items-center justify-center font-mono text-xs tracking-widest text-muted-foreground uppercase relative bg-background overflow-hidden relative">
                <Image 
                  src="/hero_macro.png" 
                  alt="Centella Asiatica Extraction" 
                  fill 
                  className="object-cover transition-transform duration-[10s] group-hover:scale-105" 
                />
                <div className="absolute bottom-4 right-4 bg-primary text-primary-foreground p-2 text-[10px] z-20 shadow-lg">
                  FIG 1.0 - CENTELLA ASIATICA EXTRACTION
                </div>
             </div>
          </div>
        </div>
      </section>

      {/* 2. THE LIVE TICKER */}
      <div className="w-full border-y border-border bg-background py-3 overflow-hidden relative flex">
        <div className="animate-marquee whitespace-nowrap font-mono text-xs uppercase tracking-widest text-muted-foreground flex space-x-12">
          <span>PH 5.2 • 100% Vegan • 45% Active Gotu Kola</span>
          <span className="text-accent">|</span>
          <span>Batch B-4482 Validated via GC-MS</span>
          <span className="text-accent">|</span>
          <span>Zero Synthetic Fragrance</span>
          <span className="text-accent">|</span>
          <span>Barrier Reset System Optimal</span>
          <span className="text-accent">|</span>
          <span>PH 5.2 • 100% Vegan • 45% Active Gotu Kola</span>
        </div>
      </div>

      {/* 3. PROTOCOL PREVIEW */}
      <section className="py-32 bg-background border-b border-border">
        <div className="container mx-auto px-6">
          <div className="mb-16">
            <h2 className="font-heading text-4xl mb-4 text-foreground">Synergetic Protocols</h2>
            <p className="font-mono text-sm text-muted-foreground tracking-widest uppercase">We prescribe systems, not singles.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* System Card */}
            <div className="group border border-border p-8 hover:border-accent transition-colors duration-200 cursor-pointer bg-card flex flex-col justify-between min-h-[400px]">
              <div>
                <div className="font-mono text-xs text-accent mb-4 tracking-widest">PROTOCOL 01</div>
                <h3 className="font-heading text-3xl mb-4 text-card-foreground">The Vata Core System</h3>
                <p className="font-sans text-muted-foreground mb-8">
                  Engineered for tight, dry, pollution-stressed conditions using bio-fractioned Antioxidants and Lipid replenishing isolates.
                </p>
              </div>
              
              <div className="grid grid-cols-2 gap-4 border-t border-border pt-8 mt-auto">
                 <div>
                   <div className="font-mono text-[10px] text-muted-foreground uppercase mb-1">Step 1</div>
                   <div className="font-bold text-sm text-card-foreground">Syndet Bar 01</div>
                 </div>
                 <div>
                   <div className="font-mono text-[10px] text-muted-foreground uppercase mb-1">Step 2</div>
                   <div className="font-bold text-sm text-card-foreground">Antioxidant Fraction Serum</div>
                 </div>
              </div>
            </div>

             {/* System Card */}
             <div className="group border border-border p-8 hover:border-accent transition-colors duration-200 cursor-pointer bg-card flex flex-col justify-between min-h-[400px]">
              <div>
                <div className="font-mono text-xs text-accent mb-4 tracking-widest">PROTOCOL 02</div>
                <h3 className="font-heading text-3xl mb-4 text-card-foreground">The Pitta Reset System</h3>
                <p className="font-sans text-muted-foreground mb-8">
                  Engineered for red, reactive profiles suffering from blue light and barrier disruption. Features 45% Asiaticoside.
                </p>
              </div>
              
              <div className="grid grid-cols-2 gap-4 border-t border-border pt-8 mt-auto">
                 <div>
                   <div className="font-mono text-[10px] text-muted-foreground uppercase mb-1">Step 1</div>
                   <div className="font-bold text-sm text-card-foreground">Syndet Bar 01</div>
                 </div>
                 <div>
                   <div className="font-mono text-[10px] text-muted-foreground uppercase mb-1">Step 2</div>
                   <div className="font-bold text-sm text-card-foreground">Barrier Reset Serum</div>
                 </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. TRANSPARENCY HOOK */}
      <section className="py-32 bg-primary text-primary-foreground">
        <div className="container mx-auto px-6 text-center max-w-3xl">
          <h2 className="font-heading text-4xl mb-6">The Transparency Engine</h2>
          <p className="font-sans text-lg text-primary-foreground/80 mb-12">
            Every product we make has a verifiable Certificate of Analysis. No blind trust required. Enter the batch number from your bottle to view its lab-verified molecular weight, purity, and active percentage.
          </p>
          
          <div className="flex flex-col sm:flex-row max-w-xl mx-auto items-center border border-primary-foreground/30 focus-within:border-accent transition-colors bg-background/5 p-1">
            <input 
              type="text" 
              placeholder="ENTER BATCH ID (e.g. B-4482)..." 
              className="flex-1 bg-transparent border-none outline-none text-primary-foreground font-mono text-sm tracking-widest px-4 py-4 w-full"
            />
            <Button className="rounded-none bg-accent text-accent-foreground hover:bg-white hover:text-primary min-w-[140px] font-mono tracking-widest uppercase">
              Query DB
            </Button>
          </div>
        </div>
      </section>

    </div>
  );
}
