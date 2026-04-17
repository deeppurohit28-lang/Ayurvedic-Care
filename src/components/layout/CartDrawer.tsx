"use client";

import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import Image from "next/image";

export function CartDrawer() {
  // Static mockup state representing custom Supabase cart data later.
  return (
    <Sheet>
      <SheetTrigger className="font-mono text-xs uppercase tracking-wider hover:text-accent transition-colors">
        Cart [1]
      </SheetTrigger>
      <SheetContent className="w-full sm:max-w-md bg-background border-l border-border p-0 flex flex-col h-full z-[100]">
        <SheetHeader className="p-6 border-b border-border bg-card">
          <SheetTitle className="font-heading text-2xl text-card-foreground">Protocol Cart</SheetTitle>
        </SheetHeader>
        
        <div className="flex-1 overflow-y-auto p-6 flex flex-col gap-8">
           
           <div className="flex gap-4 items-center">
             <div className="w-20 h-20 bg-card border border-border relative overflow-hidden flex-shrink-0">
                <Image src="/syndet_bar.png" alt="Syndet Bar" fill className="object-cover" />
             </div>
             <div className="flex-1">
                <div className="font-heading text-xl">Syndet Bar 01</div>
                <div className="font-mono text-[10px] uppercase text-muted-foreground my-1 tracking-widest">Qty: 1</div>
                <div className="font-mono text-sm tracking-widest">$32.00</div>
             </div>
             <button className="text-muted-foreground hover:text-destructive font-mono text-xs uppercase underline">Remove</button>
           </div>

        </div>

        <div className="border-t border-border p-6 bg-card text-card-foreground">
           <div className="flex justify-between items-center mb-6 font-mono tracking-widest">
              <span className="text-xs uppercase text-muted-foreground">Subtotal</span>
              <span className="text-lg">$32.00</span>
           </div>
           <Button className="w-full h-14 rounded-none font-mono uppercase tracking-widest bg-primary text-primary-foreground hover:bg-accent hover:text-accent-foreground transition-all">
             Initialize Checkout
           </Button>
           <div className="font-sans text-[10px] text-center text-muted-foreground mt-4 uppercase tracking-widest">
              Custom DB Interface Mockup
           </div>
        </div>
      </SheetContent>
    </Sheet>
  );
}
