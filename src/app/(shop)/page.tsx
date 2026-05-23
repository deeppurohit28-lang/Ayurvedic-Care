import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="w-full max-w-[1920px] mx-auto">

      {/* ── Hero: Asymmetric Split ── */}
      <section className="relative w-full min-h-[900px] flex flex-col lg:flex-row bg-surface">
        {/* Left: Botanical Image */}
        <div className="w-full lg:w-1/2 h-[512px] lg:h-auto relative overflow-hidden bg-surface-container-low">
          <Image
            alt="Botanical element"
            className="absolute inset-0 w-full h-full object-cover mix-blend-multiply opacity-90 object-center"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuDsELFH9sAvmfcilTFYKD3CCxEsnxtNTNCrRk0Lk8OStq6Ub9tGtNb-KgdPqF-NN-xIaIUy8sFSXuTin1wSlEbeqCJfkRDTE-HZJ3kcbTJvTF7Uo4QynCk2Th6iUbLvakWTtXQtb-DG4tOo3Te_dByp787pfJwuHRpy5kKkHGOcHyxkkbWEdLLrrjpz1nTHM31qUWPGWidpeSs_0RvvTDiB_jpcxRQrLrmVdAN3RBydvg-P-MrkQIzGjo3uX_UBYN7zPwsizGroPSed"
            fill
          />
          {/* Technical spec overlay */}
          <div className="absolute top-8 left-8 p-4 bg-surface/80" style={{ backdropFilter: 'blur(20px)' }}>
            <p className="font-mono text-[10px] text-on-surface uppercase tracking-widest">BOTANICAL SPEC: A-01</p>
            <p className="font-mono text-[10px] text-outline uppercase tracking-widest mt-1">RAW SOURCING VERIFIED</p>
          </div>
        </div>

        {/* Right: Clinical Content */}
        <div className="w-full lg:w-1/2 flex flex-col justify-center px-8 lg:px-24 py-24 bg-surface z-10 relative">
          <div className="max-w-xl">
            <p className="font-mono text-xs text-secondary tracking-[0.2em] mb-8 uppercase">Clinical Sanctuary</p>
            <h1 className="font-heading text-5xl lg:text-7xl leading-[1.05] text-on-surface mb-10 tracking-tight">
              Ancient Wisdom.<br/>
              <span className="italic">Modern Results.</span>
            </h1>
            <p className="font-sans text-lg text-on-surface-variant leading-relaxed mb-14 max-w-md">
              Clinically proven, high-speed Ayurvedic routines customized for your unique skin ecosystem. No synthetics, just active botanical precision.
            </p>

            {/* Primary CTA — Obsidian gradient, 0px radius, Sage hover */}
            <Link href="/routine-builder" className="inline-block">
              <button className="bg-gradient-to-b from-primary to-primary-container text-on-primary font-mono text-sm tracking-widest px-10 py-5 hover:from-secondary hover:to-secondary hover:text-on-secondary transition-all uppercase flex items-center gap-3">
                Build Your 60-Second Routine
                <span className="material-symbols-outlined text-sm">arrow_forward</span>
              </button>
            </Link>

            {/* Stats — separated by vertical whitespace only (No-Line Rule relaxed: technical widget) */}
            <div className="mt-20 flex gap-12">
              <div>
                <p className="font-mono text-3xl text-on-surface font-bold">14<span className="text-sm">d</span></p>
                <p className="font-mono text-[10px] text-outline uppercase tracking-widest mt-2">Efficacy Visible</p>
              </div>
              <div>
                <p className="font-mono text-3xl text-on-surface font-bold">100<span className="text-sm">%</span></p>
                <p className="font-mono text-[10px] text-outline uppercase tracking-widest mt-2">Active Botanicals</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Live Ticker ── */}
      <div className="w-full bg-on-surface text-surface py-4 overflow-hidden flex whitespace-nowrap">
        <div className="animate-marquee flex gap-12 font-mono text-xs tracking-[0.2em] uppercase items-center">
          <span>/// TECHNICAL BATCH STATUS ///</span>
          <span className="text-secondary-fixed-dim">PH 5.2 BALANCED</span>
          <span>///</span>
          <span className="text-secondary-fixed-dim">100% VEGAN EXTRACTION</span>
          <span>///</span>
          <span className="text-secondary-fixed-dim">CLINICAL TRIAL: PHASE 3 COMPLETE</span>
          <span>///</span>
          <span className="text-secondary-fixed-dim">DERMATOLOGIST VERIFIED</span>
          <span>///</span>
          <span>TECHNICAL BATCH STATUS ///</span>
          <span className="text-secondary-fixed-dim">PH 5.2 BALANCED</span>
          <span>///</span>
          <span className="text-secondary-fixed-dim">100% VEGAN EXTRACTION</span>
          <span>///</span>
          <span className="text-secondary-fixed-dim">CLINICAL TRIAL: PHASE 3 COMPLETE</span>
        </div>
      </div>

      {/* ── The Methodology Module ── */}
      {/* Background shift from surface → surface-container-lowest creates the section boundary (No-Line Rule) */}
      <section className="py-40 px-8 lg:px-24 bg-surface-container-lowest">
        <div className="max-w-7xl mx-auto">
          <div className="mb-24">
            <p className="font-mono text-xs text-outline tracking-widest uppercase mb-6">The Methodology</p>
            <h2 className="font-heading text-4xl lg:text-5xl text-on-surface max-w-2xl">
              Precision extraction without the holistic compromise.
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-20 md:gap-12">
            {/* Col 1 */}
            <div className="relative group">
              <div className="h-[2px] w-12 bg-on-surface mb-10 group-hover:w-full transition-all duration-700 ease-in-out"></div>
              <h3 className="font-mono text-sm tracking-widest text-on-surface uppercase mb-6">No Harsh Synthetics</h3>
              <p className="font-sans text-on-surface-variant text-sm leading-relaxed mb-8">
                We bypass aggressive chemical lab bases, utilizing cold-pressed botanical lipids to deliver actives without stripping the barrier.
              </p>
              <Link href="/product/the-barrier-reset-protocol" className="font-mono text-[10px] tracking-widest text-secondary hover:text-on-surface transition-colors uppercase border-b-2 border-secondary hover:border-on-surface pb-1 inline-flex items-center gap-1">
                Read Trial Data <span className="material-symbols-outlined text-[10px]">arrow_outward</span>
              </Link>
            </div>
            {/* Col 2 */}
            <div className="relative group">
              <div className="h-[2px] w-12 bg-on-surface mb-10 group-hover:w-full transition-all duration-700 ease-in-out"></div>
              <h3 className="font-mono text-sm tracking-widest text-on-surface uppercase mb-6">No Messy Pastes</h3>
              <p className="font-sans text-on-surface-variant text-sm leading-relaxed mb-8">
                Traditional Ayurveda modernized. High-speed, micro-emulsified formulas that absorb in 60 seconds, engineered for modern friction.
              </p>
              <Link href="/product/the-barrier-reset-protocol" className="font-mono text-[10px] tracking-widest text-secondary hover:text-on-surface transition-colors uppercase border-b-2 border-secondary hover:border-on-surface pb-1 inline-flex items-center gap-1">
                View Formulation <span className="material-symbols-outlined text-[10px]">arrow_outward</span>
              </Link>
            </div>
            {/* Col 3 */}
            <div className="relative group">
              <div className="h-[2px] w-12 bg-on-surface mb-10 group-hover:w-full transition-all duration-700 ease-in-out"></div>
              <h3 className="font-mono text-sm tracking-widest text-on-surface uppercase mb-6">Guaranteed Actives</h3>
              <p className="font-sans text-on-surface-variant text-sm leading-relaxed mb-8">
                Every batch is lab-tested for active compound concentration, ensuring the exact dosage required to shift your skin ecosystem.
              </p>
              <Link href="/transparency" className="font-mono text-[10px] tracking-widest text-secondary hover:text-on-surface transition-colors uppercase border-b-2 border-secondary hover:border-on-surface pb-1 inline-flex items-center gap-1">
                Track Batch Data <span className="material-symbols-outlined text-[10px]">arrow_outward</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── Targeted Systems: Bento Product Grid ── */}
      {/* surface-container-low creates boundary shift from surface-container-lowest above (No-Line Rule) */}
      <section className="py-40 px-8 bg-surface-container-low relative">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
            <div>
              <p className="font-mono text-xs text-secondary tracking-[0.2em] mb-6 uppercase">Curated Protocols</p>
              <h2 className="font-heading text-4xl lg:text-5xl text-on-surface">Targeted Systems.</h2>
            </div>
            <Link href="/product/the-barrier-reset-protocol" className="font-mono text-xs tracking-widest text-on-surface uppercase border-b-2 border-on-surface pb-1 hover:text-secondary hover:border-secondary transition-colors whitespace-nowrap">
              VIEW ALL PROTOCOLS
            </Link>
          </div>

          {/* Bento Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-4">
            {/* Featured Protocol */}
            <div className="lg:col-span-8 bg-surface-container-lowest p-8 flex flex-col md:flex-row gap-8 relative overflow-hidden group">
              <div className="absolute top-4 right-4 text-right z-10 hidden sm:block">
                <p className="font-mono text-[10px] tracking-widest text-outline uppercase">PROTOCOL: B-01</p>
                <p className="font-mono text-[10px] tracking-widest text-on-surface uppercase mt-1">pH: 5.5 | 12% ACTIVES</p>
              </div>
              <div className="w-full md:w-1/2 h-64 md:h-auto bg-surface-container relative">
                <Image
                  fill
                  alt="The Barrier Reset Protocol"
                  className="absolute inset-0 w-full h-full object-cover opacity-90 group-hover:scale-105 transition-transform duration-700"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuB0l3AuwjoLS-nUgDq3k-lOT0FGFwSRZDCJWdYynsxH7s90X7yzI3Q6sxBePzFzMFdFn37LarlKsKAt_GAEY609_1_wYNGKf7pFpDpO3nbxS-ZMCoHH7cfD_xIYpeJ3ua8vum4dCq2BTtU0VMROfQz3EY6vnU-mUL7n7vxNGVIgNqgBSzR068sf1NDKNH_Tt504scWX0Ei3DBz_nnNffuywrlg4_pfBBeNQNxcvtSkcUbUQqaJx6oiJJicIiECJ7wkfpshr108xiXI3"
                />
              </div>
              <div className="w-full md:w-1/2 flex flex-col justify-center py-4">
                <h3 className="font-heading text-2xl text-on-surface mb-3">The Barrier Reset Protocol</h3>
                <p className="font-mono text-xs text-secondary tracking-widest uppercase mb-8">3-STEP SYSTEM</p>
                <p className="font-sans text-sm text-on-surface-variant leading-relaxed mb-10">
                  A highly concentrated trio designed to reconstruct compromised lipid barriers utilizing Gotu Kola extract and cold-pressed Hemp seed matrices.
                </p>
                <div className="mt-auto flex items-center justify-between">
                  <span className="font-mono text-sm font-bold text-on-surface">$145.00</span>
                  <Link href="/product/the-barrier-reset-protocol">
                    {/* Secondary button: Clinical White bg, 2px Obsidian border, Sage hover */}
                    <button className="bg-transparent border-2 border-on-surface text-on-surface font-mono text-xs tracking-widest px-6 py-3 hover:bg-secondary hover:border-secondary hover:text-on-secondary transition-all uppercase">
                      ADD PROTOCOL
                    </button>
                  </Link>
                </div>
              </div>
            </div>

            {/* Secondary Protocol */}
            <div className="lg:col-span-4 bg-surface-container-lowest p-6 flex flex-col relative group">
              <div className="absolute top-4 right-4 text-right z-10">
                <p className="font-mono text-[10px] tracking-widest text-outline uppercase">PROTOCOL: C-04</p>
              </div>
              <div className="w-full h-48 bg-surface-container mb-8 relative overflow-hidden">
                <Image
                  fill
                  alt="Clarifying Protocol"
                  className="absolute inset-0 w-full h-full object-cover mix-blend-multiply opacity-80 group-hover:scale-105 transition-transform duration-700"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuCvVr18Nay0yUsBmehfJOaDzNME30y-8wx6PzeGju44BdQyJNHehWEEK60-j4Ffcmkvrr_H1HuMvY3ftJy7qNvwKf-edi9zYSvgiHENdYap-sM9hgKhaWykEv8F5ZLP1jo9rVf7w6pM6DuRgiZ5vqv3Hw4av9oIIEoMmOM1kiw9fGsbz06dwpLaq-NYVyjzdLf38RHReKiMTRJ0H1qx6Bt5VhglA6mCrsnyqOLG-3ciEnufP0iJ91vVWuONdH9VxhAt2FHnk-X-VyNL"
                />
              </div>
              <h3 className="font-heading text-xl text-on-surface mb-2">Active Clarity</h3>
              <p className="font-mono text-[10px] text-secondary tracking-widest uppercase mb-6">TARGETED SERUM</p>
              {/* Divider via color shift instead of HR (No-Divider Rule) */}
              <div className="mt-auto pt-6 flex items-center justify-between">
                <span className="font-mono text-sm font-bold text-on-surface">$68.00</span>
                <Link href="/product/active-clarity" className="text-on-surface hover:text-secondary transition-colors">
                  <span className="material-symbols-outlined">add_circle</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

    </main>
  );
}
