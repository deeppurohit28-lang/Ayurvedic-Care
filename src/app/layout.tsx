import type { Metadata } from "next";
import { Inter, Noto_Serif, Space_Grotesk } from "next/font/google";
import Link from "next/link";
import "./globals.css";

const fontSans = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
});

const fontHeading = Noto_Serif({
  variable: "--font-heading",
  subsets: ["latin"],
});

const fontMono = Space_Grotesk({
  variable: "--font-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "AYURSAGE - The Clinical Sanctuary",
  description: "Standardized, bio-active botanical fractions in high-speed (60-second) delivery systems.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${fontSans.variable} ${fontHeading.variable} ${fontMono.variable} h-full antialiased light`}
    >
      {/* Include Material Symbols globally */}
      <head>
        <link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap" rel="stylesheet" />
      </head>
      <body className="min-h-full flex flex-col bg-background text-on-surface selection:bg-secondary selection:text-on-secondary">
        
        {/* Universal Top NavBar from Stitch Master HTML */}
        {/* Nav: Glassmorphism — 20px backdrop-blur, no border line (No-Line Rule) */}
        <nav
          className="sticky top-0 z-50 flex justify-between items-center w-full px-8 h-20 max-w-[1920px] mx-auto transition-all duration-300"
          style={{ background: 'color-mix(in srgb, var(--surface) 75%, transparent)', backdropFilter: 'blur(20px)', WebkitBackdropFilter: 'blur(20px)' }}
        >
            <div className="flex items-center gap-8">
                <Link className="font-heading font-bold text-2xl tracking-tighter text-on-surface" href="/">AYURSAGE</Link>
                <div className="hidden md:flex gap-6 items-center">
                    <Link className="font-mono text-xs tracking-widest text-on-surface border-b-2 border-on-surface pb-1 hover:text-outline hover:border-outline transition-colors" href="/science">THE SCIENCE</Link>
                    <Link className="font-mono text-xs tracking-widest text-outline hover:text-on-surface transition-colors" href="/product/routine">SHOP ROUTINES</Link>
                    <Link className="font-mono text-xs tracking-widest text-outline hover:text-on-surface transition-colors" href="/transparency">TRACK YOUR BATCH</Link>
                </div>
            </div>
            <div className="flex items-center gap-6">
                <a className="hidden md:block font-mono text-xs tracking-widest text-outline hover:text-on-surface transition-colors" href="#">ACCOUNT</a>
                <Link href="/cart" className="text-on-surface hover:text-outline transition-colors flex items-center">
                    <span className="material-symbols-outlined">shopping_bag</span>
                </Link>
                {/* Primary CTA: Obsidian gradient, 0px radius, Sage hover */}
                <Link
                  className="hidden lg:inline-flex items-center bg-gradient-to-b from-primary to-primary-container text-on-primary font-mono text-xs tracking-widest px-6 py-3 hover:from-secondary hover:to-secondary hover:text-on-secondary transition-all uppercase"
                  href="/routine-builder"
                >
                    FIND YOUR ROUTINE
                </Link>
            </div>
        </nav>

        {/* Page Content */}
        {children}

        {/* Footer: Technical Spec Sheet — 2px Obsidian border grid, monospace data */}
        <footer className="mt-auto bg-on-surface text-surface font-mono text-[10px] tracking-widest uppercase border-t-2 border-on-surface w-full px-8 py-12 max-w-[1920px] mx-auto relative z-50">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-0 border-l-2 border-surface/20">
                <div className="border-r-2 border-surface/20 pr-8 pl-8 py-6">
                    <p className="text-surface font-bold mb-6 opacity-90">© {new Date().getFullYear()} AYURSAGE</p>
                    <p className="text-surface/50">CLINICAL SANCTUARY.</p>
                </div>
                <div className="border-r-2 border-surface/20 px-8 py-6 flex flex-col gap-4">
                    <p className="text-surface/50 mb-2">Directory</p>
                    <a className="text-surface/70 hover:text-surface transition-colors" href="/science">CLINICAL DATA</a>
                    <a className="text-surface/70 hover:text-surface transition-colors" href="/science">SOURCING</a>
                    <a className="text-surface/70 hover:text-surface transition-colors" href="/transparency">BATCH LOOKUP</a>
                </div>
                <div className="border-r-2 border-surface/20 px-8 py-6 flex flex-col gap-4">
                    <p className="text-surface/50 mb-2">Client Services</p>
                    <a className="text-surface/70 hover:text-surface transition-colors" href="#">SUPPORT</a>
                    <a className="text-surface/70 hover:text-surface transition-colors" href="/cart">ACCOUNT</a>
                </div>
                <div className="px-8 py-6 flex flex-col justify-between">
                    <p className="text-surface/50 mb-2">System Status</p>
                    <a className="text-surface/70 hover:text-surface transition-colors" href="/transparency">STATUS: 14 ACTIVE BATCHES</a>
                </div>
            </div>
        </footer>

      </body>
    </html>
  );
}
