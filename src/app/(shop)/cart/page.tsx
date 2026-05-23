import Image from 'next/image';

export default function CartAndLogin() {
  return (
    // Full bleed dark canvas for the Cart & Login view (matching Stitch screen)
    <div className="bg-on-surface text-surface font-sans min-h-[calc(100vh-5rem)] relative overflow-hidden flex flex-col md:flex-row w-full max-w-[1920px] mx-auto">

      {/* ── Login Section: Secure Terminal ── */}
      <div className="w-full md:w-1/2 flex items-center justify-center px-8 py-16 lg:px-16">
        <div className="bg-surface-container-lowest w-full max-w-lg border-2 border-on-surface p-10 shadow-[0_40px_80px_rgba(0,0,0,0.4)]">
          <div className="flex justify-between items-start mb-14">
            <div>
              <h2 className="font-heading text-3xl font-bold tracking-tight text-on-surface mb-3">SECURE TERMINAL</h2>
              <p className="font-mono text-[10px] uppercase tracking-widest text-outline">Access your saved routines &amp; order history</p>
            </div>
          </div>

          <form className="space-y-10">
            {/* Technical Underline inputs — bottom border only, no box */}
            <div className="relative pt-4">
              <label className="absolute top-0 left-0 font-mono text-[10px] uppercase tracking-widest text-outline" htmlFor="email">
                User Identifier
              </label>
              <input
                className="w-full bg-transparent border-0 border-b-2 border-outline/40 focus:border-on-surface py-3 font-sans text-sm text-on-surface placeholder-outline/40 transition-colors outline-none"
                id="email"
                placeholder="user@ayursage.clinical"
                type="email"
              />
            </div>
            <div className="relative pt-4">
              <label className="absolute top-0 left-0 font-mono text-[10px] uppercase tracking-widest text-outline" htmlFor="password">
                Encryption Key
              </label>
              <input
                className="w-full bg-transparent border-0 border-b-2 border-outline/40 focus:border-on-surface py-3 font-sans text-sm text-on-surface placeholder-outline/40 transition-colors outline-none"
                id="password"
                placeholder="••••••••"
                type="password"
              />
            </div>

            <div className="flex items-center justify-between pt-4">
              <a className="font-mono text-[10px] uppercase tracking-widest text-outline hover:text-on-surface underline decoration-outline hover:decoration-on-surface transition-all" href="#">
                Recover Key
              </a>
              {/* Primary CTA: gradient, 0px radius */}
              <button
                className="bg-gradient-to-b from-surface to-surface-container-lowest text-on-surface font-mono text-xs uppercase tracking-widest px-10 py-4 hover:bg-secondary hover:text-on-secondary transition-all border-2 border-outline/30 hover:border-secondary"
                type="button"
              >
                Authenticate
              </button>
            </div>
          </form>

          {/* Footer: bg shift separates it, no horizontal rule (No-Line Rule) */}
          <div className="mt-14 bg-on-surface/5 -mx-10 px-10 py-6">
            <p className="font-mono text-[10px] uppercase tracking-widest text-outline text-center">
              Unregistered Subject?{' '}
              <a className="text-on-surface underline hover:text-secondary ml-2" href="#">Initiate Protocol</a>
            </p>
          </div>
        </div>
      </div>

      {/* ── Cart Section ── */}
      <div className="w-full md:w-1/2 flex items-center justify-center px-8 py-16">
        <div className="w-full max-w-[440px] border-2 border-surface/20 bg-surface-container-lowest flex flex-col shadow-[0_40px_80px_rgba(0,0,0,0.4)] h-max">

          {/* Header: bg shift for visual separation */}
          <div className="p-8 bg-surface-container-low flex justify-between items-center">
            <div>
              <h2 className="font-heading text-xl font-bold tracking-tight text-on-surface">CART SYSTEM</h2>
              <p className="font-mono text-[10px] uppercase tracking-widest text-outline mt-2">TECHNICAL BATCH REVIEW</p>
            </div>
            <p className="font-mono text-[10px] uppercase tracking-widest text-outline">1 ITEM</p>
          </div>

          {/* Scrollable Content */}
          <div className="flex-1 overflow-y-auto p-8 space-y-10 min-h-[420px]">
            {/* Cart Item — no border divider, vertical spacing separates items */}
            <div className="flex gap-6 p-4 bg-surface-container-low">
              <div className="w-24 h-32 bg-surface-container-high flex-shrink-0 relative overflow-hidden">
                <Image
                  fill
                  alt="Clinical serum bottle"
                  className="object-cover w-full h-full grayscale hover:grayscale-0 transition-all duration-500"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuAXPxhTqHZGqtFUtDqDNLjjl6Z_HaxA4Hu-HP5u5J69u59d19MG1unPOYWuSlGH3csa9KfN_uX7xiDiwjpI5P9hkiiw8yX_lf7IXdA85m--fmtePbi-_MMnYq2_yNegGebeI_dLKNoVkXLHGbvgux_ZVqgIYOPsSmPbZAM1Qqcx8q6AiVF_UBUkWK11pMWweARldQpLfG5wVR84iQ-DBWFa38VUkaKXFpIiCM2FZTScSipbCx2NuHhNzSqu3JZQYP0HQ-_95flZ-fee"
                />
              </div>
              <div className="flex flex-col justify-between flex-1">
                <div>
                  <div className="flex justify-between items-start">
                    <h3 className="font-heading text-sm font-bold text-on-surface">RESTORATIVE BATCH 04</h3>
                    <button className="text-outline hover:text-destructive transition-colors">
                      <span className="material-symbols-outlined text-sm">delete</span>
                    </button>
                  </div>
                  <p className="font-mono text-[10px] uppercase tracking-widest text-outline mt-2">15ml | pH: 4.2</p>
                </div>
                <div className="flex justify-between items-end mt-6">
                  {/* Qty control — Ghost Border (outline-variant at low opacity) */}
                  <div className="flex items-center border border-outline/20">
                    <button className="px-3 py-2 text-outline hover:text-on-surface hover:bg-surface-container transition-colors font-mono text-sm">-</button>
                    <span className="px-4 py-2 font-mono text-xs text-on-surface bg-surface-container-lowest border-x border-outline/20">01</span>
                    <button className="px-3 py-2 text-outline hover:text-on-surface hover:bg-surface-container transition-colors font-mono text-sm">+</button>
                  </div>
                  <p className="font-mono text-sm font-bold text-on-surface">$120.00</p>
                </div>
              </div>
            </div>

            {/* Upsell — left accent border (allowed as structural, not sectioning) */}
            <div className="bg-surface-container-low p-6 border-l-4 border-secondary">
              <div className="flex items-center gap-2 mb-4">
                <span className="material-symbols-outlined text-secondary text-sm">add_task</span>
                <h4 className="font-mono text-[10px] uppercase tracking-widest text-on-surface font-bold">SYSTEM UPSELL</h4>
              </div>
              <p className="font-sans text-xs text-outline mb-6">Enhance efficacy by 14% with the complementary hydration matrix.</p>
              <div className="flex items-center justify-between bg-surface-container-lowest p-4">
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 bg-surface-container-high"></div>
                  <div>
                    <p className="font-mono text-[10px] uppercase tracking-widest text-on-surface font-bold">HYDRATION MATRIX</p>
                    <p className="font-mono text-[10px] text-outline mt-1">+$45.00</p>
                  </div>
                </div>
                <button className="text-[10px] font-mono uppercase tracking-widest text-secondary hover:text-on-surface transition-colors border-b-2 border-secondary hover:border-on-surface pb-0.5">ADD</button>
              </div>
            </div>
          </div>

          {/* Checkout Footer — bg shift separates from content (No-Line Rule) */}
          <div className="p-8 bg-surface-container-low space-y-6">
            <div className="flex justify-between items-center font-mono text-[10px] uppercase tracking-widest text-outline">
              <span>Subtotal</span>
              <span className="text-on-surface font-bold text-sm">$120.00</span>
            </div>
            <p className="font-sans text-[10px] text-outline italic">Shipping and taxes calculated at encryption step.</p>
            {/* Primary CTA — Obsidian gradient, 0px, Sage hover */}
            <button className="w-full bg-gradient-to-b from-on-surface to-primary-container text-surface font-mono text-xs uppercase tracking-widest py-5 flex items-center justify-center gap-2 hover:from-secondary hover:to-secondary hover:text-on-secondary transition-all">
              <span>PROCEED TO ENCRYPTION</span>
              <span className="material-symbols-outlined text-sm">arrow_forward</span>
            </button>
          </div>
        </div>
      </div>

    </div>
  );
}
