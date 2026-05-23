"use client";

import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import Image from "next/image";

export function CartDrawer() {
  return (
    <Sheet>
      {/* Trigger: monospace, no border chrome */}
      <SheetTrigger className="font-mono text-xs uppercase tracking-widest text-on-surface hover:text-outline transition-colors">
        Cart [1]
      </SheetTrigger>

      {/* Drawer: 0px radius, surface-container-lowest bg, no rounded chrome */}
      <SheetContent
        className="w-full sm:max-w-[420px] bg-surface-container-lowest p-0 flex flex-col h-full z-[100] rounded-none border-l-2 border-on-surface"
        style={{ borderRadius: 0 }}
      >
        {/* Header: no bottom border — use bg shift instead (No-Line Rule) */}
        <SheetHeader className="p-8 bg-surface-container-low">
          <SheetTitle className="font-heading text-2xl text-on-surface tracking-tight">
            CART SYSTEM
          </SheetTitle>
          <p className="font-mono text-[10px] uppercase tracking-widest text-outline mt-1">
            TECHNICAL BATCH REVIEW
          </p>
        </SheetHeader>

        {/* Scrollable cart items */}
        <div className="flex-1 overflow-y-auto p-8 flex flex-col gap-10">
          {/* Cart Item */}
          <div className="flex gap-6 items-start">
            <div className="w-20 h-24 bg-surface-container-high flex-shrink-0 relative overflow-hidden">
              <Image src="/syndet_bar.png" alt="Syndet Bar" fill className="object-cover grayscale hover:grayscale-0 transition-all duration-500" />
            </div>
            <div className="flex-1">
              <div className="flex justify-between items-start">
                <div>
                  <div className="font-heading text-base text-on-surface">Syndet Bar 01</div>
                  <div className="font-mono text-[10px] uppercase text-outline my-2 tracking-widest">Qty: 1 | pH: 5.5</div>
                </div>
                <button className="text-outline hover:text-destructive font-mono text-[10px] uppercase tracking-widest transition-colors">
                  Remove
                </button>
              </div>
              <div className="font-mono text-sm tracking-widest text-on-surface mt-3">$32.00</div>
            </div>
          </div>
        </div>

        {/* Footer / Checkout — bg shift creates visual separation (No-Line Rule) */}
        <div className="p-8 bg-surface-container-low">
          <div className="flex justify-between items-center mb-6 font-mono tracking-widest">
            <span className="text-[10px] uppercase text-outline">Subtotal</span>
            <span className="text-lg font-bold text-on-surface">$32.00</span>
          </div>
          {/* Primary CTA: Obsidian gradient, 0px radius, Sage hover */}
          <button className="w-full h-14 bg-gradient-to-b from-primary to-primary-container text-on-primary font-mono text-xs uppercase tracking-widest hover:from-secondary hover:to-secondary hover:text-on-secondary transition-all flex items-center justify-center gap-2">
            <span>Initialize Checkout</span>
            <span className="material-symbols-outlined text-sm">arrow_forward</span>
          </button>
          <div className="font-mono text-[10px] text-center text-outline mt-6 uppercase tracking-widest">
            Secure Clinical Platform
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
}
