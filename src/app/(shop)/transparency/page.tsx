export default function TransparencyPortal() {
  return (
    // Dark on-surface canvas (matches Stitch Transparency Portal screen)
    <div className="bg-on-surface text-surface w-full min-h-[calc(100vh-5rem)]">
      <main className="flex-grow flex flex-col items-center justify-center px-8 py-24 max-w-4xl mx-auto w-full">

        {/* Page Header — generous whitespace, editorial headline */}
        <div className="text-center mb-20 w-full">
          <p className="font-mono text-[10px] uppercase tracking-widest text-outline mb-8">Batch Intelligence Portal</p>
          <h1 className="font-heading text-5xl md:text-7xl italic mb-8 text-surface">The Transparency Portal</h1>
          {/* Separator: bg shift instead of border (No-Line Rule in dark mode) */}
          <p className="font-sans text-outline text-base max-w-2xl mx-auto mt-8">
            Enter your unique batch identifier to access the complete clinical profile, sourcing history, and botanical potency analysis.
          </p>
        </div>

        {/* Batch Input — Technical Underline style (bottom-only, no box) */}
        <div className="w-full relative mb-28">
          <input
            className="w-full bg-transparent border-b-2 border-outline/40 focus:border-surface text-3xl md:text-5xl font-mono py-6 focus:ring-0 transition-colors placeholder-outline/30 text-center uppercase tracking-widest outline-none text-surface"
            placeholder="ENTER BATCH ID..."
            type="text"
          />
          <div className="absolute right-0 top-1/2 -translate-y-1/2 flex items-center justify-center opacity-40">
            <span className="material-symbols-outlined text-4xl text-surface">search</span>
          </div>
        </div>

        {/* ── Results Bento Grid ── */}
        {/* Boundaries defined by surface tier stacking — no dividing lines */}
        <div className="w-full grid grid-cols-1 md:grid-cols-12 gap-6">

          {/* Full-width Result Header */}
          <div className="col-span-1 md:col-span-12 bg-surface-container-highest p-8 flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
            <div>
              <h2 className="font-mono text-[10px] text-outline mb-3 uppercase tracking-widest">Batch Certificate</h2>
              <div className="font-heading text-3xl text-on-surface">ASG-8992-B</div>
            </div>
            {/* Secondary button: on dark bg — Clinical White outline */}
            <button className="bg-surface text-on-surface font-mono text-xs px-8 py-4 flex items-center gap-2 hover:bg-secondary hover:text-on-secondary transition-all uppercase tracking-widest border-2 border-surface hover:border-secondary">
              <span className="material-symbols-outlined text-sm">download</span>
              Download PDF
            </button>
          </div>

          {/* Botanical Purity Chart */}
          <div className="col-span-1 md:col-span-7 bg-surface-container-high p-8">
            <div className="flex justify-between items-end mb-10">
              <h3 className="font-mono text-[10px] text-outline uppercase tracking-widest">Botanical Purity Index</h3>
              <span className="font-mono text-3xl text-on-surface font-bold">99.4%</span>
            </div>
            {/* Simulated Bar Chart */}
            <div className="flex items-end gap-2 h-40">
              <div className="w-full bg-surface-container-highest h-[60%] relative group">
                <div className="absolute -top-6 left-1/2 -translate-x-1/2 font-mono text-[10px] text-outline opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">60%</div>
              </div>
              <div className="w-full bg-surface-container-highest h-[85%] relative group">
                <div className="absolute -top-6 left-1/2 -translate-x-1/2 font-mono text-[10px] text-outline opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">85%</div>
              </div>
              <div className="w-full bg-surface-container-highest h-[70%] relative group">
                <div className="absolute -top-6 left-1/2 -translate-x-1/2 font-mono text-[10px] text-outline opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">70%</div>
              </div>
              <div className="w-full bg-surface h-[99%] relative group">
                <div className="absolute -top-6 left-1/2 -translate-x-1/2 font-mono text-[10px] text-outline opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap font-bold">99.4%</div>
              </div>
              <div className="w-full bg-surface-container-highest h-[92%] relative group">
                <div className="absolute -top-6 left-1/2 -translate-x-1/2 font-mono text-[10px] text-outline opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">92%</div>
              </div>
            </div>
            <div className="flex justify-between mt-6 font-mono text-[10px] text-outline">
              <span>Q1</span><span>Q2</span><span>Q3</span>
              <span className="text-surface font-bold">THIS BATCH</span>
              <span>TARGET</span>
            </div>
          </div>

          {/* Active Constituents — vertical spacing separates rows (No-Divider Rule) */}
          <div className="col-span-1 md:col-span-5 bg-surface-container-high p-8 flex flex-col justify-between">
            <div>
              <h3 className="font-mono text-[10px] text-outline uppercase tracking-widest mb-8">Active Constituents</h3>
              <ul className="space-y-6">
                <li className="flex justify-between items-center">
                  <span className="font-sans text-sm text-on-surface-variant">Withanolides</span>
                  <span className="font-mono text-sm text-on-surface">8.2%</span>
                </li>
                <li className="flex justify-between items-center">
                  <span className="font-sans text-sm text-on-surface-variant">Curcuminoids</span>
                  <span className="font-mono text-sm text-on-surface">95.0%</span>
                </li>
                <li className="flex justify-between items-center">
                  <span className="font-sans text-sm text-on-surface-variant">Piperine</span>
                  <span className="font-mono text-sm text-on-surface">5.5%</span>
                </li>
              </ul>
            </div>
            <div className="mt-10">
              <div className="text-[10px] font-mono text-outline mb-2 uppercase tracking-widest">Tested By</div>
              <div className="font-sans text-sm text-on-surface">Veritas Clinical Labs, DE</div>
            </div>
          </div>

        </div>
      </main>
    </div>
  );
}
